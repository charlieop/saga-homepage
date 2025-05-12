<template>
  <div class="card-wrapper">
    <div class="volunteer-card" :style="color">
      <div class="volunteer-avatar">
        <img
          :src="
            'https://picsum.photos/seed/' + 'picsum' + name + uni + '/400/400'
          "
          alt="volunteer-avatar"
          height="100"
          width="100"
        />
      </div>
      <div class="volunteer-info">
        <div class="row" :data-dept="dept">
          <p class="volunteer-name">{{ name }}</p>
          <p class="volunteer-honor">{{ honor }}</p>
        </div>
        <p class="volunteer-uni">{{ uni }}</p>
        <p class="volunteer-dept">{{ dept }}</p>
        <div class="decoration-wave colored">
          <svg
            id="wave"
            style="transform: rotate(0deg); transition: 0.3s"
            viewBox="0 0 1440 390"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              style="transform: translate(0, 45px); opacity: 1"
              d="M0,195L60,162.5C120,130,240,65,360,65C480,65,600,130,720,188.5C840,247,960,299,1080,286C1200,273,1320,195,1440,182C1560,169,1680,221,1800,208C1920,195,2040,117,2160,78C2280,39,2400,39,2520,58.5C2640,78,2760,117,2880,143C3000,169,3120,182,3240,214.5C3360,247,3480,299,3600,273C3720,247,3840,143,3960,110.5C4080,78,4200,117,4320,136.5C4440,156,4560,156,4680,175.5C4800,195,4920,234,5040,240.5C5160,247,5280,221,5400,182C5520,143,5640,91,5760,91C5880,91,6000,143,6120,195C6240,247,6360,299,6480,312C6600,325,6720,299,6840,279.5C6960,260,7080,247,7200,234C7320,221,7440,208,7560,221C7680,234,7800,273,7920,273C8040,273,8160,234,8280,188.5C8400,143,8520,91,8580,65L8640,39L8640,390L8580,390C8520,390,8400,390,8280,390C8160,390,8040,390,7920,390C7800,390,7680,390,7560,390C7440,390,7320,390,7200,390C7080,390,6960,390,6840,390C6720,390,6600,390,6480,390C6360,390,6240,390,6120,390C6000,390,5880,390,5760,390C5640,390,5520,390,5400,390C5280,390,5160,390,5040,390C4920,390,4800,390,4680,390C4560,390,4440,390,4320,390C4200,390,4080,390,3960,390C3840,390,3720,390,3600,390C3480,390,3360,390,3240,390C3120,390,3000,390,2880,390C2760,390,2640,390,2520,390C2400,390,2280,390,2160,390C2040,390,1920,390,1800,390C1680,390,1560,390,1440,390C1320,390,1200,390,1080,390C960,390,840,390,720,390C600,390,480,390,360,390C240,390,120,390,60,390L0,390Z"
            ></path>
          </svg>
        </div>
        <div class="decoration-wave">
          <svg
            id="wave"
            style="transform: rotate(0deg); transition: 0.3s"
            viewBox="0 0 1440 300"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              style="transform: translate(0, 40px); opacity: 1"
              d="M0,150L60,125C120,100,240,50,360,50C480,50,600,100,720,145C840,190,960,230,1080,220C1200,210,1320,150,1440,140C1560,130,1680,170,1800,160C1920,150,2040,90,2160,60C2280,30,2400,30,2520,45C2640,60,2760,90,2880,110C3000,130,3120,140,3240,165C3360,190,3480,230,3600,210C3720,190,3840,110,3960,85C4080,60,4200,90,4320,105C4440,120,4560,120,4680,135C4800,150,4920,180,5040,185C5160,190,5280,170,5400,140C5520,110,5640,70,5760,70C5880,70,6000,110,6120,150C6240,190,6360,230,6480,240C6600,250,6720,230,6840,215C6960,200,7080,190,7200,180C7320,170,7440,160,7560,170C7680,180,7800,210,7920,210C8040,210,8160,180,8280,145C8400,110,8520,70,8580,50L8640,30L8640,300L8580,300C8520,300,8400,300,8280,300C8160,300,8040,300,7920,300C7800,300,7680,300,7560,300C7440,300,7320,300,7200,300C7080,300,6960,300,6840,300C6720,300,6600,300,6480,300C6360,300,6240,300,6120,300C6000,300,5880,300,5760,300C5640,300,5520,300,5400,300C5280,300,5160,300,5040,300C4920,300,4800,300,4680,300C4560,300,4440,300,4320,300C4200,300,4080,300,3960,300C3840,300,3720,300,3600,300C3480,300,3360,300,3240,300C3120,300,3000,300,2880,300C2760,300,2640,300,2520,300C2400,300,2280,300,2160,300C2040,300,1920,300,1800,300C1680,300,1560,300,1440,300C1320,300,1200,300,1080,300C960,300,840,300,720,300C600,300,480,300,360,300C240,300,120,300,60,300L0,300Z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  name: String,
  dept: String,
  honor: String,
  uni: String,
});

const colorForDepts = {
  主席团: "#ff881a", // orange
  核心团队: "#9b5de5", // purple
  教学部: "#90be6d", // green
  行研部: "#43aa8b", // teal
  人事部: "#f9c74f", // yellow
  法务部: "#f94144", // red
  IT部: "#277da1", // blue
  宣传部: "#0496ff", // light blue
  外联部: "#f49cbb", // pink
  财务部: "#548c2f", // dark green
};

