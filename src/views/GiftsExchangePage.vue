<template>
  <nav class="main-navigation" id="nav">
    <div class="main-navigation__logo">
      <a href="/">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="100 0 400 400">
          <path
            d="M471.86,421.35c.3,93.81-75.91,172.9-173.73,173.21C200.69,594.86,124,517,123.18,423c-.84-95.85,76.72-174.81,174.45-174.75C395.59,248.26,472.12,327.32,471.86,421.35ZM264,340.31l-.57-.16c0-3.41.09-6.82,0-10.22-.15-4.36-3.92-7.68-8.53-7.68s-8.42,3.36-8.49,7.72c-.12,7.52-.05,15-.08,22.55a12.87,12.87,0,0,1-.2,3.05,5.45,5.45,0,0,1-1.27,2.59c-8.36,7.9-16.78,15.73-25.18,23.58-5.46,5.1-11,10.15-16.36,15.32-4.57,4.39-2.87,11.64,3,13.28,3.5,1,6.21-.48,8.73-2.84q34.78-32.61,69.65-65.14c4.27-4,8.55-8,12.86-12,.44.35.73.56,1,.8L365.35,392c5.58,5.07,11.12,10.2,16.77,15.2a7.76,7.76,0,0,0,10.09.59c4-3,4.15-8.68.16-12.34-7.07-6.49-14.18-12.93-21.28-19.39q-33.79-30.76-67.6-61.53c-4.05-3.68-8.07-3.59-12.09.17-3.32,3.1-6.62,6.22-9.94,9.32Zm-5,48.91c-.07.12-.12.3-.22.35-8.4,3.45-12.62,10.07-13.52,18.69-.83,8,1.16,15.12,8.2,20.23a42.09,42.09,0,0,1,7.11,6.82c3.2,3.76,2.83,4.81-1.54,7.1-1.75.92-3.36,2.14-2.81,4.43.89,3.69,5.66,7.43,10.16,4.65a11.15,11.15,0,0,1,2.69-1.45,6,6,0,0,1,2.24.3c-.17.73-.09,1.69-.54,2.15a50,50,0,0,1-3.87,3.22c-2.38,2-2.56,4.09-.56,6.44,2.33,2.73,5.84,3.07,9.33.83a26.58,26.58,0,0,0,8.68-9.46c1.8-3.16,4.26-4.07,7.68-3.69a66.59,66.59,0,0,0,9.14.5,19.22,19.22,0,0,0,5.34-1.17c8.45-2.75,17.9-3.26,24.21-10.82,1.07-1.27,2.51-1,3.53.46,1.19,1.67,2.28,3.42,3.61,5,2.77,3.18,6.09,4,9.28,2.43a33.69,33.69,0,0,0,1.05,5.49c.46,1.24,1.47,2.89,2.53,3.15s2.84-.69,3.66-1.66a22.55,22.55,0,0,0,5.25-17.07c-.37-4.21-2.29-7.84-4.62-11.2a28.74,28.74,0,0,1-5.3-17.68,15.2,15.2,0,0,0-3.16-10c-5.88-7.4-14-8.9-22.75-8.05-8.36.82-14.75,5.31-19.8,11.83-1.53,2-2.32,2.07-4.39.64-2.23-1.54-4.42-3.14-6.68-4.64-9.31-6.2-19.26-10.16-30.75-8.66,2.84-3.16,3.17-4.49,1.64-6.74-1.83-2.67-4.45-3.66-7.21-2.72-2.49.86-4.78,3.8-4.54,5.85C252.35,387.06,254.69,388.59,259,389.22ZM335.28,484c-5.63-7.58-20-4.68-22.41,5.53a32.65,32.65,0,0,0-.75,12.55c.82,5.6,3.07,10.46,8.76,12.67,5.18,2,10.19,1.79,14.37-2.58.44,3.5-.86,5.83-4.07,6.75a12.82,12.82,0,0,1-12-2.39c-.91-.71-2.71-1.33-3.49-.9a6,6,0,0,0-2.23,3.43c-.53,1.83.46,3.27,1.87,4.57,6.46,5.91,17.54,5,23.11,1.54,3.32-2.08,5.86-5,6-8.95.31-10.42.26-20.84.34-31.26a5.83,5.83,0,0,0-.19-1.08,4,4,0,0,0-3.75-3.42C338.19,480.07,336.62,481.1,335.28,484ZM297.79,363.82c.72.55,1.31,1,1.88,1.43,5.69,4.49,11.35,9,17.07,13.47a7.33,7.33,0,0,0,10.27-.87,7.1,7.1,0,0,0-1.09-10.32q-11.75-9.42-23.61-18.67a7,7,0,0,0-9.48.13q-11.25,9.48-22.35,19.14a7.11,7.11,0,0,0-.71,10.35,7.36,7.36,0,0,0,10.3.49c2-1.66,4-3.42,6-5.13ZM273.56,513.49c.81,2.75,2.31,3.71,5.42,3.46,2.45-.2,3.93-1.41,4-4.1q.18-14.21,0-28.43c0-2.65-2.1-4.1-4.8-4a4.43,4.43,0,0,0-4.47,3.58c-.78-.68-1.57-1.44-2.43-2.11-5.47-4.27-14.84-2.09-18.31,4.59-4,7.62-3.94,15.58-.42,23.38C256.2,518.09,268.42,520.13,273.56,513.49Zm124.39.2a12.54,12.54,0,0,0,.56,1.16,5.12,5.12,0,0,0,5.81,2,3.93,3.93,0,0,0,3.17-4.17q0-14,0-28a4.25,4.25,0,0,0-3.91-4.27c-2.47-.34-4,.62-5.51,3.45a28.2,28.2,0,0,0-3.95-3c-5.62-2.93-13.63-.37-16.66,5.49-3.84,7.41-3.9,15.14-.81,22.8C380.12,517.78,392.35,520.31,398,513.69Zm-188.79,3.82a42.3,42.3,0,0,0,7.13-2.46c4.32-2.24,6.12-6.07,5.63-10.93-.44-4.29-3.09-6.81-6.85-8.31-2.51-1-5.15-1.68-7.69-2.6-1.44-.53-3.54-.81-3-3,.48-2,2.41-2.07,4.13-2.11a3.11,3.11,0,0,1,1.3.14,54.85,54.85,0,0,1,6,3c2.17,1.38,3.73,1,4.61-1.34,1.31-3.55.55-5.73-3-7.61a18.38,18.38,0,0,0-13.63-1.69c-5.06,1.31-8.34,4.94-8.56,9.34-.27,5.59,1.78,8.52,7.52,10.59,2.27.82,4.6,1.46,6.87,2.28,1.66.61,3.55,1.24,3.21,3.53s-2.34,2.56-4.16,2.88a6.89,6.89,0,0,1-1.75-.07,13.1,13.1,0,0,1-7.57-3.66c-1.65-1.49-3-1.19-4.09.71-1.57,2.73-1.15,5.2,1.28,7.21C199.77,516.1,203.59,517.19,209.16,517.51ZM289.68,514a11.32,11.32,0,0,0,2.45,1.54,9.59,9.59,0,0,1,6.94,6.68c.23.7,1,1.22,1.59,1.82.46-.61,1.17-1.15,1.35-1.84a9.74,9.74,0,0,1,6.69-6.94,7.08,7.08,0,0,0,1.83-1.36c-.62-.52-1.16-1.31-1.87-1.53a9.77,9.77,0,0,1-6.83-6.54,8.11,8.11,0,0,0-1.46-2,8.93,8.93,0,0,0-1.59,2.11,9.66,9.66,0,0,1-6.51,6.56A15.42,15.42,0,0,0,289.68,514Zm85.61-.21c-.7-.53-1.09-1-1.58-1.17a10.59,10.59,0,0,1-7.92-7.72c-.14-.44-.82-1-1.2-1a1.71,1.71,0,0,0-1.13,1.12,10.36,10.36,0,0,1-7.56,7.79c-.52.15-.88.84-1.32,1.28.47.41.87,1,1.41,1.2a10.41,10.41,0,0,1,7.66,7.42c.15.53.83.9,1.27,1.35.42-.45,1.08-.84,1.23-1.37a10.37,10.37,0,0,1,7.47-7.62C374.16,515,374.59,514.39,375.29,513.83ZM236.16,503.57l-.76,0a13.67,13.67,0,0,0-1.26,2.39,9.38,9.38,0,0,1-6.29,6.46,9.25,9.25,0,0,0-2.16,1.59,8.6,8.6,0,0,0,2.19,1.55,9.26,9.26,0,0,1,6.48,6.27,3.29,3.29,0,0,0,.41,1c.34.43.77,1.05,1.19,1.07s.92-.58,1.18-1a15,15,0,0,0,.78-2,8.72,8.72,0,0,1,5.08-5.13,13.69,13.69,0,0,0,2-.83c.41-.23,1-.75,1-1a2.48,2.48,0,0,0-1-1.23,4.32,4.32,0,0,0-1.41-.6,8.82,8.82,0,0,1-6.08-5.79A29.26,29.26,0,0,0,236.16,503.57Z"
            transform="translate(0 -220.81)"
          />
          <path
            class="cls-1"
            d="M236.16,503.57a29.26,29.26,0,0,1,1.31,2.63,8.82,8.82,0,0,0,6.08,5.79,4.32,4.32,0,0,1,1.41.6,2.48,2.48,0,0,1,1,1.23c.05.27-.55.79-1,1a13.69,13.69,0,0,1-2,.83,8.72,8.72,0,0,0-5.08,5.13,15,15,0,0,1-.78,2c-.26.45-.79,1-1.18,1s-.85-.64-1.19-1.07a3.29,3.29,0,0,1-.41-1,9.26,9.26,0,0,0-6.48-6.27,8.6,8.6,0,0,1-2.19-1.55,9.25,9.25,0,0,1,2.16-1.59,9.38,9.38,0,0,0,6.29-6.46,13.67,13.67,0,0,1,1.26-2.39Z"
            transform="translate(0 -220.81)"
          />
          <path
            d="M279,398c1.65.47,3.36.61,4.71,1.39,4.05,2.35,8,4.92,11.9,7.46,1.54,1,3,2.14,4.49,3.15,2.19,1.46,3.12,1.19,4.81-.85,6.05-7.3,13.91-10.32,23.27-8.91,7.5,1.13,10.79,6.11,9.8,13.36a33.6,33.6,0,0,0-4.72-3.86c-2.15-1.22-4.43-.53-6.46.71-3.38,2.06-4.47,5.74-2.67,8.81,2.22,3.77,6.68,4.39,11.94,1.88a29,29,0,0,1-3.29,4.55,74,74,0,0,1-7.15,5.78c-3.72,2.71-7.59,5.23-11.33,7.93a20.57,20.57,0,0,1-18.07,3.47c-11.76-2.94-22.69-7.42-31.93-15.38-5.17-4.45-7.15-10.17-6.16-16.88a.72.72,0,0,1,.22-.36c1.37,1.9,2.43,4.19,4.2,5.63,2.3,1.87,4.53.26,6.58-1.53.2.86.4,1.58.54,2.32a7.69,7.69,0,0,0,3.9,5.29c3.43,2,6,1,7-2.83a33,33,0,0,0-.78-17.24c-.26-.91-.61-1.79-.89-2.7A4.84,4.84,0,0,1,279,398Zm2.66,27.24c-2.81,0-5.09,2.77-5,6a5.12,5.12,0,0,0,4.83,5.18c2.81,0,5.29-2.75,5.31-5.84A5.22,5.22,0,0,0,281.63,425.19Z"
            transform="translate(0 -220.81)"
          />
          <path
            d="M335.59,497.83c-.25,1.71-.35,3.17-.68,4.57-.76,3.16-3,4.57-6.84,4.43-3.69-.12-6-1.81-6.43-5.3a33.45,33.45,0,0,1,0-8,6.21,6.21,0,0,1,5.9-5.51c3.89-.23,6.06,1.12,7.11,4.7A43.45,43.45,0,0,1,335.59,497.83Z"
            transform="translate(0 -220.81)"
          />
          <path
            d="M274.14,498.94a65.2,65.2,0,0,1-1.47,6.68,5.24,5.24,0,0,1-4.86,3.8c-2.76.2-5.32-.39-6.62-2.91a16.08,16.08,0,0,1,0-15.49,6.19,6.19,0,0,1,11,.41C273.26,493.8,273.54,496.55,274.14,498.94Z"
            transform="translate(0 -220.81)"
          />
          <path
            d="M398.55,498.94a62.12,62.12,0,0,1-1.32,6.55,5.26,5.26,0,0,1-5.19,3.95c-2.85.1-5.4-.64-6.59-3.35a17.66,17.66,0,0,1-.07-14.58c1.12-2.59,3.38-3.63,6.24-3.52a5.47,5.47,0,0,1,5.3,3.87A61.34,61.34,0,0,1,398.55,498.94Z"
            transform="translate(0 -220.81)"
          />
        </svg>
      </a>
    </div>
    <div class="right-section">
      <div class="points-summary">
        <p>
          总积分：<span class="points-value">{{ userPoints }}</span>
        </p>
      </div>
      <div class="personal-info">
        <div class="photo">
          <img src="@/assets/imgs/xiaoga.jpg" alt="" />
        </div>
        <div class="nickname">昵称</div>
      </div>
    </div>
  </nav>
  <div class="shopping-cart">
    <div class="cart-container">
      <!-- 左侧：购物车商品列表 -->
      <div class="cart-column">
        <div class="cart-title-container">
          <h2 class="cart-title">购物车</h2>
          <div class="clear-all" @click="clearAllItems">
            <span>清空全部</span>
            <svg
              t="1746751652377"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="3301"
              width="200"
              height="200"
            >
              <path
                d="M661.333333 213.333333V170.666667c0-23.466667-19.2-42.666667-42.666666-42.666667H405.333333c-23.466667 0-42.666667 19.2-42.666666 42.666667v42.666666H170.666667v42.666667h64v597.333333c0 23.466667 19.2 42.666667 42.666666 42.666667h469.333334c23.466667 0 42.666667-19.2 42.666666-42.666667V256h64v-42.666667h-192zM405.333333 170.666667h213.333334v42.666666H405.333333V170.666667z m341.333334 682.666666H277.333333V256h469.333334v597.333333z"
                fill="#d81e06"
                p-id="3302"
              ></path>
              <path
                d="M618.666667 341.333333h42.666666v426.666667h-42.666666zM362.666667 341.333333h42.666666v426.666667h-42.666666zM490.666667 341.333333h42.666666v426.666667h-42.666666z"
                fill="#d81e06"
                p-id="3303"
              ></path>
            </svg>
          </div>
        </div>
        <div class="cart-items">
          <div v-for="item in cartItems" :key="item.id" class="cart-item">
            <div class="item-image" @click="openItemModal(item)">
              <img :src="item.image" alt="" />
            </div>
            <div class="item-text">
              <h3 class="item-name">{{ item.name }}</h3>
              <p class="item-desc">款式：{{ item.description }}</p>
              <p class="item-points">积分：{{ item.points }}</p>
            </div>
            <div class="quantity-selector">
              <button @click="decrementQuantity(item)">
                <svg
                  t="1746705958028"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="8990"
                  width="200"
                  height="200"
                >
                  <path
                    d="M512 909.061224c-218.906122 0-397.061224-178.155102-397.061224-397.061224s178.155102-397.061224 397.061224-397.061224 397.061224 178.155102 397.061224 397.061224-178.155102 397.061224-397.061224 397.061224z"
                    fill="#f4ea2a"
                    p-id="8991"
                  ></path>
                  <path
                    d="M660.897959 531.853061h-297.795918c-10.971429 0-19.853061-8.881633-19.853061-19.853061s8.881633-19.853061 19.853061-19.853061h297.795918c10.971429 0 19.853061 8.881633 19.853061 19.853061s-8.881633 19.853061-19.853061 19.853061z"
                    fill="#2c2c2c"
                    p-id="8992"
                  ></path>
                </svg>
              </button>
              <span class="quantity-value">{{ item.quantity }}</span>
              <button @click="incrementQuantity(item)">
                <svg
                  t="1746706423202"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="16504"
                  width="200"
                  height="200"
                >
                  <path
                    d="M512 909.061224c-218.906122 0-397.061224-178.155102-397.061224-397.061224s178.155102-397.061224 397.061224-397.061224 397.061224 178.155102 397.061224 397.061224-178.155102 397.061224-397.061224 397.061224z"
                    fill="#f4ea2a"
                    p-id="16505"
                  ></path>
                  <path
                    d="M613.09191026 525.47892123h-202.18382053c-7.4488779 0-13.47892123-6.03004402-13.47892121-13.47892123s6.03004402-13.47892123 13.47892121-13.47892123h202.18382053c7.4488779 0 13.47892123 6.03004402 13.47892122 13.47892123s-6.03004402 13.47892123-13.47892122 13.47892123z"
                    fill="#2c2c2c"
                    p-id="16506"
                  ></path>
                  <path
                    d="M512 626.57083148c-7.4488779 0-13.47892123-6.03004402-13.47892123-13.47892121v-202.18382053c0-7.4488779 6.03004402-13.47892123 13.47892123-13.47892122s13.47892123 6.03004402 13.47892123 13.47892121v202.18382053c0 7.4488779-6.03004402 13.47892123-13.47892123 13.47892122z"
                    fill="#2c2c2c"
                    p-id="16507"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- 右侧：个人信息 -->
      <div class="right-info">
        <div class="info-section">
          <div class="user-info">
            <h2 class="info-title">个人信息</h2>
            <p class="info-field">
              寄送地址：<span>{{ shippingInfo.address }}</span>
            </p>
            <p class="info-field">
              联系电话：<span>{{ shippingInfo.phone }}</span>
            </p>
            <p class="info-field">
              收件人姓名：<span>{{ shippingInfo.name }}</span>
            </p>
          </div>
        </div>
        <!-- 结算区域 -->
        <div class="checkout">
          <p class="total-points">
            合计：<span class="total-value">{{ cartTotal }}</span> 积分
          </p>
          <div class="action-buttons">
            <button @click="cancelOrder" class="cancel">取消订单</button>
            <button @click="confirmOrder" class="confirm">确认兑换</button>
          </div>
        </div>
      </div>
    </div>
    <!-- 弹窗模态框 -->
    <div v-if="selectedItem" class="modal-overlay" @click="closeItemModal">
      <div class="modal-content" @click.stop>
        <div class="modal-left">
          <img :src="selectedItem.image" alt="" class="modal-image" />
        </div>
        <div class="modal-right">
          <h3 class="modal-title">{{ selectedItem.name }}</h3>

          <div class="style-options">
            <label
              v-for="(style, index) in selectedItem.styles"
              :key="index"
              class="style-option"
            >
              <input
                type="radio"
                :value="style.name"
                v-model="selectedStyle"
                name="style"
                @change="updateImage(style.image)"
              />
              {{ style.name }}
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import { gifts } from "../assets/dataset/gifts_list.js";
import Footer from "@/components/Footer.vue";

