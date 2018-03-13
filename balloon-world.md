<html>
  <head>
    <script src="https://aframe.io/releases/0.7.0/aframe.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="//unpkg.com/aframe-leap-hands/dist/aframe-leap-hands.min.js"></script>
    <script src="//cdn.rawgit.com/donmccurdy/aframe-extras/v3.2.0/dist/aframe-extras.min.js"></script>
    <script src="https://unpkg.com/aframe-border-component@0.1.3/dist/aframe-border-component.min.js"></script>
    <script src="https://rawgit.com/feiss/aframe-environment-component/master/dist/aframe-environment-component.min.js"></script> 

    <script src="https://rawgit.com/protyze/aframe-curve-component/master/dist/aframe-curve-component.min.js"></script>
    <script src="https://rawgit.com/protyze/aframe-alongpath-component/master/dist/aframe-alongpath-component.min.js"></script>
    <script src="https://rawgit.com/mayognaise/aframe-gif-shader/master/dist/aframe-gif-shader.min.js"></script>
    <script src="js/script.js"></script>
    <!-- <script src="https://rawgit.com/allanweir/aframe-touch-rotation-controls/master/dist/aframe-touch-rotation-controls.min.js"></script> -->  
  </head>
  <body>
    <a-scene light="defaultLightsEnabled: false" inspector="url: https://aframe.io/releases/0.3.0/aframe-inspector.min.js">
      <a-assets>
<!--         <a-asset-item id="ground" src="assets/ground.jpg"></a-asset-item>

        <a-asset-item id="balloon" src="assets/balloon.obj"></a-asset-item>
        <a-asset-item id="balloon-material" src="assets/balloon.mtl"></a-asset-item>

        <a-asset-item id="stone" src="assets/stone.obj"></a-asset-item>
        <a-asset-item id="stone-material" src="assets/stone.mtl"></a-asset-item>

        <a-asset-item id="boom" src="assets/boom.obj"></a-asset-item>
        <a-asset-item id="boom-material" src="assets/boom.mtl"></a-asset-item>

        <a-asset-item id="olifant" src="assets/olifant.obj"></a-asset-item>
        <a-asset-item id="olifant-material" src="assets/olifant.mtl"></a-asset-item>

        <a-asset-item id="vis" src="assets/vis.obj"></a-asset-item> -->

        <a-asset-item id="ballonEiland" src="assets/models/ballonEiland.dae"></a-asset-item> 

        <a-asset-item id="ballonBlauw" src="assets/models/ballonBlauw.dae"></a-asset-item> 
<!--         <a-asset-item id="ballonRood" src="assets/models/ballonRood.dae"></a-asset-item>  -->
        <a-asset-item id="ballonOranje" src="assets/models/ballonOranje.dae"></a-asset-item> 
        <a-asset-item id="ballonGroen" src="assets/models/ballonGroen.dae"></a-asset-item> 
        <a-asset-item id="ballonGeel" src="assets/models/ballonGeel.dae"></a-asset-item> 

        <a-asset-item id="blokhut" src="assets/models/blokhut.dae"></a-asset-item>

        <!-- <a-asset-item id="river" src="assets/river.ogg"></a-asset-item> -->  
      </a-assets>

      <!--  Camera & Cursor -->
      <a-entity position="0 11 4" camera="userHeight: 1.3"
            universal-controls="movementControls: checkpoint"
            checkpoint-controls="mode: teleport">
        <a-entity cursor="fuse: true;"
                  position="0 0 -1"
                  geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03;"
                  material="color: yellow; shader: flat;">
                  <a-animation begin="click" easing="ease-in" attribute="scale" dur="150" fill="forwards" from="0.1 0.1 0.1" to="1 1 1"></a-animation>
                  <a-animation begin="fusing" easing="ease-in" attribute="scale" fill="backwards" from="1 1 1" to="0.2 0.2 0.2" dur="1500"></a-animation>
        </a-entity>
      </a-entity>
      
      <!--  Environment -->
      <a-entity id="enviornment" environment="ground:canyon;dressing:none;groundTexture:none;seed:8;skyType:gradient;skyColor:#24b59f;horizonColor:#eff9b7;lighting:distant;lightPosition:-1.2 0.88 -0.55;fog:0.8;flatShading:false;playArea:1;groundYScale:4.18;groundColor:#937a24;groundColor2:#987d2e;dressingAmount:500;dressingColor:#888b1d;dressingScale:1;dressingVariance:10 10 10;dressingUniformScale:true;dressingOnPlayArea:0;grid:none;gridColor:#c5a543;shadow:false;preset:forest" position="0 0 0" rotation="0 0 0" scale="1 1 1" visible="true"></a-entity>


      <!--  Eiland -->
      <a-entity id="ballonEiland" position="0 10 0" rotation="0 0 0" collada-model="#ballonEiland"></a-entity>

      <a-sphere id="trigger" onclick="addBalloon()" position="0 12 0.6" radius="0.2"></a-sphere>

      <!--  Blokhut -->
      <a-entity id="blokhutBalloons">
        <a-entity id="blokhut" position="1.8 11.16 -1.92" rotation="0 -101.84 0" collada-model="#blokhut"></a-entity>
      </a-entity>
      
      

      <!--  Blauwe Ballon -->
      <!-- <a-entity id="ballonBlauw" position="5 15 0" scale="0.2 0.2 0.2" rotation="0 45 0" collada-model="#ballonBlauw"></a-entity> -->

      <!-- Checkpoints -->
      <a-entity position="0 0 0">
        <a-cylinder id="next-level" material="shader:gif;src:url(assets/portal.gif)" visible="false" radius="1" height="0.1" rotation="90 0 0" position="-1.27 11.86 -4.32"><a-link rotation="90 0 0" href="index.html" ></a-link></a-cylinder>
      </a-entity>

    </a-scene>

    
  </body>
</html>

