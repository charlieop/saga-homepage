<template>
  <section class="volinteers-upload-writing-test">
    <Vueform
      :endpoint="false"
      @submit="handleSubmit"
      :display-errors="false"
      :force-labels="false"
      add-class="vf-volunteer-upload-writing-test"
      ref="form$"
    >
      <template #empty>
        <FormSteps v-if="!isMobile">
          <FormStep
            name="page0"
            label="确认信息"
            :elements="['h1', 'h2', 'name', 'created_at', 'first_choice']"
          />
          <FormStep
            name="page1"
            label="提交笔试"
            :elements="['h2_1', 'writing_test_file', 'video_link', 'grade']"
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
          <DateElement
            name="created_at"
            label="申请提交时间:"
            :time="true"
            :readonly="true"
          />
          <SelectElement
            name="first_choice"
            :items="[
              {
                value: 'TUT',
                label: '教学部',
              },
              {
                value: 'CM',
                label: '行研部',
              },
              {
                value: 'IT',
                label: 'IT部',
              },
              {
                value: 'HR',
                label: '人事部',
              },
              {
                value: 'PR',
                label: '宣传部',
              },
              {
                value: 'FIN',
                label: '财务部',
              },
              {
                value: 'LAW',
                label: '法务部',
              },
              {
                value: 'LIA',
                label: '外联部',
              },
            ]"
            :search="true"
            :native="false"
            input-type="search"
            autocomplete="off"
            label="笔试提交部门:"
            :submit="false"
            :disabled="true"
          />
          <StaticElement
            name="h2_1"
            tag="h2"
            content="提交你的笔试文件:"
            description="你可以在截止日期前重复提交. 注意⚠️:只有最后一次提交会被保存"
          />
          <FileElement
            name="writing_test_file"
            label="笔试文件:"
            info="请将你的所有笔试文件合并到一个pdf中上传"
            description="大小限制: 10MB, 文件格式: .pdf"
            :drop="true"
            accept="application/pdf"
            :rules="[
              'mimetypes:application/pdf',
              'max:10240',
              'required',
            ]"
            :remove-endpoint="{
              url: fileUrl,
              method: 'DELETE',
            }"
            :upload-temp-endpoint="handleUploadFile"
          />
          <TextElement
            name="video_link"
            input-type="url"
            :rules="['nullable', 'url', 'required']"
            placeholder="eg. http(s)://www.example.com"
            :floating="false"
            info="请上传腾讯会议或哔哩哔哩的视频链接"
            label="试讲视频链接"
            description=" 请保留链接前的 http(s):// 前缀"
            :conditions="[['first_choice', 'in', ['TUT', 'CM']]]"
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
    class="volinteers-upload-writing-test-overlay"
    id="volinteers-upload-writing-test-overlay"
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

let isMobile = ref(window.innerWidth <= 768);
let messageTitle = ref("");
let messageText = ref("");
let url = inject("ApiUrl") + "applicants/writing-tests/" + route.query.id;
let fileUrl =
  inject("ApiUrl") + "applicants/writing-tests/files/" + route.query.id;

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
    .then((data) => {
      console.log(data);
      form$.value.update(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

async function handleUploadFile(value, el$) {
  let data = new FormData();
  data.append("writing_test_file", value);
  let res = await el$.$vueform.services.axios.request({
    url: fileUrl,
    method: "PUT",
    data: data,
  });
  console.log(res.data);
  return res.data;
}

async function handleSubmit(form$, FormData) {
  let requestData = form$.requestData;
  requestData.video_link = "https://aaa.com";

  form$.submitting = true;
  // perform request here...
  fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestData),
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

function onBadID() {
  const overlay = document.querySelector(
    "#volinteers-upload-writing-test-overlay"
  );
  messageTitle.value = "链接错误";
  messageText.value =
    "你输入的链接有误, 请检查后重试. 若问题仍然存在, 请联系我们";
  overlay.style.display = "flex";
}

function onSuccess() {
  const overlay = document.querySelector(
    "#volinteers-upload-writing-test-overlay"
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
    "#volinteers-upload-writing-test-overlay"
  );
  messageTitle.value = "上传失败";
  messageText.value = "请在稍后重试...";
  overlay.style.display = "flex";
  setTimeout(() => {
    overlay.style.display = "none";
  }, 3000);
}

function onBadRequest() {
  const overlay = document.querySelector(
    "#volinteers-upload-writing-test-overlay"
  );
  messageTitle.value = "你上传的信息有误";
  messageText.value = "请检查你的输入并重试...";
  overlay.style.display = "flex";
  setTimeout(() => {
    overlay.style.display = "none";
  }, 3000);
}
</script>

<style>
.volinteers-upload-writing-test {
  display: flex;
  justify-content: center;
  padding: 5rem 2rem;
  min-height: 100vh;
  background-color: var(--clr-background-muted);
}

.volinteers-upload-writing-test form {
  color: var(--clr-text);
  width: 100%;
  max-width: 40rem;
  padding: 2.5rem;
  border-radius: 1rem;
  height: min-content;
  background-color: var(--clr-background);
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.3);
}

.volinteers-upload-writing-test-overlay {
  padding-top: 20svh;
  position: fixed;
  inset: 0;
  background-color: #000000aa;
  flex-direction: column;
  align-items: center;
  display: none;
}

.volinteers-upload-writing-test-overlay .message-box {
  background-color: var(--clr-background);
  border-radius: 0.5rem;
  color: var(--clr-text);
  padding: 3rem;
  width: 25vw;
  min-width: 20rem;
  aspect-ratio: 4 / 3;
}

.volinteers-upload-writing-test-overlay .mesage-box__title {
  width: 100%;
  text-align: center;
  font-weight: 600;
  font-size: var(--fs-600);
}

.mesage-box__text {
  margin-top: 2rem;
  font-size: var(--fs-400);
}

.volinteers-upload-writing-test-overlay .message-box__footer {
  margin-top: 2rem;
  font-size: var(--fs-200);
  color: var(--clr-text-muted);
}

.volinteers-upload-writing-test-overlay .message-box__footer a {
  text-decoration: underline;
  color: var(--clr-primary);
}

@media (max-width: 768px) {
  .volinteers-upload-writing-test {
    padding: 0rem;
    min-height: 0;
  }
  .volinteers-upload-writing-test form {
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