export default {
  name: "ShoppingCart",
  components: {
    Footer,
  },
  data() {
    return {
      cartItems: gifts.map((item) => ({
        ...item,
        quantity: 0,
        styles: item.styles,
      })),
      selectedItem: null,
      selectedStyle: "",
      userPoints: 1200,
      shippingInfo: {
        address: "xx省xx市xx区xxxx",
        phone: "12345678910",
        name: "张某",
      },
    };
  },
  computed: {
    cartTotal() {
      return this.cartItems.reduce(
        (sum, item) => sum + item.points * item.quantity,
        0
      );
    },
    totalPoints() {
      return this.cartItems.reduce(
        (total, item) => total + item.points * item.quantity,
        0
      );
    },
  },
  methods: {
    incrementQuantity(item) {
      const index = this.cartItems.findIndex(
        (cartItem) => cartItem.id === item.id
      );
      if (index !== -1) {
        this.cartItems[index].quantity++;
        this.cartItems = [...this.cartItems];
      }
    },
    decrementQuantity(item) {
      const index = this.cartItems.findIndex(
        (cartItem) => cartItem.id === item.id
      );
      if (index !== -1 && this.cartItems[index].quantity > 0) {
        this.cartItems[index].quantity--;
        this.cartItems = [...this.cartItems];
      }
    },
    openItemModal(item) {
      this.selectedItem = item;
    },
    closeItemModal() {
      if (this.selectedItem) {
        this.selectedItem.description = this.selectedStyle;
        const index = this.cartItems.findIndex(
          (item) => item.id === this.selectedItem.id
        );
        if (index !== -1) {
          this.cartItems[index].image = this.selectedItem.image;
        }
      }
      this.selectedItem = null;
      this.selectedStyle = "";
    },
    updateImage(imagePath) {
      if (imagePath) {
        this.selectedItem.image = new URL(imagePath, import.meta.url).href;
        const index = this.cartItems.findIndex(
          (item) => item.id === this.selectedItem.id
        );
        if (index !== -1) {
          this.cartItems[index].image = new URL(
            imagePath,
            import.meta.url
          ).href;
        }
      }
    },
    clearAllItems() {
      this.cartItems = this.cartItems.map((item) => ({
        ...item,
        quantity: 0,
      }));
    },
    confirmExchange() {
      alert(`兑换成功，合计积分：${this.totalPoints}`);
    },

    cancelOrder() {
      const resetGifts = gifts.map((item) => ({
        ...item,
        quantity: 0,
      }));
      this.cartItems = resetGifts;
      alert("订单已取消");
    },
    confirmOrder() {
      if (this.cartTotal > this.userPoints) {
        alert("积分不足，无法兑换");
        return;
      }

      const remainingPoints = this.userPoints - this.cartTotal;
      alert(`兑换成功！剩余积分: ${remainingPoints}`);

      this.userPoints = remainingPoints;
      const resetGifts = gifts.map((item) => ({
        ...item,
        quantity: 0,
      }));
      this.cartItems = resetGifts;
    },
  },
};
</script>

