<template>
  <section class="volinteers-upload-writing-task">
    <Vueform
      :endpoint="false"
      @submit="handleSubmit"
      :display-errors="false"
      :force-labels="false"
      add-class="vf-volunteer-upload-writing-task"
      ref="form$"
    >
      <template #empty>
        <FormSteps v-if="!isMobile">
          <FormStep
            name="page0"
            label="确认信息"
            :elements="['h1', 'h2', 'name', 'handle_by', 'writing_task_ddl']"
          />
          <FormStep
            name="page1"
            label="提交笔试"
            :elements="['h2_1', 'writing_task_file', 'writing_task_video_link']"
          />
        </FormSteps>
        <FormElements>
          <StaticElement
            name="h1"
            tag="h1"
            top="1"
            content="志愿者笔试上传界面"
          />
          <StaticElement
            name="h2"
            tag="h2"
            content="志愿者信息:"
            description="如果展示的信息有误, 请联系: <a href='mailto:support@saga-xingguang.com'>support@saga-xingguang.com</a>"
          />
          <TextElement
            name="name"
            label="志愿者姓名:"
            :submit="false"
            :readonly="true"
          />
          <SelectElement
            name="handle_by"
            :items="items"
            :search="true"
            :native="false"
            input-type="search"
            autocomplete="off"
            label="笔试提交部门:"
            placeholder="请选择对应的部门"
            :floating="false"
            :rules="['required']"
            @change="handleDeptChange"
          />
          <DateElement
            name="writing_task_ddl"
            label="提交截止时间:"
            placeholder="请先选择需要提交的部门"
            :time="true"
            :floating="false"
            :readonly="true"
            :submit="false"
          />
          <StaticElement
            name="h2_1"
            tag="h2"
            content="提交你的笔试文件:"
            description="你可以在截止日期前重复提交. 注意⚠️:只有最后一次提交会被保存"
          />
          <FileElement
            name="writing_task_file"
            label="笔试文件:"
            info="请将你的所有笔试文件合并到一个pdf中上传"
            description="大小限制: 10MB, 文件格式: .pdf"
            :drop="true"
            accept="application/pdf"
            :rules="['mimetypes:application/pdf', 'max:10240', 'required']"
            :remove-endpoint="handleFileRemove"
            :upload-temp-endpoint="handleUploadFile"
          />
          <TextElement
            name="writing_task_video_link"
            input-type="url"
            :rules="['nullable', 'url']"
            placeholder="eg. http(s)://www.example.com"
            :floating="false"
            info="请上传腾讯会议或哔哩哔哩的视频链接"
            label="视频链接"
            description=" 请保留链接前的 http(s):// 前缀"
            :conditions="[['handle_by', 'in', ['TUT', 'CM', 'PR']]]"
          />
          <ButtonElement
            v-if="isMobile"
            name="上传"
            button-label="提交"
            :submits="true"
            :full="true"
          />
        </FormElements>
        <FormStepsControls v-if="!isMobile" />
      </template>
    </Vueform>
  </section>
  <div
    class="volinteers-upload-writing-task-overlay"
    id="volinteers-upload-writing-task-overlay"
  >
    <div class="message-box">
      <div class="mesage-box__title">{{ messageTitle }}</div>
      <div class="mesage-box__text">{{ messageText }}</div>
      <div class="message-box__footer">
        如果页面无反应, 你也可以点击<RouterLink
          :to="{
            name: 'HomePage',
          }"
          title="返回首页"
          >这里</RouterLink
        >返回首页.
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, inject } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();
const form$ = ref(null);

const isMobile = ref(window.innerWidth <= 768);
const messageTitle = ref("");
const messageText = ref("");

const items = ref([]);
let data = undefined;
let expired = false;
let curDept = undefined;

const url = inject("ApiUrl") + "applicants/writing-tasks/" + route.query.id;
let fileUrl = inject("ApiUrl") + "applicants/writing-tasks/files/" + route.query.id;

onMounted(() => {
  window.scrollTo(0, 0);
  fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        onBadID();
        return;
      }
      return response.json();
    })
    .then((d) => {
      console.log(d);
      data = d;
      handelInit();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

function handelInit() {
  form$.value.update({
    name: data.name,
  });

  if (data.applications.length == 0) {
    onNoValidApplication();
    return;
  } else if (data.applications.length == 1) {
    form$.value.update({
      handle_by: data.applications[0].handle_by,
    });
  }

  for (let i = 0; i < data.applications.length; i++) {
    items.value.push({
      value: data.applications[i].handle_by,
      label: codeToDeptName(data.applications[i].handle_by),
    });
  }
}

function handleDeptChange(value) {
  if (data == undefined) {
    return;
  }
  curDept = value;
  if (value == undefined) {
    form$.value.update({
      writing_task_ddl: "",
      writing_task_file: "",
      writing_task_video_link: "",
    });
    return;
  }
  let application = data.applications.find((app) => app.handle_by == value);
  form$.value.update({
    writing_task_ddl: application.writing_task_ddl,
    writing_task_file: application.writing_task_file,
    writing_task_video_link: application.writing_task_video_link,
  });

  // check passed ddl
  expired = Date.parse(application.writing_task_ddl) < Date.now();
  console.log(expired);
}

function getCSRFToken() {
  return document.cookie
    ?.split("; ")
    ?.find((row) => row.startsWith("csrftoken="))
    ?.split("=")[1];
}

async function handleUploadFile(value, el$) {
  if (expired) {
    onExpired();
    return;
  }

  let data = new FormData();
  data.append("writing_task_file", value);
  data.append("handle_by", curDept);
  let res = await el$.$vueform.services.axios.request({
    url: fileUrl,
    method: "PUT",
    headers: {
      "Content-Type": "multipart/form-data",
      "X-CSRFToken": getCSRFToken(),
    },
    data: data,
    onUploadProgress: (e) => {
      el$.progress = Math.round((e.loaded * 100) / e.total);
    },
  });
  return res.data;
}

async function handleFileRemove(value, el$) {
  if (expired) {
    onExpired();
    return;
  }

  let res = await el$.$vueform.services.axios.request({
    url: fileUrl,
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "X-CSRFToken": getCSRFToken(),
    },
    data: {
      handle_by: curDept,
    },
  });
  return res.data;
}

async function handleSubmit(form$, FormData) {
  if (expired) {
    onExpired();
    return;
  }

  let requestData = form$.requestData;
  if (requestData.writing_task_video_link == undefined) {
    onSuccess();
    return;
  }

  form$.submitting = true;
  // perform request here...
  fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "X-CSRFToken": getCSRFToken(),
    },
    body: JSON.stringify({
      writing_task_video_link: requestData.writing_task_video_link,
      handle_by: requestData.handle_by,
    }),
  })
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else if (response.status === 400) {
        onBadRequest();
      } else {
        onFailed();
      }
      form$.submitting = false;
    })
    .catch((error) => {
      console.error("Error:", error);
      onFailed();
    });
}

