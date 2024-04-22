<template>
  <div>
    <div class="hello">
      <canvas id="render-canvas"  touch-action="none"></canvas>
      <div class="text  mo:w-full flex mo:px-[30px] justify-center  mx-auto w-container md:w-full md:px-[30px]">
        <div class="home-title">
          <h2>
            Accelerating <span >Cross-field</span><br />
            Collaboration
          </h2>
          <p>
            Integrating traditional capital and infrastructure resources into
            the field of blockchain
          </p>
        </div>
      </div>
    </div>
    <div id="contactUs" class="contactUs   mo:w-full flex mo:px-[30px] justify-center  mx-auto w-container md:w-full md:px-[30px]">
      <div class="formContent">
        <h3>Contact Us</h3>
        If you have inquiries or investment opportunities for our consideration please fill out the form to 
        <a ref="iscontactUs" href="javascript:;" @click="onOpenTo"> contact us</a>.
      </div>
    </div>
  </div>
</template>

<script>
import * as BABYLON from "babylonjs";
import "babylonjs-loaders";
import "@/assets/css/comm.css";
import "../assets/css/tailwind.css";
export default {
  name: "home",
  data() {
    return {
      searchForm: {
        name: "",
        address: "",
        inquiries_classify: "",
        detail: "",
      },
      formRules: {
        address: [
          {
            validator: (rule, value, callback) => {
              if (value != "") {
                this.$formValidation.checkEmail(rule, value, callback, false);
              } else {
                // callback(new Error("邮箱不能为空"));
              }
              callback();
            },
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    onOpenTo(){
      window.open('https://docs.google.com/forms/d/e/1FAIpQLSf7LieXazV0TOhZHVrZmF52pWQiIZe3iSc5R1zFzGC3IgTPGQ/viewform?usp=sf_link',"_blank")

    },
    getPoolList() {
      let temp = true;
      for (const key in this.searchForm) {
        this.searchForm[key] = this.searchForm[key].replace(/^\s+|\s+$/g, "");
        if (!this.searchForm[key]) {
          temp = false;
          break;
        }
      }
      if (temp) {
        let content = ` <p style='font-size: 16px;'><b style='font-size: 14px;'>NAME：</b>${this.searchForm.name}</p>
          <p style='font-size: 16px;'><b style='font-size: 14px;'>EMAIL ADDRESS：</b>${this.searchForm.address}</p>
          <p style='font-size: 16px;'><b style='font-size: 14px;'>INQUIRIES CLASSIFY：</b>${this.searchForm.inquiries_classify}</p>
          <p style='font-size: 16px;'><b style='font-size: 14px;'>DETAIL：</b>${this.searchForm.detail}</p>`;
        let title = "infinity labs Official website mail";
        this.$api
          .getOrderCount({
            content,
            title,
          })
          .then((res) => {
            if (res.code == 200) {
              this.$message.success("gmail sent successfully");
              this.$refs["searchForm"].resetFields();
              console.log(this.searchForm);
            } else {
              this.$message.success("Mail sending failed");
            }
          });
      } else {
        this.$message.error("Incomplete information!!!");
      }
    },
    //旋转魔方
    canvasActive() {
      var canvas = document.getElementById("render-canvas");
      var engine = new BABYLON.Engine(canvas);
      var scene = new BABYLON.Scene(engine);
      scene.clearColor = new BABYLON.Color3.FromHexString("#D8E8FF");
      BABYLON.SceneLoader.ImportMesh(null, "static/", "scene.glb", scene);

      var envTexture = new BABYLON.CubeTexture(
        "static/environmentSpecular.env",
        scene
      );
      scene.createDefaultSkybox(envTexture, true, 100, 1, true);

      scene.createDefaultCamera(true);

      const camera = scene.activeCamera;
      camera.setPosition(new BABYLON.Vector3(0, 2, 4.5));
      camera.attachControl(canvas, true);

      ////????

      camera.useFramingBehavior = true;
      var framingBehavior = camera.getBehaviorByName("Framing");
      framingBehavior.framingTime = 0;
      framingBehavior.elevationReturnTime = -1;

      if (scene.meshes.length) {
        camera.lowerRadiusLimit = 10;
        var worldExtends = scene.getWorldExtends(function (mesh) {
          return mesh.isVisible && mesh.isEnabled();
        });
        framingBehavior.zoomOnBoundingInfo(worldExtends.min, worldExtends.max);
      }

      ////
      camera.useAutoRotationBehavior = true;
      camera.pinchPrecision = 200 / camera.radius;
      camera.upperRadiusLimit = 2 * camera.radius;
      camera.lowerRadiusLimit = 2 * camera.radius;

      camera.targetScreenOffset = new BABYLON.Vector3(3.5, 0, 0);

      const nodeSkyBox = scene.getNodeByID("hdrSkyBox");
      nodeSkyBox.infiniteDistance = true;

      const materialSkyBox = scene.getMaterialByID("skyBox");
      materialSkyBox.alpha = 0;

      // scene.materials[2].environmentBRDFTexture.invertZ=true;

      scene.textures[2].level = 0.2; //lower skyboxy texture level to make it less brighter
      scene.textures[2].alpha = 0;
      scene.textures[0].level = 1.6; //increase mesh texture level to make it  brighter
      scene.textures[0].alpha = 0;

      //animatioin rotation
      var t = 0;
      var renderLoop = function () {
        scene.render();
        t -= 0.01;
        // animation code goes here
        //  box.rotation.y = t*2;
      };
      engine.runRenderLoop(renderLoop);

      //render
      var renderLoop = function () {
        scene.render();
      };
      engine.runRenderLoop(renderLoop);
    },
    //首页锚点
    toContactUs() {
      let { toWhere } = this.$route.params;
      if (toWhere) document.getElementById(toWhere).scrollIntoView();
    },
  },
  mounted() {
    this.canvasActive();
    this.toContactUs();
  },
};
</script>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

div {
  font-size: 16px;
}
.contactUs .formContent .searchBg /deep/ .el-form-item__label {
  font-family: "raleway02";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  color: #000;
}
.contactUs .formContent .searchBg /deep/ .el-select {
  display: block;
}
.contactUs .formContent .searchBg /deep/ .el-input__suffix {
  height: 70px;
}
.contactUs .formContent .searchBg /deep/ .el-input__inner {
  padding: 10px 5px;
  font-family: "Montserrat";
  font-size: 14px;
  height: 42px;
  line-height: 40px;
  color: #000000;
  border: 1px solid #dddddd;
}
.contactUs
  .formContent
  .searchBg
  /deep/
  .el-input
  input::-webkit-input-placeholder {
  font-family: "MontserratHairline";
}
.contactUs
  .formContent
  .searchBg
  /deep/
  .el-input
  input::-moz-input-placeholder {
  font-family: "MontserratHairline";
}
.contactUs
  .formContent
  .searchBg
  /deep/
  .el-input
  input::-ms-input-placeholder {
  font-family: "MontserratHairline";
}

.contactUs .formContent .searchBg /deep/ .el-textarea__inner {
  padding: 0 5px;
  font-family: "Montserrat";
  font-size: 16px;
  line-height: 40px;
  resize: none;
  height: 189px !important;
}
.contactUs
  .formContent
  .searchBg
  /deep/
  .el-textarea__inner::-webkit-input-placeholder {
  font-family: "MontserratHairline";
}
.contactUs
  .formContent
  .searchBg
  /deep/
  .el-textarea__inner::-moz-input-placeholder {
  font-family: "MontserratHairline";
}
.contactUs
  .formContent
  .searchBg
  /deep/
  .el-textarea__inner::-ms-input-placeholder {
  font-family: "MontserratHairline";
}
</style>