<style scoped>
.shopping-cart {
  max-width: 80%;
  margin: 0 auto;
  padding: 2rem;
}
.main-navigation {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 20px;
}

.main-navigation__logo svg {
  aspect-ratio: 1 / 1;
  width: 5rem;
  fill: var(--clr-primary);
}

.right-section {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-left: auto;
}
.points-summary {
  font-size: var(--fs-300);
  text-align: right;
}

.points-value {
  color: var(--clr-primary);
  font-weight: bold;
  align-items: center;
}
.personal-info {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
}

.photo {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--clr-background-muted);
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.nickname {
  font-size: var(--fs-300);
  font-weight: 500;
}

.cart-container {
  display: flex;
  gap: 3rem;
  margin-bottom: 3rem;
}
.cart-title-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.cart-title {
  font-size: var(--fs-600);
  font-family: var(--ff-accent);
  margin-bottom: 2rem;
  padding: 1.5rem;
}
.clear-all {
  display: flex;
  align-items: center;
  padding-right: 30px;
  cursor: pointer;
  color: #d81e06;
  font-size: var(--fs-200);
  text-align: 1.5rem;
}

.clear-all .icon {
  width: 1.5rem;
  height: 1.5rem;
}
.cart-column {
  flex: 2;
  background-color: var(--clr-footer-text);
  border-radius: 12px;
}

