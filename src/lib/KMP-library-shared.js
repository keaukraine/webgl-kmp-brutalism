(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './KMP-library-engine.js', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./KMP-library-engine.js'), require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof this['KMP-library-engine'] === 'undefined') {
      throw new Error("Error loading module 'org.androidworks.engine:shared'. Its dependency 'KMP-library-engine' was not found. Please, check whether 'KMP-library-engine' is loaded prior to 'org.androidworks.engine:shared'.");
    }
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'org.androidworks.engine:shared'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'org.androidworks.engine:shared'.");
    }
    root['org.androidworks.engine:shared'] = factory(typeof this['org.androidworks.engine:shared'] === 'undefined' ? {} : this['org.androidworks.engine:shared'], this['KMP-library-engine'], this['kotlin-kotlin-stdlib']);
  }
}(this, function (_, kotlin_org_androidworks_engine_engine, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var Vec3 = kotlin_org_androidworks_engine_engine.$_$.q1;
  var CameraPosition = kotlin_org_androidworks_engine_engine.$_$.a1;
  var CameraPositionPair = kotlin_org_androidworks_engine_engine.$_$.z;
  var protoOf = kotlin_kotlin.$_$.w;
  var objectMeta = kotlin_kotlin.$_$.v;
  var setMetadataFor = kotlin_kotlin.$_$.x;
  var Command = kotlin_org_androidworks_engine_engine.$_$.f1;
  var CommandType_CUSTOM_getInstance = kotlin_org_androidworks_engine_engine.$_$.e;
  var classMeta = kotlin_kotlin.$_$.n;
  var VOID = kotlin_kotlin.$_$.a;
  var Scene = kotlin_org_androidworks_engine_engine.$_$.y1;
  var TimersMap = kotlin_org_androidworks_engine_engine.$_$.s1;
  var get_HINT_VRS_NONE = kotlin_org_androidworks_engine_engine.$_$.n1;
  var mutableListOf = kotlin_kotlin.$_$.l;
  var ColorMode_Normal_getInstance = kotlin_org_androidworks_engine_engine.$_$.f;
  var CameraPathAnimator = kotlin_org_androidworks_engine_engine.$_$.y;
  var Vec4 = kotlin_org_androidworks_engine_engine.$_$.r1;
  var ClearColorCommand = kotlin_org_androidworks_engine_engine.$_$.d1;
  var Mesh = kotlin_org_androidworks_engine_engine.$_$.x1;
  var Texture = kotlin_org_androidworks_engine_engine.$_$.a2;
  var TextureFormat_ASTC_getInstance = kotlin_org_androidworks_engine_engine.$_$.m;
  var TextureFiltering_LINEAR_MIPMAP_LINEAR_getInstance = kotlin_org_androidworks_engine_engine.$_$.k;
  var TextureWrapping_CLAMP_TO_EDGE_getInstance = kotlin_org_androidworks_engine_engine.$_$.o;
  var Shader = kotlin_org_androidworks_engine_engine.$_$.z1;
  var get_BLENDING_NONE = kotlin_org_androidworks_engine_engine.$_$.t1;
  var get_DEPTH_TEST_ENABLED = kotlin_org_androidworks_engine_engine.$_$.w1;
  var CullFace_BACK_getInstance = kotlin_org_androidworks_engine_engine.$_$.j;
  var VertexFormat_HALF3_getInstance = kotlin_org_androidworks_engine_engine.$_$.t;
  var VertexAttribute = kotlin_org_androidworks_engine_engine.$_$.f2;
  var VertexFormat_HALF2_getInstance = kotlin_org_androidworks_engine_engine.$_$.s;
  var listOf = kotlin_kotlin.$_$.j;
  var VertexAttributesDescriptor = kotlin_org_androidworks_engine_engine.$_$.e2;
  var DrawMeshState = kotlin_org_androidworks_engine_engine.$_$.i1;
  var AffineTranformation = kotlin_org_androidworks_engine_engine.$_$.b1;
  var GroupCommand = kotlin_org_androidworks_engine_engine.$_$.k1;
  var UniformFloatValue = kotlin_org_androidworks_engine_engine.$_$.b2;
  var UniformTextureValue = kotlin_org_androidworks_engine_engine.$_$.d2;
  var DrawTransformedMeshCommand = kotlin_org_androidworks_engine_engine.$_$.j1;
  var get_HINT_VRS_4X4 = kotlin_org_androidworks_engine_engine.$_$.m1;
  var ClearCommand = kotlin_org_androidworks_engine_engine.$_$.e1;
  var ClearCommandClearType_COLOR_AND_DEPTH_getInstance = kotlin_org_androidworks_engine_engine.$_$.d;
  var BlurredPassCommand = kotlin_org_androidworks_engine_engine.$_$.c1;
  var BlurSize_KERNEL_5_getInstance = kotlin_org_androidworks_engine_engine.$_$.c;
  var DrawBlurredCommand = kotlin_org_androidworks_engine_engine.$_$.g1;
  var Blending = kotlin_org_androidworks_engine_engine.$_$.u1;
  var BlendingEquation_ADD_getInstance = kotlin_org_androidworks_engine_engine.$_$.h;
  var BlendingFactor_ONE_getInstance = kotlin_org_androidworks_engine_engine.$_$.i;
  var VignetteCommand = kotlin_org_androidworks_engine_engine.$_$.p1;
  var MainPassCommandArr = kotlin_org_androidworks_engine_engine.$_$.v;
  var GroupCommandArr = kotlin_org_androidworks_engine_engine.$_$.u;
  var BlurSize_KERNEL_3_getInstance = kotlin_org_androidworks_engine_engine.$_$.b;
  var Unit_instance = kotlin_kotlin.$_$.g;
  var get_HINT_VRS_2X2 = kotlin_org_androidworks_engine_engine.$_$.l1;
  var Default_getInstance = kotlin_kotlin.$_$.f;
  var ColorMode_Sepia_getInstance = kotlin_org_androidworks_engine_engine.$_$.g;
  var Matrix_getInstance = kotlin_org_androidworks_engine_engine.$_$.w;
  var CameraState_TRANSITIONING_getInstance = kotlin_org_androidworks_engine_engine.$_$.a;
  var objectCreate = kotlin_kotlin.$_$.u;
  var VertexFormat_FLOAT4_getInstance = kotlin_org_androidworks_engine_engine.$_$.r;
  var listOf_0 = kotlin_kotlin.$_$.i;
  var fillArrayVal = kotlin_kotlin.$_$.q;
  var VertexFormat_FLOAT2_getInstance = kotlin_org_androidworks_engine_engine.$_$.p;
  var to = kotlin_kotlin.$_$.e1;
  var mapOf = kotlin_kotlin.$_$.k;
  var TextureFormat_RGBA16F_getInstance = kotlin_org_androidworks_engine_engine.$_$.n;
  var TextureFiltering_NEAREST_getInstance = kotlin_org_androidworks_engine_engine.$_$.l;
  var UniformIntValue = kotlin_org_androidworks_engine_engine.$_$.c2;
  var TextureAnimationChunked = kotlin_org_androidworks_engine_engine.$_$.x;
  var get_DEPTH_NO_WRITE = kotlin_org_androidworks_engine_engine.$_$.v1;
  var VertexFormat_FLOAT3_getInstance = kotlin_org_androidworks_engine_engine.$_$.q;
  var NoopCommand = kotlin_org_androidworks_engine_engine.$_$.o1;
  var DrawMeshCommand = kotlin_org_androidworks_engine_engine.$_$.h1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.b;
  var THROW_CCE = kotlin_kotlin.$_$.b1;
  var setUniform = kotlin_org_androidworks_engine_engine.$_$.i2;
  var setUniform_0 = kotlin_org_androidworks_engine_engine.$_$.h2;
  var setUniform_1 = kotlin_org_androidworks_engine_engine.$_$.g2;
  var get_PI = kotlin_kotlin.$_$.z;
  var defineProp = kotlin_kotlin.$_$.o;
  var Enum = kotlin_kotlin.$_$.a1;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Cameras, 'Cameras', objectMeta);
  setMetadataFor(DrawClockCommand, 'DrawClockCommand', classMeta, Command, VOID, DrawClockCommand);
  setMetadataFor(BrutalismScene, 'BrutalismScene', classMeta, Scene, VOID, BrutalismScene);
  setMetadataFor(BrutalismSettings, 'BrutalismSettings', classMeta, VOID, VOID, BrutalismSettings);
  setMetadataFor(Cameras_0, 'Cameras', objectMeta);
  setMetadataFor(InteractiveCameraPositionPair, 'InteractiveCameraPositionPair', classMeta, CameraPositionPair);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(ExampleScene, 'ExampleScene', classMeta, Scene, VOID, ExampleScene);
  setMetadataFor(Timers, 'Timers', classMeta, Enum);
  //endregion
  function Cameras() {
    Cameras_instance = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = [new CameraPositionPair(new CameraPosition(new Vec3(1595.2762, -1516.1268, 83.44518), new Vec3(-569.53894, -770.3358, 151.01573)), new CameraPosition(new Vec3(1957.1698, 1356.8844, 83.44518), new Vec3(-515.5615, -151.354, 151.01573)), 1.0), new CameraPositionPair(new CameraPosition(new Vec3(-829.46936, -908.0382, 136.9292), new Vec3(-165.64581, 1195.0557, 251.3715)), new CameraPosition(new Vec3(1024.0853, -362.24524, 136.9292), new Vec3(1414.9342, 567.3635, 251.3715)), 1.0), new CameraPositionPair(new CameraPosition(new Vec3(-243.95557, 1205.2717, 136.9292), new Vec3(362.46558, -880.0043, 251.3715)), new CameraPosition(new Vec3(-819.9841, -194.45178, 136.9292), new Vec3(991.0796, 1096.154, 251.3715)), 1.0), new CameraPositionPair(new CameraPosition(new Vec3(81.35687, -835.5989, 39.98031), new Vec3(334.3451, -294.1427, 394.6469)), new CameraPosition(new Vec3(895.4863, -925.46606, 39.98031), new Vec3(1337.5438, -802.4769, 725.81354)), 1.0)];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.xg_1 = [tmp_0, [new CameraPositionPair(new CameraPosition(new Vec3(-842.0926, -846.5076, 129.98555), new Vec3(-674.4083, 775.07825, 47.71223)), new CameraPosition(new Vec3(-828.56775, 790.18756, 129.86708), new Vec3(940.84375, 1304.5559, 46.237785)), 1.0), new CameraPositionPair(new CameraPosition(new Vec3(-1442.4281, -137.39117, 400.79602), new Vec3(98.2589, -729.51196, 445.23422)), new CameraPosition(new Vec3(-165.14899, 2.8690004, 130.22337), new Vec3(1178.7565, 470.28696, 214.73752)), 1.0), new CameraPositionPair(new CameraPosition(new Vec3(-451.56958, -252.30167, 587.1848), new Vec3(-898.23376, 597.8059, 38.427677)), new CameraPosition(new Vec3(1161.2458, -52.537415, 721.2996), new Vec3(1249.9236, 615.2596, 46.237785)), 1.0), new CameraPositionPair(new CameraPosition(new Vec3(-1809.4268, 206.302, 822.04504), new Vec3(-704.4282, -1200.5166, 570.46594)), new CameraPosition(new Vec3(485.292, 0.00439453, 654.2626), new Vec3(740.58057, 152.70099, 570.47485)), 1.0), new CameraPositionPair(new CameraPosition(new Vec3(-1201.3511, -321.01813, 1267.3562), new Vec3(-1091.3955, 484.66968, -120.63285)), new CameraPosition(new Vec3(348.40283, 333.19476, 531.56305), new Vec3(1243.907, 207.53552, 454.83487)), 1.0), new CameraPositionPair(new CameraPosition(new Vec3(1280.2383, 0.00817871, 765.05676), new Vec3(1020.4136, -0.0057373, 681.30115)), new CameraPosition(new Vec3(-542.4983, -0.00439453, 765.0978), new Vec3(-716.4851, 0.00195313, 656.9107)), 1.0), new CameraPositionPair(new CameraPosition(new Vec3(684.19763, -906.22656, 562.2279), new Vec3(293.5536, -235.00806, 457.9884)), new CameraPosition(new Vec3(-355.00952, 702.02734, 585.4181), new Vec3(582.56335, 400.67163, 433.59796)), 1.0), new CameraPositionPair(new CameraPosition(new Vec3(255.49573, -216.34082, 356.14874), new Vec3(621.0696, 213.13354, 377.2011)), new CameraPosition(new Vec3(-261.60974, 210.44629, 9.956253), new Vec3(444.66296, 48.16748, 614.7096)), 1.0), new CameraPositionPair(new CameraPosition(new Vec3(187.09607, -779.0669, 151.3941), new Vec3(-729.9801, -1107.8511, 366.46796)), new CameraPosition(new Vec3(181.64563, 716.58813, 151.3935), new Vec3(-921.05164, -237.90332, 366.46844)), 1.0)]];
  }
  var Cameras_instance;
  function Cameras_getInstance() {
    if (Cameras_instance == null)
      new Cameras();
    return Cameras_instance;
  }
  function DrawClockCommand() {
    Command.call(this);
    this.yg_1 = CommandType_CUSTOM_getInstance();
  }
  protoOf(DrawClockCommand).ad = function () {
    return this.yg_1;
  };
  function BrutalismScene() {
    Scene.call(this);
    this.timers = new TimersMap();
    this.eh_1 = 1000000.0;
    this.fh_1 = 22000.0;
    this.gh_1 = 3500.0;
    this.FOV_TRANSITION = 20.0;
    this.yh_1 = mutableListOf([get_HINT_VRS_NONE()]);
    this.Z_NEAR = 20.0;
    this.Z_FAR = 10000.0;
    this.FOV_LANDSCAPE = 85.0;
    this.FOV_PORTRAIT = 100.0;
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new BrutalismSettings();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.brutalism.BrutalismScene.<anonymous>' call
    this_0.lowQuality = false;
    this_0.cameraPeriod = 1.0;
    this_0.vignette = true;
    this_0.clock = false;
    this_0.blurred = false;
    this_0.colorMode = ColorMode_Normal_getInstance();
    this_0.autoSwitchCameras = true;
    tmp.settings = this_0;
    this.cameraAnimator = new CameraPathAnimator(this.eh_1, this.fh_1, this.gh_1, true);
    this.cameraAnimator.setCameras(Cameras_getInstance().xg_1[1]);
    this.cameraAnimator.minDurationCoefficient = this.settings.cameraPeriod;
    this.wh_1 = new Vec4(1.0, 1.0, 1.0, 1.0);
    this.xh_1 = new Vec4(0.74, 0.55, 0.3, 1.0);
    var tmp_0 = this;
    // Inline function 'kotlin.apply' call
    var this_1 = new ClearColorCommand();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.brutalism.BrutalismScene.<anonymous>' call
    this_1.color = this.wh_1;
    this_1.name = 'clear color';
    this_1.enabled = true;
    tmp_0.vh_1 = this_1;
    // Inline function 'kotlin.apply' call
    var this_2 = new Mesh();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.brutalism.BrutalismScene.<anonymous>' call
    this_2.fileName = 'room1';
    var meshRoom1 = this_2;
    // Inline function 'kotlin.apply' call
    var this_3 = new Mesh();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.brutalism.BrutalismScene.<anonymous>' call
    this_3.fileName = 'room2-optimized0';
    var meshRoom20 = this_3;
    // Inline function 'kotlin.apply' call
    var this_4 = new Mesh();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.brutalism.BrutalismScene.<anonymous>' call
    this_4.fileName = 'room2-optimized1';
    var meshRoom21 = this_4;
    // Inline function 'kotlin.apply' call
    var this_5 = new Mesh();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.brutalism.BrutalismScene.<anonymous>' call
    this_5.fileName = 'room2-optimized2';
    var meshRoom22 = this_5;
    this.meshes = mutableListOf([meshRoom1, meshRoom20, meshRoom21, meshRoom22]);
    // Inline function 'kotlin.apply' call
    var this_6 = new Texture();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.brutalism.BrutalismScene.<anonymous>' call
    this_6.name = 'room1';
    this_6.fileName = 'room1';
    this_6.format = TextureFormat_ASTC_getInstance();
    this_6.mipmaps = 11;
    this_6.minFilter = TextureFiltering_LINEAR_MIPMAP_LINEAR_getInstance();
    this_6.magFilter = TextureFiltering_LINEAR_MIPMAP_LINEAR_getInstance();
    this_6.anisotropy = 3;
    var texRoom1 = this_6;
    // Inline function 'kotlin.apply' call
    var this_7 = new Texture();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.brutalism.BrutalismScene.<anonymous>' call
    this_7.name = 'room20';
    this_7.fileName = 'room20';
    this_7.format = TextureFormat_ASTC_getInstance();
    this_7.mipmaps = 12;
    this_7.minFilter = TextureFiltering_LINEAR_MIPMAP_LINEAR_getInstance();
    this_7.magFilter = TextureFiltering_LINEAR_MIPMAP_LINEAR_getInstance();
    this_7.anisotropy = 3;
    this_7.wrapping = TextureWrapping_CLAMP_TO_EDGE_getInstance();
    var texRoom20 = this_7;
    // Inline function 'kotlin.apply' call
    var this_8 = new Texture();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.brutalism.BrutalismScene.<anonymous>' call
    this_8.name = 'room21';
    this_8.fileName = 'room21';
    this_8.format = TextureFormat_ASTC_getInstance();
    var texRoom21 = this_8;
    // Inline function 'kotlin.apply' call
    var this_9 = new Texture();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.brutalism.BrutalismScene.<anonymous>' call
    this_9.name = 'room22';
    this_9.fileName = 'room22';
    this_9.format = TextureFormat_ASTC_getInstance();
    var texRoom22 = this_9;
    this.textures = mutableListOf([texRoom1, texRoom20, texRoom21, texRoom22]);
    // Inline function 'kotlin.apply' call
    var this_10 = new Shader();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.brutalism.BrutalismScene.<anonymous>' call
    this_10.name = 'Diffuse';
    var shaderDiffuse = this_10;
    this.shaders = mutableListOf([shaderDiffuse]);
    var stateDiffuseFp16 = new DrawMeshState(shaderDiffuse, get_BLENDING_NONE(), get_DEPTH_TEST_ENABLED(), CullFace_BACK_getInstance(), new VertexAttributesDescriptor(listOf([new VertexAttribute(0, VertexFormat_HALF3_getInstance(), 0), new VertexAttribute(1, VertexFormat_HALF2_getInstance(), 6)]), 12));
    var txOrigin = new AffineTranformation(new Vec3(0.0, 0.0, 0.0), new Vec3(0.0, 0.0, 0.0), new Vec3(1.0, 1.0, 1.0));
    var txOriginRoom2 = new AffineTranformation(new Vec3(0.0, 0.0, 0.0), new Vec3(0.0, 0.0, 0.0), new Vec3(1.0, 1.0, 1.0));
    var tmp_1 = this;
    // Inline function 'kotlin.apply' call
    var this_11 = new GroupCommand();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.brutalism.BrutalismScene.<anonymous>' call
    this_11.name = 'room1';
    this_11.enabled = false;
    var tmp_2 = this_11;
    // Inline function 'kotlin.apply' call
    var this_12 = new DrawTransformedMeshCommand(meshRoom1, listOf([new UniformFloatValue(new Float32Array(16)), new UniformTextureValue(texRoom1)]), stateDiffuseFp16, txOrigin);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.brutalism.BrutalismScene.<anonymous>.<anonymous>' call
    this_12.hints = this.yh_1;
    tmp_2.commands = mutableListOf([this_12]);
    tmp_1.hh_1 = this_11;
    var tmp_3 = this;
    // Inline function 'kotlin.apply' call
    var this_13 = new GroupCommand();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.brutalism.BrutalismScene.<anonymous>' call
    this_13.name = 'room1-blurred';
    var tmp_4 = this_13;
    // Inline function 'kotlin.apply' call
    var this_14 = new DrawTransformedMeshCommand(meshRoom1, listOf([new UniformFloatValue(new Float32Array(16)), new UniformTextureValue(texRoom21)]), stateDiffuseFp16, txOrigin);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.brutalism.BrutalismScene.<anonymous>.<anonymous>' call
    this_14.hints = mutableListOf([get_HINT_VRS_4X4()]);
    tmp_4.commands = mutableListOf([this_14]);
    tmp_3.ih_1 = this_13;
    var tmp_5 = this;
    // Inline function 'kotlin.apply' call
    var this_15 = new GroupCommand();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.brutalism.BrutalismScene.<anonymous>' call
    this_15.name = 'room2';
    this_15.enabled = true;
    var tmp_6 = this_15;
    // Inline function 'kotlin.apply' call
    var this_16 = new DrawTransformedMeshCommand(meshRoom20, listOf([new UniformFloatValue(new Float32Array(16)), new UniformTextureValue(texRoom20)]), stateDiffuseFp16, txOriginRoom2);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.brutalism.BrutalismScene.<anonymous>.<anonymous>' call
    this_16.hints = this.yh_1;
    var tmp_7 = this_16;
    // Inline function 'kotlin.apply' call
    var this_17 = new DrawTransformedMeshCommand(meshRoom21, listOf([new UniformFloatValue(new Float32Array(16)), new UniformTextureValue(texRoom21)]), stateDiffuseFp16, txOriginRoom2);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.brutalism.BrutalismScene.<anonymous>.<anonymous>' call
    this_17.hints = mutableListOf([get_HINT_VRS_4X4()]);
    var tmp_8 = this_17;
    // Inline function 'kotlin.apply' call
    var this_18 = new DrawTransformedMeshCommand(meshRoom22, listOf([new UniformFloatValue(new Float32Array(16)), new UniformTextureValue(texRoom22)]), stateDiffuseFp16, txOriginRoom2);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.brutalism.BrutalismScene.<anonymous>.<anonymous>' call
    this_18.hints = mutableListOf([get_HINT_VRS_4X4()]);
    tmp_6.commands = mutableListOf([tmp_7, tmp_8, this_18]);
    tmp_5.jh_1 = this_15;
    var tmp_9 = this;
    // Inline function 'kotlin.apply' call
    var this_19 = new GroupCommand();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.brutalism.BrutalismScene.<anonymous>' call
    this_19.name = 'room2-blurred';
    var tmp_10 = this_19;
    // Inline function 'kotlin.apply' call
    var this_20 = new DrawTransformedMeshCommand(meshRoom20, listOf([new UniformFloatValue(new Float32Array(16)), new UniformTextureValue(texRoom21)]), stateDiffuseFp16, txOriginRoom2);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.brutalism.BrutalismScene.<anonymous>.<anonymous>' call
    this_20.hints = mutableListOf([get_HINT_VRS_4X4()]);
    var tmp_11 = this_20;
    // Inline function 'kotlin.apply' call
    var this_21 = new DrawTransformedMeshCommand(meshRoom21, listOf([new UniformFloatValue(new Float32Array(16)), new UniformTextureValue(texRoom21)]), stateDiffuseFp16, txOriginRoom2);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.brutalism.BrutalismScene.<anonymous>.<anonymous>' call
    this_21.hints = mutableListOf([get_HINT_VRS_4X4()]);
    var tmp_12 = this_21;
    // Inline function 'kotlin.apply' call
    var this_22 = new DrawTransformedMeshCommand(meshRoom22, listOf([new UniformFloatValue(new Float32Array(16)), new UniformTextureValue(texRoom22)]), stateDiffuseFp16, txOriginRoom2);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.brutalism.BrutalismScene.<anonymous>.<anonymous>' call
    this_22.hints = mutableListOf([get_HINT_VRS_4X4()]);
    tmp_10.commands = mutableListOf([tmp_11, tmp_12, this_22]);
    tmp_9.kh_1 = this_19;
    var tmp_13 = this;
    // Inline function 'kotlin.apply' call
    var this_23 = new GroupCommand();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.brutalism.BrutalismScene.<anonymous>' call
    var tmp_14 = this_23;
    // Inline function 'kotlin.apply' call
    var this_24 = new ClearCommand();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.brutalism.BrutalismScene.<anonymous>.<anonymous>' call
    this_24.clearType = ClearCommandClearType_COLOR_AND_DEPTH_getInstance();
    tmp_14.commands = mutableListOf([this.vh_1, this_24]);
    tmp_13.lh_1 = this_23;
    var tmp_15 = this;
    // Inline function 'kotlin.apply' call
    var this_25 = new BlurredPassCommand();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.brutalism.BrutalismScene.<anonymous>' call
    this_25.name = 'bloom1';
    this_25.enabled = false;
    this_25.minSize = 170;
    this_25.brightness = 1.0;
    this_25.blurSize = BlurSize_KERNEL_5_getInstance();
    this_25.commands = mutableListOf([this.lh_1, this.ih_1]);
    this_25.id = 0;
    tmp_15.mh_1 = this_25;
    var tmp_16 = this;
    // Inline function 'kotlin.apply' call
    var this_26 = new BlurredPassCommand();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.brutalism.BrutalismScene.<anonymous>' call
    this_26.name = 'bloom2';
    this_26.enabled = true;
    this_26.minSize = 170;
    this_26.brightness = 1.0;
    this_26.blurSize = BlurSize_KERNEL_5_getInstance();
    this_26.commands = mutableListOf([this.lh_1, this.kh_1]);
    this_26.id = 1;
    tmp_16.nh_1 = this_26;
    var tmp_17 = this;
    // Inline function 'kotlin.apply' call
    var this_27 = new DrawBlurredCommand();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.brutalism.BrutalismScene.<anonymous>' call
    this_27.name = 'draw bloom';
    var tmp_18 = this_27;
    // Inline function 'kotlin.apply' call
    var this_28 = new Blending();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.brutalism.BrutalismScene.<anonymous>.<anonymous>' call
    this_28.enabled = true;
    this_28.equationColor = BlendingEquation_ADD_getInstance();
    this_28.sourceFactorColor = BlendingFactor_ONE_getInstance();
    this_28.destinationFactorColor = BlendingFactor_ONE_getInstance();
    tmp_18.blending = this_28;
    tmp_17.oh_1 = this_27;
    var tmp_19 = this;
    // Inline function 'kotlin.apply' call
    var this_29 = new DrawBlurredCommand();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.brutalism.BrutalismScene.<anonymous>' call
    this_29.name = 'draw blurred';
    this_29.blending = get_BLENDING_NONE();
    tmp_19.ph_1 = this_29;
    var tmp_20 = this;
    // Inline function 'kotlin.apply' call
    var this_30 = new VignetteCommand();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.brutalism.BrutalismScene.<anonymous>' call
    this_30.color0 = new Vec4(0.4, 0.4, 0.4, 1.0);
    this_30.color1 = new Vec4(1.0, 1.0, 1.0, 1.0);
    tmp_20.qh_1 = this_30;
    this.rh_1 = new DrawClockCommand();
    this.sh_1 = GroupCommandArr(true, [this.mh_1, this.nh_1, MainPassCommandArr(true, [this.lh_1, this.hh_1, this.jh_1, this.oh_1, this.qh_1, this.rh_1])]);
    var tmp_21 = this;
    // Inline function 'kotlin.apply' call
    var this_31 = new BlurredPassCommand();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.brutalism.BrutalismScene.<anonymous>' call
    this_31.name = 'blurred-main';
    this_31.enabled = true;
    this_31.minSize = 200;
    this_31.brightness = 0.93;
    this_31.blurSize = BlurSize_KERNEL_3_getInstance();
    this_31.commands = mutableListOf([this.lh_1, this.hh_1, this.jh_1, this.qh_1]);
    this_31.id = 2;
    tmp_21.uh_1 = this_31;
    this.th_1 = GroupCommandArr(true, [this.uh_1, MainPassCommandArr(true, [this.lh_1, this.ph_1])]);
    this.commands = mutableListOf([this.sh_1, this.th_1]);
  }
  protoOf(BrutalismScene).zh = function () {
    return this.timers;
  };
  protoOf(BrutalismScene).ai = function () {
    return this.cameraAnimator;
  };
  protoOf(BrutalismScene).bi = function () {
    return this.FOV_TRANSITION;
  };
  protoOf(BrutalismScene).ci = function () {
    return this.settings;
  };
  protoOf(BrutalismScene).updateTimers = function (time) {
    this.timers.wg(time);
    this.cameraAnimator.animate(time);
    this.animate();
    protoOf(Scene).updateTimers.call(this, time);
  };
  protoOf(BrutalismScene).updateViewportSize = function (width, height) {
    protoOf(Scene).updateViewportSize.call(this, width, height);
  };
  protoOf(BrutalismScene).initialize = function () {
  };
  protoOf(BrutalismScene).applySettings = function () {
    this.sh_1.enabled = !this.settings.blurred;
    this.th_1.enabled = this.settings.blurred;
    this.mh_1.blurSize = this.settings.lowQuality ? BlurSize_KERNEL_3_getInstance() : BlurSize_KERNEL_5_getInstance();
    this.nh_1.blurSize = this.settings.lowQuality ? BlurSize_KERNEL_3_getInstance() : BlurSize_KERNEL_5_getInstance();
    this.yh_1.s(0, this.settings.lowQuality ? get_HINT_VRS_2X2() : get_HINT_VRS_NONE());
    this.qh_1.enabled = this.settings.vignette;
    if (!(this.cameraAnimator.minDurationCoefficient === this.settings.cameraPeriod)) {
      this.cameraAnimator.minDurationCoefficient = this.settings.cameraPeriod;
    }
    this.rh_1.enabled = this.settings.clock;
    if ((this.cameraAnimator.timer > 0.98 ? this.settings.autoSwitchCameras : false) ? Default_getInstance().o5() < 0.5 : false) {
      this.randomCameraOrNextRoom();
    }
    this.vh_1.color = this.settings.colorMode.equals(ColorMode_Sepia_getInstance()) ? this.xh_1 : this.wh_1;
  };
  protoOf(BrutalismScene).animate = function () {
    this.applySettings();
    this.calculateProjection();
    var cameraPositionInterpolator = this.cameraAnimator.positionInterpolator;
    var eye = cameraPositionInterpolator.cameraPosition;
    var lookat = cameraPositionInterpolator.cameraRotation;
    if (!this.useExternalViewMatrix) {
      Matrix_getInstance().mf(this.matView, 0, eye.x, eye.y, eye.z, lookat.x, lookat.y, lookat.z, 0.0, 0.0, 1.0);
    }
    this.updateMeshTransformations(this.commands);
  };
  protoOf(BrutalismScene).nextCamera = function () {
    this.cameraAnimator.nextCamera();
  };
  protoOf(BrutalismScene).nextRoom = function () {
    if (this.hh_1.enabled) {
      this.hh_1.enabled = false;
      this.jh_1.enabled = true;
      this.mh_1.enabled = false;
      this.nh_1.enabled = true;
      this.cameraAnimator.setCameras(Cameras_getInstance().xg_1[1], true);
    } else if (this.jh_1.enabled) {
      this.hh_1.enabled = true;
      this.jh_1.enabled = false;
      this.mh_1.enabled = true;
      this.nh_1.enabled = false;
      this.cameraAnimator.setCameras(Cameras_getInstance().xg_1[0], true);
    }
  };
  protoOf(BrutalismScene).nextCameraOrRoom = function () {
    if (this.cameraAnimator.state.equals(CameraState_TRANSITIONING_getInstance())) {
      return Unit_instance;
    }
    var switchRoomProbability = this.hh_1.enabled ? 0.75 : 0.25;
    if (Default_getInstance().o5() < switchRoomProbability) {
      this.nextRoom();
    } else {
      this.nextCamera();
    }
  };
  protoOf(BrutalismScene).randomCameraOrNextRoom = function () {
    if (this.cameraAnimator.state.equals(CameraState_TRANSITIONING_getInstance())) {
      return Unit_instance;
    }
    var switchRoomProbability = this.hh_1.enabled ? 0.75 : 0.25;
    if (Default_getInstance().o5() < switchRoomProbability) {
      this.nextRoom();
    } else {
      this.cameraAnimator.positionInterpolator.reverse = Default_getInstance().o5() < 0.5;
      this.cameraAnimator.randomCamera();
    }
  };
  function BrutalismSettings() {
    this.lowQuality = false;
    this.cameraPeriod = 1.0;
    this.vignette = true;
    this.clock = false;
    this.blurred = false;
    this.colorMode = ColorMode_Normal_getInstance();
    this.autoSwitchCameras = true;
  }
  protoOf(BrutalismSettings).di = function (_set____db54di) {
    this.lowQuality = _set____db54di;
  };
  protoOf(BrutalismSettings).ei = function () {
    return this.lowQuality;
  };
  protoOf(BrutalismSettings).fi = function (_set____db54di) {
    this.cameraPeriod = _set____db54di;
  };
  protoOf(BrutalismSettings).gi = function () {
    return this.cameraPeriod;
  };
  protoOf(BrutalismSettings).hi = function (_set____db54di) {
    this.vignette = _set____db54di;
  };
  protoOf(BrutalismSettings).ii = function () {
    return this.vignette;
  };
  protoOf(BrutalismSettings).ji = function (_set____db54di) {
    this.clock = _set____db54di;
  };
  protoOf(BrutalismSettings).ki = function () {
    return this.clock;
  };
  protoOf(BrutalismSettings).li = function (_set____db54di) {
    this.blurred = _set____db54di;
  };
  protoOf(BrutalismSettings).mi = function () {
    return this.blurred;
  };
  protoOf(BrutalismSettings).ni = function (_set____db54di) {
    this.colorMode = _set____db54di;
  };
  protoOf(BrutalismSettings).oi = function () {
    return this.colorMode;
  };
  protoOf(BrutalismSettings).pi = function (_set____db54di) {
    this.autoSwitchCameras = _set____db54di;
  };
  protoOf(BrutalismSettings).qi = function () {
    return this.autoSwitchCameras;
  };
  function Cameras_0() {
    Cameras_instance_0 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.ri_1 = [InteractiveCameraPositionPair_init_$Create$(new CameraPosition(new Vec3(4.84, -644.785, -25.362), new Vec3(4.673, -1.741, 4.447)), new CameraPosition(new Vec3(2.56, -126.0, -8.595), new Vec3(2.533, -1.741, 3.993)), 1.0, '', false), InteractiveCameraPositionPair_init_$Create$(new CameraPosition(new Vec3(-137.0, -115.0, -12.0), new Vec3(3.485, -0.679, -16.321)), new CameraPosition(new Vec3(138.0, -110.0, 20.0), new Vec3(3.485, -0.679, -16.321)), 1.0, '', true), InteractiveCameraPositionPair_init_$Create$(new CameraPosition(new Vec3(208.0, -208.0, -21.0), new Vec3(0.0, 0.0, 0.0)), new CameraPosition(new Vec3(265.0, 77.0, 22.0), new Vec3(0.0, 0.0, -35.0)), 1.0, '', true), InteractiveCameraPositionPair_init_$Create$(new CameraPosition(new Vec3(347.0, 73.0, 15.0), new Vec3(161.0, -220.0, -19.0)), new CameraPosition(new Vec3(69.0, 365.0, 15.0), new Vec3(-100.0, 162.0, -18.0)), 1.0, '', true), InteractiveCameraPositionPair_init_$Create$(new CameraPosition(new Vec3(147.0, 212.0, 0.0), new Vec3(20.0, -10.0, 7.0)), new CameraPosition(new Vec3(-146.0, 182.0, 30.0), new Vec3(-20.0, 4.0, -35.0)), 1.0, '', true), InteractiveCameraPositionPair_init_$Create$(new CameraPosition(new Vec3(-244.0, 139.0, 77.0), new Vec3(-3.0, -27.0, -37.0)), new CameraPosition(new Vec3(-151.0, -357.0, 11.0), new Vec3(20.0, -45.0, 0.0)), 1.0, '', true), InteractiveCameraPositionPair_init_$Create$(new CameraPosition(new Vec3(-265.0, -158.0, -20.0), new Vec3(0.0, 0.0, 32.0)), new CameraPosition(new Vec3(-95.0, -70.0, 0.0), new Vec3(9.0, -13.0, -10.0)), 1.0, '', false)];
  }
  var Cameras_instance_0;
  function Cameras_getInstance_0() {
    if (Cameras_instance_0 == null)
      new Cameras_0();
    return Cameras_instance_0;
  }
  function InteractiveCameraPositionPair_init_$Init$(start, end, speedMultiplier, name, interactive, $this) {
    CameraPositionPair.call($this, start, end, speedMultiplier);
    InteractiveCameraPositionPair.call($this);
    $this.vi_1 = name;
    $this.wi_1 = interactive;
    return $this;
  }
  function InteractiveCameraPositionPair_init_$Create$(start, end, speedMultiplier, name, interactive) {
    return InteractiveCameraPositionPair_init_$Init$(start, end, speedMultiplier, name, interactive, objectCreate(protoOf(InteractiveCameraPositionPair)));
  }
  function InteractiveCameraPositionPair() {
    this.vi_1 = '';
    this.wi_1 = false;
  }
  function Companion() {
    Companion_instance = this;
    this.xi_1 = new Vec4(0.55859375, 0.7578125, 0.87890625, 1.0);
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new ClearColorCommand();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.example.Companion.clearColorCommand.<anonymous>' call
    this_0.color = Companion_getInstance().xi_1;
    this_0.name = 'clear color';
    this_0.enabled = true;
    tmp.yi_1 = this_0;
  }
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function ExampleScene() {
    Companion_getInstance();
    Scene.call(this);
    this.timers = new TimersMap();
    this.ej_1 = 6.2831855;
    this.fj_1 = 1000000.0;
    this.gj_1 = 11000.0;
    this.hj_1 = 1100.0;
    this.FOV_TRANSITION = 20.0;
    this.testVertexAttributesDescriptor = new VertexAttributesDescriptor(listOf_0(new VertexAttribute(0, VertexFormat_FLOAT4_getInstance(), 0)), 16);
    this.arr1 = new Float32Array(16);
    var tmp = this;
    var tmp_0 = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = fillArrayVal(Array(16), null);
    while (tmp_0 < 16) {
      tmp_1[tmp_0] = 0.0;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.arr2 = tmp_1;
    var tmp_2 = this;
    // Inline function 'kotlin.floatArrayOf' call
    tmp_2.arr3 = new Float32Array([0.0, 0.0, 0.0]);
    var tmp_3 = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp_3.arr4 = [1.0, 1.0, 1.0];
    var tmp_4 = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp_4.arr5 = [new VertexAttribute(0, VertexFormat_FLOAT4_getInstance(), 0), new VertexAttribute(0, VertexFormat_FLOAT2_getInstance(), 0)];
    this.list6 = listOf([new VertexAttribute(0, VertexFormat_FLOAT4_getInstance(), 0), new VertexAttribute(0, VertexFormat_FLOAT2_getInstance(), 0)]);
    this.list7 = mutableListOf([new VertexAttribute(0, VertexFormat_FLOAT4_getInstance(), 0), new VertexAttribute(0, VertexFormat_FLOAT2_getInstance(), 0)]);
    this.map8 = mapOf([to(1, 'x'), to(2, 'y'), to(-1, 'zz')]);
    var tmp_5 = this;
    var tmp_6 = new UniformFloatValue(new Float32Array(16));
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$9 = new Float32Array([0.55078125, 0.703125, 0.77734375, 1.0]);
    tmp_5.uniformsMountainsBright = listOf([tmp_6, new UniformFloatValue(tmp$ret$9)]);
    var tmp_7 = this;
    var tmp_8 = new UniformFloatValue(new Float32Array(16));
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$10 = new Float32Array([0.42578125, 0.62890625, 0.73828125, 1.0]);
    tmp_7.uniformsMountainsDark = listOf([tmp_8, new UniformFloatValue(tmp$ret$10)]);
    var tmp_9 = this;
    var tmp_10 = new UniformFloatValue(new Float32Array(16));
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$11 = new Float32Array([0.37890625, 0.375, 0.33984375, 1.0]);
    tmp_9.uniformsCenterRockBright = listOf([tmp_10, new UniformFloatValue(tmp$ret$11)]);
    var tmp_11 = this;
    var tmp_12 = new UniformFloatValue(new Float32Array(16));
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$12 = new Float32Array([0.26953125, 0.265625, 0.23828125, 1.0]);
    tmp_11.uniformsCenterRockDark = listOf([tmp_12, new UniformFloatValue(tmp$ret$12)]);
    var tmp_13 = this;
    var tmp_14 = new UniformFloatValue(new Float32Array(16));
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$13 = new Float32Array([0.08984375, 0.26953125, 0.23828125, 1.0]);
    tmp_13.uniformsHills = listOf([tmp_14, new UniformFloatValue(tmp$ret$13)]);
    var tmp_15 = this;
    var tmp_16 = new UniformFloatValue(new Float32Array(16));
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$14 = new Float32Array([0.15625, 0.359375, 0.25390625, 1.0]);
    tmp_15.uniformsGround1 = listOf([tmp_16, new UniformFloatValue(tmp$ret$14)]);
    var tmp_17 = this;
    var tmp_18 = new UniformFloatValue(new Float32Array(16));
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$15 = new Float32Array([0.33203125, 0.578125, 0.62890625, 1.0]);
    tmp_17.uniformsGround2 = listOf([tmp_18, new UniformFloatValue(tmp$ret$15)]);
    var tmp_19 = this;
    var tmp_20 = new UniformFloatValue(new Float32Array(16));
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$16 = new Float32Array([0.55859375, 0.7578125, 0.81640625, 1.0]);
    tmp_19.uniformsWater = listOf([tmp_20, new UniformFloatValue(tmp$ret$16)]);
    var tmp_21 = this;
    var tmp_22 = new UniformFloatValue(new Float32Array(16));
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$17 = new Float32Array([0.74609375, 0.85546875, 0.921875, 1.0]);
    tmp_21.uniformsWaterHighlights = listOf([tmp_22, new UniformFloatValue(tmp$ret$17), new UniformFloatValue(new Float32Array(1))]);
    var tmp_23 = this;
    var tmp_24 = new UniformFloatValue(new Float32Array(16));
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$18 = new Float32Array([0.99609375, 0.99609375, 0.86328125, 1.0]);
    tmp_23.uniformsSkyObjects = listOf([tmp_24, new UniformFloatValue(tmp$ret$18)]);
    var tmp_25 = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new Texture();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.example.ExampleScene.texStatic.<anonymous>' call
    this_0.name = 'static';
    this_0.fileName = 'static';
    this_0.format = TextureFormat_ASTC_getInstance();
    this_0.mipmaps = 9;
    tmp_25.texStatic = this_0;
    this.uniformsDiffuseTest = listOf([new UniformFloatValue(new Float32Array(16)), new UniformTextureValue(this.texStatic)]);
    var tmp_26 = this;
    // Inline function 'kotlin.apply' call
    var this_1 = new Texture();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.example.ExampleScene.texFp16.<anonymous>' call
    this_1.name = 'testfp16';
    this_1.fileName = 'Alpaca/Eating/animal.rgba.fp16';
    this_1.format = TextureFormat_RGBA16F_getInstance();
    this_1.minFilter = TextureFiltering_NEAREST_getInstance();
    this_1.magFilter = TextureFiltering_NEAREST_getInstance();
    this_1.width = 362;
    this_1.height = 19;
    tmp_26.texFp16 = this_1;
    this.uniformsAnimated = listOf([new UniformFloatValue(new Float32Array(16)), new UniformFloatValue(new Float32Array(4)), new UniformIntValue(new Int32Array(1)), new UniformFloatValue(new Float32Array(1)), new UniformTextureValue(this.texFp16), new UniformFloatValue(new Float32Array(4))]);
    this.animationAnimal = new TextureAnimationChunked(362, 362, 18);
    this.ij_1 = 25000.0;
    this.jj_1 = 34000.0;
    this.kj_1 = 250000.0;
    this.lj_1 = 300000.0;
    this.mj_1 = 2500.0;
    this.nj_1 = 1000.0;
    this.oj_1 = 900.0;
    this.pj_1 = 6000.0;
    this.qj_1 = 1000.0;
    this.Z_NEAR = 50.0;
    this.Z_FAR = 10000.0;
    this.FOV_LANDSCAPE = 35.0;
    this.FOV_PORTRAIT = 60.0;
    this.timers.ug(Timers_Clouds1_getInstance(), this.kj_1);
    this.timers.ug(Timers_Clouds2_getInstance(), this.lj_1);
    this.timers.ug(Timers_Water_getInstance(), this.mj_1);
    this.timers.ug(Timers_BirdWings1_getInstance(), this.nj_1);
    this.timers.ug(Timers_BirdWings2_getInstance(), this.oj_1);
    this.timers.ug(Timers_AnimalAnimation_getInstance(), this.pj_1);
    this.timers.ug(Timers_ShootingStar_getInstance(), this.qj_1);
    this.timers.ug(Timers_BirdsFly_getInstance(), this.ij_1);
    this.timers.ug(Timers_Camera_getInstance(), this.jj_1);
    this.cameraAnimator = new CameraPathAnimator(this.fj_1, this.gj_1, this.hj_1, true);
    this.cameraAnimator.setCameras(Cameras_getInstance_0().ri_1);
    this.cameraAnimator.minDurationCoefficient = 2.0;
    // Inline function 'kotlin.apply' call
    var this_2 = new Mesh();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.example.ExampleScene.<anonymous>' call
    this_2.fileName = 'static';
    var meshTestDiffuse = this_2;
    // Inline function 'kotlin.apply' call
    var this_3 = new Mesh();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.example.ExampleScene.<anonymous>' call
    this_3.fileName = 'Alpaca-Idle';
    var meshAnimal = this_3;
    // Inline function 'kotlin.apply' call
    var this_4 = new Mesh();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.example.ExampleScene.<anonymous>' call
    this_4.fileName = 'sun';
    var meshSun = this_4;
    // Inline function 'kotlin.apply' call
    var this_5 = new Mesh();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.example.ExampleScene.<anonymous>' call
    this_5.fileName = 'sun_small';
    var meshSunSmall = this_5;
    // Inline function 'kotlin.apply' call
    var this_6 = new Mesh();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.example.ExampleScene.<anonymous>' call
    this_6.fileName = 'stars';
    var meshStars = this_6;
    // Inline function 'kotlin.apply' call
    var this_7 = new Mesh();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.example.ExampleScene.<anonymous>' call
    this_7.fileName = 'mountains_bright';
    var tmp_27 = this_7;
    // Inline function 'kotlin.apply' call
    var this_8 = new Mesh();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.example.ExampleScene.<anonymous>' call
    this_8.fileName = 'mountains_dark';
    var tmp_28 = this_8;
    // Inline function 'kotlin.apply' call
    var this_9 = new Mesh();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.example.ExampleScene.<anonymous>' call
    this_9.fileName = 'center_rock_bright';
    var tmp_29 = this_9;
    // Inline function 'kotlin.apply' call
    var this_10 = new Mesh();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.example.ExampleScene.<anonymous>' call
    this_10.fileName = 'center_rock_dark';
    var tmp_30 = this_10;
    // Inline function 'kotlin.apply' call
    var this_11 = new Mesh();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.example.ExampleScene.<anonymous>' call
    this_11.fileName = 'ground_1';
    var tmp_31 = this_11;
    // Inline function 'kotlin.apply' call
    var this_12 = new Mesh();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.example.ExampleScene.<anonymous>' call
    this_12.fileName = 'ground_2';
    var tmp_32 = this_12;
    // Inline function 'kotlin.apply' call
    var this_13 = new Mesh();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.example.ExampleScene.<anonymous>' call
    this_13.fileName = 'hills';
    var tmp_33 = this_13;
    // Inline function 'kotlin.apply' call
    var this_14 = new Mesh();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.example.ExampleScene.<anonymous>' call
    this_14.fileName = 'water';
    var tmp_34 = this_14;
    // Inline function 'kotlin.apply' call
    var this_15 = new Mesh();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.example.ExampleScene.<anonymous>' call
    this_15.fileName = 'water_highlights';
    this.meshes = mutableListOf([tmp_27, tmp_28, tmp_29, tmp_30, tmp_31, tmp_32, tmp_33, tmp_34, this_15, meshTestDiffuse, meshAnimal, meshSun, meshSunSmall, meshStars]);
    this.textures = mutableListOf([this.texStatic, this.texFp16]);
    // Inline function 'kotlin.apply' call
    var this_16 = new Shader();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.example.ExampleScene.<anonymous>' call
    this_16.name = 'Color';
    var shaderColor = this_16;
    // Inline function 'kotlin.apply' call
    var this_17 = new Shader();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.example.ExampleScene.<anonymous>' call
    this_17.name = 'Diffuse';
    var shaderDiffuse = this_17;
    // Inline function 'kotlin.apply' call
    var this_18 = new Shader();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.example.ExampleScene.<anonymous>' call
    this_18.name = 'ColorAnimatedTextureChunked';
    var shaderAnimated = this_18;
    // Inline function 'kotlin.apply' call
    var this_19 = new Shader();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.example.ExampleScene.<anonymous>' call
    this_19.name = 'Water';
    var shaderWater = this_19;
    this.shaders = mutableListOf([shaderColor, shaderDiffuse, shaderAnimated, shaderWater]);
    var stateColorFp16 = new DrawMeshState(shaderColor, get_BLENDING_NONE(), get_DEPTH_TEST_ENABLED(), CullFace_BACK_getInstance(), new VertexAttributesDescriptor(listOf_0(new VertexAttribute(0, VertexFormat_HALF3_getInstance(), 0)), 8));
    var stateColorFp16NoDepth = new DrawMeshState(shaderColor, get_BLENDING_NONE(), get_DEPTH_NO_WRITE(), CullFace_BACK_getInstance(), new VertexAttributesDescriptor(listOf_0(new VertexAttribute(0, VertexFormat_HALF3_getInstance(), 0)), 8));
    var stateDiffuseTest = new DrawMeshState(shaderDiffuse, get_BLENDING_NONE(), get_DEPTH_TEST_ENABLED(), CullFace_BACK_getInstance(), new VertexAttributesDescriptor(listOf([new VertexAttribute(0, VertexFormat_FLOAT3_getInstance(), 0), new VertexAttribute(1, VertexFormat_FLOAT2_getInstance(), 12)]), 20));
    var stateAnimated = new DrawMeshState(shaderAnimated, get_BLENDING_NONE(), get_DEPTH_TEST_ENABLED(), CullFace_BACK_getInstance(), null);
    var stateWater = new DrawMeshState(shaderWater, get_BLENDING_NONE(), get_DEPTH_TEST_ENABLED(), CullFace_BACK_getInstance(), new VertexAttributesDescriptor(listOf_0(new VertexAttribute(0, VertexFormat_HALF3_getInstance(), 0)), 8));
    var txOrigin = new AffineTranformation(new Vec3(0.0, 0.0, 0.0), new Vec3(0.0, 0.0, 0.0), new Vec3(1.0, 1.0, 1.0));
    var tmp_35 = new NoopCommand();
    // Inline function 'kotlin.apply' call
    var this_20 = new GroupCommand();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.example.ExampleScene.<anonymous>' call
    var tmp_36 = this_20;
    var tmp_37 = Companion_getInstance().yi_1;
    // Inline function 'kotlin.apply' call
    var this_21 = new ClearCommand();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.example.ExampleScene.<anonymous>.<anonymous>' call
    this_21.clearType = ClearCommandClearType_COLOR_AND_DEPTH_getInstance();
    tmp_36.commands = mutableListOf([tmp_37, this_21]);
    var tmp_38 = this_20;
    var tmp_39 = new DrawMeshCommand(meshAnimal, this.uniformsAnimated, stateAnimated);
    // Inline function 'kotlin.apply' call
    var this_22 = new GroupCommand();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.example.ExampleScene.<anonymous>' call
    this_22.name = 'hill';
    this_22.commands = mutableListOf([new DrawTransformedMeshCommand(this.meshes.q(2), this.uniformsCenterRockBright, stateColorFp16, txOrigin), new DrawTransformedMeshCommand(this.meshes.q(3), this.uniformsCenterRockDark, stateColorFp16, txOrigin)]);
    var tmp_40 = this_22;
    // Inline function 'kotlin.apply' call
    var this_23 = new GroupCommand();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.example.ExampleScene.<anonymous>' call
    this_23.name = 'grounds';
    this_23.commands = mutableListOf([new DrawTransformedMeshCommand(this.meshes.q(4), this.uniformsGround1, stateColorFp16, txOrigin), new DrawTransformedMeshCommand(this.meshes.q(6), this.uniformsHills, stateColorFp16, txOrigin), new DrawTransformedMeshCommand(this.meshes.q(5), this.uniformsGround2, stateColorFp16, txOrigin)]);
    var tmp_41 = this_23;
    // Inline function 'kotlin.apply' call
    var this_24 = new GroupCommand();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.example.ExampleScene.<anonymous>' call
    this_24.name = 'mountains';
    this_24.commands = mutableListOf([new DrawTransformedMeshCommand(this.meshes.q(0), this.uniformsMountainsBright, stateColorFp16, txOrigin), new DrawTransformedMeshCommand(this.meshes.q(1), this.uniformsMountainsDark, stateColorFp16, txOrigin)]);
    var tmp_42 = this_24;
    // Inline function 'kotlin.apply' call
    var this_25 = new GroupCommand();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.example.ExampleScene.<anonymous>' call
    this_25.name = 'water';
    this_25.commands = mutableListOf([new DrawTransformedMeshCommand(this.meshes.q(7), this.uniformsWater, stateColorFp16NoDepth, txOrigin), new DrawTransformedMeshCommand(this.meshes.q(8), this.uniformsWaterHighlights, stateWater, txOrigin)]);
    var tmp_43 = this_25;
    // Inline function 'kotlin.apply' call
    var this_26 = new GroupCommand();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.example.ExampleScene.<anonymous>' call
    this_26.name = 'birds';
    var tmp_44 = this_26;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_44.commands = ArrayList_init_$Create$();
    var tmp_45 = this_26;
    // Inline function 'kotlin.apply' call
    var this_27 = new GroupCommand();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.example.ExampleScene.<anonymous>' call
    this_27.name = 'clouds';
    var tmp_46 = this_27;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_46.commands = ArrayList_init_$Create$();
    var tmp_47 = this_27;
    // Inline function 'kotlin.apply' call
    var this_28 = new GroupCommand();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.example.ExampleScene.<anonymous>' call
    this_28.name = 'sky objects';
    var tmp_48 = this_28;
    // Inline function 'kotlin.apply' call
    var this_29 = new DrawTransformedMeshCommand(meshSun, this.uniformsSkyObjects, stateColorFp16, txOrigin);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.example.ExampleScene.<anonymous>.<anonymous>' call
    this_29.enabled = false;
    var tmp_49 = this_29;
    var tmp_50 = new DrawTransformedMeshCommand(meshSunSmall, this.uniformsSkyObjects, stateColorFp16, txOrigin);
    // Inline function 'kotlin.apply' call
    var this_30 = new DrawTransformedMeshCommand(meshStars, this.uniformsSkyObjects, stateColorFp16, txOrigin);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.example.ExampleScene.<anonymous>.<anonymous>' call
    this_30.enabled = false;
    tmp_48.commands = mutableListOf([tmp_49, tmp_50, this_30]);
    var tmp_51 = this_28;
    // Inline function 'kotlin.apply' call
    var this_31 = new GroupCommand();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.example.ExampleScene.<anonymous>' call
    this_31.name = 'shooting stars';
    var tmp_52 = this_31;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_52.commands = ArrayList_init_$Create$();
    var tmp_53 = this_31;
    var tmp_54 = new DrawMeshCommand(meshTestDiffuse, this.uniformsDiffuseTest, stateDiffuseTest);
    // Inline function 'kotlin.apply' call
    var this_32 = new VignetteCommand();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.example.ExampleScene.<anonymous>' call
    this_32.color0 = new Vec4(0.5, 0.5, 0.5, 1.0);
    this_32.color1 = new Vec4(1.0, 1.0, 1.0, 1.0);
    this.commands = mutableListOf([tmp_35, tmp_38, tmp_39, tmp_40, tmp_41, tmp_42, tmp_43, tmp_45, tmp_47, tmp_51, tmp_53, tmp_54, this_32]);
  }
  protoOf(ExampleScene).zh = function () {
    return this.timers;
  };
  protoOf(ExampleScene).ai = function () {
    return this.cameraAnimator;
  };
  protoOf(ExampleScene).bi = function () {
    return this.FOV_TRANSITION;
  };
  protoOf(ExampleScene).rj = function () {
    return this.testVertexAttributesDescriptor;
  };
  protoOf(ExampleScene).sj = function () {
    return this.arr1;
  };
  protoOf(ExampleScene).tj = function () {
    return this.arr2;
  };
  protoOf(ExampleScene).uj = function () {
    return this.arr3;
  };
  protoOf(ExampleScene).vj = function (_set____db54di) {
    this.arr4 = _set____db54di;
  };
  protoOf(ExampleScene).wj = function () {
    return this.arr4;
  };
  protoOf(ExampleScene).xj = function (_set____db54di) {
    this.arr5 = _set____db54di;
  };
  protoOf(ExampleScene).yj = function () {
    return this.arr5;
  };
  protoOf(ExampleScene).zj = function (_set____db54di) {
    this.list6 = _set____db54di;
  };
  protoOf(ExampleScene).ak = function () {
    return this.list6;
  };
  protoOf(ExampleScene).bk = function (_set____db54di) {
    this.list7 = _set____db54di;
  };
  protoOf(ExampleScene).ck = function () {
    return this.list7;
  };
  protoOf(ExampleScene).dk = function () {
    return this.map8;
  };
  protoOf(ExampleScene).ek = function () {
    return this.uniformsMountainsBright;
  };
  protoOf(ExampleScene).fk = function () {
    return this.uniformsMountainsDark;
  };
  protoOf(ExampleScene).gk = function () {
    return this.uniformsCenterRockBright;
  };
  protoOf(ExampleScene).hk = function () {
    return this.uniformsCenterRockDark;
  };
  protoOf(ExampleScene).ik = function () {
    return this.uniformsHills;
  };
  protoOf(ExampleScene).jk = function () {
    return this.uniformsGround1;
  };
  protoOf(ExampleScene).kk = function () {
    return this.uniformsGround2;
  };
  protoOf(ExampleScene).lk = function () {
    return this.uniformsWater;
  };
  protoOf(ExampleScene).mk = function () {
    return this.uniformsWaterHighlights;
  };
  protoOf(ExampleScene).nk = function () {
    return this.uniformsSkyObjects;
  };
  protoOf(ExampleScene).ok = function () {
    return this.texStatic;
  };
  protoOf(ExampleScene).pk = function () {
    return this.uniformsDiffuseTest;
  };
  protoOf(ExampleScene).qk = function () {
    return this.texFp16;
  };
  protoOf(ExampleScene).rk = function () {
    return this.uniformsAnimated;
  };
  protoOf(ExampleScene).sk = function () {
    return this.animationAnimal;
  };
  protoOf(ExampleScene).updateTimers = function (time) {
    this.timers.wg(time);
    this.cameraAnimator.animate(time);
    this.animate();
    protoOf(Scene).updateTimers.call(this, time);
  };
  protoOf(ExampleScene).updateViewportSize = function (width, height) {
    protoOf(Scene).updateViewportSize.call(this, width, height);
  };
  protoOf(ExampleScene).initialize = function () {
  };
  protoOf(ExampleScene).animate = function () {
    this.calculateProjection();
    var cameraPositionInterpolator = this.cameraAnimator.positionInterpolator;
    var eye = cameraPositionInterpolator.cameraPosition;
    var lookat = cameraPositionInterpolator.cameraRotation;
    if (!this.useExternalViewMatrix) {
      Matrix_getInstance().mf(this.matView, 0, eye.x, eye.y, eye.z, lookat.x, lookat.y, lookat.z, 0.0, 0.0, 1.0);
    }
    this.updateMeshTransformations(this.commands);
    var tmp = this.uniformsDiffuseTest.q(0);
    this.setMvpUniform(tmp instanceof UniformFloatValue ? tmp : THROW_CCE(), 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 8.0, 8.0, 8.0);
    // Inline function 'kotlin.math.min' call
    var a = this.timers.vg(Timers_AnimalAnimation_getInstance()) * 1.1;
    var timer = Math.min(a, 1.0);
    this.setMvpUniform(this.uniformsAnimated.q(0), 1.554, -0.796, -2.327, 0.0, 0.0, 0.0, 0.4, 0.4, 0.4);
    setUniform(this.uniformsAnimated.q(1), 0.1640625, 0.1484375, 0.1171875, 1.0);
    setUniform_0(this.uniformsAnimated.q(2), this.animationAnimal.wa_1);
    setUniform_1(this.uniformsAnimated.q(3), 1.0 / this.animationAnimal.bb_1);
    setUniform(this.uniformsAnimated.q(5), this.animationAnimal.wa_1, this.animationAnimal.ya_1, this.animationAnimal.db(timer), this.animationAnimal.cb_1);
    setUniform_1(this.uniformsWaterHighlights.q(2), this.timers.vg(Timers_Water_getInstance()) * get_PI() * 2.0);
  };
  var Timers_Clouds1_instance;
  var Timers_Clouds2_instance;
  var Timers_BirdsFly_instance;
  var Timers_Camera_instance;
  var Timers_Water_instance;
  var Timers_BirdWings1_instance;
  var Timers_BirdWings2_instance;
  var Timers_AnimalAnimation_instance;
  var Timers_ShootingStar_instance;
  var Timers_entriesInitialized;
  function Timers_initEntries() {
    if (Timers_entriesInitialized)
      return Unit_instance;
    Timers_entriesInitialized = true;
    Timers_Clouds1_instance = new Timers('Clouds1', 0);
    Timers_Clouds2_instance = new Timers('Clouds2', 1);
    Timers_BirdsFly_instance = new Timers('BirdsFly', 2);
    Timers_Camera_instance = new Timers('Camera', 3);
    Timers_Water_instance = new Timers('Water', 4);
    Timers_BirdWings1_instance = new Timers('BirdWings1', 5);
    Timers_BirdWings2_instance = new Timers('BirdWings2', 6);
    Timers_AnimalAnimation_instance = new Timers('AnimalAnimation', 7);
    Timers_ShootingStar_instance = new Timers('ShootingStar', 8);
  }
  function Timers(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Timers_Clouds1_getInstance() {
    Timers_initEntries();
    return Timers_Clouds1_instance;
  }
  function Timers_Clouds2_getInstance() {
    Timers_initEntries();
    return Timers_Clouds2_instance;
  }
  function Timers_BirdsFly_getInstance() {
    Timers_initEntries();
    return Timers_BirdsFly_instance;
  }
  function Timers_Camera_getInstance() {
    Timers_initEntries();
    return Timers_Camera_instance;
  }
  function Timers_Water_getInstance() {
    Timers_initEntries();
    return Timers_Water_instance;
  }
  function Timers_BirdWings1_getInstance() {
    Timers_initEntries();
    return Timers_BirdWings1_instance;
  }
  function Timers_BirdWings2_getInstance() {
    Timers_initEntries();
    return Timers_BirdWings2_instance;
  }
  function Timers_AnimalAnimation_getInstance() {
    Timers_initEntries();
    return Timers_AnimalAnimation_instance;
  }
  function Timers_ShootingStar_getInstance() {
    Timers_initEntries();
    return Timers_ShootingStar_instance;
  }
  //region block: exports
  function $jsExportAll$(_) {
    var $org = _.org || (_.org = {});
    var $org$androidworks = $org.androidworks || ($org.androidworks = {});
    var $org$androidworks$brutalism = $org$androidworks.brutalism || ($org$androidworks.brutalism = {});
    $org$androidworks$brutalism.DrawClockCommand = DrawClockCommand;
    var $org = _.org || (_.org = {});
    var $org$androidworks = $org.androidworks || ($org.androidworks = {});
    var $org$androidworks$brutalism = $org$androidworks.brutalism || ($org$androidworks.brutalism = {});
    $org$androidworks$brutalism.BrutalismScene = BrutalismScene;
    var $org = _.org || (_.org = {});
    var $org$androidworks = $org.androidworks || ($org.androidworks = {});
    var $org$androidworks$brutalism = $org$androidworks.brutalism || ($org$androidworks.brutalism = {});
    $org$androidworks$brutalism.BrutalismSettings = BrutalismSettings;
    var $org = _.org || (_.org = {});
    var $org$androidworks = $org.androidworks || ($org.androidworks = {});
    var $org$androidworks$example = $org$androidworks.example || ($org$androidworks.example = {});
    $org$androidworks$example.ExampleScene = ExampleScene;
    defineProp($org$androidworks$example.ExampleScene, 'Companion', Companion_getInstance);
  }
  $jsExportAll$(_);
  kotlin_org_androidworks_engine_engine.$jsExportAll$(_);
  //endregion
  return _;
}));

//# sourceMappingURL=KMP-library-shared.js.map
