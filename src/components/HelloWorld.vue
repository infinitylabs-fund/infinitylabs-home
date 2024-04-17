<template>
  <div class="hello">
    <canvas id="render-canvas" touch-action="none"></canvas>
  </div>
</template>

<script>
import * as BABYLON from "babylonjs";
import "babylonjs-loaders";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  mounted() {
    var canvas = document.getElementById("render-canvas");
    var engine = new BABYLON.Engine(canvas);
    var scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color3.FromHexString("#D8E8FF");
    BABYLON.SceneLoader.ImportMesh(
      null,
      "static/",
      "scene.glb",
      scene,
      function (newMeshes) {}
    );

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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
canvas {
  width: 100%;
  height: 100%;
  font-size: 0;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1000;
}
</style>