function onExpired() {
  const overlay = document.querySelector(
    "#volinteers-upload-writing-task-overlay"
  );
  messageTitle.value = "提交已过期";
  messageText.value =
    "提交已过期, 请联系: human-resources@saga-xingguang.com 以提交你的笔试";
  overlay.style.display = "flex";
  setTimeout(() => {
    overlay.style.display = "none";
  }, 5000);
}

function onNoValidApplication() {
  const overlay = document.querySelector(
    "#volinteers-upload-writing-task-overlay"
  );
  messageTitle.value = "没有找到合适的申请";
  messageText.value =
    "目前没有可以提交的申请. 如果你认为这是一个错误, 请联系: support@saga-xingguang.com";
  overlay.style.display = "flex";
}

function onBadID() {
  const overlay = document.querySelector(
    "#volinteers-upload-writing-task-overlay"
  );
  messageTitle.value = "链接错误";
  messageText.value =
    "你输入的链接有误, 请检查后重试. 若问题仍然存在, 请联系: support@saga-xingguang.com";
  overlay.style.display = "flex";
}

function onSuccess() {
  const overlay = document.querySelector(
    "#volinteers-upload-writing-task-overlay"
  );
  messageTitle.value = "提交成功";
  messageText.value = "即将重定向至首页...";
  overlay.style.display = "flex";
  setTimeout(() => {
    router.push({ name: "HomePage" });
  }, 2000);
}

function onFailed() {
  const overlay = document.querySelector(
    "#volinteers-upload-writing-task-overlay"
  );
  messageTitle.value = "上传失败";
  messageText.value = "请在稍后重试... 如果问题仍然存在, 请联系: support@saga-xingguang.com";
  overlay.style.display = "flex";
  setTimeout(() => {
    overlay.style.display = "none";
  }, 3000);
}

function onBadRequest() {
  const overlay = document.querySelector(
    "#volinteers-upload-writing-task-overlay"
  );
  messageTitle.value = "你上传的信息有误";
  messageText.value = "请检查你的输入并重试...";
  overlay.style.display = "flex";
  setTimeout(() => {
    overlay.style.display = "none";
  }, 3000);
}

function codeToDeptName(code) {
  switch (code) {
    case "TUT":
      return "教学部";
    case "CM":
      return "行研部";
    case "IT":
      return "IT部";
    case "HR":
      return "人事部";
    case "PR":
      return "宣传部";
    case "FIN":
      return "财务部";
    case "LAW":
      return "法务部";
    case "LIA":
      return "外联部";
    default:
      return "error";
  }
}
</script>

<style>
.volinteers-upload-writing-task {
  display: flex;
  justify-content: center;
  padding: 5rem 2rem;
  min-height: 100vh;
  background-color: var(--clr-background-muted);
}

.volinteers-upload-writing-task form {
  color: var(--clr-text);
  width: 100%;
  max-width: 40rem;
  padding: 2.5rem;
  border-radius: 1rem;
  height: min-content;
  background-color: var(--clr-background);
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.3);
}

.volinteers-upload-writing-task-overlay {
  padding-top: 20svh;
  position: fixed;
  inset: 0;
  background-color: #000000aa;
  flex-direction: column;
  align-items: center;
  display: none;
}

.volinteers-upload-writing-task-overlay .message-box {
  background-color: var(--clr-background);
  border-radius: 0.5rem;
  color: var(--clr-text);
  padding: 5rem 3rem;
  width: fit-content;
  max-width: 40vw;
  min-width: 20rem;
}

.volinteers-upload-writing-task-overlay .mesage-box__title {
  width: 100%;
  text-align: center;
  font-weight: 600;
  font-size: var(--fs-600);
}

.mesage-box__text {
  margin-top: 2rem;
  font-size: var(--fs-400);
}

.volinteers-upload-writing-task-overlay .message-box__footer {
  margin-top: 2rem;
  font-size: var(--fs-200);
  color: var(--clr-text-muted);
}

.volinteers-upload-writing-task-overlay .message-box__footer a {
  text-decoration: underline;
  color: var(--clr-primary);
}

@media (max-width: 768px) {
  .volinteers-upload-writing-task {
    padding: 0rem;
    min-height: 0;
  }
  .volinteers-upload-writing-task form {
    overflow-x: clip;
    padding: 1.5rem;
    border-radius: 0rem;
  }
}
:root,
:before,
:after,
* {
  --vf-primary: #ff881a;
  --vf-primary-darker: #d46a0e;
  --vf-color-passive: var(--clr-text-muted);
}
</style>
