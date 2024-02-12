<template>
  <MainNavigation></MainNavigation>
  <section class="pageContent-wrapper volunteers-acknowledgments">
    <div class="title">
      <h1>SAGA星光全体志愿者名单</h1>
      <p class="subheading">最璀璨耀眼的星空, 由我们共同组成</p>
    </div>
    <div class="filter-bar">
      <div class="filter-entry--wrapper">
        <select
          class="filter-entry"
          id="term-select"
          @change="handelTermChange($event)"
        >
          <option value="4" selected>SAGA第四期</option>
          <option value="3">SAGA第三期</option>
          <option value="2">SAGA第二期</option>
          <option value="1">SAGA第一期</option>
        </select>
      </div>
      <div class="filter-entry--wrapper">
        <select
          class="filter-entry"
          id="dept-select"
          @change="handelDeptChange($event)"
        >
          <option selected>所有部门</option>
          <hr />
          <option>主席团</option>
          <option>核心团队</option>
          <option>教学部</option>
          <option>行研部</option>
          <option>财务部</option>
          <option>法务部</option>
          <option>IT部</option>
          <option>人事部</option>
          <option>外联部</option>
          <option>宣传部</option>
        </select>
      </div>
      <div class="filter-entry--wrapper">
        <select
          class="filter-entry"
          id="honor-select"
          @change="handleHonorChange($event)"
        >
          <option selected>所有荣誉</option>
          <hr />
          <option>特殊贡献奖</option>
          <option>最佳进步奖</option>
          <option>优秀志愿者</option>
          <option>SAGA志愿者</option>
        </select>
      </div>
    </div>
    <div class="volunteers-display-area">
      <Volunteers
        name="张三"
        dept="核心团队"
        uni="香港大学"
        honor="教学部Leader"
      ></Volunteers>
      <Volunteers
        name="李四"
        dept="核心团队"
        uni="香港大学"
        honor="IT部Leader"
      ></Volunteers>
      <Volunteers
        name="王五"
        dept="主席团"
        uni="香港大学"
        honor="校友会"
      ></Volunteers>
      <Volunteers
        name="蒲公英"
        dept="教学部"
        uni="香港大学"
        honor="优秀志愿者"
      ></Volunteers>
      <Volunteers
        name="显示器"
        dept="行研部"
        uni="香港大学"
        honor="SAGA志愿者"
      ></Volunteers>
      <Volunteers
        name="起名字"
        dept="教学部"
        uni="香港大学"
        honor="SAGA志愿者"
      ></Volunteers>
      <Volunteers
        name="你好吗"
        dept="IT部"
        uni="香港大学"
        honor="优秀志愿者"
      ></Volunteers>
      <Volunteers
        name="四个字的"
        dept="行研部"
        uni="香港大学"
        honor="SAGA志愿者"
      ></Volunteers>
      <Volunteers
        name="周六"
        dept="宣传部"
        uni="香港大学"
        honor="最佳进步奖"
      ></Volunteers>
      <Volunteers
        name="吃饭"
        dept="法务部"
        uni="香港大学"
        honor="SAGA志愿者"
      ></Volunteers>
      <Volunteers
        name="白菜"
        dept="IT部"
        uni="香港大学"
        honor="最佳进步奖"
      ></Volunteers>
      <Volunteers
        name="小白"
        dept="财务部"
        uni="香港大学"
        honor="SAGA志愿者"
      ></Volunteers>
      <Volunteers
        name="白菜"
        dept="人事部"
        uni="香港大学"
        honor="最佳贡献奖"
      ></Volunteers>
      <Volunteers
        name="小白"
        dept="外联部"
        uni="香港大学"
        honor="SAGA志愿者"
      ></Volunteers>
      <Volunteers
        name="lorem"
        dept="IT部"
        uni="香港大学"
        honor="SAGA志愿者"
      ></Volunteers>
      <Volunteers
        name="大大卷"
        dept="主席团"
        uni="香港大学"
        honor="SAGA志愿者"
      ></Volunteers>
      <Volunteers
        name="绿箭"
        dept="法务部"
        uni="香港大学"
        honor="SAGA志愿者"
      ></Volunteers>
      <Volunteers
        name="咔咔"
        dept="财务部"
        uni="香港大学"
        honor="SAGA志愿者"
      ></Volunteers>
      <Volunteers
        name="滑雪"
        dept="核心团队部"
        uni="香港大学"
        honor="SAGA志愿者"
      ></Volunteers>
      <Volunteers name="错误" dept="错误" uni="错误" honor="错误"></Volunteers>
    </div>
  </section>

  <!-- <div class="pageContent-wrapper">
    <TheAcknowledgments></TheAcknowledgments>
  </div> -->
  <Footer></Footer>
</template>

<script setup>
import MainNavigation from "@/components/MainNavigation.vue";
import Volunteers from "@/components/AcknowledgmentsPage/Volunteer.vue";
import TheAcknowledgments from "@/components/AcknowledgmentsPage/TheVolunteersList.vue";
import Footer from "@/components/Footer.vue";
import { onMounted } from "vue";

