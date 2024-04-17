<template>
  <div class="bottom">
    <el-row class="footer">
      <div class="btmLogo">
        <div>
          <img src="/static/image/BottomLogo.png" alt />
        </div>
        <div class="connect">
          <div>CONNECT</div>
          <div>Join the conversation</div>
          <ul>
            <li>
              <a href="https://twitter.com/InfinityLabs_" target="_blank"
                ><img src="/static/image/Twitter.png" alt
              /></a>
            </li>
            <li>
              <a href="javascript:;"
                ><img src="/static/image/instagram.png" alt
              /></a>
            </li>
            <li>
              <a href="https://infinitylabs.medium.com/" target="_blank"
                ><img src="/static/image/M.png" alt
              /></a>
            </li>
            <li>
              <div class="Wechat">
                <img src="/static/image/Wechat.png" alt />
                <div class="WechatCode">
                  <img src="/static/image/wechatImg.jpg" alt="" />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="btmList">
        <ul>
          <li>
            <router-link to="/home">Home</router-link>
          </li>
          <li><router-link to="/aboutUs">About us</router-link></li>
          <li><router-link to="/portfolio">Portfolio</router-link></li>
          <li>
            <a ref="iscontactUs" href="javascript:;" @click="iscontactUs"
              >Contact us</a
            >
          </li>
        </ul>
        <div class="rights">© 2021. All rights reserved.</div>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "navBottom",
  methods: {
    iscontactUs() {
      let path = this.$route.meta.active;
      if (path != "home") {
        this.$router.push({ name: "home", params: { toWhere: "contactUs" } });
      } else {
        document.getElementById("contactUs").scrollIntoView();
      }
    },
  },
};
</script>
<style scoped>
.bottom {
  background-color: #212121;
  background-size: 100% 100%;
  position: relative;
  overflow: hidden;
}
.bottom::before {
  content: url("/static/image/buttomBg.png");
  position: absolute;
  right: 0;
  /* content: "";
  background: url("/static/image/buttomBg.png");
  background-size: 36.4583vw;
  position: absolute;
  width: 36.4583vw;
  right: 0;
  top: 0; */
}
.footer {
  width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 69px 0 50px 0;
}
.btmLogo {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
.btmLogo:nth-child(1) {
  flex-grow: 1;
}
.connect {
  width: 400px;
}
.connect > div:nth-of-type(1) {
  font-family: "raleway02";
  font-weight: 500;
  font-size: 26px;
  line-height: 32px;
  /* identical to box height */
  color: #ffffff;
}
.connect > div:nth-of-type(2) {
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  opacity: 0.5;
}
.connect ul {
  padding: 21px 0 33px 0;
  display: flex;
}
.connect ul li {
  margin-right: 43px;
  display: flex;
  align-items: flex-end;
}
.connect ul li img {
  display: block;
  cursor: pointer;
}
.connect ul li:nth-of-type(3) img {
  margin-bottom: -2px;
}
.btmList {
  padding-top: 40px;
}
.btmList ul {
  display: flex;
}
.btmList ul li {
  margin-right: 25px;
}
.btmList ul li a {
  font-family: "MontserratHairline";
  font-weight: normal;
  line-height: 20px;
  color: #ffffff;
}
.rights {
  margin-top: 8px;
  font-family: "raleway01";
  line-height: 150%;
  color: #ffffff;
  opacity: 0.5;
}
.Wechat {
  display: inline-block;
  position: relative;
}
.Wechat:hover .WechatCode {
  height: 120px;
}
.WechatCode {
  padding-top: 10px;
  position: absolute;
  left: -35px;
  height: 0px;
  overflow: hidden;
  transition: all 0.3s;
}
.WechatCode img {
  width: 120px;
  height: 120px;
}
</style>
