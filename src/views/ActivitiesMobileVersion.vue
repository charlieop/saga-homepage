<template>
  <div class="page">
    <div class="flex-col">
      <!-- Header Image -->
      <div class="flex-col justify-start items-start image-wrapper">
        <img class="shrink-0 image" src="../assets/imgs/activities/saga.png" alt="SAGA Logo" />
      </div>

      <!-- Program Listings -->
      <div class="flex-col group mt-19-5">
        <div class="flex-col list">
          <!-- Go Class Section -->
          <div class="flex-col section">
            <div class="flex-col group_2">
              <div class="flex-col justify-start self-stretch section_2">
                <div class="flex-col justify-start items-start section_3">
                  <div class="group_3">
                    <span class="font">自学月围棋课<br /></span>
                    <span class="font_2">山东理工大学仙弈围棋协会</span>
                  </div>
                </div>
              </div>
              <div class="self-start group_4 view mt-5">
                <span class="font_4">合作时间：四期、五期</span>
              </div>
            </div>
            <div class="shrink-0 self-stretch divider view_5"></div>
            <p class="font_5 text_2">
              SAGA星光公益课堂将与仙弈围棋协会开展为期一个月的围棋兴趣课堂活动。围棋特色课堂意在宣扬围棋文化，激发小朋友们的围棋兴趣。仙弈围棋协会的志愿者老师们将教授围棋的基础知识，辅助进行围棋练习。
            </p>
          </div>

          <!-- Science Class Section -->
          <div class="flex-col section_4">
            <div class="flex-col group_5">
              <div class="flex-col justify-start self-stretch section_5">
                <div class="flex-col justify-start items-start section_3">
                  <div class="group_6">
                    <span class="font">自学月科普课<br /></span>
                    <span class="font_2">清华大学青天与白鸟社团</span>
                  </div>
                </div>
              </div>
              <div class="self-start group_9">
                <span class="font_4">合作时间：四期、五期</span>
              </div>
            </div>
            <div class="shrink-0 self-stretch divider view_5"></div>
            <p class="font_5 text_2 text_4">
              科普兴趣课意在传播科学知识，广阔小朋友们的视野。青天与白鸟的志愿者老师们将教授科学知识，辅助进行阅读等练习。
            </p>
          </div>

          <!-- Coding Class Section -->
          <div class="flex-col section_6">
            <div class="flex-col justify-start self-stretch section_7">
              <div class="flex-col justify-start items-start section_8">
                <div class="group_7">
                  <span class="font">编程兴趣课<br /></span>
                  <span class="text_5">Coding Girls</span>
                </div>
              </div>
            </div>
            <div class="self-start group_8">
              <span class="font_4">合作时间：四期、五期</span>
            </div>
            <div class="shrink-0 self-stretch divider view_5"></div>
            <div class="flex-col self-stretch group_10">
              <p class="self-center font_5 text_7">
              为了丰富SAGA第三期的课堂内容，为报名的小朋友们提供更好的线上教育，SAGA邀约Coding Girls提供线上编程课堂。
              </p>
            </div>
          </div>

          <!-- Counseling Section -->
          <div class="flex-col section_9">
            <img class="shrink-0 self-stretch image_2" src="../assets/imgs/activities/xl.png" alt="Counseling" />
            <span class="self-stretch font_6 text_8">SAGA陪伴计划 - 心理咨询师洗研老师</span>
            <div class="self-start group_9">
              <span class="font_4">合作时间：四期、五期</span>
            </div>
            <div class="shrink-0 self-start divider_2"></div>
            <div class="flex-col self-stretch group_10">
              <p class="font_5 text_10">
                在成长过程中，孩子们收获着知识和渐渐成熟的心智，但烦恼也在日益增长。<br />
              </p>
              <p class="font_5 text_11">
                SAGA陪伴计划旨在为孩子们打造可以轻松畅谈的心理舒适空间，将由SAGA特聘心理咨询师陪伴孩子、倾听他们的烦恼和忧虑。
              </p>
            </div>
          </div>
        </div>

        <!-- Footer Image -->
        <div class="flex-col items-center section_10">
          <img class="shrink-0 image_3" src="../assets/imgs/activities/gb.png" alt="Footer Image" />
          <span class="self-stretch font_6 text_8">高博项目——医博同行</span>
            <div class="self-start group_9">
              <span class="font_4">合作时间：四期、五期</span>
            </div>
            <div class="shrink-0 self-start divider_2"></div>
            <div class="flex-col self-stretch group_10">
              <p class="font_5 text_10">
                To be Continued... ...<br />
              </p>
            </div>
        </div>
        <div class="flex-col self-stretch group_10"></div>
      </div>

      <!-- QR Code Section -->
      <div class="flex-col justify-start items-center relative group_11 mt-19-5 gap-16">
        <div class="flex section_11 justify-center gap-10">
          <img class="image_5" src="../assets/imgs/activities/code-left.png" alt="QR Code Left" />
          <img class="image_6 ml-16-5" src="../assets/imgs/activities/code-right.png" alt="QR Code Right" />
        </div>
      </div>

    </div>
  </div>

  <div class="star-container">
    <div v-for="(star, index) in stars" :key="index" class="star" :style="star.style">
      ★
    </div>
  </div>