// remove this function when impliment real algrithm
function shuffleChildren() {
  const container = document.querySelector(".volunteers-display-area");
  for (let i = 0; i < 10; i++) {
    const children = container.children;
    const index1 = Math.floor(Math.random() * children.length);
    const index2 = Math.floor(Math.random() * children.length);
    container.insertBefore(children[index1], children[index2]);
  }
}

function handelTermChange(event) {
  hideAllVolunteers();

  setTimeout(() => {
    // remove this when impliment real algrithm
    console.log(event.target.value);
    shuffleChildren();

    // keep this
    showAllVolunteers();
  }, 1000);
}

function handelDeptChange(event) {
  hideAllVolunteers();

  setTimeout(() => {
    // remove this when impliment real algrithm
    console.log(event.target.value);
    shuffleChildren();

    // keep this
    showAllVolunteers();
  }, 1000);
}

function handleHonorChange(event) {
  hideAllVolunteers();

  console.log(event.target.value);

  setTimeout(() => {
    // remove this when impliment real algrithm
    console.log(event.target.value);
    shuffleChildren();

    // keep this
    showAllVolunteers();
  }, 1000);
}

function hideAllVolunteers() {
  const volunteers = document.querySelectorAll(".volunteer-card");
  let i = 0;
  volunteers.forEach((card) => {
    setTimeout(() => {
      card.classList.add("hide");
    }, i * 50);
    i++;
  });
}

function showAllVolunteers() {
  const volunteers = document.querySelectorAll(".volunteer-card");
  let i = 0;
  volunteers.forEach((card) => {
    setTimeout(() => {
      card.classList.remove("hide");
    }, i * 50);
    i++;
  });
}
</script>

<style>
.volunteers-acknowledgments .hide {
  opacity: 0;
  transform: translateY(50%);
}

.volunteers-acknowledgments.pageContent-wrapper {
  background: var(--clr-background);
  padding-top: var(--nav-height);
  padding-inline: var(--page-padding-inline);
}

.volunteers-acknowledgments .volunteers-display-area {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 5rem;
  min-height: 100svh;
}

.volunteers-acknowledgments .title {
  padding-block: 1.5rem;
}

.volunteers-acknowledgments h1 {
  font-size: var(--fs-800);
  text-wrap: balance;
}

.volunteers-acknowledgments .subheading {
  margin-top: 0.5rem;
  font-size: var(--fs-400);
  color: var(--clr-text-muted);
  padding-left: 3ch;
  text-wrap: balance;
}

.volunteers-acknowledgments .filter-bar {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 2rem;
  padding-inline: 2rem;
  margin-bottom: 4rem;
  display: sticky;
  top: 0;
}

.volunteers-acknowledgments .filter-entry--wrapper {
  --_icon-size: 1.5rem;
  --_icon-color: white;
  position: relative;
  transition: all 0.2s ease-in-out;
}

.volunteers-acknowledgments .filter-entry--wrapper:hover,
.volunteers-acknowledgments .filter-entry--wrapper:active {
  filter: brightness(0.9);
}

#term-select {
  --_color: #f97d00;
}
#dept-select {
  --_color: rgb(67, 188, 33);
}
#honor-select {
  --_color: rgb(59, 162, 252);
}

.volunteers-acknowledgments .filter-entry--wrapper::before,
.volunteers-acknowledgments .filter-entry--wrapper::after {
  --size: 0.3rem;
  position: absolute;
  content: "";
  right: calc(var(--_icon-size) / 2);
  transform: translateX(50%);
  pointer-events: none;
}

.volunteers-acknowledgments .filter-entry--wrapper::before {
  border-left: var(--size) solid transparent;
  border-right: var(--size) solid transparent;
  border-bottom: var(--size) solid var(--_icon-color);
  top: 39%;
}

.volunteers-acknowledgments .filter-entry--wrapper::after {
  border-left: var(--size) solid transparent;
  border-right: var(--size) solid transparent;
  border-top: var(--size) solid var(--_icon-color);
  top: 56%;
}

.volunteers-acknowledgments .filter-entry {
  --_color: var(--clr-primary);
  appearance: none;
  border: none;
  padding: 0.5rem 1rem;
  padding-right: calc(var(--_icon-size) + 1rem);
  min-width: 12rem;
  border-radius: 8px;
  border: 1px solid var(--clr-text-muted);
  outline: none;
  color: var(--_color);
  font-family: var(--ff-accent);
  font-size: var(--fs-300);
  background: linear-gradient(
    90deg,
    var(--clr-background) 0%,
    var(--clr-background) calc(100% - var(--_icon-size)),
    var(--_color) calc(100% - var(--_icon-size)),
    var(--_color) 100%
  );
  cursor: pointer;
}

@media (max-width: 700px) {
  .volunteers-acknowledgments .volunteers-display-area {
    grid-template-columns: 100%;
    gap: 1.5rem;
  }
  .volunteers-acknowledgments .subheading {
    padding-left: 0;
  }
  .volunteers-acknowledgments .filter-bar {
    padding-inline: 0;
    gap: 1rem;
  }
  .volunteers-acknowledgments .filter-bar > * {
    flex: 1 1 100%;
  }
  .volunteers-acknowledgments .filter-entry {
    width: 100%;
  }
}
</style>
