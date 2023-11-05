<template>
  <footer>
    <h2 class="footer__title">星光SAGA公益课堂</h2>
    <div class="footer__content">
      <div class="footer__content_col">
        <h3 class="footer__content__title">联系我们</h3>
        <div class="footer__content__item">
          <p class="footer__content__item__text">电话：+86 123456789</p>
          <p class="footer__content__item__text">
            邮箱：
            <a href="mailto:support@saga-xingguang.com"
              >support@saga-xingguang.com</a
            >
          </p>
        </div>
      </div>
      <div class="footer__content_col">
        <h3 class="footer__content__title">关注我们</h3>
        <div class="footer__content__item">
          <p class="footer__content__item__text">
            <a href="#">微信公众号</a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup></script>
<style scoped>
footer {
  min-height: 45svh;
  background-color: var(--clr-primary);
  color: var(--clr-footer-text);
  padding: 2rem var(--page-padding-inline);
}
.footer__title {
  font-size: var(--fs-700);
  font-weight: 700;
  padding: 2rem 0;
}

.footer__content {
  padding-inline: 2rem;
  display: flex;
  align-items: flex-start;
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
</style>
