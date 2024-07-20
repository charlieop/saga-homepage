<template>
  <section class="volinteers-application">
    <Vueform
      :endpoint="false"
      @submit="handleSubmit"
      :display-errors="false"
      validate-on="step"
      :force-labels="false"
      add-class="vf-volunteer-application"
    >
      <template #empty>
        <FormSteps v-if="!isMobile">
          <FormStep
            name="page0"
            label="介绍"
            :elements="[
              'title',
              'subtitle',
              'info',
              'info__text1',
              'info__text2',
              'info__text3',
              'info__text4',
            ]"
          />
          <FormStep
            name="page1"
            label="基本信息"
            :elements="[
              'basic_info',
              'name',
              'email',
              'wechat',
              'phone',
              'sex',
            ]"
          />
          <FormStep
            name="page2"
            label="学业信息"
            :elements="['academic_info', 'school', 'major', 'grade']"
          />
          <FormStep
            name="page3"
            label="志愿信息"
            :elements="[
              'choice_info',
              'first_choice',
              'second_choice',
              'third_choice',
              'subject_choice',
            ]"
          />
          <FormStep
            name="page4"
            label="个人介绍"
            :elements="['about_me', 'self_intro', 'disposable_time']"
          />
          <FormStep
            name="page5"
            label="确认信息"
            :elements="[
              'confirmation',
              'confirm_email',
              'commitment',
              'confirm',
              'signature',
            ]"
          />
          <FormStep
            name="page6"
            label="结束"
            :elements="[
              'end',
              'ending_text1',
              'ending_text2',
              'ending_text3',
              'ending_text4',
              'ending_text5',
              'ending_text6',
            ]"
          />
        </FormSteps>

        <FormElements>
          <StaticElement
            name="title"
            tag="h1"
            align="left"
            content="SAGA 星光 · 第五期 | 志愿者招募邀请"
            top="1"
          />
          <StaticElement
            name="subtitle"
            tag="p"
            content="感谢你对SAGA星光的兴趣与关注,<br>我们非常期待你的加入!"
            align="right"
            size="sm"
            bottom="3"
          />
          <StaticElement name="info" tag="h2" content="志愿者须知:" />
          <StaticElement
            name="info__text1"
            tag="p"
            content="本次志愿者招募的 <strong style='font-weight: bold;'>截止日期为: 2024年XX月XX日 23:59分</strong>, 招募为滚动制, 招募完成的部门会停止接受新的申请. "
          />
          <StaticElement
            name="info__text2"
            tag="p"
            content="SAGA 星光非常重视你的隐私. 我们保证在未经你同意的情况下不会向任何第三方透露你在申请中提交的信息."
          />
          <StaticElement
            name="info__text3"
            tag="p"
            content="如果你在申请的过程中遇到任何问题, 或是有任何疑问, 请随时于 <a href='mailto:support@saga-xingguang.com'>support@saga-xingguang.com</a> 与我们取得联系"
          />
          <StaticElement
            name="info__text4"
            tag="h4"
            top="1"
            align="right"
            content="让我们开始吧! &nbsp; ↓ &nbsp;"
          />

          <StaticElement
            name="divider1"
            tag="hr"
            top="1"
            bottom="1"
            v-if="isMobile"
          />

          <StaticElement
            name="basic_info"
            tag="h2"
            top="1"
            content="基本信息"
          />
          <TextElement
            name="name"
            label="你的名字是?"
            :floating="false"
            field-name="姓名"
            :rules="['required', 'min:2', 'max:10']"
          />
          <TextElement
            name="email"
            label="你的电子邮箱是?"
            input-type="email"
            :rules="['required', 'max:30', 'email']"
            info="建议使用学校邮箱"
            field-name="电子邮箱"
          />
          <TextElement
            name="phone"
            :rules="['required', 'regex:^\\d{11}$', 'max:11']"
            label="你的手机号码是?"
            info="请输入中国大陆手机号"
            :addons="{
              before: '+86 ',
            }"
            field-name="手机号码"
          />
          <TextElement
            name="wechat"
            :rules="['required', 'max:30']"
            label="你的微信号是？"
            :floating="false"
            field-name="微信号"
          />
          <SelectElement
            name="sex"
            :items="[
              {
                value: 'M',
                label: '男性',
              },
              {
                value: 'F',
                label: '女性',
              },
              {
                value: 'O',
                label: '其他/ 不愿透露',
              },
            ]"
            :search="true"
            :native="false"
            label="你的姓别是?"
            input-type="search"
            :rules="['required']"
            open-direction="top"
            field-name="性别"
          />

          <StaticElement
            name="divider2"
            tag="hr"
            top="1"
            bottom="1"
            v-if="isMobile"
          />

          <StaticElement
            name="academic_info"
            tag="h2"
            top="1"
            content="学业信息"
          />
          <TextElement
            name="school"
            label="你就读的院校是?"
            :floating="false"
            description="海外大学请填写中文全名, 高三学生请填写: 暂无"
            info="你目前所就读/ 毕业的高等教育机构"
            field-name="就读院校"
            :rules="['required', 'min:2', 'max:30']"
          />
          <TextElement
            name="major"
            label="你的专业是?"
            info="本科生请填写专业, 研究生请填写课题方向"
            description="无专业请填写: 暂无"
            field-name="专业"
            :floating="false"
            :rules="['required', 'min:2', 'max:30']"
          />
          <SelectElement
            name="grade"
            label="你于今年秋季开学时的年级是?"
            :items="[
              {
                value: 'UG1',
                label: '大一',
              },
              {
                value: 'UG2',
                label: '大二',
              },
              {
                value: 'UG3',
                label: '大三',
              },
              {
                value: 'UG4',
                label: '大四',
              },
              {
                value: 'UGGRAD',
                label: '本科毕业',
              },
              {
                value: 'PG',
                label: '硕/博士生',
              },
              {
                value: 'PGGRAD',
                label: '硕/博士毕业',
              },
              {
                value: 'OTHER',
                label: '其他',
              },
            ]"
            :native="false"
            open-direction="top"
            :rules="['required']"
            field-name="年级"
          />

          <StaticElement
            name="divider3"
            tag="hr"
            top="1"
            bottom="1"
            v-if="isMobile"
          />

          <StaticElement
            name="choice_info"
            tag="h2"
            top="1"
            content="志愿信息"
          />
          <SelectElement
            name="first_choice"
            label="你最希望在哪个部门担任志愿者?"
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
            :native="false"
            :search="true"
            input-type="search"
            open-direction="top"
            :rules="['required']"
            field-name="第一志愿部门"
            info="我们将基于你的第一志愿部门发放笔试内容"
          />
          <SelectElement
            name="second_choice"
            label="你的第二意向部门是? (选填)"
            :rules="['different:first_choice']"
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
            :native="false"
            :search="true"
            input-type="search"
            open-direction="top"
            :conditions="[['first_choice', 'not_empty']]"
            field-name="第二志愿部门"
          />
          <SelectElement
            name="third_choice"
            label="你的第三意向部门是? (选填)"
            :rules="['different:first_choice', 'different:second_choice']"
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
            :native="false"
            :search="true"
            input-type="search"
            open-direction="top"
            :conditions="[['second_choice', 'not_empty']]"
            field-name="第三志愿部门"
          />
          <SelectElement
            name="subject_choice"
            label="教学部中, 你最希望教授的科目是? (选填)"
            :items="[
              {
                value: 'MATH',
                label: '数学',
                selected: false,
              },
              {
                value: 'CHI',
                label: '语文',
                selected: false,
              },
              {
                value: 'ENG',
                label: '英语',
                selected: false,
              },
            ]"
            :native="false"
            :search="true"
            input-type="search"
            open-direction="top"
            :conditions="[
              [
                ['first_choice', 'in', ['TUT']],
                ['second_choice', 'in', ['TUT']],
                ['third_choice', 'in', ['TUT']],
              ],
            ]"
            field-name="偏好科目"
            :rules="['nullable']"
          />

          <StaticElement
            name="divider4"
            tag="hr"
            top="1"
            bottom="1"
            v-if="isMobile"
          />

          <StaticElement name="about_me" tag="h2" top="1" content="个人介绍" />
          <TextareaElement
            name="self_intro"
            label="请向我们介绍一下你自己"
            info="可以包含内容: 你是一个怎样的人? 为什么想要参加SAGA? 有哪些相关经历? 等等..."
            :rows="8"
            field-name="个人陈述"
            description="不超过150字"
            :rules="['required', 'max:200']"
            :autogrow="false"
          />
          <RadiogroupElement
            name="disposable_time"
            view="tabs"
            :items="[
              {
                value: '1',
                label: '1',
              },
              {
                value: '2',
                label: '2',
              },
              {
                value: '3',
                label: '3',
              },
              {
                value: '4',
                label: '4',
              },
              {
                value: '5',
                label: '5',
              },
            ]"
            :rules="['required']"
            label="你每周大约可花费在SAGA上多少小时呢?"
            info="单位: x小时/周"
            field-name="可花费时间"
          />

          <StaticElement
            name="divider5"
            tag="hr"
            top="1"
            bottom="1"
            v-if="isMobile"
          />

          <StaticElement
            name="confirmation"
            tag="h2"
            top="1"
            content="确认个人信息"
          />
          <TextElement
            name="confirm_email"
            label="请再次输入你的邮箱"
            input-type="email"
            info="在申请初始填写的邮箱"
            :rules="['required', 'same:email']"
            :submit="false"
            description="请确保两次输入的邮箱一致"
            field-name="确认邮箱"
          />
          <StaticElement
            name="commitment"
            tag="blockquote"
            content="SAGA星光每期活动将持续一年,其中教学活动将于每年9月至次年4月开展. 为确保教学质量以及志愿者招募的有效性, 在此我郑重承诺:
            <br>
            <strong style='font-weight: bold'>我不会中途退出活动, 并会认真完成所有工作.</strong>"
          />
          <CheckboxElement
            :submit="false"
            name="confirm"
            text="我已阅读并同意以上承诺"
            :native="false"
            :rules="['required']"
            field-name="承诺"
          />
          <SignatureElement
            name="signature"
            label="本人签名"
            :height="200"
            :max-width="800"
            :colors="['#000000']"
            :modes="['draw']"
            :rules="['required']"
            field-name="签名"
            :submit="false"
          />

          <StaticElement
            name="divider6"
            tag="hr"
            top="1"
            bottom="1"
            v-if="isMobile"
          />

          <StaticElement name="end" tag="h2" top="1" content="最后一步" />
          <StaticElement
            name="ending_text1"
            tag="p"
            content="恭喜你, 你已经完成了 SAGA星光第五期 的招募问卷! "
          />
          <StaticElement
            name="ending_text2"
            tag="p"
            content="我们将很快与你<strong style='font-weight: bold'>通过邮箱</strong>取得联系. <strong style='font-weight: bold'>请定期检查你的邮件收件箱以及垃圾信箱</strong>, 邮件将会是SAGA星光联系你的主要方式."
          />
          <StaticElement
            name="ending_text3"
            tag="p"
            content="如果你在申请中遇到任何问题, 抑或是有任何疑问, 你可以随时于<a href='mailto:support@saga-xingguang.com'>support@saga-xingguang.com</a> 与我们取得联系. 你也可以直接与申请的部门进行沟通, 以下是各部门的邮箱. 我们将会尽快回复."
          />
          <StaticElement
            name="ending_text4"
            tag="blockquote"
            content="教学部: tuition@saga-xingguang.com <br>
