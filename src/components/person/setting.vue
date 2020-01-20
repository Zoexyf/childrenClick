<template>
  <div class="setting">
    <!-- head -->
    <div class="setting-head">
      <span @click="$router.back()">&lt;</span>
      <span>设置</span>
      <span></span>
    </div>
    <!-- content -->
    <div class="setting-content">
      <!-- avatar -->
      <div class="setting-information">
        <img class="setting-avatar" src="../../static/imgs/未登录头像.png" alt />
        <span>{{username}}</span>
      </div>
      <!-- settinglists -->
      <div class="setting-lists">
        <ul>
          <li>
            <span>个人信息</span>
            <span>></span>
          </li>
          <li @click="aboutUs">
            <span>关于我们</span>
            <span>></span>
          </li>
        </ul>
        <span class="abort">退出登录</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data (){
    return {
      username: "筑梦1号粉"
    }
  },
  methods:{
    aboutUs(){
      this.$router.push({
        path: '/admin/setting/about'
      })
    },
  }
};
</script>

<style lang="scss">
.setting-head {
  width: 100%;
  height: 1.207729rem;
  background-color: #e5e5e5;
  padding: 0 0.386473rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
}
.setting-content {
  width: 100%;
  position: absolute;
  top: 1.207729rem;
}
.setting-head span {
  font-size: 0.483092rem;
}
.setting-information {
  width: 100%;
  height: 2.173913rem;
  border-bottom: 2px solid #ccc;
  display: flex;
  align-items: center;
}
.setting-avatar {
  width: 1.570048rem;
  height: 1.570048rem;
  margin: 0 0.724638rem;
}
.setting-information span {
  font-size: 0.434783rem;
}
.setting-lists {
  text-align: center;
}
.setting-lists ul {
  margin: 0.724638rem auto;
  width: 85%;
}
.setting-lists li {
  width: 100%;
  height: 0.966184rem;
  margin-bottom: 0.144928rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.abort{
  display: inline-block;
  width: 85%;
  height: .966184rem;
  color: red;
  font-size: .531401rem;
  text-align: center;
  line-height: .966184rem;
  background-color: #f0f0f0;
}
.setting-lists li span {
  font-size: 0.57971rem;
}
</style>