.cart-items {
  display: grid;
  gap: 1.5rem;
}

.cart-item {
  padding: 1.5rem;
  border-radius: 12px;
  display: flex;
}
.item-image {
  width: 150px;
  height: 150px;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;
}
.item-image:hover {
  transform: scale(1.1);
}
.item-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.item-text {
  padding-left: 1.5rem;
  flex: 1;
}
.item-name {
  font-size: var(--fs-500);
  font-weight: 600;
  color: var(--clr-text);
  margin-bottom: 0.5rem;
}

/* 模态框 */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  display: flex;
  gap: 2rem;
  background: var(--clr-background);
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  position: relative;
  max-width: 40vw;
  max-height: 80vh;
  width: 90%;
}

.modal-left {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-image {
  max-height: 70vh;
  max-width: 100%;
  border-radius: 12px;
  margin-bottom: 1rem;
}
.modal-image img {
  object-fit: contain;
  border-radius: 12px;
}

.modal-right {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.modal-title {
  font-size: var(--fs-500);
  font-weight: bold;
  margin-bottom: 1rem;
  color: var(--clr-text-muted);
}

.style-options {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.style-option {
  font-size: var(--fs-200);
  cursor: pointer;
  color: var(--clr-text-muted);
}

.style-option:hover {
  color: var(--clr-text);
}
.quantity-selector {
  display: inline-flex;
  align-items: center;
  gap: 0;
  border-radius: 20px;
  padding: 5px;
}
.quantity-selector button {
  width: 40px;
  height: 40px;
  border: none;
  background-color: #ccc;
  cursor: pointer;
}
.quantity-selector button:first-child {
  border-top-left-radius: 50%;
  border-bottom-left-radius: 50%;
}

.quantity-selector button:last-child {
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
}
.quantity-selector button svg {
  width: 100%;
  height: 100%;
}
.quantity-value {
  height: 40px;
  padding: 0 10px;
  background-color: #ccc;
  line-height: 40px;
}

.item-desc,
.item-points {
  font-size: var(--fs-300);
  color: var(--clr-text);
  margin: 0.25rem 0;
}

.right-info {
  background-color: var(--clr-footer-text);
  padding: 2rem;
  border-radius: 12px;
  position: sticky;
  top: calc(var(--nav-height));
  height: fit-content;
}

.info-title {
  font-size: var(--fs-400);
  color: var(--clr-text);
  margin-bottom: 1.5rem;
  font-family: var(--ff-accent);
}

.info-field {
  font-size: var(--fs-200);
  margin: 1rem 0;
  color: var(--clr-text);
}

.info-field span {
  color: var(--clr-text-muted);
}

.checkout {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 0;
}

.total-points {
  font-size: var(--fs-300);
}

.total-value {
  color: var(--clr-primary);
  font-weight: bold;
  font-size: var(--fs-400);
}

.action-buttons {
  display: flex;
  justify-content: center;
}

.cancel,
.confirm {
  padding: 0.5rem 1.5rem;
  border: none;
  font-weight: bold;
  transition: background-color 0.2s;
}

.cancel {
  background-color: var(--clr-background-muted);
  color: var(--clr-text-muted);
  border-radius: 50px 0 0 50px;
}

.confirm {
  background-color: var(--clr-primary);
  color: var(--clr-footer-text);
  border-radius: 0 50px 50px 0;
}

.confirm:hover {
  background-color: var(--clr-accent);
}

@media (max-width: 768px) {
  .cart-container {
    flex-direction: column;
    gap: 2rem;
  }

  .cart-column {
    flex: none;
    width: 100%;
  }

  .right-info {
    position: static;
    margin-top: 2rem;
  }
  .modal-content {
    flex-direction: column;
    max-width: 90%;
    max-height: 90vh;
  }

  .modal-left,
  .modal-right {
    flex: none;
    width: 100%;
  }

  .modal-image {
    max-height: 50vh;
  }
}
</style>