行研部: class-management@saga-xingguang.com <br>
财务部: finance@saga-xingguang.com <br>
宣传部: publicity@saga-xingguang.com <br>
法务部: legal-affairs@saga-xingguang.com <br>
IT部: developers@saga-xingguang.com <br>
人事部: human-resources@saga-xingguang.com <br>
外联部: liaison@saga-xingguang.com"
          />
          <StaticElement
            name="ending_text5"
            tag="p"
            content="我们感谢你对社会公益事业的关注与支持, 祝你好运! "
          />
          <StaticElement
            name="ending_text6"
            tag="h4"
            align="right"
            top="1"
            content="请点击这里提交你的申请 &nbsp; ↓ &nbsp;"
          />
          <StaticElement
            name="divider7"
            tag="hr"
            top="1"
            bottom="1"
            v-if="isMobile"
          />
        </FormElements>

        <FormStepsControls v-if="!isMobile" />
        <ButtonElement
          name="submit"
          button-label="提交申请"
          :submits="true"
          :full="true"
          top="3"
          v-else="screenWith < 768"
        />
      </template>
    </Vueform>
  </section>
  <div
    class="volinteers-application-overlay"
    id="volinteers-application-overlay"
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

let isMobile = ref(window.innerWidth <= 768);
let messageTitle = ref("");
let messageText = ref("");
const url = inject("ApiUrl") + "applicants/";

