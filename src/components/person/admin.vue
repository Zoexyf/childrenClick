<template>
  <div class="mine">
    <!-- mine-head部分 -->
    <div class="mine-head">
      <div class="mine-avatar" @click="goLogin">
        <img src="../../../static/imgs/未登录头像.png" alt />
      </div>
      <span>点击登录</span>
    </div>
    <!-- buy-option部分 -->
    <div class="buy-option">
      <div @click="goOrder">
        <p>
          <span class="iconfont">&#xe603;</span>
        </p>
        <h4>我的订单</h4>
      </div>
      <div>
        <p>
          <span class="iconfont">&#xe603;</span>
        </p>
        <h4>我的订单</h4>
      </div>
      <div @click="toShoppingCart()">
        <p>
          <span class="iconfont">&#xe60c;</span>
        </p>
        <h4>我的购物车</h4>
      </div>
    </div>
    <!-- setting-lists -->
    <div class="setting-lists">
      <ul>
        <li @click="toProblem">
          <span class="iconfont">&#xe7a4; 常见问题</span>
          <span>></span>
        </li>
        <li @click="toSetting">
          <span class="iconfont">&#xe655; 设置</span>
          <span>></span>
        </li>
      </ul>
    </div>
    <footerGuide></footerGuide>
  </div>
</template>

<script>
import footerGuide from "../../components/footerGuide";
export default {
  data() {
    return {
    };
  },
  components: {
    footerGuide
  },
  methods: {
    toShoppingCart() {
      this.$router.push({
        path: "/admin/shoppingCart"
      });
    },
    toSetting() {
      this.$router.push({
        path: "/admin/setting"
      });
    },
    toProblem() {
      this.$router.push({
        path: "/admin/problem"
      });
    },
    goLogin() {
      this.$router.push({
        path: "/login"
      });
    },
    goOrder() {
      this.$router.push({
        path: "/order"
      });
    }
  }
};
</script>

<style lang="css" scoped>
.mine-head {
  margin-top: 0.966184rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.mine-head .mine-avatar {
  width: 1.932367rem;
  height: 1.932367rem;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 0.724638rem;
}
.mine-head .mine-avatar img {
  width: 1.932367rem;
  height: 1.932367rem;
}
.mine-head span {
  font-size: 0.483092rem;
}
.buy-option {
  width: 86%;
  height: 2.415459rem;
  background-color: #fefefe;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.5);
  border-radius: 0.144928rem;
  margin: 0.483092rem auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.buy-option div {
  width: 1.449275rem;
  height: 2.173913rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.buy-option div p {
  width: 1.449275rem;
  height: 1.449275rem;
  border-radius: 50%;
  background-color: #13b5b1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.buy-option div span {
  font-size: 0.966184rem;
  color: #fff;
}
.buy-option div h4 {
  font-size: 0.289855rem;
}
.setting-lists {
  width: 86%;
  margin: 0.241546rem auto;
}
.setting-lists li {
  height: 1.207729rem;
  line-height: 1.207729rem;
  display: flex;
  justify-content: space-between;
}
.setting-lists li span {
  font-size: 0.386473rem;
}
</style>