</template>


<script>

export default {
  name: "SagaPage",
  data() {
    return {
      stars: [] // 存放星星的数组
    };
  },
  mounted() {
    this.createStars();
  },
  methods: {
    createStars() {
      setInterval(() => {
        const colors = ["#FFD700", "#D8BFD8"];
        const newStar = {
          id: Date.now(),
          style: {
            left: Math.random() * window.innerWidth + "px",
            top: "-20px",
            fontSize: Math.random() * 20 + 10 + "px",
            opacity: Math.random() * 0.5 + 0.5,
            animationDuration: Math.random() * 3 + 2 + "s",
            color: colors[Math.floor(Math.random() * colors.length)] // 随机选择颜色
          }
        };
        this.stars.push(newStar);

        // 移除已经掉落的星星
        setTimeout(() => {
          this.stars.shift();
        }, 5000);
      }, 200);
    }
  }
};
</script>

<style scoped>
/* Improved Spacing and Typography */
.mt-5 {
  margin-top: 0.5rem; /* Increased spacing */
}
.mt-4-5 {
  margin-top: 0.4rem; /* Adjusted spacing */
}
.mt-19-5 {
  margin-top: 1.5rem; /* Increased spacing */
}
.ml-16-5 {
  margin-left: 1.2rem; /* Adjusted spacing */
}
.mt-238 {
  margin-top: 15rem; /* Increased spacing */
}
.page {
  padding-bottom: 3rem; /* Increased spacing */
  background-color: #fff8f2;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
}
.image-wrapper {
  padding: 0.5rem 0; /* Increased spacing */
  background-color: #ffa450;
  overflow: hidden;
}
.image {
  margin-left: 0.8rem; /* Adjusted spacing */
  width: 3.44rem;
  height: 2.81rem;
}
.group {
  padding: 0 2rem; /* Increased spacing */
}
.list {
  padding-bottom: 1rem; /* Increased spacing */
}
.section {
  margin: 0 0.2rem; /* Adjusted spacing */
  padding-bottom: 1rem; /* Increased spacing */
  background-color: #fefbf8bf;
  border-radius: 0.5rem; /* Increased border radius */
  overflow: hidden;
  height: auto; /* Adjusted height */
  border: solid 0.031rem #9797975e;
}
.group_2 {
  padding-bottom: 0.5rem; /* Increased spacing */
}
.section_2 {
  padding-top: 23rem;
  background-size: 100% 100%;
  background-image: url('../assets/imgs/activities/go.png');
  background-repeat: no-repeat;
  background-position: center; /* ✅ 居中对齐 */
}
.section_3 {
  padding: 0.5rem 0; /* Increased spacing */
  background-color: #99999952;
}
.group_3 {
  margin-left: 1rem; /* Adjusted spacing */
}
.font {
  font-size: 1.2rem; /* Increased font size */
  font-family: Stardos Stencil;
  line-height: 1.5rem; /* Increased line height */
  font-weight: 700;
  color: #303030;
}
.font_2 {
  font-size: 1rem;
  font-family: Stardos Stencil;
  line-height: 1.2rem; /* Adjusted line height */
  font-weight: 700;
  color: #303030;
}
.group_4 {
  line-height: 1rem; /* Adjusted line height */
}
.view {
  margin-left: 0.8rem; /* Adjusted spacing */
}
.font_4 {
  font-size: 1rem;
  font-family: Stardos Stencil;
  line-height: 1rem; /* Adjusted line height */
  font-weight: 700;
  color: #e6a355;
}
.divider {
  background-color: #00000040;
  height: 0.031rem;
}
.view_2 {
  margin: 0.8rem 1.5rem; /* Adjusted spacing */
}
.font_5 {
  font-size: 1rem;
  font-family: ABeeZee;
  line-height: 1.5rem; /* Increased line height */
  color: #000000;
}
.text_2 {
  margin: 0.5rem 1rem 0 1rem; /* Adjusted spacing */
}
.section_4 {
  margin: 1rem 0.2rem 0; /* Adjusted spacing */
  padding-bottom: 1rem; /* Increased spacing */
  background-color: #fffcf9;
  border-radius: 0.5rem; /* Increased border radius */
  overflow: hidden;
  height: auto; /* Adjusted height */
  border: solid 0.031rem #9797975e;
}

