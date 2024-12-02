<template>
  <section class="data-banner">
    <div class="data-banner__block" ref="block1">
      <div class="data-banner__figure">
        <span class="data-banner__number">{{ foundedYears }}</span
        ><span class="data-banner__unit">年</span>
      </div>
      <span class="data-banner__desc">SAGA星光成立已达</span>
    </div>
    <div class="data-banner__block" ref="block2">
      <div class="data-banner__figure">
        <span class="data-banner__number">{{ teachingMintues }}</span
        ><span class="data-banner__unit">万</span>
      </div>
      <span class="data-banner__desc">提供的教学时长 (分钟)</span>
    </div>
    <div class="data-banner__block" ref="block3">
      <div class="data-banner__figure">
        <span class="data-banner__number">{{ childrenServed }}</span
        ><span class="data-banner__unit">名</span>
      </div>
      <span class="data-banner__desc">服务的白血病儿童</span>
    </div>
    <div class="data-banner__block" ref="block4">
      <div class="data-banner__figure">
        <span class="data-banner__number">{{ volunteers }}</span
        ><span class="data-banner__unit">名</span>
      </div>
      <span class="data-banner__desc">来自世界各地的志愿者</span>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const finalYears = 4;
const finalMinutes = 21;
const finalChildren = 750;
const finalVolunteers = 620;

const foundedYears = ref(0);
const teachingMintues = ref(0);
const childrenServed = ref(0);
const volunteers = ref(0);

const block1 = ref(null);
const block2 = ref(null);
const block3 = ref(null);
const block4 = ref(null);

const animateValue = (start, end, duration, updateFn) => {
  const startTime = performance.now();
  
  const animate = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    const easeOutQuad = progress => 1 - (1 - progress) * (1 - progress);
    const easedProgress = easeOutQuad(progress);
    
    const current = start + (end - start) * easedProgress;
    
    if (progress === 1) {
      updateFn(end);
      return;
    }

    updateFn(Math.round(current));
    requestAnimationFrame(animate);
  };

  requestAnimationFrame(animate);
};

onMounted(() => {
  // Durations for animations
  createObserver(block1.value, () => {
    animateValue(0, finalYears, 2500, (val) => foundedYears.value = val);
  });

  createObserver(block2.value, () => {
    animateValue(0, finalMinutes, 2500, (val) => teachingMintues.value = val);
  });

  createObserver(block3.value, () => {
    animateValue(0, finalChildren, 2500, (val) => childrenServed.value = val);
  });

  createObserver(block4.value, () => {
    animateValue(0, finalVolunteers, 2500, (val) => volunteers.value = val);
  });
});

const createObserver = (element, animationFn) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animationFn();
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.3,
      rootMargin: "50px",
    }
  );

  observer.observe(element);
};
</script>

<style scoped>
.data-banner {
  background-color: var(--clr-background-muted);
  padding: 3rem var(--page-padding-inline) 6rem;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(4, 1fr);
}

.data-banner__block {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
}
.data-banner__figure {
  font-family: var(--ff-accent);
  font-size: var(--fs-700);
  font-weight: 700;
}
.data-banner__unit {
  color: var(--clr-primary);
  margin-left: 0.2ch;
}

.data-banner__number {
  font-size: 1.125em;
}

.data-banner__desc {
  font-size: var(--fs-300);
  color: var(--clr-text-muted);
}

@media (max-width: 1200px) {
  .data-banner {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
  }
}

@media (max-width: 700px) {
  .data-banner {
    display: flex;
    flex-direction: column;
    gap: 7svh;
    padding: 3rem var(--page-padding-inline) 6rem;
  }
}
</style>
