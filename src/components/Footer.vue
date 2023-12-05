<template>
  <footer>
    <h2 class="footer__title">SAGA星光公益课堂</h2>
    <div class="footer__content">
      <div class="footer__content_col">
        <h3 class="footer__content__title">页面导航</h3>
        <div class="footer__content__item">
          <p class="footer__content__item__text">暂无</p>
        </div>
      </div>
      <div class="footer__content_col">
        <h3 class="footer__content__title">联系我们</h3>
        <div class="footer__content__item">
          <p class="footer__content__item__text">电话：+86-13730835212</p>
          <p class="footer__content__item__text">
            邮箱：<a href="mailto:external-affairs@saga-xingguang.com"
              >external-affairs@saga-xingguang.com</a
            >
          </p>
          <p class="footer__content__item__text">微信公众号：星光SAGA</p>
          <p class="footer__content__item__text">微信：13730835212</p>
        </div>
      </div>
      <div class="footer__content_col">
        <h3 class="footer__content__title">关注我们</h3>
        <div class="footer__content__item">
          <img
            class="footer__content__item__img"
            src="@/assets/imgs/qrCode.jpg"
          />
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup></script>
<style scoped>
footer {
  min-height: 60svh;
  background-color: var(--clr-primary);
  color: var(--clr-footer-text);
  padding: 2rem var(--page-padding-inline);
}

.footer__title {
  font-size: var(--fs-700);
  font-weight: 700;
  padding-block: 3rem 5rem;
}

.footer__content {
  padding-inline: 2rem;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  gap: 5rem;
}

.footer__content_col {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  gap: 1rem;
}

.footer__content__title {
  font-size: var(--fs-500);
  font-weight: 700;
}

.footer__content__item {
  padding-left: 2ch;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
}

.footer__content__item__img {
  object-fit: contain;
  width: 7rem;
}
@media (max-width: 700px) {
  .footer__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 3rem;
  }
}
</style>
