<template>
  <div>
    <div class="hello">
      <canvas id="render-canvas" touch-action="none"></canvas>
      <div class="text">
        <div class="home-title">
          <h2>
            Accelerating <span>Cross-field</span><br />
            Collaboration
          </h2>
          <p>
            Integrating traditional capital and infrastructure resources into
            the field of blockchain
          </p>
        </div>
      </div>
    </div>
    <div id="contactUs" class="contactUs">
      <div class="formContent">
        <h3>Contact Us</h3>
        <p>
          If you have inquiries or investment opportunities for our
          consideration please contact us: <span>infinitylabs.o@gmail.com</span>
          Alternatively fill the form below and leave message.
        </p>
        <el-form
          size="small"
          :model="searchForm"
          ref="searchForm"
          class="searchBg"
          :rules="formRules"
          :hide-required-asterisk="true"
        >
          <el-form-item label="NAME" prop="name">
            <el-input
              v-model="searchForm.name"
              maxlength="20"
              placeholder="Enter your name"
            ></el-input>
          </el-form-item>
          <el-form-item label="EMAIL ADDRESS" prop="address">
            <el-input
              v-model="searchForm.address"
              maxlength="40"
              placeholder="Enter your email"
            ></el-input>
          </el-form-item>
          <el-form-item label="INQUIRIES CLASSIFY" prop="inquiries_classify">
            <el-select
              v-model="searchForm.inquiries_classify"
              placeholder="Select your inquiries classfify"
            >
              <el-option label="Investment" value="Investment"></el-option>
              <el-option
                label="Incubation services"
                value="Incubation services"
              ></el-option>
              <el-option
                label="Business cooperation"
                value="Business cooperation"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="DETAIL" prop="detail">
            <el-input
              class="textareas"
              type="textarea"
              v-model="searchForm.detail"
              placeholder="Hi there, I’m reasching out because I think we can collaborate..."
            ></el-input>
          </el-form-item>
          <el-form-item>
            <div class="submit" type="primary" @click="getPoolList">
              Send Message
            </div>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import * as BABYLON from "babylonjs";
import "babylonjs-loaders";
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