onMounted(() => {
  window.scrollTo(0, 0);
});

function getCSRFToken() {
  return document.cookie
    ?.split("; ")
    ?.find((row) => row.startsWith("csrftoken="))
    ?.split("=")[1];
}

async function handleSubmit(form$, FormData) {
  let requestData = form$.requestData;
  requestData.src = route.query.src ?? null;
  console.log(requestData);

  form$.submitting = true;
  // perform request here...
  console.log(url);
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-CSRFToken": getCSRFToken(),
    },
    body: JSON.stringify(requestData),
  })
    .then((response) => {
      console.log(response);
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

function onSuccess() {
  const overlay = document.querySelector("#volinteers-application-overlay");
  messageTitle.value = "提交成功";
  messageText.value = "即将重定向至首页...";
  overlay.style.display = "flex";
  setTimeout(() => {
    router.push({ name: "HomePage" });
  }, 2000);
}

function onFailed() {
  const overlay = document.querySelector("#volinteers-application-overlay");
  messageTitle.value = "提交失败";
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
.volinteers-application {
  display: flex;
  justify-content: center;
  padding: 5rem 2rem;
  min-height: 100vh;
  background-color: var(--clr-background-muted);
}

.volinteers-application form {
  color: var(--clr-text);
  width: 100%;
  max-width: 40rem;
  padding: 2.5rem;
  border-radius: 1rem;
  height: min-content;
  background-color: var(--clr-background);
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.3);
}

.volinteers-application-overlay {
  padding-top: 20svh;
  position: fixed;
  inset: 0;
  background-color: #000000aa;
  flex-direction: column;
  align-items: center;
  display: none;
}

.volinteers-application-overlay .message-box {
  background-color: var(--clr-background);
  border-radius: 0.5rem;
  color: var(--clr-text);
  padding: 3rem;
  width: 25vw;
  min-width: 20rem;
  aspect-ratio: 4 / 3;
}

.volinteers-application-overlay .mesage-box__title {
  width: 100%;
  text-align: center;
  font-weight: 600;
  font-size: var(--fs-600);
}

.mesage-box__text {
  margin-top: 2rem;
  font-size: var(--fs-400);
}

.volinteers-application-overlay .message-box__footer {
  margin-top: 2rem;
  font-size: var(--fs-200);
  color: var(--clr-text-muted);
}

.volinteers-application-overlay .message-box__footer a {
  text-decoration: underline;
  color: var(--clr-primary);
}

@media (max-width: 768px) {
  .volinteers-application {
    padding: 0rem;
    min-height: 0;
  }
  .volinteers-application form {
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
