<template>
  <div class="NavTop">
    <div class="NavCon">
      <div class="logo">
        <router-link to="/home">
          <img src="/static/image/logo.png" />
        </router-link>
      </div>
      <ul>
        <li v-for="(item, index) in menuList" :key="index">
          <div>
            <router-link
              :to="item.link"
              :class="{ navActive: active.indexOf(item.active) != -1 }"
              >{{ item.title }}</router-link
            >
          </div>
        </li>
      </ul>
      <div class="logInRegister">
        <div>
          <a href="https://twitter.com/InfinityLabs_" target="_blank"
            ><img src="/static/image/topTwitter.png" alt=""
          /></a>
        </div>
        <div>
          <a href="javascript:;"
            ><img src="/static/image/topInstagram.png" alt=""
          /></a>
        </div>
        <div>
          <a href="https://infinitylabs.medium.com/" target="_blank"
            ><img src="/static/image/topN.png" alt=""
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "navTop",
  data() {
    return {
      active: "",
      transparentPage: ["home"],
      menuList: [
        {
          title: "Home",
          active: "home",
          link: "/",
        },
        {
          title: "About us",
          active: "aboutUs",
          link: "/aboutUs",
        },
        {
          title: "Portfolio",
          active: "portfolio",
          link: "/portfolio",
        },
      ],
      aboutUsActive: "",
    };
  },
  methods: {
    //切换语言
    // ed() {
    //   this.$i18n.locale == "en-US"
    //     ? (this.$i18n.locale = "zh-CN")
    //     : (this.$i18n.locale = "en-US");
    // },
  },
  mounted() {
    this.active = this.$route.meta.active;
    this.aboutUsActive = this.$route.meta.active;
  },
  watch: {
    // 路由监听
    $route: function (to, from) {
      this.active = this.$route.meta.active;
      this.aboutUsActive = this.$route.meta.active;
      // console.log(this.$route.meta.active);
      // console.log(this.aboutUsActive.indexOf(this.aboutUsNavData[1].active));
    },
  },
};
</script>
<style  scoped>
.logo {
  display: flex;
  align-items: flex-end;
  margin-bottom: -15px;
}
.coloredBg {
  background: rgba(244, 249, 252, 1);
}
.transparentBg {
  background: transparent;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 3;
}
.NavTop {
  position: absolute;
  height: 75px;
  width: 100%;
  z-index: 1000;
}
.NavCon {
  width: 1200px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: flex-end;
}
.NavCon > ul {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-right: 60px;
}
.NavCon > ul > li {
  margin-right: 30px;
  display: flex;
  align-items: flex-end;
  padding-bottom: 5px;
}
.NavCon > ul > li > div > a {
  font-family: "Montserrat";
  display: inline-block;
  padding: 0 20px;
  color: #000000;
  line-height: 20px;
  opacity: 0.5;
}
.NavCon > ul > li {
  position: relative;
}
.NavCon > ul > li > div > a:hover {
  cursor: pointer;
}
.NavCon > ul > li > div > .navActive {
  font-weight: bold;
  opacity: 1;
}
.logInRegister {
  width: 100px;
  display: flex;
  align-items: flex-end;
  padding-bottom: 6px;
}
.logInRegister div {
  margin-right: 20px;
}
.logInRegister img {
  cursor: pointer;
  display: block;
  flex-grow: 0;
  /* flex-shrink: 1; */
}
</style>