let color = computed(() => {
  return (
    "--_color: " +
    (colorForDepts[props.dept] || "#000000") +
    "; --_color-muted: " +
    (colorForDepts[props.dept] || "#000000") +
    "99;"
  );
});
</script>

<style scoped>
.card-wrapper {
  width: minmax(250px, 100%);
  container-type: inline-size;
}
.volunteer-card {
  --_color: #000000;
  --_color-muted: #00000099;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1.7fr 1fr;

  background: var(--clr-background);
  border: 1px solid #e5e5e5;
  aspect-ratio: 2 / 3;
  border-radius: 1rem 4rem 1rem 1rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
  overflow: clip;
  transition: all 0.3s ease-in-out;
}

.volunteer-card:hover {
  transform: scale(1.05);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.35);
  z-index: 1;
  transition: all 0.3s ease-in-out;
}

.volunteer-avatar {
  background-color: var(--clr-accent);
}
.volunteer-avatar img {
  width: 100%;
  height: 100%;
  object-position: center;
  object-fit: cover;
}

.volunteer-info {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding-inline: 1.125rem;
  padding-block: 0.5rem 0.75rem;
}

.decoration-wave {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  fill: var(--clr-background);
  overflow: hidden;
  z-index: 1;
  transform: translateY(calc(-100% + 5px)) rotateY(180deg);
  transform-origin: bottom;
}

.colored {
  fill: var(--_color);
  transform: translateY(calc(-100% + 3px)) rotateY(180deg);
}

.row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.volunteer-name {
  font-size: var(--fs-500);
  font-weight: 700;
}
.volunteer-honor {
  font-size: var(--fs-300);
  background-color: var(--_color-muted);
  padding: 0.25rem 0.75rem;
  border-radius: 100rem;
  text-align: center;
}

.volunteer-dept {
  font-size: var(--fs-300);
  font-weight: 400;
  padding-top: 1rem;
  text-decoration: underline;
  text-decoration-color: var(--_color);
  text-underline-offset: 0.125rem;
  text-decoration-thickness: 0.15rem;
}

.volunteer-uni {
  font-size: var(--fs-200);
  font-weight: 400;
}

@container (max-width: 290px) {
  .card-wrapper .volunteer-card {
    aspect-ratio: 3 / 5;
    grid-template-rows: auto 1fr;
  }
  .card-wrapper .volunteer-card .row {
    flex-direction: column;
    gap: 0.5rem;
  }
  .card-wrapper .volunteer-card .volunteer-dept {
    padding-top: 0.25rem;
  }
}

@media (max-width: 700px) {
  .card-wrapper .volunteer-card.volunteer-card {
    min-width: 0;
    padding: 0.8rem;
    width: 157px;
    height: 202px;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
    border-radius: 5px;
    border: 1px solid rgba(115, 198, 33, 1);
    border-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
    text-align: left;
    aspect-ratio: auto; 
  }

  .volunteer-avatar {
    width: 125px;
    height: 120px;
    margin: 0 auto;
  }

  .volunteer-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 2px;
  }

  .volunteer-info {
    padding: 6px;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .row {
    display: flex;
    justify-content: space-between;
    align-items: left;
    position: relative;
  }

  .volunteer-name {
    text-align: left !important;
    margin: 0;
    font-size: 20px;
    text-align: left;
    flex: 1;
  }

  /* Hide original dept and honor */
  .volunteer-dept {
    display: none;
  }

  /* Show dept in the same row */
  .row:after {
    content: attr(data-dept);
    font-size: 14px;
    position: absolute;
    right: 0;
    top: 20%;
    transform: translateY(-50%);
  }

  /* Show honor below instead of using pseudo-element */
  .volunteer-honor {
    display: block !important; /* Override previous display: none */
    font-size: 14px;
    text-align: left;
    margin-top: 0;
    background: none;
    padding: 0;
    order: 2; /* Move it below the row */
  }

  /* Remove the pseudo-element that was adding the text */
  .volunteer-info:after {
    display: none;
  }

  .decoration-wave,
  .volunteer-uni {
    display: none;
  }
}

@media (max-width: 400px) {
  .card-wrapper .volunteer-card.volunteer-card {
    min-width: 0;
    padding: 0.5rem;
    width: 120px;
    height: 150px;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
    border-radius: 5px;
    border: 1px solid rgba(115, 198, 33, 1);
    border-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
    text-align: center;
    aspect-ratio: auto; 
  }

  .volunteer-avatar {
    width: 85px;
    height: 80px;
    margin: 0 auto;
  }

  .volunteer-name {
    margin-top: 0;
    margin-left: 0;
    font-size: 16px;
  }

  .row:after {
    content: attr(data-dept);
    font-size: 12px;
    position: absolute;
    right: 0;
    top: 20%;
    transform: translateY(-50%);
  }

  .volunteer-honor {
    display: block !important; /* Override previous display: none */
    font-size: 12px;
    text-align: left;
    margin-top: 0;
    background: none;
    padding: 0;
    order: 2; /* Move it below the row */
  }

}
</style>