.group_5 {
  padding-bottom: 0.5rem; /* Increased spacing */
}
.section_5 {
  padding-top: 23rem;
  background-size: 100% 100%;
  background-image: url('../assets/imgs/activities/thu.png');
  background-repeat: no-repeat;
  background-position: center;
}
.group_6 {
  margin-left: 1rem; 
}
.view_3 {
  margin-left: 1rem; 
}
.view_4 {
  margin: 0.8rem 1.5rem; 
}
.text_4 {
  margin: 0.5rem 1rem 0 1rem; 
}
.section_6 {
  margin: 1.5rem 0.2rem 1rem;
  padding-bottom: 1rem; 
  background-color: #fffcf9;
  border-radius: 0.5rem;
  overflow: hidden;
  height: auto; 
  border: solid 0.031rem #9797975e;
}
.section_7 {
    padding-top: 7.38rem;
    background-image: url('../assets/imgs/activities/coding-girls.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
.section_8 {
  padding: 0.5rem 0; 
  background-color: #99999952;
  height: auto; 
}
.group_7 {
  margin-left: 1rem; 
  line-height: 1.2rem; 
}
.text_5 {
  color: #303030;
  font-size: 1rem;
  font-family: Stardos Stencil;
  font-weight: 700;
  line-height: 1.2rem;
}
.group_8 {
  margin-left: 1rem; 
  margin-top: 0.8rem; 
  line-height: 1rem; 
}
.view_5 {
  margin: 0.5rem 1.5rem 0 1rem; 
}
.text_7 {
  margin-top: 0.5rem 1rem 0 1rem; 
  width: 100%; 
}
.section_9 {
  margin: 1rem 0.2rem 0; 
  background-color: #fffcf9;
  border-radius: 0.5rem;
  overflow: hidden;
  border: solid 0.031rem #9797975e;
}
.image_2 {
  max-width: 100%;
  height: auto;
  display: block;
}
.group_9 {
  margin-left: 1rem; 
  margin-top: 0.5rem; 
  line-height: 1rem; 
}
.divider_2 {
  margin: 0.5rem 0 0 1rem; 
  background-color: #00000040;
  width: 100%; 
  height: 0.031rem;
}
.group_10 {
  margin: 0 1rem; 
  padding: 0.5rem 0; 
}
.text_10,
.text_11 {
  text-indent: 0;
}
.section_10 {
  margin: 0 0.2rem; 
  padding-bottom: 1rem; 
  background-color: #fffcf9;
  border-radius: 0.5rem; 
  overflow: hidden;
  border: solid 0.031rem #9797975e;
}
.image_3 {
  max-width: 100%;
  height: auto;
  display: block;
  padding-bottom: 0.5rem; 
}
.font_6 {
  font-size: 1rem;
  font-family: Stardos Stencil;
  line-height: 1.2rem; 
  font-weight: 700;
  color: #303030;
}
.text_8 {
  margin-left: 1rem; /* Adjusted spacing */
  margin-top: 0.5rem; /* Adjusted spacing */
  line-height: 1.2rem; /* Adjusted line height */
}
.text_12 {
  line-height: 1.4rem; /* Adjusted line height */
  padding-bottom: 1rem; 
}
.group_11 {
  padding-top: 2rem; /* Increased spacing */
}
.section_11 {
  padding: 1rem 1.5rem 2rem; /* Adjusted spacing */
  display:flex;
  gap: 2rem;
  justify-content: center;
  padding-bottom: 1rem;
  background-color: #ff881aef;
  border-radius: 0.5rem; /* Increased border radius */
  box-shadow: 0 0.2rem 0.2rem #00000040; /* Adjusted shadow */
}
.image_5,
.image_6 {
  width: 7.63rem;
  height: 7.56rem;
}
.group_12 {
  padding: 1rem 2rem; /* Adjusted spacing */
}
.font_7 {
  font-size: 0.8rem; /* Adjusted font size */
  font-family: STXihei;
  line-height: 1rem; /* Adjusted line height */
  color: #ffffff;
}
.text_13 {
  line-height: 1.5rem; /* Adjusted line height */
}
.absolute-center {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
</style>

<style scoped>
.star-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
}

.star {
  position: absolute;
  color: yellow;
  animation: fall linear infinite;
}

@keyframes fall {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(100vh) rotate(360deg);
    opacity: 0;
  }
}
</style>