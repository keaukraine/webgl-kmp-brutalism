"use strict";
(function (root, factory) {
    if (typeof define === 'function' && define.amd)
        define(['exports', './kotlin-kotlin-stdlib.js'], factory);
    else if (typeof exports === 'object')
        factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
    else {
        if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
            throw new Error("Error loading module 'KMP-library-engine'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'KMP-library-engine'.");
        }
        root['KMP-library-engine'] = factory(typeof this['KMP-library-engine'] === 'undefined' ? {} : this['KMP-library-engine'], this['kotlin-kotlin-stdlib']);
    }
}(this, function (_, kotlin_kotlin) {
    'use strict';
    //region block: imports
    var imul = Math.imul;
    var THROW_IAE = kotlin_kotlin.$_$.c1;
    var Unit_instance = kotlin_kotlin.$_$.g;
    var Enum = kotlin_kotlin.$_$.a1;
    var protoOf = kotlin_kotlin.$_$.w;
    var defineProp = kotlin_kotlin.$_$.o;
    var classMeta = kotlin_kotlin.$_$.n;
    var setMetadataFor = kotlin_kotlin.$_$.x;
    var VOID = kotlin_kotlin.$_$.a;
    var ArrayList_init_$Create$ = kotlin_kotlin.$_$.b;
    var THROW_CCE = kotlin_kotlin.$_$.b1;
    var arrayCopy = kotlin_kotlin.$_$.h;
    var hashCode = kotlin_kotlin.$_$.s;
    var equals = kotlin_kotlin.$_$.p;
    var numberToInt = kotlin_kotlin.$_$.t;
    var Exception_init_$Create$ = kotlin_kotlin.$_$.d;
    var ensureNotNull = kotlin_kotlin.$_$.d1;
    var objectMeta = kotlin_kotlin.$_$.v;
    var toMutableList = kotlin_kotlin.$_$.m;
    var objectCreate = kotlin_kotlin.$_$.u;
    var Default_getInstance = kotlin_kotlin.$_$.f;
    var toString = kotlin_kotlin.$_$.y;
    var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.e;
    var get_PI = kotlin_kotlin.$_$.z;
    var getNumberHashCode = kotlin_kotlin.$_$.r;
    var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.c;
    //endregion
    //region block: pre-declaration
    setMetadataFor(BackendMode, 'BackendMode', classMeta, Enum);
    setMetadataFor(BlendingEquation, 'BlendingEquation', classMeta, Enum);
    setMetadataFor(BlendingFactor, 'BlendingFactor', classMeta, Enum);
    setMetadataFor(Blending, 'Blending', classMeta, VOID, VOID, Blending);
    setMetadataFor(CullFace, 'CullFace', classMeta, Enum);
    setMetadataFor(DepthMode, 'DepthMode', classMeta, VOID, VOID, DepthMode);
    setMetadataFor(Mesh, 'Mesh', classMeta, VOID, VOID, Mesh);
    setMetadataFor(Scene, 'Scene', classMeta);
    setMetadataFor(Shader, 'Shader', classMeta, VOID, VOID, Shader);
    setMetadataFor(TextureFiltering, 'TextureFiltering', classMeta, Enum);
    setMetadataFor(TextureWrapping, 'TextureWrapping', classMeta, Enum);
    setMetadataFor(TextureFormat, 'TextureFormat', classMeta, Enum);
    setMetadataFor(Texture, 'Texture', classMeta, VOID, VOID, Texture);
    setMetadataFor(UniformValue, 'UniformValue', classMeta, VOID, VOID, UniformValue);
    setMetadataFor(UniformFloatValue, 'UniformFloatValue', classMeta, UniformValue);
    setMetadataFor(UniformIntValue, 'UniformIntValue', classMeta, UniformValue);
    setMetadataFor(UniformTextureValue, 'UniformTextureValue', classMeta, UniformValue);
    setMetadataFor(VertexFormat, 'VertexFormat', classMeta, Enum);
    setMetadataFor(VertexAttribute, 'VertexAttribute', classMeta);
    setMetadataFor(VertexAttributesDescriptor, 'VertexAttributesDescriptor', classMeta);
    setMetadataFor(TextureAnimationChunked, 'TextureAnimationChunked', classMeta);
    setMetadataFor(CameraPathAnimator, 'CameraPathAnimator', classMeta);
    setMetadataFor(CameraPosition, 'CameraPosition', classMeta);
    setMetadataFor(Companion, 'Companion', objectMeta);
    setMetadataFor(CameraPositionInterpolator, 'CameraPositionInterpolator', classMeta, VOID, VOID, CameraPositionInterpolator);
    setMetadataFor(CameraPositionPair, 'CameraPositionPair', classMeta);
    setMetadataFor(CameraState, 'CameraState', classMeta, Enum);
    setMetadataFor(BlurSize, 'BlurSize', classMeta, Enum);
    setMetadataFor(Command, 'Command', classMeta);
    setMetadataFor(GroupCommand, 'GroupCommand', classMeta, Command, VOID, GroupCommand);
    setMetadataFor(RenderPassCommand, 'RenderPassCommand', classMeta, GroupCommand, VOID, RenderPassCommandConstructor);
    setMetadataFor(BlurredPassCommand, 'BlurredPassCommand', classMeta, RenderPassCommand, VOID, BlurredPassCommand);
    setMetadataFor(DrawBlurredCommand, 'DrawBlurredCommand', classMeta, Command, VOID, DrawBlurredCommand);
    setMetadataFor(ClearColorCommand, 'ClearColorCommand', classMeta, Command, VOID, ClearColorCommand);
    setMetadataFor(ClearCommandClearType, 'ClearCommandClearType', classMeta, Enum);
    setMetadataFor(ClearCommand, 'ClearCommand', classMeta, Command, VOID, ClearCommand);
    setMetadataFor(CommandType, 'CommandType', classMeta, Enum);
    setMetadataFor(DrawMeshState, 'DrawMeshState', classMeta);
    setMetadataFor(DrawMeshCommand, 'DrawMeshCommand', classMeta, Command);
    setMetadataFor(DrawTransformedMeshCommand, 'DrawTransformedMeshCommand', classMeta, DrawMeshCommand);
    setMetadataFor(AffineTranformation, 'AffineTranformation', classMeta);
    setMetadataFor(Hint, 'Hint', classMeta);
    setMetadataFor(ShadingRate, 'ShadingRate', classMeta, Enum);
    setMetadataFor(VrsHint, 'VrsHint', classMeta, Hint);
    setMetadataFor(MainPassCommand, 'MainPassCommand', classMeta, RenderPassCommand, VOID, MainPassCommandConstructor);
    setMetadataFor(NoopCommand, 'NoopCommand', classMeta, Command, VOID, NoopCommand);
    setMetadataFor(VignetteCommand, 'VignetteCommand', classMeta, Command, VOID, VignetteCommand);
    setMetadataFor(ColorMode, 'ColorMode', classMeta, Enum);
    setMetadataFor(MathUtils, 'MathUtils', objectMeta);
    setMetadataFor(Matrix, 'Matrix', objectMeta);
    setMetadataFor(Vec2, 'Vec2', classMeta);
    setMetadataFor(Vec3, 'Vec3', classMeta);
    setMetadataFor(Vec4, 'Vec4', classMeta);
    setMetadataFor(TimerParams, 'TimerParams', classMeta);
    setMetadataFor(TimersMap, 'TimersMap', classMeta, VOID, VOID, TimersMap);
    //endregion
    var BackendMode_OPENGL_instance;
    var BackendMode_METAL_instance;
    function values() {
        return [BackendMode_OPENGL_getInstance(), BackendMode_METAL_getInstance()];
    }
    function valueOf(value) {
        switch (value) {
            case 'OPENGL':
                return BackendMode_OPENGL_getInstance();
            case 'METAL':
                return BackendMode_METAL_getInstance();
            default:
                BackendMode_initEntries();
                THROW_IAE('No enum constant value.');
                break;
        }
    }
    var BackendMode_entriesInitialized;
    function BackendMode_initEntries() {
        if (BackendMode_entriesInitialized)
            return Unit_instance;
        BackendMode_entriesInitialized = true;
        BackendMode_OPENGL_instance = new BackendMode('OPENGL', 0, 0);
        BackendMode_METAL_instance = new BackendMode('METAL', 1, 1);
    }
    function BackendMode(name, ordinal, value) {
        Enum.call(this, name, ordinal);
    }
    function BackendMode_OPENGL_getInstance() {
        BackendMode_initEntries();
        return BackendMode_OPENGL_instance;
    }
    function BackendMode_METAL_getInstance() {
        BackendMode_initEntries();
        return BackendMode_METAL_instance;
    }
    function get_BLENDING_NONE() {
        _init_properties_Blending_kt__efsar3();
        return BLENDING_NONE;
    }
    var BLENDING_NONE;
    var BlendingEquation_ADD_instance;
    var BlendingEquation_SUBTRACT_instance;
    var BlendingEquation_REVERSE_SUBTRACT_instance;
    function values_0() {
        return [BlendingEquation_ADD_getInstance(), BlendingEquation_SUBTRACT_getInstance(), BlendingEquation_REVERSE_SUBTRACT_getInstance()];
    }
    function valueOf_0(value) {
        switch (value) {
            case 'ADD':
                return BlendingEquation_ADD_getInstance();
            case 'SUBTRACT':
                return BlendingEquation_SUBTRACT_getInstance();
            case 'REVERSE_SUBTRACT':
                return BlendingEquation_REVERSE_SUBTRACT_getInstance();
            default:
                BlendingEquation_initEntries();
                THROW_IAE('No enum constant value.');
                break;
        }
    }
    var BlendingEquation_entriesInitialized;
    function BlendingEquation_initEntries() {
        if (BlendingEquation_entriesInitialized)
            return Unit_instance;
        BlendingEquation_entriesInitialized = true;
        BlendingEquation_ADD_instance = new BlendingEquation('ADD', 0, 0);
        BlendingEquation_SUBTRACT_instance = new BlendingEquation('SUBTRACT', 1, 1);
        BlendingEquation_REVERSE_SUBTRACT_instance = new BlendingEquation('REVERSE_SUBTRACT', 2, 2);
    }
    function BlendingEquation(name, ordinal, value) {
        Enum.call(this, name, ordinal);
    }
    var BlendingFactor_ZERO_instance;
    var BlendingFactor_ONE_instance;
    var BlendingFactor_SRC_COLOR_instance;
    var BlendingFactor_ONE_MINUS_SRC_COLOR_instance;
    var BlendingFactor_DST_COLOR_instance;
    var BlendingFactor_ONE_MINUS_DST_COLOR_instance;
    var BlendingFactor_SRC_ALPHA_instance;
    var BlendingFactor_ONE_MINUS_SRC_ALPHA_instance;
    var BlendingFactor_DST_ALPHA_instance;
    var BlendingFactor_ONE_MINUS_DST_ALPHA_instance;
    var BlendingFactor_CONSTANT_COLOR_instance;
    var BlendingFactor_ONE_MINUS_CONSTANT_COLOR_instance;
    var BlendingFactor_CONSTANT_ALPHA_instance;
    var BlendingFactor_ONE_MINUS_CONSTANT_ALPHA_instance;
    var BlendingFactor_SRC_ALPHA_SATURATE_instance;
    function values_1() {
        return [BlendingFactor_ZERO_getInstance(), BlendingFactor_ONE_getInstance(), BlendingFactor_SRC_COLOR_getInstance(), BlendingFactor_ONE_MINUS_SRC_COLOR_getInstance(), BlendingFactor_DST_COLOR_getInstance(), BlendingFactor_ONE_MINUS_DST_COLOR_getInstance(), BlendingFactor_SRC_ALPHA_getInstance(), BlendingFactor_ONE_MINUS_SRC_ALPHA_getInstance(), BlendingFactor_DST_ALPHA_getInstance(), BlendingFactor_ONE_MINUS_DST_ALPHA_getInstance(), BlendingFactor_CONSTANT_COLOR_getInstance(), BlendingFactor_ONE_MINUS_CONSTANT_COLOR_getInstance(), BlendingFactor_CONSTANT_ALPHA_getInstance(), BlendingFactor_ONE_MINUS_CONSTANT_ALPHA_getInstance(), BlendingFactor_SRC_ALPHA_SATURATE_getInstance()];
    }
    function valueOf_1(value) {
        switch (value) {
            case 'ZERO':
                return BlendingFactor_ZERO_getInstance();
            case 'ONE':
                return BlendingFactor_ONE_getInstance();
            case 'SRC_COLOR':
                return BlendingFactor_SRC_COLOR_getInstance();
            case 'ONE_MINUS_SRC_COLOR':
                return BlendingFactor_ONE_MINUS_SRC_COLOR_getInstance();
            case 'DST_COLOR':
                return BlendingFactor_DST_COLOR_getInstance();
            case 'ONE_MINUS_DST_COLOR':
                return BlendingFactor_ONE_MINUS_DST_COLOR_getInstance();
            case 'SRC_ALPHA':
                return BlendingFactor_SRC_ALPHA_getInstance();
            case 'ONE_MINUS_SRC_ALPHA':
                return BlendingFactor_ONE_MINUS_SRC_ALPHA_getInstance();
            case 'DST_ALPHA':
                return BlendingFactor_DST_ALPHA_getInstance();
            case 'ONE_MINUS_DST_ALPHA':
                return BlendingFactor_ONE_MINUS_DST_ALPHA_getInstance();
            case 'CONSTANT_COLOR':
                return BlendingFactor_CONSTANT_COLOR_getInstance();
            case 'ONE_MINUS_CONSTANT_COLOR':
                return BlendingFactor_ONE_MINUS_CONSTANT_COLOR_getInstance();
            case 'CONSTANT_ALPHA':
                return BlendingFactor_CONSTANT_ALPHA_getInstance();
            case 'ONE_MINUS_CONSTANT_ALPHA':
                return BlendingFactor_ONE_MINUS_CONSTANT_ALPHA_getInstance();
            case 'SRC_ALPHA_SATURATE':
                return BlendingFactor_SRC_ALPHA_SATURATE_getInstance();
            default:
                BlendingFactor_initEntries();
                THROW_IAE('No enum constant value.');
                break;
        }
    }
    var BlendingFactor_entriesInitialized;
    function BlendingFactor_initEntries() {
        if (BlendingFactor_entriesInitialized)
            return Unit_instance;
        BlendingFactor_entriesInitialized = true;
        BlendingFactor_ZERO_instance = new BlendingFactor('ZERO', 0, 0);
        BlendingFactor_ONE_instance = new BlendingFactor('ONE', 1, 1);
        BlendingFactor_SRC_COLOR_instance = new BlendingFactor('SRC_COLOR', 2, 2);
        BlendingFactor_ONE_MINUS_SRC_COLOR_instance = new BlendingFactor('ONE_MINUS_SRC_COLOR', 3, 3);
        BlendingFactor_DST_COLOR_instance = new BlendingFactor('DST_COLOR', 4, 4);
        BlendingFactor_ONE_MINUS_DST_COLOR_instance = new BlendingFactor('ONE_MINUS_DST_COLOR', 5, 5);
        BlendingFactor_SRC_ALPHA_instance = new BlendingFactor('SRC_ALPHA', 6, 6);
        BlendingFactor_ONE_MINUS_SRC_ALPHA_instance = new BlendingFactor('ONE_MINUS_SRC_ALPHA', 7, 7);
        BlendingFactor_DST_ALPHA_instance = new BlendingFactor('DST_ALPHA', 8, 8);
        BlendingFactor_ONE_MINUS_DST_ALPHA_instance = new BlendingFactor('ONE_MINUS_DST_ALPHA', 9, 9);
        BlendingFactor_CONSTANT_COLOR_instance = new BlendingFactor('CONSTANT_COLOR', 10, 10);
        BlendingFactor_ONE_MINUS_CONSTANT_COLOR_instance = new BlendingFactor('ONE_MINUS_CONSTANT_COLOR', 11, 11);
        BlendingFactor_CONSTANT_ALPHA_instance = new BlendingFactor('CONSTANT_ALPHA', 12, 12);
        BlendingFactor_ONE_MINUS_CONSTANT_ALPHA_instance = new BlendingFactor('ONE_MINUS_CONSTANT_ALPHA', 13, 13);
        BlendingFactor_SRC_ALPHA_SATURATE_instance = new BlendingFactor('SRC_ALPHA_SATURATE', 14, 14);
    }
    function BlendingFactor(name, ordinal, value) {
        Enum.call(this, name, ordinal);
    }
    function Blending() {
        this.enabled = false;
        this.isSeparateAlpha = false;
        this.equationAlpha = BlendingEquation_ADD_getInstance();
        this.equationColor = BlendingEquation_ADD_getInstance();
        this.sourceFactorAlpha = BlendingFactor_ZERO_getInstance();
        this.destinationFactorAlpha = BlendingFactor_ZERO_getInstance();
        this.sourceFactorColor = BlendingFactor_ZERO_getInstance();
        this.destinationFactorColor = BlendingFactor_ZERO_getInstance();
    }
    protoOf(Blending).e6 = function (_set____db54di) {
        this.enabled = _set____db54di;
    };
    protoOf(Blending).f6 = function () {
        return this.enabled;
    };
    protoOf(Blending).g6 = function (_set____db54di) {
        this.isSeparateAlpha = _set____db54di;
    };
    protoOf(Blending).h6 = function () {
        return this.isSeparateAlpha;
    };
    protoOf(Blending).i6 = function (_set____db54di) {
        this.equationAlpha = _set____db54di;
    };
    protoOf(Blending).j6 = function () {
        return this.equationAlpha;
    };
    protoOf(Blending).k6 = function (_set____db54di) {
        this.equationColor = _set____db54di;
    };
    protoOf(Blending).l6 = function () {
        return this.equationColor;
    };
    protoOf(Blending).m6 = function (_set____db54di) {
        this.sourceFactorAlpha = _set____db54di;
    };
    protoOf(Blending).n6 = function () {
        return this.sourceFactorAlpha;
    };
    protoOf(Blending).o6 = function (_set____db54di) {
        this.destinationFactorAlpha = _set____db54di;
    };
    protoOf(Blending).p6 = function () {
        return this.destinationFactorAlpha;
    };
    protoOf(Blending).q6 = function (_set____db54di) {
        this.sourceFactorColor = _set____db54di;
    };
    protoOf(Blending).r6 = function () {
        return this.sourceFactorColor;
    };
    protoOf(Blending).s6 = function (_set____db54di) {
        this.destinationFactorColor = _set____db54di;
    };
    protoOf(Blending).t6 = function () {
        return this.destinationFactorColor;
    };
    function BlendingEquation_ADD_getInstance() {
        BlendingEquation_initEntries();
        return BlendingEquation_ADD_instance;
    }
    function BlendingEquation_SUBTRACT_getInstance() {
        BlendingEquation_initEntries();
        return BlendingEquation_SUBTRACT_instance;
    }
    function BlendingEquation_REVERSE_SUBTRACT_getInstance() {
        BlendingEquation_initEntries();
        return BlendingEquation_REVERSE_SUBTRACT_instance;
    }
    function BlendingFactor_ZERO_getInstance() {
        BlendingFactor_initEntries();
        return BlendingFactor_ZERO_instance;
    }
    function BlendingFactor_ONE_getInstance() {
        BlendingFactor_initEntries();
        return BlendingFactor_ONE_instance;
    }
    function BlendingFactor_SRC_COLOR_getInstance() {
        BlendingFactor_initEntries();
        return BlendingFactor_SRC_COLOR_instance;
    }
    function BlendingFactor_ONE_MINUS_SRC_COLOR_getInstance() {
        BlendingFactor_initEntries();
        return BlendingFactor_ONE_MINUS_SRC_COLOR_instance;
    }
    function BlendingFactor_DST_COLOR_getInstance() {
        BlendingFactor_initEntries();
        return BlendingFactor_DST_COLOR_instance;
    }
    function BlendingFactor_ONE_MINUS_DST_COLOR_getInstance() {
        BlendingFactor_initEntries();
        return BlendingFactor_ONE_MINUS_DST_COLOR_instance;
    }
    function BlendingFactor_SRC_ALPHA_getInstance() {
        BlendingFactor_initEntries();
        return BlendingFactor_SRC_ALPHA_instance;
    }
    function BlendingFactor_ONE_MINUS_SRC_ALPHA_getInstance() {
        BlendingFactor_initEntries();
        return BlendingFactor_ONE_MINUS_SRC_ALPHA_instance;
    }
    function BlendingFactor_DST_ALPHA_getInstance() {
        BlendingFactor_initEntries();
        return BlendingFactor_DST_ALPHA_instance;
    }
    function BlendingFactor_ONE_MINUS_DST_ALPHA_getInstance() {
        BlendingFactor_initEntries();
        return BlendingFactor_ONE_MINUS_DST_ALPHA_instance;
    }
    function BlendingFactor_CONSTANT_COLOR_getInstance() {
        BlendingFactor_initEntries();
        return BlendingFactor_CONSTANT_COLOR_instance;
    }
    function BlendingFactor_ONE_MINUS_CONSTANT_COLOR_getInstance() {
        BlendingFactor_initEntries();
        return BlendingFactor_ONE_MINUS_CONSTANT_COLOR_instance;
    }
    function BlendingFactor_CONSTANT_ALPHA_getInstance() {
        BlendingFactor_initEntries();
        return BlendingFactor_CONSTANT_ALPHA_instance;
    }
    function BlendingFactor_ONE_MINUS_CONSTANT_ALPHA_getInstance() {
        BlendingFactor_initEntries();
        return BlendingFactor_ONE_MINUS_CONSTANT_ALPHA_instance;
    }
    function BlendingFactor_SRC_ALPHA_SATURATE_getInstance() {
        BlendingFactor_initEntries();
        return BlendingFactor_SRC_ALPHA_SATURATE_instance;
    }
    var properties_initialized_Blending_kt_oef843;
    function _init_properties_Blending_kt__efsar3() {
        if (!properties_initialized_Blending_kt_oef843) {
            properties_initialized_Blending_kt_oef843 = true;
            // Inline function 'kotlin.apply' call
            var this_0 = new Blending();
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'org.androidworks.engine.BLENDING_NONE.<anonymous>' call
            this_0.enabled = false;
            BLENDING_NONE = this_0;
        }
    }
    var CullFace_FRONT_instance;
    var CullFace_BACK_instance;
    var CullFace_FRONT_AND_BACK_instance;
    var CullFace_DISABLED_instance;
    function values_2() {
        return [CullFace_FRONT_getInstance(), CullFace_BACK_getInstance(), CullFace_FRONT_AND_BACK_getInstance(), CullFace_DISABLED_getInstance()];
    }
    function valueOf_2(value) {
        switch (value) {
            case 'FRONT':
                return CullFace_FRONT_getInstance();
            case 'BACK':
                return CullFace_BACK_getInstance();
            case 'FRONT_AND_BACK':
                return CullFace_FRONT_AND_BACK_getInstance();
            case 'DISABLED':
                return CullFace_DISABLED_getInstance();
            default:
                CullFace_initEntries();
                THROW_IAE('No enum constant value.');
                break;
        }
    }
    var CullFace_entriesInitialized;
    function CullFace_initEntries() {
        if (CullFace_entriesInitialized)
            return Unit_instance;
        CullFace_entriesInitialized = true;
        CullFace_FRONT_instance = new CullFace('FRONT', 0, 0);
        CullFace_BACK_instance = new CullFace('BACK', 1, 1);
        CullFace_FRONT_AND_BACK_instance = new CullFace('FRONT_AND_BACK', 2, 2);
        CullFace_DISABLED_instance = new CullFace('DISABLED', 3, 3);
    }
    function CullFace(name, ordinal, value) {
        Enum.call(this, name, ordinal);
    }
    function CullFace_FRONT_getInstance() {
        CullFace_initEntries();
        return CullFace_FRONT_instance;
    }
    function CullFace_BACK_getInstance() {
        CullFace_initEntries();
        return CullFace_BACK_instance;
    }
    function CullFace_FRONT_AND_BACK_getInstance() {
        CullFace_initEntries();
        return CullFace_FRONT_AND_BACK_instance;
    }
    function CullFace_DISABLED_getInstance() {
        CullFace_initEntries();
        return CullFace_DISABLED_instance;
    }
    var DEPTH_NONE;
    function get_DEPTH_TEST_ENABLED() {
        _init_properties_DepthMode_kt__qfy5t8();
        return DEPTH_TEST_ENABLED;
    }
    var DEPTH_TEST_ENABLED;
    function get_DEPTH_NO_WRITE() {
        _init_properties_DepthMode_kt__qfy5t8();
        return DEPTH_NO_WRITE;
    }
    var DEPTH_NO_WRITE;
    var DEPTH_NO_READ;
    function DepthMode(depthTest, depthWrite) {
        depthTest = depthTest === VOID ? false : depthTest;
        depthWrite = depthWrite === VOID ? false : depthWrite;
        this.depthTest = depthTest;
        this.depthWrite = depthWrite;
    }
    protoOf(DepthMode).w6 = function (_set____db54di) {
        this.depthTest = _set____db54di;
    };
    protoOf(DepthMode).x6 = function () {
        return this.depthTest;
    };
    protoOf(DepthMode).y6 = function (_set____db54di) {
        this.depthWrite = _set____db54di;
    };
    protoOf(DepthMode).z6 = function () {
        return this.depthWrite;
    };
    var properties_initialized_DepthMode_kt_b0ctqi;
    function _init_properties_DepthMode_kt__qfy5t8() {
        if (!properties_initialized_DepthMode_kt_b0ctqi) {
            properties_initialized_DepthMode_kt_b0ctqi = true;
            DEPTH_NONE = new DepthMode(false, false);
            DEPTH_TEST_ENABLED = new DepthMode(true, true);
            DEPTH_NO_WRITE = new DepthMode(true, false);
            DEPTH_NO_READ = new DepthMode(false, true);
        }
    }
    function Mesh() {
        this.name = '';
        this.id = 0;
        this.fileName = '';
        this.loaded = false;
    }
    protoOf(Mesh).a7 = function (_set____db54di) {
        this.name = _set____db54di;
    };
    protoOf(Mesh).c4 = function () {
        return this.name;
    };
    protoOf(Mesh).b7 = function (_set____db54di) {
        this.id = _set____db54di;
    };
    protoOf(Mesh).c7 = function () {
        return this.id;
    };
    protoOf(Mesh).d7 = function (_set____db54di) {
        this.fileName = _set____db54di;
    };
    protoOf(Mesh).e7 = function () {
        return this.fileName;
    };
    protoOf(Mesh).f7 = function (_set____db54di) {
        this.loaded = _set____db54di;
    };
    protoOf(Mesh).g7 = function () {
        return this.loaded;
    };
    function setFOV($this, matrix, fovY, aspect, zNear, zFar) {
        var fW;
        // Inline function 'kotlin.math.tan' call
        var x = fovY / 360.0 * 3.1415925;
        var fH = Math.tan(x) * zNear;
        fW = fH * aspect;
        Matrix_getInstance().o7(matrix, 0, -fW, fW, -fH, fH, zNear, zFar);
    }
    function Scene() {
        this.lastFrameTime = 0.0;
        this.viewportWidth = 0;
        this.viewportHeight = 0;
        this.matView = new Float32Array(16);
        this.useExternalViewMatrix = false;
        this.matProjection = new Float32Array(16);
        this.matModel = new Float32Array(16);
        this.matMVP = new Float32Array(16);
        this.zoom = 0.0;
        this.ZOOM_FOV = 10.0;
        this.FOV_LANDSCAPE = 0.0;
        this.FOV_PORTRAIT = 0.0;
        this.Z_NEAR = 0.0;
        this.Z_FAR = 0.0;
        this.backendMode = BackendMode_OPENGL_getInstance();
        this.p7_1 = false;
        var tmp = this;
        // Inline function 'kotlin.collections.mutableListOf' call
        tmp.q7_1 = ArrayList_init_$Create$();
        var tmp_0 = this;
        // Inline function 'kotlin.collections.mutableListOf' call
        tmp_0.r7_1 = ArrayList_init_$Create$();
        var tmp_1 = this;
        // Inline function 'kotlin.collections.mutableListOf' call
        tmp_1.s7_1 = ArrayList_init_$Create$();
        var tmp_2 = this;
        // Inline function 'kotlin.collections.mutableListOf' call
        tmp_2.t7_1 = ArrayList_init_$Create$();
    }
    protoOf(Scene).u7 = function (_set____db54di) {
        this.lastFrameTime = _set____db54di;
    };
    protoOf(Scene).v7 = function () {
        return this.lastFrameTime;
    };
    protoOf(Scene).w7 = function (_set____db54di) {
        this.viewportWidth = _set____db54di;
    };
    protoOf(Scene).x7 = function () {
        return this.viewportWidth;
    };
    protoOf(Scene).y7 = function (_set____db54di) {
        this.viewportHeight = _set____db54di;
    };
    protoOf(Scene).z7 = function () {
        return this.viewportHeight;
    };
    protoOf(Scene).a8 = function () {
        return this.matView;
    };
    protoOf(Scene).b8 = function (_set____db54di) {
        this.useExternalViewMatrix = _set____db54di;
    };
    protoOf(Scene).c8 = function () {
        return this.useExternalViewMatrix;
    };
    protoOf(Scene).d8 = function () {
        return this.matProjection;
    };
    protoOf(Scene).e8 = function () {
        return this.matModel;
    };
    protoOf(Scene).f8 = function () {
        return this.matMVP;
    };
    protoOf(Scene).g8 = function (_set____db54di) {
        this.zoom = _set____db54di;
    };
    protoOf(Scene).h8 = function () {
        return this.zoom;
    };
    protoOf(Scene).i8 = function (_set____db54di) {
        this.ZOOM_FOV = _set____db54di;
    };
    protoOf(Scene).j8 = function () {
        return this.ZOOM_FOV;
    };
    protoOf(Scene).k8 = function (_set____db54di) {
        this.FOV_LANDSCAPE = _set____db54di;
    };
    protoOf(Scene).l8 = function () {
        return this.FOV_LANDSCAPE;
    };
    protoOf(Scene).m8 = function (_set____db54di) {
        this.FOV_PORTRAIT = _set____db54di;
    };
    protoOf(Scene).n8 = function () {
        return this.FOV_PORTRAIT;
    };
    protoOf(Scene).o8 = function (_set____db54di) {
        this.Z_NEAR = _set____db54di;
    };
    protoOf(Scene).p8 = function () {
        return this.Z_NEAR;
    };
    protoOf(Scene).q8 = function (_set____db54di) {
        this.Z_FAR = _set____db54di;
    };
    protoOf(Scene).r8 = function () {
        return this.Z_FAR;
    };
    protoOf(Scene).s8 = function (_set____db54di) {
        this.backendMode = _set____db54di;
    };
    protoOf(Scene).t8 = function () {
        return this.backendMode;
    };
    protoOf(Scene).f7 = function (value) {
        this.p7_1 = value;
    };
    protoOf(Scene).g7 = function () {
        return this.p7_1;
    };
    protoOf(Scene).u8 = function (_set____db54di) {
        this.q7_1 = _set____db54di;
    };
    protoOf(Scene).v8 = function () {
        return this.q7_1;
    };
    protoOf(Scene).w8 = function (_set____db54di) {
        this.r7_1 = _set____db54di;
    };
    protoOf(Scene).x8 = function () {
        return this.r7_1;
    };
    protoOf(Scene).y8 = function (_set____db54di) {
        this.s7_1 = _set____db54di;
    };
    protoOf(Scene).z8 = function () {
        return this.s7_1;
    };
    protoOf(Scene).a9 = function (_set____db54di) {
        this.t7_1 = _set____db54di;
    };
    protoOf(Scene).b9 = function () {
        return this.t7_1;
    };
    protoOf(Scene).updateTimers = function (time) {
        this.lastFrameTime = time;
    };
    protoOf(Scene).updateViewportSize = function (width, height) {
        this.viewportWidth = width;
        this.viewportHeight = height;
    };
    protoOf(Scene).c9 = function (multiplier, width, height) {
        var tmp;
        if (height > 0) {
            tmp = width / height;
        }
        else {
            tmp = 1.0;
        }
        var ratio = tmp;
        var tmp_0;
        if (width >= height) {
            tmp_0 = this.FOV_LANDSCAPE * multiplier;
        }
        else {
            tmp_0 = this.FOV_PORTRAIT * multiplier;
        }
        var fov = tmp_0;
        fov = fov + this.zoom * this.ZOOM_FOV;
        setFOV(this, this.matProjection, fov, ratio, this.Z_NEAR, this.Z_FAR);
        if (this.backendMode.equals(BackendMode_METAL_getInstance())) {
            var zs = this.Z_FAR / (this.Z_NEAR - this.Z_FAR);
            this.matProjection[10] = zs;
            this.matProjection[14] = zs * this.Z_NEAR;
        }
    };
    protoOf(Scene).calculateProjection = function (multiplier, width, height, $super) {
        multiplier = multiplier === VOID ? 1.0 : multiplier;
        width = width === VOID ? this.viewportWidth : width;
        height = height === VOID ? this.viewportHeight : height;
        return this.c9(multiplier, width, height);
    };
    protoOf(Scene).calculateMVPMatrix = function (tx, ty, tz, rx, ry, rz, sx, sy, sz) {
        Matrix_getInstance().d9(this.matModel, 0);
        Matrix_getInstance().e9(this.matModel, 0, 0.0, 1.0, 0.0, 0.0);
        Matrix_getInstance().f9(this.matModel, 0, 0.0, 0.0, 1.0, 0.0);
        Matrix_getInstance().g9(this.matModel, 0, tx, ty, tz);
        Matrix_getInstance().h9(this.matModel, 0, sx, sy, sz);
        Matrix_getInstance().f9(this.matModel, 0, rx, 1.0, 0.0, 0.0);
        Matrix_getInstance().f9(this.matModel, 0, ry, 0.0, 1.0, 0.0);
        Matrix_getInstance().f9(this.matModel, 0, rz, 0.0, 0.0, 1.0);
        Matrix_getInstance().i9(this.matMVP, 0, this.matView, 0, this.matModel, 0);
        Matrix_getInstance().i9(this.matMVP, 0, this.matProjection, 0, this.matMVP, 0);
    };
    protoOf(Scene).setMvpUniform = function (uniform, tx, ty, tz, rx, ry, rz, sx, sy, sz) {
        this.calculateMVPMatrix(tx, ty, tz, rx, ry, rz, sx, sy, sz);
        setUniform(uniform, this.matMVP);
    };
    protoOf(Scene).updateMeshTransformations = function (commands) {
        var tmp0_iterator = commands.h();
        $l$loop: while (tmp0_iterator.o()) {
            var command = tmp0_iterator.p();
            if (!command.enabled) {
                continue $l$loop;
            }
            if (command instanceof GroupCommand) {
                this.updateMeshTransformations(command.commands);
            }
            if (command instanceof DrawTransformedMeshCommand) {
                this.calculateMVPMatrix(command.tranform.j9_1.x, command.tranform.j9_1.y, command.tranform.j9_1.z, command.tranform.k9_1.x, command.tranform.k9_1.y, command.tranform.k9_1.z, command.tranform.l9_1.x, command.tranform.l9_1.y, command.tranform.l9_1.z);
                if (command.indexUniformMvp >= 0) {
                    setUniform(command.uniforms.q(command.indexUniformMvp), this.matMVP);
                }
                if (command.indexUniformModel >= 0) {
                    setUniform(command.uniforms.q(command.indexUniformModel), this.matModel);
                }
                if (command.indexUniformView >= 0) {
                    setUniform(command.uniforms.q(command.indexUniformView), this.matView);
                }
                if (command.indexUniformProjection >= 0) {
                    setUniform(command.uniforms.q(command.indexUniformProjection), this.matProjection);
                }
            }
        }
    };
    function Shader() {
        this.name = '';
        this.id = -1;
    }
    protoOf(Shader).a7 = function (_set____db54di) {
        this.name = _set____db54di;
    };
    protoOf(Shader).c4 = function () {
        return this.name;
    };
    protoOf(Shader).b7 = function (_set____db54di) {
        this.id = _set____db54di;
    };
    protoOf(Shader).c7 = function () {
        return this.id;
    };
    var TextureFiltering_NEAREST_instance;
    var TextureFiltering_LINEAR_instance;
    var TextureFiltering_NEAREST_MIPMAP_NEAREST_instance;
    var TextureFiltering_LINEAR_MIPMAP_NEAREST_instance;
    var TextureFiltering_NEAREST_MIPMAP_LINEAR_instance;
    var TextureFiltering_LINEAR_MIPMAP_LINEAR_instance;
    function values_3() {
        return [TextureFiltering_NEAREST_getInstance(), TextureFiltering_LINEAR_getInstance(), TextureFiltering_NEAREST_MIPMAP_NEAREST_getInstance(), TextureFiltering_LINEAR_MIPMAP_NEAREST_getInstance(), TextureFiltering_NEAREST_MIPMAP_LINEAR_getInstance(), TextureFiltering_LINEAR_MIPMAP_LINEAR_getInstance()];
    }
    function valueOf_3(value) {
        switch (value) {
            case 'NEAREST':
                return TextureFiltering_NEAREST_getInstance();
            case 'LINEAR':
                return TextureFiltering_LINEAR_getInstance();
            case 'NEAREST_MIPMAP_NEAREST':
                return TextureFiltering_NEAREST_MIPMAP_NEAREST_getInstance();
            case 'LINEAR_MIPMAP_NEAREST':
                return TextureFiltering_LINEAR_MIPMAP_NEAREST_getInstance();
            case 'NEAREST_MIPMAP_LINEAR':
                return TextureFiltering_NEAREST_MIPMAP_LINEAR_getInstance();
            case 'LINEAR_MIPMAP_LINEAR':
                return TextureFiltering_LINEAR_MIPMAP_LINEAR_getInstance();
            default:
                TextureFiltering_initEntries();
                THROW_IAE('No enum constant value.');
                break;
        }
    }
    var TextureFiltering_entriesInitialized;
    function TextureFiltering_initEntries() {
        if (TextureFiltering_entriesInitialized)
            return Unit_instance;
        TextureFiltering_entriesInitialized = true;
        TextureFiltering_NEAREST_instance = new TextureFiltering('NEAREST', 0, 0);
        TextureFiltering_LINEAR_instance = new TextureFiltering('LINEAR', 1, 1);
        TextureFiltering_NEAREST_MIPMAP_NEAREST_instance = new TextureFiltering('NEAREST_MIPMAP_NEAREST', 2, 2);
        TextureFiltering_LINEAR_MIPMAP_NEAREST_instance = new TextureFiltering('LINEAR_MIPMAP_NEAREST', 3, 3);
        TextureFiltering_NEAREST_MIPMAP_LINEAR_instance = new TextureFiltering('NEAREST_MIPMAP_LINEAR', 4, 4);
        TextureFiltering_LINEAR_MIPMAP_LINEAR_instance = new TextureFiltering('LINEAR_MIPMAP_LINEAR', 5, 5);
    }
    function TextureFiltering(name, ordinal, value) {
        Enum.call(this, name, ordinal);
    }
    var TextureWrapping_CLAMP_TO_EDGE_instance;
    var TextureWrapping_MIRRORED_REPEAT_instance;
    var TextureWrapping_REPEAT_instance;
    function values_4() {
        return [TextureWrapping_CLAMP_TO_EDGE_getInstance(), TextureWrapping_MIRRORED_REPEAT_getInstance(), TextureWrapping_REPEAT_getInstance()];
    }
    function valueOf_4(value) {
        switch (value) {
            case 'CLAMP_TO_EDGE':
                return TextureWrapping_CLAMP_TO_EDGE_getInstance();
            case 'MIRRORED_REPEAT':
                return TextureWrapping_MIRRORED_REPEAT_getInstance();
            case 'REPEAT':
                return TextureWrapping_REPEAT_getInstance();
            default:
                TextureWrapping_initEntries();
                THROW_IAE('No enum constant value.');
                break;
        }
    }
    var TextureWrapping_entriesInitialized;
    function TextureWrapping_initEntries() {
        if (TextureWrapping_entriesInitialized)
            return Unit_instance;
        TextureWrapping_entriesInitialized = true;
        TextureWrapping_CLAMP_TO_EDGE_instance = new TextureWrapping('CLAMP_TO_EDGE', 0, 0);
        TextureWrapping_MIRRORED_REPEAT_instance = new TextureWrapping('MIRRORED_REPEAT', 1, 1);
        TextureWrapping_REPEAT_instance = new TextureWrapping('REPEAT', 2, 2);
    }
    function TextureWrapping(name, ordinal, value) {
        Enum.call(this, name, ordinal);
    }
    var TextureFormat_RGBA8_instance;
    var TextureFormat_RGB8_instance;
    var TextureFormat_RGB16F_instance;
    var TextureFormat_RGB32F_instance;
    var TextureFormat_RGBA16F_instance;
    var TextureFormat_RGBA32F_instance;
    var TextureFormat_ASTC_instance;
    function values_5() {
        return [TextureFormat_RGBA8_getInstance(), TextureFormat_RGB8_getInstance(), TextureFormat_RGB16F_getInstance(), TextureFormat_RGB32F_getInstance(), TextureFormat_RGBA16F_getInstance(), TextureFormat_RGBA32F_getInstance(), TextureFormat_ASTC_getInstance()];
    }
    function valueOf_5(value) {
        switch (value) {
            case 'RGBA8':
                return TextureFormat_RGBA8_getInstance();
            case 'RGB8':
                return TextureFormat_RGB8_getInstance();
            case 'RGB16F':
                return TextureFormat_RGB16F_getInstance();
            case 'RGB32F':
                return TextureFormat_RGB32F_getInstance();
            case 'RGBA16F':
                return TextureFormat_RGBA16F_getInstance();
            case 'RGBA32F':
                return TextureFormat_RGBA32F_getInstance();
            case 'ASTC':
                return TextureFormat_ASTC_getInstance();
            default:
                TextureFormat_initEntries();
                THROW_IAE('No enum constant value.');
                break;
        }
    }
    var TextureFormat_entriesInitialized;
    function TextureFormat_initEntries() {
        if (TextureFormat_entriesInitialized)
            return Unit_instance;
        TextureFormat_entriesInitialized = true;
        TextureFormat_RGBA8_instance = new TextureFormat('RGBA8', 0, 0);
        TextureFormat_RGB8_instance = new TextureFormat('RGB8', 1, 1);
        TextureFormat_RGB16F_instance = new TextureFormat('RGB16F', 2, 2);
        TextureFormat_RGB32F_instance = new TextureFormat('RGB32F', 3, 3);
        TextureFormat_RGBA16F_instance = new TextureFormat('RGBA16F', 4, 4);
        TextureFormat_RGBA32F_instance = new TextureFormat('RGBA32F', 5, 5);
        TextureFormat_ASTC_instance = new TextureFormat('ASTC', 6, 6);
    }
    function TextureFormat(name, ordinal, value) {
        Enum.call(this, name, ordinal);
    }
    function Texture() {
        this.name = '';
        this.fileName = '';
        this.id = 0;
        this.loaded = false;
        this.width = 0;
        this.height = 0;
        this.minFilter = TextureFiltering_LINEAR_getInstance();
        this.magFilter = TextureFiltering_LINEAR_getInstance();
        this.wrapping = TextureWrapping_REPEAT_getInstance();
        this.mipmaps = 0;
        this.format = TextureFormat_RGBA8_getInstance();
        this.anisotropy = 0;
    }
    protoOf(Texture).a7 = function (_set____db54di) {
        this.name = _set____db54di;
    };
    protoOf(Texture).c4 = function () {
        return this.name;
    };
    protoOf(Texture).d7 = function (_set____db54di) {
        this.fileName = _set____db54di;
    };
    protoOf(Texture).e7 = function () {
        return this.fileName;
    };
    protoOf(Texture).b7 = function (_set____db54di) {
        this.id = _set____db54di;
    };
    protoOf(Texture).c7 = function () {
        return this.id;
    };
    protoOf(Texture).f7 = function (_set____db54di) {
        this.loaded = _set____db54di;
    };
    protoOf(Texture).g7 = function () {
        return this.loaded;
    };
    protoOf(Texture).u9 = function (_set____db54di) {
        this.width = _set____db54di;
    };
    protoOf(Texture).v9 = function () {
        return this.width;
    };
    protoOf(Texture).w9 = function (_set____db54di) {
        this.height = _set____db54di;
    };
    protoOf(Texture).x9 = function () {
        return this.height;
    };
    protoOf(Texture).y9 = function (_set____db54di) {
        this.minFilter = _set____db54di;
    };
    protoOf(Texture).z9 = function () {
        return this.minFilter;
    };
    protoOf(Texture).aa = function (_set____db54di) {
        this.magFilter = _set____db54di;
    };
    protoOf(Texture).ba = function () {
        return this.magFilter;
    };
    protoOf(Texture).ca = function (_set____db54di) {
        this.wrapping = _set____db54di;
    };
    protoOf(Texture).da = function () {
        return this.wrapping;
    };
    protoOf(Texture).ea = function (_set____db54di) {
        this.mipmaps = _set____db54di;
    };
    protoOf(Texture).fa = function () {
        return this.mipmaps;
    };
    protoOf(Texture).ga = function (_set____db54di) {
        this.format = _set____db54di;
    };
    protoOf(Texture).ha = function () {
        return this.format;
    };
    protoOf(Texture).ia = function (_set____db54di) {
        this.anisotropy = _set____db54di;
    };
    protoOf(Texture).ja = function () {
        return this.anisotropy;
    };
    function TextureFiltering_NEAREST_getInstance() {
        TextureFiltering_initEntries();
        return TextureFiltering_NEAREST_instance;
    }
    function TextureFiltering_LINEAR_getInstance() {
        TextureFiltering_initEntries();
        return TextureFiltering_LINEAR_instance;
    }
    function TextureFiltering_NEAREST_MIPMAP_NEAREST_getInstance() {
        TextureFiltering_initEntries();
        return TextureFiltering_NEAREST_MIPMAP_NEAREST_instance;
    }
    function TextureFiltering_LINEAR_MIPMAP_NEAREST_getInstance() {
        TextureFiltering_initEntries();
        return TextureFiltering_LINEAR_MIPMAP_NEAREST_instance;
    }
    function TextureFiltering_NEAREST_MIPMAP_LINEAR_getInstance() {
        TextureFiltering_initEntries();
        return TextureFiltering_NEAREST_MIPMAP_LINEAR_instance;
    }
    function TextureFiltering_LINEAR_MIPMAP_LINEAR_getInstance() {
        TextureFiltering_initEntries();
        return TextureFiltering_LINEAR_MIPMAP_LINEAR_instance;
    }
    function TextureWrapping_CLAMP_TO_EDGE_getInstance() {
        TextureWrapping_initEntries();
        return TextureWrapping_CLAMP_TO_EDGE_instance;
    }
    function TextureWrapping_MIRRORED_REPEAT_getInstance() {
        TextureWrapping_initEntries();
        return TextureWrapping_MIRRORED_REPEAT_instance;
    }
    function TextureWrapping_REPEAT_getInstance() {
        TextureWrapping_initEntries();
        return TextureWrapping_REPEAT_instance;
    }
    function TextureFormat_RGBA8_getInstance() {
        TextureFormat_initEntries();
        return TextureFormat_RGBA8_instance;
    }
    function TextureFormat_RGB8_getInstance() {
        TextureFormat_initEntries();
        return TextureFormat_RGB8_instance;
    }
    function TextureFormat_RGB16F_getInstance() {
        TextureFormat_initEntries();
        return TextureFormat_RGB16F_instance;
    }
    function TextureFormat_RGB32F_getInstance() {
        TextureFormat_initEntries();
        return TextureFormat_RGB32F_instance;
    }
    function TextureFormat_RGBA16F_getInstance() {
        TextureFormat_initEntries();
        return TextureFormat_RGBA16F_instance;
    }
    function TextureFormat_RGBA32F_getInstance() {
        TextureFormat_initEntries();
        return TextureFormat_RGBA32F_instance;
    }
    function TextureFormat_ASTC_getInstance() {
        TextureFormat_initEntries();
        return TextureFormat_ASTC_instance;
    }
    function UniformValue() {
    }
    function UniformFloatValue(value) {
        UniformValue.call(this);
        this.value = value;
    }
    protoOf(UniformFloatValue).ka = function (_set____db54di) {
        this.value = _set____db54di;
    };
    protoOf(UniformFloatValue).k2 = function () {
        return this.value;
    };
    function UniformIntValue(value) {
        UniformValue.call(this);
        this.value = value;
    }
    protoOf(UniformIntValue).la = function (_set____db54di) {
        this.value = _set____db54di;
    };
    protoOf(UniformIntValue).k2 = function () {
        return this.value;
    };
    function UniformTextureValue(value) {
        UniformValue.call(this);
        this.value = value;
    }
    protoOf(UniformTextureValue).ma = function (_set____db54di) {
        this.value = _set____db54di;
    };
    protoOf(UniformTextureValue).k2 = function () {
        return this.value;
    };
    function setUniform(uniform, values) {
        // Inline function 'kotlin.collections.copyInto' call
        var destination = (uniform instanceof UniformFloatValue ? uniform : THROW_CCE()).value;
        var endIndex = values.length;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp = values;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp, destination, 0, 0, endIndex);
    }
    function setUniform_0(uniform, x, y, z, w) {
        var uniformFloat = uniform instanceof UniformFloatValue ? uniform : THROW_CCE();
        uniformFloat.value[0] = x;
        uniformFloat.value[1] = y;
        uniformFloat.value[2] = z;
        uniformFloat.value[3] = w;
    }
    function setUniform_1(uniform, x) {
        var uniformInt = uniform instanceof UniformIntValue ? uniform : THROW_CCE();
        uniformInt.value[0] = x;
    }
    function setUniform_2(uniform, x) {
        var uniformFloat = uniform instanceof UniformFloatValue ? uniform : THROW_CCE();
        uniformFloat.value[0] = x;
    }
    var VertexFormat_UBYTE_instance;
    var VertexFormat_UBYTE2_instance;
    var VertexFormat_UBYTE3_instance;
    var VertexFormat_UBYTE4_instance;
    var VertexFormat_BYTE_instance;
    var VertexFormat_BYTE2_instance;
    var VertexFormat_BYTE3_instance;
    var VertexFormat_BYTE4_instance;
    var VertexFormat_UBYTE_NORMALIZED_instance;
    var VertexFormat_UBYTE2_NORMALIZED_instance;
    var VertexFormat_UBYTE3_NORMALIZED_instance;
    var VertexFormat_UBYTE4_NORMALIZED_instance;
    var VertexFormat_BYTE_NORMALIZED_instance;
    var VertexFormat_BYTE2_NORMALIZED_instance;
    var VertexFormat_BYTE3_NORMALIZED_instance;
    var VertexFormat_BYTE4_NORMALIZED_instance;
    var VertexFormat_USHORT_instance;
    var VertexFormat_USHORT2_instance;
    var VertexFormat_USHORT3_instance;
    var VertexFormat_USHORT4_instance;
    var VertexFormat_SHORT_instance;
    var VertexFormat_SHORT2_instance;
    var VertexFormat_SHORT3_instance;
    var VertexFormat_SHORT4_instance;
    var VertexFormat_USHORT_NORMALIZED_instance;
    var VertexFormat_USHORT2_NORMALIZED_instance;
    var VertexFormat_USHORT3_NORMALIZED_instance;
    var VertexFormat_USHORT4_NORMALIZED_instance;
    var VertexFormat_SHORT_NORMALIZED_instance;
    var VertexFormat_SHORT2_NORMALIZED_instance;
    var VertexFormat_SHORT3_NORMALIZED_instance;
    var VertexFormat_SHORT4_NORMALIZED_instance;
    var VertexFormat_HALF_instance;
    var VertexFormat_HALF2_instance;
    var VertexFormat_HALF3_instance;
    var VertexFormat_HALF4_instance;
    var VertexFormat_FLOAT_instance;
    var VertexFormat_FLOAT2_instance;
    var VertexFormat_FLOAT3_instance;
    var VertexFormat_FLOAT4_instance;
    var VertexFormat_UINT_instance;
    var VertexFormat_UINT2_instance;
    var VertexFormat_UINT3_instance;
    var VertexFormat_UINT4_instance;
    var VertexFormat_INT_instance;
    var VertexFormat_INT2_instance;
    var VertexFormat_INT3_instance;
    var VertexFormat_INT4_instance;
    var VertexFormat_INT_1010102_NORMALIZED_instance;
    var VertexFormat_UINT_1010102_NORMALIZED_instance;
    function values_6() {
        return [VertexFormat_UBYTE_getInstance(), VertexFormat_UBYTE2_getInstance(), VertexFormat_UBYTE3_getInstance(), VertexFormat_UBYTE4_getInstance(), VertexFormat_BYTE_getInstance(), VertexFormat_BYTE2_getInstance(), VertexFormat_BYTE3_getInstance(), VertexFormat_BYTE4_getInstance(), VertexFormat_UBYTE_NORMALIZED_getInstance(), VertexFormat_UBYTE2_NORMALIZED_getInstance(), VertexFormat_UBYTE3_NORMALIZED_getInstance(), VertexFormat_UBYTE4_NORMALIZED_getInstance(), VertexFormat_BYTE_NORMALIZED_getInstance(), VertexFormat_BYTE2_NORMALIZED_getInstance(), VertexFormat_BYTE3_NORMALIZED_getInstance(), VertexFormat_BYTE4_NORMALIZED_getInstance(), VertexFormat_USHORT_getInstance(), VertexFormat_USHORT2_getInstance(), VertexFormat_USHORT3_getInstance(), VertexFormat_USHORT4_getInstance(), VertexFormat_SHORT_getInstance(), VertexFormat_SHORT2_getInstance(), VertexFormat_SHORT3_getInstance(), VertexFormat_SHORT4_getInstance(), VertexFormat_USHORT_NORMALIZED_getInstance(), VertexFormat_USHORT2_NORMALIZED_getInstance(), VertexFormat_USHORT3_NORMALIZED_getInstance(), VertexFormat_USHORT4_NORMALIZED_getInstance(), VertexFormat_SHORT_NORMALIZED_getInstance(), VertexFormat_SHORT2_NORMALIZED_getInstance(), VertexFormat_SHORT3_NORMALIZED_getInstance(), VertexFormat_SHORT4_NORMALIZED_getInstance(), VertexFormat_HALF_getInstance(), VertexFormat_HALF2_getInstance(), VertexFormat_HALF3_getInstance(), VertexFormat_HALF4_getInstance(), VertexFormat_FLOAT_getInstance(), VertexFormat_FLOAT2_getInstance(), VertexFormat_FLOAT3_getInstance(), VertexFormat_FLOAT4_getInstance(), VertexFormat_UINT_getInstance(), VertexFormat_UINT2_getInstance(), VertexFormat_UINT3_getInstance(), VertexFormat_UINT4_getInstance(), VertexFormat_INT_getInstance(), VertexFormat_INT2_getInstance(), VertexFormat_INT3_getInstance(), VertexFormat_INT4_getInstance(), VertexFormat_INT_1010102_NORMALIZED_getInstance(), VertexFormat_UINT_1010102_NORMALIZED_getInstance()];
    }
    function valueOf_6(value) {
        switch (value) {
            case 'UBYTE':
                return VertexFormat_UBYTE_getInstance();
            case 'UBYTE2':
                return VertexFormat_UBYTE2_getInstance();
            case 'UBYTE3':
                return VertexFormat_UBYTE3_getInstance();
            case 'UBYTE4':
                return VertexFormat_UBYTE4_getInstance();
            case 'BYTE':
                return VertexFormat_BYTE_getInstance();
            case 'BYTE2':
                return VertexFormat_BYTE2_getInstance();
            case 'BYTE3':
                return VertexFormat_BYTE3_getInstance();
            case 'BYTE4':
                return VertexFormat_BYTE4_getInstance();
            case 'UBYTE_NORMALIZED':
                return VertexFormat_UBYTE_NORMALIZED_getInstance();
            case 'UBYTE2_NORMALIZED':
                return VertexFormat_UBYTE2_NORMALIZED_getInstance();
            case 'UBYTE3_NORMALIZED':
                return VertexFormat_UBYTE3_NORMALIZED_getInstance();
            case 'UBYTE4_NORMALIZED':
                return VertexFormat_UBYTE4_NORMALIZED_getInstance();
            case 'BYTE_NORMALIZED':
                return VertexFormat_BYTE_NORMALIZED_getInstance();
            case 'BYTE2_NORMALIZED':
                return VertexFormat_BYTE2_NORMALIZED_getInstance();
            case 'BYTE3_NORMALIZED':
                return VertexFormat_BYTE3_NORMALIZED_getInstance();
            case 'BYTE4_NORMALIZED':
                return VertexFormat_BYTE4_NORMALIZED_getInstance();
            case 'USHORT':
                return VertexFormat_USHORT_getInstance();
            case 'USHORT2':
                return VertexFormat_USHORT2_getInstance();
            case 'USHORT3':
                return VertexFormat_USHORT3_getInstance();
            case 'USHORT4':
                return VertexFormat_USHORT4_getInstance();
            case 'SHORT':
                return VertexFormat_SHORT_getInstance();
            case 'SHORT2':
                return VertexFormat_SHORT2_getInstance();
            case 'SHORT3':
                return VertexFormat_SHORT3_getInstance();
            case 'SHORT4':
                return VertexFormat_SHORT4_getInstance();
            case 'USHORT_NORMALIZED':
                return VertexFormat_USHORT_NORMALIZED_getInstance();
            case 'USHORT2_NORMALIZED':
                return VertexFormat_USHORT2_NORMALIZED_getInstance();
            case 'USHORT3_NORMALIZED':
                return VertexFormat_USHORT3_NORMALIZED_getInstance();
            case 'USHORT4_NORMALIZED':
                return VertexFormat_USHORT4_NORMALIZED_getInstance();
            case 'SHORT_NORMALIZED':
                return VertexFormat_SHORT_NORMALIZED_getInstance();
            case 'SHORT2_NORMALIZED':
                return VertexFormat_SHORT2_NORMALIZED_getInstance();
            case 'SHORT3_NORMALIZED':
                return VertexFormat_SHORT3_NORMALIZED_getInstance();
            case 'SHORT4_NORMALIZED':
                return VertexFormat_SHORT4_NORMALIZED_getInstance();
            case 'HALF':
                return VertexFormat_HALF_getInstance();
            case 'HALF2':
                return VertexFormat_HALF2_getInstance();
            case 'HALF3':
                return VertexFormat_HALF3_getInstance();
            case 'HALF4':
                return VertexFormat_HALF4_getInstance();
            case 'FLOAT':
                return VertexFormat_FLOAT_getInstance();
            case 'FLOAT2':
                return VertexFormat_FLOAT2_getInstance();
            case 'FLOAT3':
                return VertexFormat_FLOAT3_getInstance();
            case 'FLOAT4':
                return VertexFormat_FLOAT4_getInstance();
            case 'UINT':
                return VertexFormat_UINT_getInstance();
            case 'UINT2':
                return VertexFormat_UINT2_getInstance();
            case 'UINT3':
                return VertexFormat_UINT3_getInstance();
            case 'UINT4':
                return VertexFormat_UINT4_getInstance();
            case 'INT':
                return VertexFormat_INT_getInstance();
            case 'INT2':
                return VertexFormat_INT2_getInstance();
            case 'INT3':
                return VertexFormat_INT3_getInstance();
            case 'INT4':
                return VertexFormat_INT4_getInstance();
            case 'INT_1010102_NORMALIZED':
                return VertexFormat_INT_1010102_NORMALIZED_getInstance();
            case 'UINT_1010102_NORMALIZED':
                return VertexFormat_UINT_1010102_NORMALIZED_getInstance();
            default:
                VertexFormat_initEntries();
                THROW_IAE('No enum constant value.');
                break;
        }
    }
    var VertexFormat_entriesInitialized;
    function VertexFormat_initEntries() {
        if (VertexFormat_entriesInitialized)
            return Unit_instance;
        VertexFormat_entriesInitialized = true;
        VertexFormat_UBYTE_instance = new VertexFormat('UBYTE', 0, 0);
        VertexFormat_UBYTE2_instance = new VertexFormat('UBYTE2', 1, 1);
        VertexFormat_UBYTE3_instance = new VertexFormat('UBYTE3', 2, 2);
        VertexFormat_UBYTE4_instance = new VertexFormat('UBYTE4', 3, 3);
        VertexFormat_BYTE_instance = new VertexFormat('BYTE', 4, 4);
        VertexFormat_BYTE2_instance = new VertexFormat('BYTE2', 5, 5);
        VertexFormat_BYTE3_instance = new VertexFormat('BYTE3', 6, 6);
        VertexFormat_BYTE4_instance = new VertexFormat('BYTE4', 7, 7);
        VertexFormat_UBYTE_NORMALIZED_instance = new VertexFormat('UBYTE_NORMALIZED', 8, 8);
        VertexFormat_UBYTE2_NORMALIZED_instance = new VertexFormat('UBYTE2_NORMALIZED', 9, 9);
        VertexFormat_UBYTE3_NORMALIZED_instance = new VertexFormat('UBYTE3_NORMALIZED', 10, 10);
        VertexFormat_UBYTE4_NORMALIZED_instance = new VertexFormat('UBYTE4_NORMALIZED', 11, 11);
        VertexFormat_BYTE_NORMALIZED_instance = new VertexFormat('BYTE_NORMALIZED', 12, 12);
        VertexFormat_BYTE2_NORMALIZED_instance = new VertexFormat('BYTE2_NORMALIZED', 13, 13);
        VertexFormat_BYTE3_NORMALIZED_instance = new VertexFormat('BYTE3_NORMALIZED', 14, 14);
        VertexFormat_BYTE4_NORMALIZED_instance = new VertexFormat('BYTE4_NORMALIZED', 15, 15);
        VertexFormat_USHORT_instance = new VertexFormat('USHORT', 16, 16);
        VertexFormat_USHORT2_instance = new VertexFormat('USHORT2', 17, 17);
        VertexFormat_USHORT3_instance = new VertexFormat('USHORT3', 18, 18);
        VertexFormat_USHORT4_instance = new VertexFormat('USHORT4', 19, 19);
        VertexFormat_SHORT_instance = new VertexFormat('SHORT', 20, 20);
        VertexFormat_SHORT2_instance = new VertexFormat('SHORT2', 21, 21);
        VertexFormat_SHORT3_instance = new VertexFormat('SHORT3', 22, 22);
        VertexFormat_SHORT4_instance = new VertexFormat('SHORT4', 23, 23);
        VertexFormat_USHORT_NORMALIZED_instance = new VertexFormat('USHORT_NORMALIZED', 24, 24);
        VertexFormat_USHORT2_NORMALIZED_instance = new VertexFormat('USHORT2_NORMALIZED', 25, 25);
        VertexFormat_USHORT3_NORMALIZED_instance = new VertexFormat('USHORT3_NORMALIZED', 26, 26);
        VertexFormat_USHORT4_NORMALIZED_instance = new VertexFormat('USHORT4_NORMALIZED', 27, 27);
        VertexFormat_SHORT_NORMALIZED_instance = new VertexFormat('SHORT_NORMALIZED', 28, 28);
        VertexFormat_SHORT2_NORMALIZED_instance = new VertexFormat('SHORT2_NORMALIZED', 29, 29);
        VertexFormat_SHORT3_NORMALIZED_instance = new VertexFormat('SHORT3_NORMALIZED', 30, 30);
        VertexFormat_SHORT4_NORMALIZED_instance = new VertexFormat('SHORT4_NORMALIZED', 31, 31);
        VertexFormat_HALF_instance = new VertexFormat('HALF', 32, 32);
        VertexFormat_HALF2_instance = new VertexFormat('HALF2', 33, 33);
        VertexFormat_HALF3_instance = new VertexFormat('HALF3', 34, 34);
        VertexFormat_HALF4_instance = new VertexFormat('HALF4', 35, 35);
        VertexFormat_FLOAT_instance = new VertexFormat('FLOAT', 36, 36);
        VertexFormat_FLOAT2_instance = new VertexFormat('FLOAT2', 37, 37);
        VertexFormat_FLOAT3_instance = new VertexFormat('FLOAT3', 38, 38);
        VertexFormat_FLOAT4_instance = new VertexFormat('FLOAT4', 39, 39);
        VertexFormat_UINT_instance = new VertexFormat('UINT', 40, 40);
        VertexFormat_UINT2_instance = new VertexFormat('UINT2', 41, 41);
        VertexFormat_UINT3_instance = new VertexFormat('UINT3', 42, 42);
        VertexFormat_UINT4_instance = new VertexFormat('UINT4', 43, 43);
        VertexFormat_INT_instance = new VertexFormat('INT', 44, 44);
        VertexFormat_INT2_instance = new VertexFormat('INT2', 45, 45);
        VertexFormat_INT3_instance = new VertexFormat('INT3', 46, 46);
        VertexFormat_INT4_instance = new VertexFormat('INT4', 47, 47);
        VertexFormat_INT_1010102_NORMALIZED_instance = new VertexFormat('INT_1010102_NORMALIZED', 48, 48);
        VertexFormat_UINT_1010102_NORMALIZED_instance = new VertexFormat('UINT_1010102_NORMALIZED', 49, 49);
    }
    function VertexFormat(name, ordinal, value) {
        Enum.call(this, name, ordinal);
    }
    function VertexAttribute(index, format, offset) {
        this.index = index;
        this.format = format;
        this.offset = offset;
    }
    protoOf(VertexAttribute).pa = function () {
        return this.index;
    };
    protoOf(VertexAttribute).ha = function () {
        return this.format;
    };
    protoOf(VertexAttribute).qa = function () {
        return this.offset;
    };
    protoOf(VertexAttribute).g5 = function () {
        return this.index;
    };
    protoOf(VertexAttribute).h5 = function () {
        return this.format;
    };
    protoOf(VertexAttribute).ra = function () {
        return this.offset;
    };
    protoOf(VertexAttribute).sa = function (index, format, offset) {
        return new VertexAttribute(index, format, offset);
    };
    protoOf(VertexAttribute).copy = function (index, format, offset, $super) {
        index = index === VOID ? this.index : index;
        format = format === VOID ? this.format : format;
        offset = offset === VOID ? this.offset : offset;
        return this.sa(index, format, offset);
    };
    protoOf(VertexAttribute).toString = function () {
        return 'VertexAttribute(index=' + this.index + ', format=' + this.format + ', offset=' + this.offset + ')';
    };
    protoOf(VertexAttribute).hashCode = function () {
        var result = this.index;
        result = imul(result, 31) + this.format.hashCode() | 0;
        result = imul(result, 31) + this.offset | 0;
        return result;
    };
    protoOf(VertexAttribute).equals = function (other) {
        if (this === other)
            return true;
        if (!(other instanceof VertexAttribute))
            return false;
        var tmp0_other_with_cast = other instanceof VertexAttribute ? other : THROW_CCE();
        if (!(this.index === tmp0_other_with_cast.index))
            return false;
        if (!this.format.equals(tmp0_other_with_cast.format))
            return false;
        if (!(this.offset === tmp0_other_with_cast.offset))
            return false;
        return true;
    };
    function VertexAttributesDescriptor(attributes, stride) {
        this.attributes = attributes;
        this.stride = stride;
    }
    protoOf(VertexAttributesDescriptor).ta = function () {
        return this.attributes;
    };
    protoOf(VertexAttributesDescriptor).ua = function () {
        return this.stride;
    };
    protoOf(VertexAttributesDescriptor).g5 = function () {
        return this.attributes;
    };
    protoOf(VertexAttributesDescriptor).h5 = function () {
        return this.stride;
    };
    protoOf(VertexAttributesDescriptor).va = function (attributes, stride) {
        return new VertexAttributesDescriptor(attributes, stride);
    };
    protoOf(VertexAttributesDescriptor).copy = function (attributes, stride, $super) {
        attributes = attributes === VOID ? this.attributes : attributes;
        stride = stride === VOID ? this.stride : stride;
        return this.va(attributes, stride);
    };
    protoOf(VertexAttributesDescriptor).toString = function () {
        return 'VertexAttributesDescriptor(attributes=' + this.attributes + ', stride=' + this.stride + ')';
    };
    protoOf(VertexAttributesDescriptor).hashCode = function () {
        var result = hashCode(this.attributes);
        result = imul(result, 31) + this.stride | 0;
        return result;
    };
    protoOf(VertexAttributesDescriptor).equals = function (other) {
        if (this === other)
            return true;
        if (!(other instanceof VertexAttributesDescriptor))
            return false;
        var tmp0_other_with_cast = other instanceof VertexAttributesDescriptor ? other : THROW_CCE();
        if (!equals(this.attributes, tmp0_other_with_cast.attributes))
            return false;
        if (!(this.stride === tmp0_other_with_cast.stride))
            return false;
        return true;
    };
    function VertexFormat_UBYTE_getInstance() {
        VertexFormat_initEntries();
        return VertexFormat_UBYTE_instance;
    }
    function VertexFormat_UBYTE2_getInstance() {
        VertexFormat_initEntries();
        return VertexFormat_UBYTE2_instance;
    }
    function VertexFormat_UBYTE3_getInstance() {
        VertexFormat_initEntries();
        return VertexFormat_UBYTE3_instance;
    }
    function VertexFormat_UBYTE4_getInstance() {
        VertexFormat_initEntries();
        return VertexFormat_UBYTE4_instance;
    }
    function VertexFormat_BYTE_getInstance() {
        VertexFormat_initEntries();
        return VertexFormat_BYTE_instance;
    }
    function VertexFormat_BYTE2_getInstance() {
        VertexFormat_initEntries();
        return VertexFormat_BYTE2_instance;
    }
    function VertexFormat_BYTE3_getInstance() {
        VertexFormat_initEntries();
        return VertexFormat_BYTE3_instance;
    }
    function VertexFormat_BYTE4_getInstance() {
        VertexFormat_initEntries();
        return VertexFormat_BYTE4_instance;
    }
    function VertexFormat_UBYTE_NORMALIZED_getInstance() {
        VertexFormat_initEntries();
        return VertexFormat_UBYTE_NORMALIZED_instance;
    }
    function VertexFormat_UBYTE2_NORMALIZED_getInstance() {
        VertexFormat_initEntries();
        return VertexFormat_UBYTE2_NORMALIZED_instance;
    }
    function VertexFormat_UBYTE3_NORMALIZED_getInstance() {
        VertexFormat_initEntries();
        return VertexFormat_UBYTE3_NORMALIZED_instance;
    }
    function VertexFormat_UBYTE4_NORMALIZED_getInstance() {
        VertexFormat_initEntries();
        return VertexFormat_UBYTE4_NORMALIZED_instance;
    }
    function VertexFormat_BYTE_NORMALIZED_getInstance() {
        VertexFormat_initEntries();
        return VertexFormat_BYTE_NORMALIZED_instance;
    }
    function VertexFormat_BYTE2_NORMALIZED_getInstance() {
        VertexFormat_initEntries();
        return VertexFormat_BYTE2_NORMALIZED_instance;
    }
    function VertexFormat_BYTE3_NORMALIZED_getInstance() {
        VertexFormat_initEntries();
        return VertexFormat_BYTE3_NORMALIZED_instance;
    }
    function VertexFormat_BYTE4_NORMALIZED_getInstance() {
        VertexFormat_initEntries();
        return VertexFormat_BYTE4_NORMALIZED_instance;
    }
    function VertexFormat_USHORT_getInstance() {
        VertexFormat_initEntries();
        return VertexFormat_USHORT_instance;
    }
    function VertexFormat_USHORT2_getInstance() {
        VertexFormat_initEntries();
        return VertexFormat_USHORT2_instance;
    }
    function VertexFormat_USHORT3_getInstance() {
        VertexFormat_initEntries();
        return VertexFormat_USHORT3_instance;
    }
    function VertexFormat_USHORT4_getInstance() {
        VertexFormat_initEntries();
        return VertexFormat_USHORT4_instance;
    }
    function VertexFormat_SHORT_getInstance() {
        VertexFormat_initEntries();
        return VertexFormat_SHORT_instance;
    }
    function VertexFormat_SHORT2_getInstance() {
        VertexFormat_initEntries();
        return VertexFormat_SHORT2_instance;
    }
    function VertexFormat_SHORT3_getInstance() {
        VertexFormat_initEntries();
        return VertexFormat_SHORT3_instance;
    }
    function VertexFormat_SHORT4_getInstance() {
        VertexFormat_initEntries();
        return VertexFormat_SHORT4_instance;
    }
    function VertexFormat_USHORT_NORMALIZED_getInstance() {
        VertexFormat_initEntries();
        return VertexFormat_USHORT_NORMALIZED_instance;
    }
    function VertexFormat_USHORT2_NORMALIZED_getInstance() {
        VertexFormat_initEntries();
        return VertexFormat_USHORT2_NORMALIZED_instance;
    }
    function VertexFormat_USHORT3_NORMALIZED_getInstance() {
        VertexFormat_initEntries();
        return VertexFormat_USHORT3_NORMALIZED_instance;
    }
    function VertexFormat_USHORT4_NORMALIZED_getInstance() {
        VertexFormat_initEntries();
        return VertexFormat_USHORT4_NORMALIZED_instance;
    }
    function VertexFormat_SHORT_NORMALIZED_getInstance() {
        VertexFormat_initEntries();
        return VertexFormat_SHORT_NORMALIZED_instance;
    }
    function VertexFormat_SHORT2_NORMALIZED_getInstance() {
        VertexFormat_initEntries();
        return VertexFormat_SHORT2_NORMALIZED_instance;
    }
    function VertexFormat_SHORT3_NORMALIZED_getInstance() {
        VertexFormat_initEntries();
        return VertexFormat_SHORT3_NORMALIZED_instance;
    }
    function VertexFormat_SHORT4_NORMALIZED_getInstance() {
        VertexFormat_initEntries();
        return VertexFormat_SHORT4_NORMALIZED_instance;
    }
    function VertexFormat_HALF_getInstance() {
        VertexFormat_initEntries();
        return VertexFormat_HALF_instance;
    }
    function VertexFormat_HALF2_getInstance() {
        VertexFormat_initEntries();
        return VertexFormat_HALF2_instance;
    }
    function VertexFormat_HALF3_getInstance() {
        VertexFormat_initEntries();
        return VertexFormat_HALF3_instance;
    }
    function VertexFormat_HALF4_getInstance() {
        VertexFormat_initEntries();
        return VertexFormat_HALF4_instance;
    }
    function VertexFormat_FLOAT_getInstance() {
        VertexFormat_initEntries();
        return VertexFormat_FLOAT_instance;
    }
    function VertexFormat_FLOAT2_getInstance() {
        VertexFormat_initEntries();
        return VertexFormat_FLOAT2_instance;
    }
    function VertexFormat_FLOAT3_getInstance() {
        VertexFormat_initEntries();
        return VertexFormat_FLOAT3_instance;
    }
    function VertexFormat_FLOAT4_getInstance() {
        VertexFormat_initEntries();
        return VertexFormat_FLOAT4_instance;
    }
    function VertexFormat_UINT_getInstance() {
        VertexFormat_initEntries();
        return VertexFormat_UINT_instance;
    }
    function VertexFormat_UINT2_getInstance() {
        VertexFormat_initEntries();
        return VertexFormat_UINT2_instance;
    }
    function VertexFormat_UINT3_getInstance() {
        VertexFormat_initEntries();
        return VertexFormat_UINT3_instance;
    }
    function VertexFormat_UINT4_getInstance() {
        VertexFormat_initEntries();
        return VertexFormat_UINT4_instance;
    }
    function VertexFormat_INT_getInstance() {
        VertexFormat_initEntries();
        return VertexFormat_INT_instance;
    }
    function VertexFormat_INT2_getInstance() {
        VertexFormat_initEntries();
        return VertexFormat_INT2_instance;
    }
    function VertexFormat_INT3_getInstance() {
        VertexFormat_initEntries();
        return VertexFormat_INT3_instance;
    }
    function VertexFormat_INT4_getInstance() {
        VertexFormat_initEntries();
        return VertexFormat_INT4_instance;
    }
    function VertexFormat_INT_1010102_NORMALIZED_getInstance() {
        VertexFormat_initEntries();
        return VertexFormat_INT_1010102_NORMALIZED_instance;
    }
    function VertexFormat_UINT_1010102_NORMALIZED_getInstance() {
        VertexFormat_initEntries();
        return VertexFormat_UINT_1010102_NORMALIZED_instance;
    }
    function TextureAnimationChunked(textureWidth, vertices, frames) {
        this.wa_1 = textureWidth;
        this.xa_1 = frames;
        this.ya_1 = 1.0 / this.wa_1 * 0.5;
        var tmp = this;
        // Inline function 'kotlin.math.ceil' call
        var x = vertices / this.wa_1;
        var tmp$ret$0 = Math.ceil(x);
        tmp.bb_1 = imul(numberToInt(tmp$ret$0), this.xa_1 + 1 | 0);
        this.za_1 = 1.0 / this.bb_1 * 0.5;
        this.ab_1 = 1.0 / this.bb_1;
        var tmp_0 = this;
        // Inline function 'kotlin.math.ceil' call
        var x_0 = vertices / this.wa_1;
        tmp_0.cb_1 = 1.0 / Math.ceil(x_0);
    }
    protoOf(TextureAnimationChunked).db = function (timer) {
        var coeff = timer < 0.5 ? timer * 2 : (1 - timer) * 2;
        var y = this.ab_1 * coeff * (this.xa_1 - 1 | 0) + this.za_1;
        return y;
    };
    function updateCameraInterpolator($this) {
        var camera = $this.ib_1[$this.gb_1];
        $this.eb_1.setMinDuration($this.minDuration * $this.jb_1);
        $this.eb_1.setPosition(camera);
        $this.eb_1.reset();
    }
    function CameraPathAnimator(speed, minDuration, transitionDuration, isSmooth) {
        isSmooth = isSmooth === VOID ? false : isSmooth;
        this.speed = speed;
        this.minDuration = minDuration;
        this.transitionDuration = transitionDuration;
        this.enabled = true;
        this.eb_1 = new CameraPositionInterpolator(isSmooth);
        this.fb_1 = false;
        this.gb_1 = 0;
        this.hb_1 = CameraState_ANIMATING_getInstance();
        var tmp = this;
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp.ib_1 = [];
        this.jb_1 = 1.0;
        this.kb_1 = 0.0;
        this.eb_1.speed = this.speed;
        this.eb_1.setMinDuration(this.minDuration * this.jb_1);
    }
    protoOf(CameraPathAnimator).sb = function (_set____db54di) {
        this.speed = _set____db54di;
    };
    protoOf(CameraPathAnimator).tb = function () {
        return this.speed;
    };
    protoOf(CameraPathAnimator).ub = function (_set____db54di) {
        this.minDuration = _set____db54di;
    };
    protoOf(CameraPathAnimator).vb = function () {
        return this.minDuration;
    };
    protoOf(CameraPathAnimator).wb = function (_set____db54di) {
        this.transitionDuration = _set____db54di;
    };
    protoOf(CameraPathAnimator).xb = function () {
        return this.transitionDuration;
    };
    protoOf(CameraPathAnimator).e6 = function (_set____db54di) {
        this.enabled = _set____db54di;
    };
    protoOf(CameraPathAnimator).f6 = function () {
        return this.enabled;
    };
    protoOf(CameraPathAnimator).yb = function (value) {
        this.jb_1 = value;
        updateCameraInterpolator(this);
    };
    protoOf(CameraPathAnimator).zb = function () {
        return this.jb_1;
    };
    protoOf(CameraPathAnimator).enable = function () {
        this.enabled = true;
    };
    protoOf(CameraPathAnimator).disable = function () {
        this.enabled = false;
    };
    protoOf(CameraPathAnimator).ac = function () {
        return this.eb_1;
    };
    protoOf(CameraPathAnimator).bc = function () {
        return this.eb_1.timer;
    };
    protoOf(CameraPathAnimator).cc = function () {
        return this.hb_1;
    };
    protoOf(CameraPathAnimator).dc = function (value, randomizeCamera) {
        this.ib_1 = value;
        this.gb_1 = 0;
        updateCameraInterpolator(this);
        if (randomizeCamera) {
            this.randomCamera();
        }
    };
    protoOf(CameraPathAnimator).setCameras = function (value, randomizeCamera, $super) {
        randomizeCamera = randomizeCamera === VOID ? false : randomizeCamera;
        return this.dc(value, randomizeCamera);
    };
    protoOf(CameraPathAnimator).ec = function () {
        return this.ib_1[this.gb_1];
    };
    protoOf(CameraPathAnimator).nextCamera = function () {
        if (!this.enabled) {
            return Unit_instance;
        }
        this.setCameraState(CameraState_TRANSITIONING_getInstance());
    };
    protoOf(CameraPathAnimator).randomCamera = function () {
        this.gb_1 = MathUtils_instance.fc(this.ib_1.length, this.gb_1);
        updateCameraInterpolator(this);
    };
    protoOf(CameraPathAnimator).setCameraState = function (state) {
        if (this.hb_1 === CameraState_ANIMATING_getInstance() ? state === CameraState_TRANSITIONING_getInstance() : false) {
            this.gb_1 = this.gb_1 + 1 | 0;
            this.gb_1 = this.gb_1 % this.ib_1.length | 0;
            var camera = this.ib_1[this.gb_1];
            this.eb_1.setMinDuration(this.transitionDuration);
            this.eb_1.setPosition(new CameraPositionPair(new CameraPosition(new Vec3(this.eb_1.cameraPosition.x, this.eb_1.cameraPosition.y, this.eb_1.cameraPosition.z), new Vec3(this.eb_1.cameraRotation.x, this.eb_1.cameraRotation.y, this.eb_1.cameraRotation.z)), new CameraPosition(new Vec3((camera.jc_1.gc_1.x - camera.ic_1.gc_1.x) / 2.0 + camera.ic_1.gc_1.x, (camera.jc_1.gc_1.y - camera.ic_1.gc_1.y) / 2.0 + camera.ic_1.gc_1.y, (camera.jc_1.gc_1.z - camera.ic_1.gc_1.z) / 2.0 + camera.ic_1.gc_1.z), new Vec3((camera.jc_1.hc_1.x - camera.ic_1.hc_1.x) / 2.0 + camera.ic_1.hc_1.x, (camera.jc_1.hc_1.y - camera.ic_1.hc_1.y) / 2.0 + camera.ic_1.hc_1.y, (camera.jc_1.hc_1.z - camera.ic_1.hc_1.z) / 2.0 + camera.ic_1.hc_1.z))));
            this.fb_1 = this.eb_1.reverse;
            this.eb_1.reverse = false;
            this.eb_1.reset();
        }
        else if (this.hb_1 === CameraState_TRANSITIONING_getInstance() ? state === CameraState_ANIMATING_getInstance() : false) {
            updateCameraInterpolator(this);
            this.eb_1.reverse = this.fb_1;
            this.eb_1.setTimer(0.5);
        }
        this.hb_1 = state;
    };
    protoOf(CameraPathAnimator).animate = function (timeNow) {
        if (!(this.kb_1 === 0.0)) {
            this.eb_1.iterate(timeNow);
            if (this.eb_1.timer === 1.0) {
                if (this.hb_1 === CameraState_ANIMATING_getInstance()) {
                    this.eb_1.reverse = !this.eb_1.reverse;
                    this.eb_1.reset();
                }
                else {
                    this.setCameraState(CameraState_ANIMATING_getInstance());
                }
            }
        }
        this.kb_1 = timeNow;
    };
    protoOf(CameraPathAnimator).changeDirection = function (impulse) {
        if (this.hb_1 === CameraState_TRANSITIONING_getInstance()) {
            return Unit_instance;
        }
        var prevReverse = this.eb_1.reverse;
        if (impulse < 0.0) {
            if (prevReverse) {
                this.eb_1.reverse = false;
                this.eb_1.setTimer(1.0 - this.eb_1.timer);
            }
        }
        else {
            if (!prevReverse) {
                this.eb_1.reverse = true;
                this.eb_1.setTimer(1.0 - this.eb_1.timer);
            }
        }
    };
    function CameraPosition(position, rotation) {
        this.gc_1 = position;
        this.hc_1 = rotation;
    }
    protoOf(CameraPosition).toString = function () {
        return 'CameraPosition(position=' + this.gc_1 + ', rotation=' + this.hc_1 + ')';
    };
    protoOf(CameraPosition).hashCode = function () {
        var result = this.gc_1.hashCode();
        result = imul(result, 31) + this.hc_1.hashCode() | 0;
        return result;
    };
    protoOf(CameraPosition).equals = function (other) {
        if (this === other)
            return true;
        if (!(other instanceof CameraPosition))
            return false;
        var tmp0_other_with_cast = other instanceof CameraPosition ? other : THROW_CCE();
        if (!this.gc_1.equals(tmp0_other_with_cast.gc_1))
            return false;
        if (!this.hc_1.equals(tmp0_other_with_cast.hc_1))
            return false;
        return true;
    };
    function _get_length__w7ahp7($this) {
        if ($this.lb_1 == null) {
            throw Exception_init_$Create$('position is not set');
        }
        var start = ensureNotNull($this.lb_1).ic_1.gc_1;
        var end = ensureNotNull($this.lb_1).jc_1.gc_1;
        // Inline function 'kotlin.math.sqrt' call
        // Inline function 'kotlin.math.pow' call
        var this_0 = end.x - start.x;
        var tmp = Math.pow(this_0, 2.0);
        // Inline function 'kotlin.math.pow' call
        var this_1 = end.y - start.y;
        var tmp_0 = tmp + Math.pow(this_1, 2.0);
        // Inline function 'kotlin.math.pow' call
        var this_2 = end.z - start.z;
        var x = tmp_0 + Math.pow(this_2, 2.0);
        return Math.sqrt(x);
    }
    function updateMatrix($this) {
        if ($this.lb_1 == null) {
            throw Exception_init_$Create$('position is not set');
        }
        var t = $this.timer;
        if ($this.isSmooth) {
            t = MathUtils_instance.lc(0.0, 1.0, $this.timer);
        }
        var start = $this.reverse ? ensureNotNull($this.lb_1).jc_1 : ensureNotNull($this.lb_1).ic_1;
        var end = $this.reverse ? ensureNotNull($this.lb_1).ic_1 : ensureNotNull($this.lb_1).jc_1;
        $this.qb_1.x = start.gc_1.x + t * (end.gc_1.x - start.gc_1.x);
        $this.qb_1.y = start.gc_1.y + t * (end.gc_1.y - start.gc_1.y);
        $this.qb_1.z = start.gc_1.z + t * (end.gc_1.z - start.gc_1.z);
        $this.rb_1.x = start.hc_1.x + t * (end.hc_1.x - start.hc_1.x);
        $this.rb_1.y = start.hc_1.y + t * (end.hc_1.y - start.hc_1.y);
        $this.rb_1.z = start.hc_1.z + t * (end.hc_1.z - start.hc_1.z);
        Matrix_getInstance().d9($this.matrix, 0);
        Matrix_getInstance().f9($this.matrix, 0, ($this.rb_1.x - 1.5707964) * 57.2958, 1.0, 0.0, 0.0);
        Matrix_getInstance().f9($this.matrix, 0, $this.rb_1.y * 57.2958, 0.0, 0.0, 1.0);
        Matrix_getInstance().f9($this.matrix, 0, $this.rb_1.z * 57.2958, 0.0, 1.0, 0.0);
        Matrix_getInstance().g9($this.matrix, 0, -$this.qb_1.x, -$this.qb_1.y, -$this.qb_1.z);
    }
    function Companion() {
        this.mc_1 = 1.5707964;
    }
    var Companion_instance;
    function Companion_getInstance() {
        return Companion_instance;
    }
    function CameraPositionInterpolator(isSmooth) {
        isSmooth = isSmooth === VOID ? false : isSmooth;
        this.isSmooth = isSmooth;
        this.lb_1 = null;
        this.speed = 0.0;
        this.mb_1 = 0.0;
        this.nb_1 = 3000.0;
        this.ob_1 = 0.0;
        this.timer = 0.0;
        this.pb_1 = 0.0;
        this.reverse = false;
        this.qb_1 = new Vec3(0.0, 0.0, 0.0);
        this.rb_1 = new Vec3(0.0, 0.0, 0.0);
        this.matrix = new Float32Array(16);
    }
    protoOf(CameraPositionInterpolator).nc = function (_set____db54di) {
        this.isSmooth = _set____db54di;
    };
    protoOf(CameraPositionInterpolator).oc = function () {
        return this.isSmooth;
    };
    protoOf(CameraPositionInterpolator).sb = function (_set____db54di) {
        this.speed = _set____db54di;
    };
    protoOf(CameraPositionInterpolator).tb = function () {
        return this.speed;
    };
    protoOf(CameraPositionInterpolator).bc = function () {
        return this.timer;
    };
    protoOf(CameraPositionInterpolator).pc = function (_set____db54di) {
        this.reverse = _set____db54di;
    };
    protoOf(CameraPositionInterpolator).qc = function () {
        return this.reverse;
    };
    protoOf(CameraPositionInterpolator).rc = function () {
        return this.matrix;
    };
    protoOf(CameraPositionInterpolator).sc = function () {
        return this.qb_1;
    };
    protoOf(CameraPositionInterpolator).tc = function () {
        return this.rb_1;
    };
    protoOf(CameraPositionInterpolator).setMinDuration = function (value) {
        this.nb_1 = value;
    };
    protoOf(CameraPositionInterpolator).setPosition = function (value) {
        this.lb_1 = value;
        var tmp = this;
        // Inline function 'kotlin.math.max' call
        var a = _get_length__w7ahp7(this) / this.speed;
        var b = this.nb_1;
        tmp.mb_1 = Math.max(a, b);
    };
    protoOf(CameraPositionInterpolator).setTimer = function (value) {
        this.ob_1 = value;
        this.timer = value;
        updateMatrix(this);
    };
    protoOf(CameraPositionInterpolator).iterate = function (timeNow) {
        if (!(this.pb_1 === 0.0)) {
            var elapsed = timeNow - this.pb_1;
            this.ob_1 = this.ob_1 + elapsed / this.mb_1;
            if (this.ob_1 > 1.0) {
                this.ob_1 = 1.0;
            }
        }
        this.timer = this.ob_1;
        this.pb_1 = timeNow;
        updateMatrix(this);
    };
    protoOf(CameraPositionInterpolator).reset = function () {
        this.pb_1 = 0.0;
        this.ob_1 = 0.0;
        this.timer = 0.0;
        updateMatrix(this);
    };
    function CameraPositionPair(start, end, speedMultiplier) {
        speedMultiplier = speedMultiplier === VOID ? 1.0 : speedMultiplier;
        this.ic_1 = start;
        this.jc_1 = end;
        this.kc_1 = speedMultiplier;
    }
    var CameraState_ANIMATING_instance;
    var CameraState_TRANSITIONING_instance;
    function values_7() {
        return [CameraState_ANIMATING_getInstance(), CameraState_TRANSITIONING_getInstance()];
    }
    function valueOf_7(value) {
        switch (value) {
            case 'ANIMATING':
                return CameraState_ANIMATING_getInstance();
            case 'TRANSITIONING':
                return CameraState_TRANSITIONING_getInstance();
            default:
                CameraState_initEntries();
                THROW_IAE('No enum constant value.');
                break;
        }
    }
    var CameraState_entriesInitialized;
    function CameraState_initEntries() {
        if (CameraState_entriesInitialized)
            return Unit_instance;
        CameraState_entriesInitialized = true;
        CameraState_ANIMATING_instance = new CameraState('ANIMATING', 0, 0);
        CameraState_TRANSITIONING_instance = new CameraState('TRANSITIONING', 1, 1);
    }
    function CameraState(name, ordinal, value) {
        Enum.call(this, name, ordinal);
        this.value = value;
    }
    protoOf(CameraState).k2 = function () {
        return this.value;
    };
    function CameraState_ANIMATING_getInstance() {
        CameraState_initEntries();
        return CameraState_ANIMATING_instance;
    }
    function CameraState_TRANSITIONING_getInstance() {
        CameraState_initEntries();
        return CameraState_TRANSITIONING_instance;
    }
    var BlurSize_KERNEL_5_instance;
    var BlurSize_KERNEL_4_instance;
    var BlurSize_KERNEL_3_instance;
    var BlurSize_KERNEL_2_instance;
    function values_8() {
        return [BlurSize_KERNEL_5_getInstance(), BlurSize_KERNEL_4_getInstance(), BlurSize_KERNEL_3_getInstance(), BlurSize_KERNEL_2_getInstance()];
    }
    function valueOf_8(value) {
        switch (value) {
            case 'KERNEL_5':
                return BlurSize_KERNEL_5_getInstance();
            case 'KERNEL_4':
                return BlurSize_KERNEL_4_getInstance();
            case 'KERNEL_3':
                return BlurSize_KERNEL_3_getInstance();
            case 'KERNEL_2':
                return BlurSize_KERNEL_2_getInstance();
            default:
                BlurSize_initEntries();
                THROW_IAE('No enum constant value.');
                break;
        }
    }
    var BlurSize_entriesInitialized;
    function BlurSize_initEntries() {
        if (BlurSize_entriesInitialized)
            return Unit_instance;
        BlurSize_entriesInitialized = true;
        BlurSize_KERNEL_5_instance = new BlurSize('KERNEL_5', 0);
        BlurSize_KERNEL_4_instance = new BlurSize('KERNEL_4', 1);
        BlurSize_KERNEL_3_instance = new BlurSize('KERNEL_3', 2);
        BlurSize_KERNEL_2_instance = new BlurSize('KERNEL_2', 3);
    }
    function BlurSize(name, ordinal) {
        Enum.call(this, name, ordinal);
    }
    function BlurredPassCommand() {
        RenderPassCommand_init_$Init$(this);
        this.zc_1 = CommandType_BLURRED_PASS_getInstance();
        this.minSize = 200;
        this.brightness = 1.0;
        this.blurSize = BlurSize_KERNEL_4_getInstance();
        this.id = 0;
    }
    protoOf(BlurredPassCommand).ad = function () {
        return this.zc_1;
    };
    protoOf(BlurredPassCommand).bd = function (_set____db54di) {
        this.minSize = _set____db54di;
    };
    protoOf(BlurredPassCommand).cd = function () {
        return this.minSize;
    };
    protoOf(BlurredPassCommand).dd = function (_set____db54di) {
        this.brightness = _set____db54di;
    };
    protoOf(BlurredPassCommand).ed = function () {
        return this.brightness;
    };
    protoOf(BlurredPassCommand).fd = function (_set____db54di) {
        this.blurSize = _set____db54di;
    };
    protoOf(BlurredPassCommand).gd = function () {
        return this.blurSize;
    };
    protoOf(BlurredPassCommand).b7 = function (_set____db54di) {
        this.id = _set____db54di;
    };
    protoOf(BlurredPassCommand).c7 = function () {
        return this.id;
    };
    function DrawBlurredCommand() {
        Command.call(this);
        this.hd_1 = CommandType_DRAW_BLURRED_getInstance();
        this.blending = get_BLENDING_NONE();
        this.id = 0;
    }
    protoOf(DrawBlurredCommand).ad = function () {
        return this.hd_1;
    };
    protoOf(DrawBlurredCommand).jd = function (_set____db54di) {
        this.blending = _set____db54di;
    };
    protoOf(DrawBlurredCommand).kd = function () {
        return this.blending;
    };
    protoOf(DrawBlurredCommand).b7 = function (_set____db54di) {
        this.id = _set____db54di;
    };
    protoOf(DrawBlurredCommand).c7 = function () {
        return this.id;
    };
    function BlurSize_KERNEL_5_getInstance() {
        BlurSize_initEntries();
        return BlurSize_KERNEL_5_instance;
    }
    function BlurSize_KERNEL_4_getInstance() {
        BlurSize_initEntries();
        return BlurSize_KERNEL_4_instance;
    }
    function BlurSize_KERNEL_3_getInstance() {
        BlurSize_initEntries();
        return BlurSize_KERNEL_3_instance;
    }
    function BlurSize_KERNEL_2_getInstance() {
        BlurSize_initEntries();
        return BlurSize_KERNEL_2_instance;
    }
    function ClearColorCommand() {
        Command.call(this);
        this.ld_1 = CommandType_CLEAR_COLOR_getInstance();
        this.color = new Vec4(0.0, 0.0, 0.0, 0.0);
    }
    protoOf(ClearColorCommand).ad = function () {
        return this.ld_1;
    };
    protoOf(ClearColorCommand).md = function (_set____db54di) {
        this.color = _set____db54di;
    };
    protoOf(ClearColorCommand).nd = function () {
        return this.color;
    };
    var ClearCommandClearType_COLOR_instance;
    var ClearCommandClearType_DEPTH_instance;
    var ClearCommandClearType_COLOR_AND_DEPTH_instance;
    function values_9() {
        return [ClearCommandClearType_COLOR_getInstance(), ClearCommandClearType_DEPTH_getInstance(), ClearCommandClearType_COLOR_AND_DEPTH_getInstance()];
    }
    function valueOf_9(value) {
        switch (value) {
            case 'COLOR':
                return ClearCommandClearType_COLOR_getInstance();
            case 'DEPTH':
                return ClearCommandClearType_DEPTH_getInstance();
            case 'COLOR_AND_DEPTH':
                return ClearCommandClearType_COLOR_AND_DEPTH_getInstance();
            default:
                ClearCommandClearType_initEntries();
                THROW_IAE('No enum constant value.');
                break;
        }
    }
    var ClearCommandClearType_entriesInitialized;
    function ClearCommandClearType_initEntries() {
        if (ClearCommandClearType_entriesInitialized)
            return Unit_instance;
        ClearCommandClearType_entriesInitialized = true;
        ClearCommandClearType_COLOR_instance = new ClearCommandClearType('COLOR', 0, 0);
        ClearCommandClearType_DEPTH_instance = new ClearCommandClearType('DEPTH', 1, 1);
        ClearCommandClearType_COLOR_AND_DEPTH_instance = new ClearCommandClearType('COLOR_AND_DEPTH', 2, 2);
    }
    function ClearCommandClearType(name, ordinal, value) {
        Enum.call(this, name, ordinal);
    }
    function ClearCommand() {
        Command.call(this);
        this.qd_1 = CommandType_CLEAR_getInstance();
        this.clearType = ClearCommandClearType_COLOR_AND_DEPTH_getInstance();
    }
    protoOf(ClearCommand).ad = function () {
        return this.qd_1;
    };
    protoOf(ClearCommand).rd = function (_set____db54di) {
        this.clearType = _set____db54di;
    };
    protoOf(ClearCommand).sd = function () {
        return this.clearType;
    };
    function ClearCommandClearType_COLOR_getInstance() {
        ClearCommandClearType_initEntries();
        return ClearCommandClearType_COLOR_instance;
    }
    function ClearCommandClearType_DEPTH_getInstance() {
        ClearCommandClearType_initEntries();
        return ClearCommandClearType_DEPTH_instance;
    }
    function ClearCommandClearType_COLOR_AND_DEPTH_getInstance() {
        ClearCommandClearType_initEntries();
        return ClearCommandClearType_COLOR_AND_DEPTH_instance;
    }
    function Command() {
        this.enabled = true;
        this.name = '';
    }
    protoOf(Command).e6 = function (_set____db54di) {
        this.enabled = _set____db54di;
    };
    protoOf(Command).f6 = function () {
        return this.enabled;
    };
    protoOf(Command).a7 = function (_set____db54di) {
        this.name = _set____db54di;
    };
    protoOf(Command).c4 = function () {
        return this.name;
    };
    var CommandType_NOOP_instance;
    var CommandType_GROUP_instance;
    var CommandType_CLEAR_COLOR_instance;
    var CommandType_CLEAR_instance;
    var CommandType_VIGNETTE_instance;
    var CommandType_DRAW_MESH_instance;
    var CommandType_BLURRED_PASS_instance;
    var CommandType_DRAW_BLURRED_instance;
    var CommandType_RENDER_PASS_instance;
    var CommandType_MAIN_PASS_instance;
    var CommandType_CUSTOM_instance;
    function values_10() {
        return [CommandType_NOOP_getInstance(), CommandType_GROUP_getInstance(), CommandType_CLEAR_COLOR_getInstance(), CommandType_CLEAR_getInstance(), CommandType_VIGNETTE_getInstance(), CommandType_DRAW_MESH_getInstance(), CommandType_BLURRED_PASS_getInstance(), CommandType_DRAW_BLURRED_getInstance(), CommandType_RENDER_PASS_getInstance(), CommandType_MAIN_PASS_getInstance(), CommandType_CUSTOM_getInstance()];
    }
    function valueOf_10(value) {
        switch (value) {
            case 'NOOP':
                return CommandType_NOOP_getInstance();
            case 'GROUP':
                return CommandType_GROUP_getInstance();
            case 'CLEAR_COLOR':
                return CommandType_CLEAR_COLOR_getInstance();
            case 'CLEAR':
                return CommandType_CLEAR_getInstance();
            case 'VIGNETTE':
                return CommandType_VIGNETTE_getInstance();
            case 'DRAW_MESH':
                return CommandType_DRAW_MESH_getInstance();
            case 'BLURRED_PASS':
                return CommandType_BLURRED_PASS_getInstance();
            case 'DRAW_BLURRED':
                return CommandType_DRAW_BLURRED_getInstance();
            case 'RENDER_PASS':
                return CommandType_RENDER_PASS_getInstance();
            case 'MAIN_PASS':
                return CommandType_MAIN_PASS_getInstance();
            case 'CUSTOM':
                return CommandType_CUSTOM_getInstance();
            default:
                CommandType_initEntries();
                THROW_IAE('No enum constant value.');
                break;
        }
    }
    var CommandType_entriesInitialized;
    function CommandType_initEntries() {
        if (CommandType_entriesInitialized)
            return Unit_instance;
        CommandType_entriesInitialized = true;
        CommandType_NOOP_instance = new CommandType('NOOP', 0, 0);
        CommandType_GROUP_instance = new CommandType('GROUP', 1, 1);
        CommandType_CLEAR_COLOR_instance = new CommandType('CLEAR_COLOR', 2, 2);
        CommandType_CLEAR_instance = new CommandType('CLEAR', 3, 3);
        CommandType_VIGNETTE_instance = new CommandType('VIGNETTE', 4, 4);
        CommandType_DRAW_MESH_instance = new CommandType('DRAW_MESH', 5, 5);
        CommandType_BLURRED_PASS_instance = new CommandType('BLURRED_PASS', 6, 6);
        CommandType_DRAW_BLURRED_instance = new CommandType('DRAW_BLURRED', 7, 7);
        CommandType_RENDER_PASS_instance = new CommandType('RENDER_PASS', 8, 8);
        CommandType_MAIN_PASS_instance = new CommandType('MAIN_PASS', 9, 9);
        CommandType_CUSTOM_instance = new CommandType('CUSTOM', 10, 10);
    }
    function CommandType(name, ordinal, value) {
        Enum.call(this, name, ordinal);
        this.value = value;
    }
    protoOf(CommandType).k2 = function () {
        return this.value;
    };
    function CommandType_NOOP_getInstance() {
        CommandType_initEntries();
        return CommandType_NOOP_instance;
    }
    function CommandType_GROUP_getInstance() {
        CommandType_initEntries();
        return CommandType_GROUP_instance;
    }
    function CommandType_CLEAR_COLOR_getInstance() {
        CommandType_initEntries();
        return CommandType_CLEAR_COLOR_instance;
    }
    function CommandType_CLEAR_getInstance() {
        CommandType_initEntries();
        return CommandType_CLEAR_instance;
    }
    function CommandType_VIGNETTE_getInstance() {
        CommandType_initEntries();
        return CommandType_VIGNETTE_instance;
    }
    function CommandType_DRAW_MESH_getInstance() {
        CommandType_initEntries();
        return CommandType_DRAW_MESH_instance;
    }
    function CommandType_BLURRED_PASS_getInstance() {
        CommandType_initEntries();
        return CommandType_BLURRED_PASS_instance;
    }
    function CommandType_DRAW_BLURRED_getInstance() {
        CommandType_initEntries();
        return CommandType_DRAW_BLURRED_instance;
    }
    function CommandType_RENDER_PASS_getInstance() {
        CommandType_initEntries();
        return CommandType_RENDER_PASS_instance;
    }
    function CommandType_MAIN_PASS_getInstance() {
        CommandType_initEntries();
        return CommandType_MAIN_PASS_instance;
    }
    function CommandType_CUSTOM_getInstance() {
        CommandType_initEntries();
        return CommandType_CUSTOM_instance;
    }
    function DrawMeshState(shader, blending, depthMode, culling, vertexAttributes) {
        this.shader = shader;
        this.blending = blending;
        this.depthMode = depthMode;
        this.culling = culling;
        this.vertexAttributes = vertexAttributes;
    }
    protoOf(DrawMeshState).vd = function (_set____db54di) {
        this.shader = _set____db54di;
    };
    protoOf(DrawMeshState).wd = function () {
        return this.shader;
    };
    protoOf(DrawMeshState).jd = function (_set____db54di) {
        this.blending = _set____db54di;
    };
    protoOf(DrawMeshState).kd = function () {
        return this.blending;
    };
    protoOf(DrawMeshState).xd = function (_set____db54di) {
        this.depthMode = _set____db54di;
    };
    protoOf(DrawMeshState).yd = function () {
        return this.depthMode;
    };
    protoOf(DrawMeshState).zd = function (_set____db54di) {
        this.culling = _set____db54di;
    };
    protoOf(DrawMeshState).ae = function () {
        return this.culling;
    };
    protoOf(DrawMeshState).be = function (_set____db54di) {
        this.vertexAttributes = _set____db54di;
    };
    protoOf(DrawMeshState).ce = function () {
        return this.vertexAttributes;
    };
    function DrawMeshCommand(mesh, uniforms, state) {
        Command.call(this);
        this.mesh = mesh;
        this.uniforms = uniforms;
        this.state = state;
        this.n9_1 = CommandType_DRAW_MESH_getInstance();
        var tmp = this;
        // Inline function 'kotlin.collections.mutableListOf' call
        tmp.hints = ArrayList_init_$Create$();
    }
    protoOf(DrawMeshCommand).de = function (_set____db54di) {
        this.mesh = _set____db54di;
    };
    protoOf(DrawMeshCommand).ee = function () {
        return this.mesh;
    };
    protoOf(DrawMeshCommand).fe = function (_set____db54di) {
        this.uniforms = _set____db54di;
    };
    protoOf(DrawMeshCommand).ge = function () {
        return this.uniforms;
    };
    protoOf(DrawMeshCommand).he = function (_set____db54di) {
        this.state = _set____db54di;
    };
    protoOf(DrawMeshCommand).cc = function () {
        return this.state;
    };
    protoOf(DrawMeshCommand).ad = function () {
        return this.n9_1;
    };
    protoOf(DrawMeshCommand).ie = function (_set____db54di) {
        this.hints = _set____db54di;
    };
    protoOf(DrawMeshCommand).je = function () {
        return this.hints;
    };
    function DrawTransformedMeshCommand(mesh, uniforms, state, tranform, indexUniformMvp, indexUniformModel, indexUniformView, indexUniformProjection) {
        indexUniformMvp = indexUniformMvp === VOID ? 0 : indexUniformMvp;
        indexUniformModel = indexUniformModel === VOID ? -1 : indexUniformModel;
        indexUniformView = indexUniformView === VOID ? -1 : indexUniformView;
        indexUniformProjection = indexUniformProjection === VOID ? -1 : indexUniformProjection;
        DrawMeshCommand.call(this, mesh, uniforms, state);
        this.tranform = tranform;
        this.indexUniformMvp = indexUniformMvp;
        this.indexUniformModel = indexUniformModel;
        this.indexUniformView = indexUniformView;
        this.indexUniformProjection = indexUniformProjection;
    }
    protoOf(DrawTransformedMeshCommand).ke = function (_set____db54di) {
        this.tranform = _set____db54di;
    };
    protoOf(DrawTransformedMeshCommand).le = function () {
        return this.tranform;
    };
    protoOf(DrawTransformedMeshCommand).me = function (_set____db54di) {
        this.indexUniformMvp = _set____db54di;
    };
    protoOf(DrawTransformedMeshCommand).ne = function () {
        return this.indexUniformMvp;
    };
    protoOf(DrawTransformedMeshCommand).oe = function (_set____db54di) {
        this.indexUniformModel = _set____db54di;
    };
    protoOf(DrawTransformedMeshCommand).pe = function () {
        return this.indexUniformModel;
    };
    protoOf(DrawTransformedMeshCommand).qe = function (_set____db54di) {
        this.indexUniformView = _set____db54di;
    };
    protoOf(DrawTransformedMeshCommand).re = function () {
        return this.indexUniformView;
    };
    protoOf(DrawTransformedMeshCommand).se = function (_set____db54di) {
        this.indexUniformProjection = _set____db54di;
    };
    protoOf(DrawTransformedMeshCommand).te = function () {
        return this.indexUniformProjection;
    };
    function AffineTranformation(translation, rotation, scale) {
        this.j9_1 = translation;
        this.k9_1 = rotation;
        this.l9_1 = scale;
    }
    protoOf(AffineTranformation).toString = function () {
        return 'AffineTranformation(translation=' + this.j9_1 + ', rotation=' + this.k9_1 + ', scale=' + this.l9_1 + ')';
    };
    protoOf(AffineTranformation).hashCode = function () {
        var result = this.j9_1.hashCode();
        result = imul(result, 31) + this.k9_1.hashCode() | 0;
        result = imul(result, 31) + this.l9_1.hashCode() | 0;
        return result;
    };
    protoOf(AffineTranformation).equals = function (other) {
        if (this === other)
            return true;
        if (!(other instanceof AffineTranformation))
            return false;
        var tmp0_other_with_cast = other instanceof AffineTranformation ? other : THROW_CCE();
        if (!this.j9_1.equals(tmp0_other_with_cast.j9_1))
            return false;
        if (!this.k9_1.equals(tmp0_other_with_cast.k9_1))
            return false;
        if (!this.l9_1.equals(tmp0_other_with_cast.l9_1))
            return false;
        return true;
    };
    function GroupCommand_init_$Init$(enabled, commands, $this) {
        GroupCommand.call($this);
        $this.enabled = enabled;
        $this.commands = toMutableList(commands);
        return $this;
    }
    function GroupCommandArr(enabled, commands) {
        return GroupCommand_init_$Init$(enabled, commands, objectCreate(protoOf(GroupCommand)));
    }
    function GroupCommand() {
        Command.call(this);
        var tmp = this;
        // Inline function 'kotlin.collections.mutableListOf' call
        tmp.commands = ArrayList_init_$Create$();
    }
    protoOf(GroupCommand).ad = function () {
        return CommandType_GROUP_getInstance();
    };
    protoOf(GroupCommand).u8 = function (_set____db54di) {
        this.commands = _set____db54di;
    };
    protoOf(GroupCommand).v8 = function () {
        return this.commands;
    };
    function get_HINT_VRS_NONE() {
        _init_properties_Hints_kt__d0aug6();
        return HINT_VRS_NONE;
    }
    var HINT_VRS_NONE;
    var HINT_VRS_1X2;
    var HINT_VRS_2X1;
    function get_HINT_VRS_2X2() {
        _init_properties_Hints_kt__d0aug6();
        return HINT_VRS_2X2;
    }
    var HINT_VRS_2X2;
    var HINT_VRS_4X2;
    function get_HINT_VRS_4X4() {
        _init_properties_Hints_kt__d0aug6();
        return HINT_VRS_4X4;
    }
    var HINT_VRS_4X4;
    function Hint() {
    }
    var ShadingRate_SHADING_RATE_1X1_instance;
    var ShadingRate_SHADING_RATE_1X2_instance;
    var ShadingRate_SHADING_RATE_2X1_instance;
    var ShadingRate_SHADING_RATE_2X2_instance;
    var ShadingRate_SHADING_RATE_4X2_instance;
    var ShadingRate_SHADING_RATE_4X4_instance;
    function values_11() {
        return [ShadingRate_SHADING_RATE_1X1_getInstance(), ShadingRate_SHADING_RATE_1X2_getInstance(), ShadingRate_SHADING_RATE_2X1_getInstance(), ShadingRate_SHADING_RATE_2X2_getInstance(), ShadingRate_SHADING_RATE_4X2_getInstance(), ShadingRate_SHADING_RATE_4X4_getInstance()];
    }
    function valueOf_11(value) {
        switch (value) {
            case 'SHADING_RATE_1X1':
                return ShadingRate_SHADING_RATE_1X1_getInstance();
            case 'SHADING_RATE_1X2':
                return ShadingRate_SHADING_RATE_1X2_getInstance();
            case 'SHADING_RATE_2X1':
                return ShadingRate_SHADING_RATE_2X1_getInstance();
            case 'SHADING_RATE_2X2':
                return ShadingRate_SHADING_RATE_2X2_getInstance();
            case 'SHADING_RATE_4X2':
                return ShadingRate_SHADING_RATE_4X2_getInstance();
            case 'SHADING_RATE_4X4':
                return ShadingRate_SHADING_RATE_4X4_getInstance();
            default:
                ShadingRate_initEntries();
                THROW_IAE('No enum constant value.');
                break;
        }
    }
    var ShadingRate_entriesInitialized;
    function ShadingRate_initEntries() {
        if (ShadingRate_entriesInitialized)
            return Unit_instance;
        ShadingRate_entriesInitialized = true;
        ShadingRate_SHADING_RATE_1X1_instance = new ShadingRate('SHADING_RATE_1X1', 0, 38566);
        ShadingRate_SHADING_RATE_1X2_instance = new ShadingRate('SHADING_RATE_1X2', 1, 38567);
        ShadingRate_SHADING_RATE_2X1_instance = new ShadingRate('SHADING_RATE_2X1', 2, 38568);
        ShadingRate_SHADING_RATE_2X2_instance = new ShadingRate('SHADING_RATE_2X2', 3, 38569);
        ShadingRate_SHADING_RATE_4X2_instance = new ShadingRate('SHADING_RATE_4X2', 4, 38572);
        ShadingRate_SHADING_RATE_4X4_instance = new ShadingRate('SHADING_RATE_4X4', 5, 38574);
    }
    function ShadingRate(name, ordinal, value) {
        Enum.call(this, name, ordinal);
        this.value = value;
    }
    protoOf(ShadingRate).k2 = function () {
        return this.value;
    };
    function VrsHint(shadingRate) {
        Hint.call(this);
        this.shadingRate = shadingRate;
    }
    protoOf(VrsHint).we = function () {
        return this.shadingRate;
    };
    function ShadingRate_SHADING_RATE_1X1_getInstance() {
        ShadingRate_initEntries();
        return ShadingRate_SHADING_RATE_1X1_instance;
    }
    function ShadingRate_SHADING_RATE_1X2_getInstance() {
        ShadingRate_initEntries();
        return ShadingRate_SHADING_RATE_1X2_instance;
    }
    function ShadingRate_SHADING_RATE_2X1_getInstance() {
        ShadingRate_initEntries();
        return ShadingRate_SHADING_RATE_2X1_instance;
    }
    function ShadingRate_SHADING_RATE_2X2_getInstance() {
        ShadingRate_initEntries();
        return ShadingRate_SHADING_RATE_2X2_instance;
    }
    function ShadingRate_SHADING_RATE_4X2_getInstance() {
        ShadingRate_initEntries();
        return ShadingRate_SHADING_RATE_4X2_instance;
    }
    function ShadingRate_SHADING_RATE_4X4_getInstance() {
        ShadingRate_initEntries();
        return ShadingRate_SHADING_RATE_4X4_instance;
    }
    var properties_initialized_Hints_kt_2kk7lo;
    function _init_properties_Hints_kt__d0aug6() {
        if (!properties_initialized_Hints_kt_2kk7lo) {
            properties_initialized_Hints_kt_2kk7lo = true;
            HINT_VRS_NONE = new VrsHint(ShadingRate_SHADING_RATE_1X1_getInstance());
            HINT_VRS_1X2 = new VrsHint(ShadingRate_SHADING_RATE_1X2_getInstance());
            HINT_VRS_2X1 = new VrsHint(ShadingRate_SHADING_RATE_2X1_getInstance());
            HINT_VRS_2X2 = new VrsHint(ShadingRate_SHADING_RATE_2X2_getInstance());
            HINT_VRS_4X2 = new VrsHint(ShadingRate_SHADING_RATE_4X2_getInstance());
            HINT_VRS_4X4 = new VrsHint(ShadingRate_SHADING_RATE_4X4_getInstance());
        }
    }
    function MainPassCommand_init_$Init$($this) {
        RenderPassCommand_init_$Init$($this);
        MainPassCommand.call($this);
        return $this;
    }
    function MainPassCommandConstructor() {
        return MainPassCommand_init_$Init$(objectCreate(protoOf(MainPassCommand)));
    }
    function MainPassCommand_init_$Init$_0(enabled, commands, $this) {
        RenderPassCommand_init_$Init$_0(enabled, commands.slice(), $this);
        MainPassCommand.call($this);
        return $this;
    }
    function MainPassCommandArr(enabled, commands) {
        return MainPassCommand_init_$Init$_0(enabled, commands, objectCreate(protoOf(MainPassCommand)));
    }
    protoOf(MainPassCommand).ad = function () {
        return this.ye_1;
    };
    function MainPassCommand() {
        this.ye_1 = CommandType_MAIN_PASS_getInstance();
    }
    function NoopCommand() {
        Command.call(this);
    }
    protoOf(NoopCommand).ad = function () {
        return CommandType_NOOP_getInstance();
    };
    function RenderPassCommand_init_$Init$($this) {
        GroupCommand.call($this);
        RenderPassCommand.call($this);
        return $this;
    }
    function RenderPassCommandConstructor() {
        return RenderPassCommand_init_$Init$(objectCreate(protoOf(RenderPassCommand)));
    }
    function RenderPassCommand_init_$Init$_0(enabled, commands, $this) {
        GroupCommand_init_$Init$(enabled, commands.slice(), $this);
        RenderPassCommand.call($this);
        return $this;
    }
    function RenderPassCommandArr(enabled, commands) {
        return RenderPassCommand_init_$Init$_0(enabled, commands, objectCreate(protoOf(RenderPassCommand)));
    }
    protoOf(RenderPassCommand).ad = function () {
        return this.ze_1;
    };
    function RenderPassCommand() {
        this.ze_1 = CommandType_RENDER_PASS_getInstance();
    }
    function VignetteCommand() {
        Command.call(this);
        this.af_1 = CommandType_VIGNETTE_getInstance();
        this.color0 = new Vec4(0.0, 0.0, 0.0, 1.0);
        this.color1 = new Vec4(0.0, 0.0, 0.0, 1.0);
    }
    protoOf(VignetteCommand).ad = function () {
        return this.af_1;
    };
    protoOf(VignetteCommand).bf = function (_set____db54di) {
        this.color0 = _set____db54di;
    };
    protoOf(VignetteCommand).cf = function () {
        return this.color0;
    };
    protoOf(VignetteCommand).df = function (_set____db54di) {
        this.color1 = _set____db54di;
    };
    protoOf(VignetteCommand).ef = function () {
        return this.color1;
    };
    var ColorMode_Normal_instance;
    var ColorMode_Grayscale_instance;
    var ColorMode_Sepia_instance;
    var ColorMode_HighContrast_instance;
    var ColorMode_LowContrast_instance;
    var ColorMode_BlackAndWhite_instance;
    var ColorMode_IsolatedColor_instance;
    var ColorMode_Crosshatch_instance;
    var ColorMode_LimitedColors_instance;
    function values_12() {
        return [ColorMode_Normal_getInstance(), ColorMode_Grayscale_getInstance(), ColorMode_Sepia_getInstance(), ColorMode_HighContrast_getInstance(), ColorMode_LowContrast_getInstance(), ColorMode_BlackAndWhite_getInstance(), ColorMode_IsolatedColor_getInstance(), ColorMode_Crosshatch_getInstance(), ColorMode_LimitedColors_getInstance()];
    }
    function valueOf_12(value) {
        switch (value) {
            case 'Normal':
                return ColorMode_Normal_getInstance();
            case 'Grayscale':
                return ColorMode_Grayscale_getInstance();
            case 'Sepia':
                return ColorMode_Sepia_getInstance();
            case 'HighContrast':
                return ColorMode_HighContrast_getInstance();
            case 'LowContrast':
                return ColorMode_LowContrast_getInstance();
            case 'BlackAndWhite':
                return ColorMode_BlackAndWhite_getInstance();
            case 'IsolatedColor':
                return ColorMode_IsolatedColor_getInstance();
            case 'Crosshatch':
                return ColorMode_Crosshatch_getInstance();
            case 'LimitedColors':
                return ColorMode_LimitedColors_getInstance();
            default:
                ColorMode_initEntries();
                THROW_IAE('No enum constant value.');
                break;
        }
    }
    var ColorMode_entriesInitialized;
    function ColorMode_initEntries() {
        if (ColorMode_entriesInitialized)
            return Unit_instance;
        ColorMode_entriesInitialized = true;
        ColorMode_Normal_instance = new ColorMode('Normal', 0);
        ColorMode_Grayscale_instance = new ColorMode('Grayscale', 1);
        ColorMode_Sepia_instance = new ColorMode('Sepia', 2);
        ColorMode_HighContrast_instance = new ColorMode('HighContrast', 3);
        ColorMode_LowContrast_instance = new ColorMode('LowContrast', 4);
        ColorMode_BlackAndWhite_instance = new ColorMode('BlackAndWhite', 5);
        ColorMode_IsolatedColor_instance = new ColorMode('IsolatedColor', 6);
        ColorMode_Crosshatch_instance = new ColorMode('Crosshatch', 7);
        ColorMode_LimitedColors_instance = new ColorMode('LimitedColors', 8);
    }
    function ColorMode(name, ordinal) {
        Enum.call(this, name, ordinal);
    }
    function ColorMode_Normal_getInstance() {
        ColorMode_initEntries();
        return ColorMode_Normal_instance;
    }
    function ColorMode_Grayscale_getInstance() {
        ColorMode_initEntries();
        return ColorMode_Grayscale_instance;
    }
    function ColorMode_Sepia_getInstance() {
        ColorMode_initEntries();
        return ColorMode_Sepia_instance;
    }
    function ColorMode_HighContrast_getInstance() {
        ColorMode_initEntries();
        return ColorMode_HighContrast_instance;
    }
    function ColorMode_LowContrast_getInstance() {
        ColorMode_initEntries();
        return ColorMode_LowContrast_instance;
    }
    function ColorMode_BlackAndWhite_getInstance() {
        ColorMode_initEntries();
        return ColorMode_BlackAndWhite_instance;
    }
    function ColorMode_IsolatedColor_getInstance() {
        ColorMode_initEntries();
        return ColorMode_IsolatedColor_instance;
    }
    function ColorMode_Crosshatch_getInstance() {
        ColorMode_initEntries();
        return ColorMode_Crosshatch_instance;
    }
    function ColorMode_LimitedColors_getInstance() {
        ColorMode_initEntries();
        return ColorMode_LimitedColors_instance;
    }
    function MathUtils() {
    }
    protoOf(MathUtils).hf = function (i, low, high) {
        // Inline function 'kotlin.math.max' call
        // Inline function 'kotlin.math.min' call
        var a = Math.min(i, high);
        return Math.max(a, low);
    };
    protoOf(MathUtils).lc = function (edge0, edge1, x) {
        var t = this.hf((x - edge0) / (edge1 - edge0), 0.0, 1.0);
        return t * t * (3.0 - 2.0 * t);
    };
    protoOf(MathUtils).fc = function (length, current) {
        return ((current + 1 | 0) + numberToInt(Default_getInstance().o5() * (length - 2 | 0)) | 0) % length | 0;
    };
    var MathUtils_instance;
    function MathUtils_getInstance() {
        return MathUtils_instance;
    }
    function Matrix() {
        Matrix_instance = this;
        this.h7_1 = new Float32Array(32);
        this.i7_1 = new Float32Array(16);
        this.j7_1 = new Float32Array(16);
        this.k7_1 = new Float32Array(16);
        this.l7_1 = new Float32Array(4);
        this.m7_1 = new Float32Array(16);
        this.n7_1 = new Float32Array(4);
    }
    protoOf(Matrix).i9 = function (result, resultOffset, lhs, lhsOffset, rhs, rhsOffset) {
        this.if(result, resultOffset, this.i7_1, 0, 16);
        this.if(lhs, lhsOffset, this.j7_1, 0, 16);
        this.if(rhs, rhsOffset, this.k7_1, 0, 16);
        this.jf(this.i7_1, this.j7_1, this.k7_1);
        this.if(this.i7_1, 0, result, resultOffset, 16);
    };
    protoOf(Matrix).if = function (src, srcPos, dest, destPos, length) {
        // Inline function 'kotlin.collections.copyInto' call
        var endIndex = srcPos + length | 0;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp = src;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp, dest, destPos, srcPos, endIndex);
    };
    protoOf(Matrix).kf = function (_i, _j) {
        return _j + imul(4, _i) | 0;
    };
    protoOf(Matrix).jf = function (r, lhs, rhs) {
        var inductionVariable = 0;
        if (inductionVariable <= 3)
            do {
                var i = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var rhs_i0 = rhs[this.kf(i, 0)];
                var ri0 = lhs[this.kf(0, 0)] * rhs_i0;
                var ri1 = lhs[this.kf(0, 1)] * rhs_i0;
                var ri2 = lhs[this.kf(0, 2)] * rhs_i0;
                var ri3 = lhs[this.kf(0, 3)] * rhs_i0;
                var inductionVariable_0 = 1;
                if (inductionVariable_0 <= 3)
                    do {
                        var j = inductionVariable_0;
                        inductionVariable_0 = inductionVariable_0 + 1 | 0;
                        var rhs_ij = rhs[this.kf(i, j)];
                        ri0 = ri0 + lhs[this.kf(j, 0)] * rhs_ij;
                        ri1 = ri1 + lhs[this.kf(j, 1)] * rhs_ij;
                        ri2 = ri2 + lhs[this.kf(j, 2)] * rhs_ij;
                        ri3 = ri3 + lhs[this.kf(j, 3)] * rhs_ij;
                    } while (inductionVariable_0 <= 3);
                r[this.kf(i, 0)] = ri0;
                r[this.kf(i, 1)] = ri1;
                r[this.kf(i, 2)] = ri2;
                r[this.kf(i, 3)] = ri3;
            } while (inductionVariable <= 3);
    };
    protoOf(Matrix).o7 = function (m, offset, left, right, bottom, top, near, far) {
        // Inline function 'kotlin.require' call
        // Inline function 'kotlin.contracts.contract' call
        if (!!(left === right)) {
            // Inline function 'org.androidworks.engine.math.Matrix.frustumM.<anonymous>' call
            var message = 'left == right';
            throw IllegalArgumentException_init_$Create$(toString(message));
        }
        // Inline function 'kotlin.require' call
        // Inline function 'kotlin.contracts.contract' call
        if (!!(top === bottom)) {
            // Inline function 'org.androidworks.engine.math.Matrix.frustumM.<anonymous>' call
            var message_0 = 'top == bottom';
            throw IllegalArgumentException_init_$Create$(toString(message_0));
        }
        // Inline function 'kotlin.require' call
        // Inline function 'kotlin.contracts.contract' call
        if (!!(near === far)) {
            // Inline function 'org.androidworks.engine.math.Matrix.frustumM.<anonymous>' call
            var message_1 = 'near == far';
            throw IllegalArgumentException_init_$Create$(toString(message_1));
        }
        // Inline function 'kotlin.require' call
        // Inline function 'kotlin.contracts.contract' call
        if (!!(near <= 0.0)) {
            // Inline function 'org.androidworks.engine.math.Matrix.frustumM.<anonymous>' call
            var message_2 = 'near <= 0.0f';
            throw IllegalArgumentException_init_$Create$(toString(message_2));
        }
        // Inline function 'kotlin.require' call
        // Inline function 'kotlin.contracts.contract' call
        if (!!(far <= 0.0)) {
            // Inline function 'org.androidworks.engine.math.Matrix.frustumM.<anonymous>' call
            var message_3 = 'far <= 0.0f';
            throw IllegalArgumentException_init_$Create$(toString(message_3));
        }
        var r_width = 1.0 / (right - left);
        var r_height = 1.0 / (top - bottom);
        var r_depth = 1.0 / (near - far);
        var x = 2.0 * (near * r_width);
        var y = 2.0 * (near * r_height);
        var A = (right + left) * r_width;
        var B = (top + bottom) * r_height;
        var C = (far + near) * r_depth;
        var D = 2.0 * (far * near * r_depth);
        m[offset + 0 | 0] = x;
        m[offset + 5 | 0] = y;
        m[offset + 8 | 0] = A;
        m[offset + 9 | 0] = B;
        m[offset + 10 | 0] = C;
        m[offset + 14 | 0] = D;
        m[offset + 11 | 0] = -1.0;
        m[offset + 1 | 0] = 0.0;
        m[offset + 2 | 0] = 0.0;
        m[offset + 3 | 0] = 0.0;
        m[offset + 4 | 0] = 0.0;
        m[offset + 6 | 0] = 0.0;
        m[offset + 7 | 0] = 0.0;
        m[offset + 12 | 0] = 0.0;
        m[offset + 13 | 0] = 0.0;
        m[offset + 15 | 0] = 0.0;
    };
    protoOf(Matrix).lf = function (x, y, z) {
        // Inline function 'kotlin.math.sqrt' call
        var x_0 = x * x + y * y + z * z;
        return Math.sqrt(x_0);
    };
    protoOf(Matrix).d9 = function (sm, smOffset) {
        var inductionVariable = 0;
        if (inductionVariable <= 15)
            do {
                var i = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                sm[smOffset + i | 0] = 0.0;
            } while (inductionVariable <= 15);
        var i_0 = 0;
        while (i_0 < 16) {
            sm[smOffset + i_0 | 0] = 1.0;
            i_0 = i_0 + 5 | 0;
        }
    };
    protoOf(Matrix).h9 = function (m, mOffset, x, y, z) {
        var inductionVariable = 0;
        if (inductionVariable <= 3)
            do {
                var i = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var mi = mOffset + i | 0;
                m[mi] = m[mi] * x;
                var tmp4_index0 = 4 + mi | 0;
                m[tmp4_index0] = m[tmp4_index0] * y;
                var tmp6_index0 = 8 + mi | 0;
                m[tmp6_index0] = m[tmp6_index0] * z;
            } while (inductionVariable <= 3);
    };
    protoOf(Matrix).g9 = function (m, mOffset, x, y, z) {
        var inductionVariable = 0;
        if (inductionVariable <= 3)
            do {
                var i = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var mi = mOffset + i | 0;
                var tmp2_index0 = 12 + mi | 0;
                m[tmp2_index0] = m[tmp2_index0] + (m[mi] * x + m[4 + mi | 0] * y + m[8 + mi | 0] * z);
            } while (inductionVariable <= 3);
    };
    protoOf(Matrix).f9 = function (m, mOffset, a, x, y, z) {
        this.e9(this.h7_1, 0, a, x, y, z);
        this.i9(this.h7_1, 16, m, mOffset, this.h7_1, 0);
        this.if(this.h7_1, 16, m, mOffset, 16);
    };
    protoOf(Matrix).e9 = function (rm, rmOffset, a, x, y, z) {
        var a_0 = a;
        var x_0 = x;
        var y_0 = y;
        var z_0 = z;
        rm[rmOffset + 3 | 0] = 0.0;
        rm[rmOffset + 7 | 0] = 0.0;
        rm[rmOffset + 11 | 0] = 0.0;
        rm[rmOffset + 12 | 0] = 0.0;
        rm[rmOffset + 13 | 0] = 0.0;
        rm[rmOffset + 14 | 0] = 0.0;
        rm[rmOffset + 15 | 0] = 1.0;
        a_0 = a_0 * (get_PI() / 180.0);
        // Inline function 'kotlin.math.sin' call
        var x_1 = a_0;
        var s = Math.sin(x_1);
        // Inline function 'kotlin.math.cos' call
        var x_2 = a_0;
        var c = Math.cos(x_2);
        if ((1.0 === x_0 ? 0.0 === y_0 : false) ? 0.0 === z_0 : false) {
            rm[rmOffset + 5 | 0] = c;
            rm[rmOffset + 10 | 0] = c;
            rm[rmOffset + 6 | 0] = s;
            rm[rmOffset + 9 | 0] = -s;
            rm[rmOffset + 1 | 0] = 0.0;
            rm[rmOffset + 2 | 0] = 0.0;
            rm[rmOffset + 4 | 0] = 0.0;
            rm[rmOffset + 8 | 0] = 0.0;
            rm[rmOffset + 0 | 0] = 1.0;
        }
        else if ((0.0 === x_0 ? 1.0 === y_0 : false) ? 0.0 === z_0 : false) {
            rm[rmOffset + 0 | 0] = c;
            rm[rmOffset + 10 | 0] = c;
            rm[rmOffset + 8 | 0] = s;
            rm[rmOffset + 2 | 0] = -s;
            rm[rmOffset + 1 | 0] = 0.0;
            rm[rmOffset + 4 | 0] = 0.0;
            rm[rmOffset + 6 | 0] = 0.0;
            rm[rmOffset + 9 | 0] = 0.0;
            rm[rmOffset + 5 | 0] = 1.0;
        }
        else if ((0.0 === x_0 ? 0.0 === y_0 : false) ? 1.0 === z_0 : false) {
            rm[rmOffset + 0 | 0] = c;
            rm[rmOffset + 5 | 0] = c;
            rm[rmOffset + 1 | 0] = s;
            rm[rmOffset + 4 | 0] = -s;
            rm[rmOffset + 2 | 0] = 0.0;
            rm[rmOffset + 6 | 0] = 0.0;
            rm[rmOffset + 8 | 0] = 0.0;
            rm[rmOffset + 9 | 0] = 0.0;
            rm[rmOffset + 10 | 0] = 1.0;
        }
        else {
            var len = this.lf(x_0, y_0, z_0);
            if (!(1.0 === len)) {
                var recipLen = 1.0 / len;
                x_0 = x_0 * recipLen;
                y_0 = y_0 * recipLen;
                z_0 = z_0 * recipLen;
            }
            var nc = 1.0 - c;
            var xy = x_0 * y_0;
            var yz = y_0 * z_0;
            var zx = z_0 * x_0;
            var xs = x_0 * s;
            var ys = y_0 * s;
            var zs = z_0 * s;
            rm[rmOffset + 0 | 0] = x_0 * x_0 * nc + c;
            rm[rmOffset + 4 | 0] = xy * nc - zs;
            rm[rmOffset + 8 | 0] = zx * nc + ys;
            rm[rmOffset + 1 | 0] = xy * nc + zs;
            rm[rmOffset + 5 | 0] = y_0 * y_0 * nc + c;
            rm[rmOffset + 9 | 0] = yz * nc - xs;
            rm[rmOffset + 2 | 0] = zx * nc - ys;
            rm[rmOffset + 6 | 0] = yz * nc + xs;
            rm[rmOffset + 10 | 0] = z_0 * z_0 * nc + c;
        }
    };
    protoOf(Matrix).mf = function (rm, rmOffset, eyeX, eyeY, eyeZ, centerX, centerY, centerZ, upX, upY, upZ) {
        var fx = centerX - eyeX;
        var fy = centerY - eyeY;
        var fz = centerZ - eyeZ;
        var rlf = 1.0 / this.lf(fx, fy, fz);
        fx = fx * rlf;
        fy = fy * rlf;
        fz = fz * rlf;
        var sx = fy * upZ - fz * upY;
        var sy = fz * upX - fx * upZ;
        var sz = fx * upY - fy * upX;
        var rls = 1.0 / this.lf(sx, sy, sz);
        sx = sx * rls;
        sy = sy * rls;
        sz = sz * rls;
        var ux = sy * fz - sz * fy;
        var uy = sz * fx - sx * fz;
        var uz = sx * fy - sy * fx;
        rm[rmOffset + 0 | 0] = sx;
        rm[rmOffset + 1 | 0] = ux;
        rm[rmOffset + 2 | 0] = -fx;
        rm[rmOffset + 3 | 0] = 0.0;
        rm[rmOffset + 4 | 0] = sy;
        rm[rmOffset + 5 | 0] = uy;
        rm[rmOffset + 6 | 0] = -fy;
        rm[rmOffset + 7 | 0] = 0.0;
        rm[rmOffset + 8 | 0] = sz;
        rm[rmOffset + 9 | 0] = uz;
        rm[rmOffset + 10 | 0] = -fz;
        rm[rmOffset + 11 | 0] = 0.0;
        rm[rmOffset + 12 | 0] = 0.0;
        rm[rmOffset + 13 | 0] = 0.0;
        rm[rmOffset + 14 | 0] = 0.0;
        rm[rmOffset + 15 | 0] = 1.0;
        this.g9(rm, rmOffset, -eyeX, -eyeY, -eyeZ);
    };
    var Matrix_instance;
    function Matrix_getInstance() {
        if (Matrix_instance == null)
            new Matrix();
        return Matrix_instance;
    }
    function Vec2(_x, _y) {
        this.nf_1 = _x;
        this.of_1 = _y;
    }
    protoOf(Vec2).pf = function (value) {
        this.nf_1 = value;
    };
    protoOf(Vec2).qf = function () {
        return this.nf_1;
    };
    protoOf(Vec2).rf = function (value) {
        this.nf_1 = value;
    };
    protoOf(Vec2).sf = function () {
        return this.nf_1;
    };
    protoOf(Vec2).tf = function (value) {
        this.of_1 = value;
    };
    protoOf(Vec2).uf = function () {
        return this.of_1;
    };
    protoOf(Vec2).vf = function (value) {
        this.of_1 = value;
    };
    protoOf(Vec2).wf = function () {
        return this.of_1;
    };
    protoOf(Vec2).xf = function (_x, _y) {
        return new Vec2(_x, _y);
    };
    protoOf(Vec2).copy = function (_x, _y, $super) {
        _x = _x === VOID ? this.nf_1 : _x;
        _y = _y === VOID ? this.of_1 : _y;
        return this.xf(_x, _y);
    };
    protoOf(Vec2).toString = function () {
        return 'Vec2(_x=' + this.nf_1 + ', _y=' + this.of_1 + ')';
    };
    protoOf(Vec2).hashCode = function () {
        var result = getNumberHashCode(this.nf_1);
        result = imul(result, 31) + getNumberHashCode(this.of_1) | 0;
        return result;
    };
    protoOf(Vec2).equals = function (other) {
        if (this === other)
            return true;
        if (!(other instanceof Vec2))
            return false;
        var tmp0_other_with_cast = other instanceof Vec2 ? other : THROW_CCE();
        if (!equals(this.nf_1, tmp0_other_with_cast.nf_1))
            return false;
        if (!equals(this.of_1, tmp0_other_with_cast.of_1))
            return false;
        return true;
    };
    function Vec3(_x, _y, _z) {
        this.yf_1 = _x;
        this.zf_1 = _y;
        this.ag_1 = _z;
    }
    protoOf(Vec3).pf = function (value) {
        this.yf_1 = value;
    };
    protoOf(Vec3).qf = function () {
        return this.yf_1;
    };
    protoOf(Vec3).rf = function (value) {
        this.yf_1 = value;
    };
    protoOf(Vec3).sf = function () {
        return this.yf_1;
    };
    protoOf(Vec3).tf = function (value) {
        this.zf_1 = value;
    };
    protoOf(Vec3).uf = function () {
        return this.zf_1;
    };
    protoOf(Vec3).vf = function (value) {
        this.zf_1 = value;
    };
    protoOf(Vec3).wf = function () {
        return this.zf_1;
    };
    protoOf(Vec3).bg = function (value) {
        this.ag_1 = value;
    };
    protoOf(Vec3).cg = function () {
        return this.ag_1;
    };
    protoOf(Vec3).dg = function (value) {
        this.ag_1 = value;
    };
    protoOf(Vec3).eg = function () {
        return this.ag_1;
    };
    protoOf(Vec3).fg = function (_x, _y, _z) {
        return new Vec3(_x, _y, _z);
    };
    protoOf(Vec3).copy = function (_x, _y, _z, $super) {
        _x = _x === VOID ? this.yf_1 : _x;
        _y = _y === VOID ? this.zf_1 : _y;
        _z = _z === VOID ? this.ag_1 : _z;
        return this.fg(_x, _y, _z);
    };
    protoOf(Vec3).toString = function () {
        return 'Vec3(_x=' + this.yf_1 + ', _y=' + this.zf_1 + ', _z=' + this.ag_1 + ')';
    };
    protoOf(Vec3).hashCode = function () {
        var result = getNumberHashCode(this.yf_1);
        result = imul(result, 31) + getNumberHashCode(this.zf_1) | 0;
        result = imul(result, 31) + getNumberHashCode(this.ag_1) | 0;
        return result;
    };
    protoOf(Vec3).equals = function (other) {
        if (this === other)
            return true;
        if (!(other instanceof Vec3))
            return false;
        var tmp0_other_with_cast = other instanceof Vec3 ? other : THROW_CCE();
        if (!equals(this.yf_1, tmp0_other_with_cast.yf_1))
            return false;
        if (!equals(this.zf_1, tmp0_other_with_cast.zf_1))
            return false;
        if (!equals(this.ag_1, tmp0_other_with_cast.ag_1))
            return false;
        return true;
    };
    function Vec4(_x, _y, _z, _w) {
        this.gg_1 = _x;
        this.hg_1 = _y;
        this.ig_1 = _z;
        this.jg_1 = _w;
    }
    protoOf(Vec4).pf = function (value) {
        this.gg_1 = value;
    };
    protoOf(Vec4).qf = function () {
        return this.gg_1;
    };
    protoOf(Vec4).rf = function (value) {
        this.gg_1 = value;
    };
    protoOf(Vec4).sf = function () {
        return this.gg_1;
    };
    protoOf(Vec4).tf = function (value) {
        this.hg_1 = value;
    };
    protoOf(Vec4).uf = function () {
        return this.hg_1;
    };
    protoOf(Vec4).vf = function (value) {
        this.hg_1 = value;
    };
    protoOf(Vec4).wf = function () {
        return this.hg_1;
    };
    protoOf(Vec4).bg = function (value) {
        this.ig_1 = value;
    };
    protoOf(Vec4).cg = function () {
        return this.ig_1;
    };
    protoOf(Vec4).dg = function (value) {
        this.ig_1 = value;
    };
    protoOf(Vec4).eg = function () {
        return this.ig_1;
    };
    protoOf(Vec4).kg = function (value) {
        this.jg_1 = value;
    };
    protoOf(Vec4).lg = function () {
        return this.jg_1;
    };
    protoOf(Vec4).mg = function (value) {
        this.jg_1 = value;
    };
    protoOf(Vec4).ng = function () {
        return this.jg_1;
    };
    protoOf(Vec4).og = function (_x, _y, _z, _w) {
        return new Vec4(_x, _y, _z, _w);
    };
    protoOf(Vec4).copy = function (_x, _y, _z, _w, $super) {
        _x = _x === VOID ? this.gg_1 : _x;
        _y = _y === VOID ? this.hg_1 : _y;
        _z = _z === VOID ? this.ig_1 : _z;
        _w = _w === VOID ? this.jg_1 : _w;
        return this.og(_x, _y, _z, _w);
    };
    protoOf(Vec4).toString = function () {
        return 'Vec4(_x=' + this.gg_1 + ', _y=' + this.hg_1 + ', _z=' + this.ig_1 + ', _w=' + this.jg_1 + ')';
    };
    protoOf(Vec4).hashCode = function () {
        var result = getNumberHashCode(this.gg_1);
        result = imul(result, 31) + getNumberHashCode(this.hg_1) | 0;
        result = imul(result, 31) + getNumberHashCode(this.ig_1) | 0;
        result = imul(result, 31) + getNumberHashCode(this.jg_1) | 0;
        return result;
    };
    protoOf(Vec4).equals = function (other) {
        if (this === other)
            return true;
        if (!(other instanceof Vec4))
            return false;
        var tmp0_other_with_cast = other instanceof Vec4 ? other : THROW_CCE();
        if (!equals(this.gg_1, tmp0_other_with_cast.gg_1))
            return false;
        if (!equals(this.hg_1, tmp0_other_with_cast.hg_1))
            return false;
        if (!equals(this.ig_1, tmp0_other_with_cast.ig_1))
            return false;
        if (!equals(this.jg_1, tmp0_other_with_cast.jg_1))
            return false;
        return true;
    };
    function TimerParams(timer, period, rotating) {
        this.pg_1 = timer;
        this.qg_1 = period;
        this.rg_1 = rotating;
    }
    function TimersMap() {
        var tmp = this;
        // Inline function 'kotlin.collections.mutableMapOf' call
        tmp.sg_1 = LinkedHashMap_init_$Create$();
        this.tg_1 = 0.0;
    }
    protoOf(TimersMap).ug = function (key, period) {
        this.sg_1.c1(key, new TimerParams(0.0, period, true));
    };
    protoOf(TimersMap).vg = function (index) {
        var tmp0_elvis_lhs = this.sg_1.i1(index);
        var tmp;
        if (tmp0_elvis_lhs == null) {
            throw Exception_init_$Create$('Timer not found');
        }
        else {
            tmp = tmp0_elvis_lhs;
        }
        var timer = tmp;
        return timer.pg_1;
    };
    protoOf(TimersMap).wg = function (timeNow) {
        // Inline function 'kotlin.collections.iterator' call
        var tmp0_iterator = this.sg_1.b1().h();
        while (tmp0_iterator.o()) {
            var timer = tmp0_iterator.p();
            var delta = (timeNow - this.tg_1) / timer.qg_1;
            timer.pg_1 = timer.pg_1 + delta;
            if (timer.rg_1) {
                timer.pg_1 = timer.pg_1 % 1.0;
            }
            else {
                if (timer.pg_1 > 1.0) {
                    timer.pg_1 = 1.0;
                }
            }
        }
        this.tg_1 = timeNow;
    };
    //region block: post-declaration
    defineProp(protoOf(BackendMode), 'name', protoOf(BackendMode).c4);
    defineProp(protoOf(BackendMode), 'ordinal', protoOf(BackendMode).d4);
    defineProp(protoOf(BlendingEquation), 'name', protoOf(BlendingEquation).c4);
    defineProp(protoOf(BlendingEquation), 'ordinal', protoOf(BlendingEquation).d4);
    defineProp(protoOf(BlendingFactor), 'name', protoOf(BlendingFactor).c4);
    defineProp(protoOf(BlendingFactor), 'ordinal', protoOf(BlendingFactor).d4);
    defineProp(protoOf(CullFace), 'name', protoOf(CullFace).c4);
    defineProp(protoOf(CullFace), 'ordinal', protoOf(CullFace).d4);
    defineProp(protoOf(Scene), 'loaded', protoOf(Scene).g7, protoOf(Scene).f7);
    defineProp(protoOf(Scene), 'commands', function () {
        return this.v8();
    }, function (value) {
        this.u8(value);
    });
    defineProp(protoOf(Scene), 'meshes', function () {
        return this.x8();
    }, function (value) {
        this.w8(value);
    });
    defineProp(protoOf(Scene), 'textures', function () {
        return this.z8();
    }, function (value) {
        this.y8(value);
    });
    defineProp(protoOf(Scene), 'shaders', function () {
        return this.b9();
    }, function (value) {
        this.a9(value);
    });
    defineProp(protoOf(TextureFiltering), 'name', protoOf(TextureFiltering).c4);
    defineProp(protoOf(TextureFiltering), 'ordinal', protoOf(TextureFiltering).d4);
    defineProp(protoOf(TextureWrapping), 'name', protoOf(TextureWrapping).c4);
    defineProp(protoOf(TextureWrapping), 'ordinal', protoOf(TextureWrapping).d4);
    defineProp(protoOf(TextureFormat), 'name', protoOf(TextureFormat).c4);
    defineProp(protoOf(TextureFormat), 'ordinal', protoOf(TextureFormat).d4);
    defineProp(protoOf(VertexFormat), 'name', protoOf(VertexFormat).c4);
    defineProp(protoOf(VertexFormat), 'ordinal', protoOf(VertexFormat).d4);
    defineProp(protoOf(CameraPathAnimator), 'minDurationCoefficient', protoOf(CameraPathAnimator).zb, protoOf(CameraPathAnimator).yb);
    defineProp(protoOf(CameraPathAnimator), 'positionInterpolator', protoOf(CameraPathAnimator).ac);
    defineProp(protoOf(CameraPathAnimator), 'timer', protoOf(CameraPathAnimator).bc);
    defineProp(protoOf(CameraPathAnimator), 'state', protoOf(CameraPathAnimator).cc);
    defineProp(protoOf(CameraPathAnimator), 'currentCameraPair', protoOf(CameraPathAnimator).ec);
    defineProp(protoOf(CameraPositionInterpolator), 'cameraPosition', protoOf(CameraPositionInterpolator).sc);
    defineProp(protoOf(CameraPositionInterpolator), 'cameraRotation', protoOf(CameraPositionInterpolator).tc);
    defineProp(protoOf(CameraState), 'name', protoOf(CameraState).c4);
    defineProp(protoOf(CameraState), 'ordinal', protoOf(CameraState).d4);
    defineProp(protoOf(BlurSize), 'name', protoOf(BlurSize).c4);
    defineProp(protoOf(BlurSize), 'ordinal', protoOf(BlurSize).d4);
    defineProp(protoOf(Command), 'type', function () {
        return this.ad();
    });
    defineProp(protoOf(ClearCommandClearType), 'name', protoOf(ClearCommandClearType).c4);
    defineProp(protoOf(ClearCommandClearType), 'ordinal', protoOf(ClearCommandClearType).d4);
    defineProp(protoOf(CommandType), 'name', protoOf(CommandType).c4);
    defineProp(protoOf(CommandType), 'ordinal', protoOf(CommandType).d4);
    defineProp(protoOf(ShadingRate), 'name', protoOf(ShadingRate).c4);
    defineProp(protoOf(ShadingRate), 'ordinal', protoOf(ShadingRate).d4);
    defineProp(protoOf(ColorMode), 'name', protoOf(ColorMode).c4);
    defineProp(protoOf(ColorMode), 'ordinal', protoOf(ColorMode).d4);
    defineProp(protoOf(Vec2), 'x', protoOf(Vec2).qf, protoOf(Vec2).pf);
    defineProp(protoOf(Vec2), 'r', protoOf(Vec2).sf, protoOf(Vec2).rf);
    defineProp(protoOf(Vec2), 'y', protoOf(Vec2).uf, protoOf(Vec2).tf);
    defineProp(protoOf(Vec2), 'g', protoOf(Vec2).wf, protoOf(Vec2).vf);
    defineProp(protoOf(Vec3), 'x', protoOf(Vec3).qf, protoOf(Vec3).pf);
    defineProp(protoOf(Vec3), 'r', protoOf(Vec3).sf, protoOf(Vec3).rf);
    defineProp(protoOf(Vec3), 'y', protoOf(Vec3).uf, protoOf(Vec3).tf);
    defineProp(protoOf(Vec3), 'g', protoOf(Vec3).wf, protoOf(Vec3).vf);
    defineProp(protoOf(Vec3), 'z', protoOf(Vec3).cg, protoOf(Vec3).bg);
    defineProp(protoOf(Vec3), 'b', protoOf(Vec3).eg, protoOf(Vec3).dg);
    defineProp(protoOf(Vec4), 'x', protoOf(Vec4).qf, protoOf(Vec4).pf);
    defineProp(protoOf(Vec4), 'r', protoOf(Vec4).sf, protoOf(Vec4).rf);
    defineProp(protoOf(Vec4), 'y', protoOf(Vec4).uf, protoOf(Vec4).tf);
    defineProp(protoOf(Vec4), 'g', protoOf(Vec4).wf, protoOf(Vec4).vf);
    defineProp(protoOf(Vec4), 'z', protoOf(Vec4).cg, protoOf(Vec4).bg);
    defineProp(protoOf(Vec4), 'b', protoOf(Vec4).eg, protoOf(Vec4).dg);
    defineProp(protoOf(Vec4), 'w', protoOf(Vec4).lg, protoOf(Vec4).kg);
    defineProp(protoOf(Vec4), 'a', protoOf(Vec4).ng, protoOf(Vec4).mg);
    //endregion
    //region block: init
    Companion_instance = new Companion();
    MathUtils_instance = new MathUtils();
    //endregion
    //region block: exports
    function $jsExportAll$(_) {
        var $org = _.org || (_.org = {});
        var $org$androidworks = $org.androidworks || ($org.androidworks = {});
        var $org$androidworks$engine = $org$androidworks.engine || ($org$androidworks.engine = {});
        $org$androidworks$engine.BackendMode = BackendMode;
        $org$androidworks$engine.BackendMode.values = values;
        $org$androidworks$engine.BackendMode.valueOf = valueOf;
        defineProp($org$androidworks$engine.BackendMode, 'OPENGL', BackendMode_OPENGL_getInstance);
        defineProp($org$androidworks$engine.BackendMode, 'METAL', BackendMode_METAL_getInstance);
        var $org = _.org || (_.org = {});
        var $org$androidworks = $org.androidworks || ($org.androidworks = {});
        var $org$androidworks$engine = $org$androidworks.engine || ($org$androidworks.engine = {});
        $org$androidworks$engine.BlendingEquation = BlendingEquation;
        $org$androidworks$engine.BlendingEquation.values = values_0;
        $org$androidworks$engine.BlendingEquation.valueOf = valueOf_0;
        defineProp($org$androidworks$engine.BlendingEquation, 'ADD', BlendingEquation_ADD_getInstance);
        defineProp($org$androidworks$engine.BlendingEquation, 'SUBTRACT', BlendingEquation_SUBTRACT_getInstance);
        defineProp($org$androidworks$engine.BlendingEquation, 'REVERSE_SUBTRACT', BlendingEquation_REVERSE_SUBTRACT_getInstance);
        $org$androidworks$engine.BlendingFactor = BlendingFactor;
        $org$androidworks$engine.BlendingFactor.values = values_1;
        $org$androidworks$engine.BlendingFactor.valueOf = valueOf_1;
        defineProp($org$androidworks$engine.BlendingFactor, 'ZERO', BlendingFactor_ZERO_getInstance);
        defineProp($org$androidworks$engine.BlendingFactor, 'ONE', BlendingFactor_ONE_getInstance);
        defineProp($org$androidworks$engine.BlendingFactor, 'SRC_COLOR', BlendingFactor_SRC_COLOR_getInstance);
        defineProp($org$androidworks$engine.BlendingFactor, 'ONE_MINUS_SRC_COLOR', BlendingFactor_ONE_MINUS_SRC_COLOR_getInstance);
        defineProp($org$androidworks$engine.BlendingFactor, 'DST_COLOR', BlendingFactor_DST_COLOR_getInstance);
        defineProp($org$androidworks$engine.BlendingFactor, 'ONE_MINUS_DST_COLOR', BlendingFactor_ONE_MINUS_DST_COLOR_getInstance);
        defineProp($org$androidworks$engine.BlendingFactor, 'SRC_ALPHA', BlendingFactor_SRC_ALPHA_getInstance);
        defineProp($org$androidworks$engine.BlendingFactor, 'ONE_MINUS_SRC_ALPHA', BlendingFactor_ONE_MINUS_SRC_ALPHA_getInstance);
        defineProp($org$androidworks$engine.BlendingFactor, 'DST_ALPHA', BlendingFactor_DST_ALPHA_getInstance);
        defineProp($org$androidworks$engine.BlendingFactor, 'ONE_MINUS_DST_ALPHA', BlendingFactor_ONE_MINUS_DST_ALPHA_getInstance);
        defineProp($org$androidworks$engine.BlendingFactor, 'CONSTANT_COLOR', BlendingFactor_CONSTANT_COLOR_getInstance);
        defineProp($org$androidworks$engine.BlendingFactor, 'ONE_MINUS_CONSTANT_COLOR', BlendingFactor_ONE_MINUS_CONSTANT_COLOR_getInstance);
        defineProp($org$androidworks$engine.BlendingFactor, 'CONSTANT_ALPHA', BlendingFactor_CONSTANT_ALPHA_getInstance);
        defineProp($org$androidworks$engine.BlendingFactor, 'ONE_MINUS_CONSTANT_ALPHA', BlendingFactor_ONE_MINUS_CONSTANT_ALPHA_getInstance);
        defineProp($org$androidworks$engine.BlendingFactor, 'SRC_ALPHA_SATURATE', BlendingFactor_SRC_ALPHA_SATURATE_getInstance);
        $org$androidworks$engine.Blending = Blending;
        var $org = _.org || (_.org = {});
        var $org$androidworks = $org.androidworks || ($org.androidworks = {});
        var $org$androidworks$engine = $org$androidworks.engine || ($org$androidworks.engine = {});
        $org$androidworks$engine.CullFace = CullFace;
        $org$androidworks$engine.CullFace.values = values_2;
        $org$androidworks$engine.CullFace.valueOf = valueOf_2;
        defineProp($org$androidworks$engine.CullFace, 'FRONT', CullFace_FRONT_getInstance);
        defineProp($org$androidworks$engine.CullFace, 'BACK', CullFace_BACK_getInstance);
        defineProp($org$androidworks$engine.CullFace, 'FRONT_AND_BACK', CullFace_FRONT_AND_BACK_getInstance);
        defineProp($org$androidworks$engine.CullFace, 'DISABLED', CullFace_DISABLED_getInstance);
        var $org = _.org || (_.org = {});
        var $org$androidworks = $org.androidworks || ($org.androidworks = {});
        var $org$androidworks$engine = $org$androidworks.engine || ($org$androidworks.engine = {});
        $org$androidworks$engine.DepthMode = DepthMode;
        var $org = _.org || (_.org = {});
        var $org$androidworks = $org.androidworks || ($org.androidworks = {});
        var $org$androidworks$engine = $org$androidworks.engine || ($org$androidworks.engine = {});
        $org$androidworks$engine.Mesh = Mesh;
        var $org = _.org || (_.org = {});
        var $org$androidworks = $org.androidworks || ($org.androidworks = {});
        var $org$androidworks$engine = $org$androidworks.engine || ($org$androidworks.engine = {});
        $org$androidworks$engine.Scene = Scene;
        var $org = _.org || (_.org = {});
        var $org$androidworks = $org.androidworks || ($org.androidworks = {});
        var $org$androidworks$engine = $org$androidworks.engine || ($org$androidworks.engine = {});
        $org$androidworks$engine.Shader = Shader;
        var $org = _.org || (_.org = {});
        var $org$androidworks = $org.androidworks || ($org.androidworks = {});
        var $org$androidworks$engine = $org$androidworks.engine || ($org$androidworks.engine = {});
        $org$androidworks$engine.TextureFiltering = TextureFiltering;
        $org$androidworks$engine.TextureFiltering.values = values_3;
        $org$androidworks$engine.TextureFiltering.valueOf = valueOf_3;
        defineProp($org$androidworks$engine.TextureFiltering, 'NEAREST', TextureFiltering_NEAREST_getInstance);
        defineProp($org$androidworks$engine.TextureFiltering, 'LINEAR', TextureFiltering_LINEAR_getInstance);
        defineProp($org$androidworks$engine.TextureFiltering, 'NEAREST_MIPMAP_NEAREST', TextureFiltering_NEAREST_MIPMAP_NEAREST_getInstance);
        defineProp($org$androidworks$engine.TextureFiltering, 'LINEAR_MIPMAP_NEAREST', TextureFiltering_LINEAR_MIPMAP_NEAREST_getInstance);
        defineProp($org$androidworks$engine.TextureFiltering, 'NEAREST_MIPMAP_LINEAR', TextureFiltering_NEAREST_MIPMAP_LINEAR_getInstance);
        defineProp($org$androidworks$engine.TextureFiltering, 'LINEAR_MIPMAP_LINEAR', TextureFiltering_LINEAR_MIPMAP_LINEAR_getInstance);
        $org$androidworks$engine.TextureWrapping = TextureWrapping;
        $org$androidworks$engine.TextureWrapping.values = values_4;
        $org$androidworks$engine.TextureWrapping.valueOf = valueOf_4;
        defineProp($org$androidworks$engine.TextureWrapping, 'CLAMP_TO_EDGE', TextureWrapping_CLAMP_TO_EDGE_getInstance);
        defineProp($org$androidworks$engine.TextureWrapping, 'MIRRORED_REPEAT', TextureWrapping_MIRRORED_REPEAT_getInstance);
        defineProp($org$androidworks$engine.TextureWrapping, 'REPEAT', TextureWrapping_REPEAT_getInstance);
        $org$androidworks$engine.TextureFormat = TextureFormat;
        $org$androidworks$engine.TextureFormat.values = values_5;
        $org$androidworks$engine.TextureFormat.valueOf = valueOf_5;
        defineProp($org$androidworks$engine.TextureFormat, 'RGBA8', TextureFormat_RGBA8_getInstance);
        defineProp($org$androidworks$engine.TextureFormat, 'RGB8', TextureFormat_RGB8_getInstance);
        defineProp($org$androidworks$engine.TextureFormat, 'RGB16F', TextureFormat_RGB16F_getInstance);
        defineProp($org$androidworks$engine.TextureFormat, 'RGB32F', TextureFormat_RGB32F_getInstance);
        defineProp($org$androidworks$engine.TextureFormat, 'RGBA16F', TextureFormat_RGBA16F_getInstance);
        defineProp($org$androidworks$engine.TextureFormat, 'RGBA32F', TextureFormat_RGBA32F_getInstance);
        defineProp($org$androidworks$engine.TextureFormat, 'ASTC', TextureFormat_ASTC_getInstance);
        $org$androidworks$engine.Texture = Texture;
        var $org = _.org || (_.org = {});
        var $org$androidworks = $org.androidworks || ($org.androidworks = {});
        var $org$androidworks$engine = $org$androidworks.engine || ($org$androidworks.engine = {});
        $org$androidworks$engine.UniformValue = UniformValue;
        $org$androidworks$engine.UniformFloatValue = UniformFloatValue;
        $org$androidworks$engine.UniformIntValue = UniformIntValue;
        $org$androidworks$engine.UniformTextureValue = UniformTextureValue;
        var $org = _.org || (_.org = {});
        var $org$androidworks = $org.androidworks || ($org.androidworks = {});
        var $org$androidworks$engine = $org$androidworks.engine || ($org$androidworks.engine = {});
        $org$androidworks$engine.VertexFormat = VertexFormat;
        $org$androidworks$engine.VertexFormat.values = values_6;
        $org$androidworks$engine.VertexFormat.valueOf = valueOf_6;
        defineProp($org$androidworks$engine.VertexFormat, 'UBYTE', VertexFormat_UBYTE_getInstance);
        defineProp($org$androidworks$engine.VertexFormat, 'UBYTE2', VertexFormat_UBYTE2_getInstance);
        defineProp($org$androidworks$engine.VertexFormat, 'UBYTE3', VertexFormat_UBYTE3_getInstance);
        defineProp($org$androidworks$engine.VertexFormat, 'UBYTE4', VertexFormat_UBYTE4_getInstance);
        defineProp($org$androidworks$engine.VertexFormat, 'BYTE', VertexFormat_BYTE_getInstance);
        defineProp($org$androidworks$engine.VertexFormat, 'BYTE2', VertexFormat_BYTE2_getInstance);
        defineProp($org$androidworks$engine.VertexFormat, 'BYTE3', VertexFormat_BYTE3_getInstance);
        defineProp($org$androidworks$engine.VertexFormat, 'BYTE4', VertexFormat_BYTE4_getInstance);
        defineProp($org$androidworks$engine.VertexFormat, 'UBYTE_NORMALIZED', VertexFormat_UBYTE_NORMALIZED_getInstance);
        defineProp($org$androidworks$engine.VertexFormat, 'UBYTE2_NORMALIZED', VertexFormat_UBYTE2_NORMALIZED_getInstance);
        defineProp($org$androidworks$engine.VertexFormat, 'UBYTE3_NORMALIZED', VertexFormat_UBYTE3_NORMALIZED_getInstance);
        defineProp($org$androidworks$engine.VertexFormat, 'UBYTE4_NORMALIZED', VertexFormat_UBYTE4_NORMALIZED_getInstance);
        defineProp($org$androidworks$engine.VertexFormat, 'BYTE_NORMALIZED', VertexFormat_BYTE_NORMALIZED_getInstance);
        defineProp($org$androidworks$engine.VertexFormat, 'BYTE2_NORMALIZED', VertexFormat_BYTE2_NORMALIZED_getInstance);
        defineProp($org$androidworks$engine.VertexFormat, 'BYTE3_NORMALIZED', VertexFormat_BYTE3_NORMALIZED_getInstance);
        defineProp($org$androidworks$engine.VertexFormat, 'BYTE4_NORMALIZED', VertexFormat_BYTE4_NORMALIZED_getInstance);
        defineProp($org$androidworks$engine.VertexFormat, 'USHORT', VertexFormat_USHORT_getInstance);
        defineProp($org$androidworks$engine.VertexFormat, 'USHORT2', VertexFormat_USHORT2_getInstance);
        defineProp($org$androidworks$engine.VertexFormat, 'USHORT3', VertexFormat_USHORT3_getInstance);
        defineProp($org$androidworks$engine.VertexFormat, 'USHORT4', VertexFormat_USHORT4_getInstance);
        defineProp($org$androidworks$engine.VertexFormat, 'SHORT', VertexFormat_SHORT_getInstance);
        defineProp($org$androidworks$engine.VertexFormat, 'SHORT2', VertexFormat_SHORT2_getInstance);
        defineProp($org$androidworks$engine.VertexFormat, 'SHORT3', VertexFormat_SHORT3_getInstance);
        defineProp($org$androidworks$engine.VertexFormat, 'SHORT4', VertexFormat_SHORT4_getInstance);
        defineProp($org$androidworks$engine.VertexFormat, 'USHORT_NORMALIZED', VertexFormat_USHORT_NORMALIZED_getInstance);
        defineProp($org$androidworks$engine.VertexFormat, 'USHORT2_NORMALIZED', VertexFormat_USHORT2_NORMALIZED_getInstance);
        defineProp($org$androidworks$engine.VertexFormat, 'USHORT3_NORMALIZED', VertexFormat_USHORT3_NORMALIZED_getInstance);
        defineProp($org$androidworks$engine.VertexFormat, 'USHORT4_NORMALIZED', VertexFormat_USHORT4_NORMALIZED_getInstance);
        defineProp($org$androidworks$engine.VertexFormat, 'SHORT_NORMALIZED', VertexFormat_SHORT_NORMALIZED_getInstance);
        defineProp($org$androidworks$engine.VertexFormat, 'SHORT2_NORMALIZED', VertexFormat_SHORT2_NORMALIZED_getInstance);
        defineProp($org$androidworks$engine.VertexFormat, 'SHORT3_NORMALIZED', VertexFormat_SHORT3_NORMALIZED_getInstance);
        defineProp($org$androidworks$engine.VertexFormat, 'SHORT4_NORMALIZED', VertexFormat_SHORT4_NORMALIZED_getInstance);
        defineProp($org$androidworks$engine.VertexFormat, 'HALF', VertexFormat_HALF_getInstance);
        defineProp($org$androidworks$engine.VertexFormat, 'HALF2', VertexFormat_HALF2_getInstance);
        defineProp($org$androidworks$engine.VertexFormat, 'HALF3', VertexFormat_HALF3_getInstance);
        defineProp($org$androidworks$engine.VertexFormat, 'HALF4', VertexFormat_HALF4_getInstance);
        defineProp($org$androidworks$engine.VertexFormat, 'FLOAT', VertexFormat_FLOAT_getInstance);
        defineProp($org$androidworks$engine.VertexFormat, 'FLOAT2', VertexFormat_FLOAT2_getInstance);
        defineProp($org$androidworks$engine.VertexFormat, 'FLOAT3', VertexFormat_FLOAT3_getInstance);
        defineProp($org$androidworks$engine.VertexFormat, 'FLOAT4', VertexFormat_FLOAT4_getInstance);
        defineProp($org$androidworks$engine.VertexFormat, 'UINT', VertexFormat_UINT_getInstance);
        defineProp($org$androidworks$engine.VertexFormat, 'UINT2', VertexFormat_UINT2_getInstance);
        defineProp($org$androidworks$engine.VertexFormat, 'UINT3', VertexFormat_UINT3_getInstance);
        defineProp($org$androidworks$engine.VertexFormat, 'UINT4', VertexFormat_UINT4_getInstance);
        defineProp($org$androidworks$engine.VertexFormat, 'INT', VertexFormat_INT_getInstance);
        defineProp($org$androidworks$engine.VertexFormat, 'INT2', VertexFormat_INT2_getInstance);
        defineProp($org$androidworks$engine.VertexFormat, 'INT3', VertexFormat_INT3_getInstance);
        defineProp($org$androidworks$engine.VertexFormat, 'INT4', VertexFormat_INT4_getInstance);
        defineProp($org$androidworks$engine.VertexFormat, 'INT_1010102_NORMALIZED', VertexFormat_INT_1010102_NORMALIZED_getInstance);
        defineProp($org$androidworks$engine.VertexFormat, 'UINT_1010102_NORMALIZED', VertexFormat_UINT_1010102_NORMALIZED_getInstance);
        $org$androidworks$engine.VertexAttribute = VertexAttribute;
        $org$androidworks$engine.VertexAttributesDescriptor = VertexAttributesDescriptor;
        var $org = _.org || (_.org = {});
        var $org$androidworks = $org.androidworks || ($org.androidworks = {});
        var $org$androidworks$engine = $org$androidworks.engine || ($org$androidworks.engine = {});
        var $org$androidworks$engine$camera = $org$androidworks$engine.camera || ($org$androidworks$engine.camera = {});
        $org$androidworks$engine$camera.CameraPathAnimator = CameraPathAnimator;
        var $org = _.org || (_.org = {});
        var $org$androidworks = $org.androidworks || ($org.androidworks = {});
        var $org$androidworks$engine = $org$androidworks.engine || ($org$androidworks.engine = {});
        var $org$androidworks$engine$camera = $org$androidworks$engine.camera || ($org$androidworks$engine.camera = {});
        $org$androidworks$engine$camera.CameraPositionInterpolator = CameraPositionInterpolator;
        defineProp($org$androidworks$engine$camera.CameraPositionInterpolator, 'Companion', Companion_getInstance);
        var $org = _.org || (_.org = {});
        var $org$androidworks = $org.androidworks || ($org.androidworks = {});
        var $org$androidworks$engine = $org$androidworks.engine || ($org$androidworks.engine = {});
        var $org$androidworks$engine$camera = $org$androidworks$engine.camera || ($org$androidworks$engine.camera = {});
        $org$androidworks$engine$camera.CameraState = CameraState;
        $org$androidworks$engine$camera.CameraState.values = values_7;
        $org$androidworks$engine$camera.CameraState.valueOf = valueOf_7;
        defineProp($org$androidworks$engine$camera.CameraState, 'ANIMATING', CameraState_ANIMATING_getInstance);
        defineProp($org$androidworks$engine$camera.CameraState, 'TRANSITIONING', CameraState_TRANSITIONING_getInstance);
        var $org = _.org || (_.org = {});
        var $org$androidworks = $org.androidworks || ($org.androidworks = {});
        var $org$androidworks$engine = $org$androidworks.engine || ($org$androidworks.engine = {});
        var $org$androidworks$engine$commands = $org$androidworks$engine.commands || ($org$androidworks$engine.commands = {});
        $org$androidworks$engine$commands.BlurSize = BlurSize;
        $org$androidworks$engine$commands.BlurSize.values = values_8;
        $org$androidworks$engine$commands.BlurSize.valueOf = valueOf_8;
        defineProp($org$androidworks$engine$commands.BlurSize, 'KERNEL_5', BlurSize_KERNEL_5_getInstance);
        defineProp($org$androidworks$engine$commands.BlurSize, 'KERNEL_4', BlurSize_KERNEL_4_getInstance);
        defineProp($org$androidworks$engine$commands.BlurSize, 'KERNEL_3', BlurSize_KERNEL_3_getInstance);
        defineProp($org$androidworks$engine$commands.BlurSize, 'KERNEL_2', BlurSize_KERNEL_2_getInstance);
        $org$androidworks$engine$commands.BlurredPassCommand = BlurredPassCommand;
        $org$androidworks$engine$commands.DrawBlurredCommand = DrawBlurredCommand;
        var $org = _.org || (_.org = {});
        var $org$androidworks = $org.androidworks || ($org.androidworks = {});
        var $org$androidworks$engine = $org$androidworks.engine || ($org$androidworks.engine = {});
        var $org$androidworks$engine$commands = $org$androidworks$engine.commands || ($org$androidworks$engine.commands = {});
        $org$androidworks$engine$commands.ClearColorCommand = ClearColorCommand;
        var $org = _.org || (_.org = {});
        var $org$androidworks = $org.androidworks || ($org.androidworks = {});
        var $org$androidworks$engine = $org$androidworks.engine || ($org$androidworks.engine = {});
        var $org$androidworks$engine$commands = $org$androidworks$engine.commands || ($org$androidworks$engine.commands = {});
        $org$androidworks$engine$commands.ClearCommandClearType = ClearCommandClearType;
        $org$androidworks$engine$commands.ClearCommandClearType.values = values_9;
        $org$androidworks$engine$commands.ClearCommandClearType.valueOf = valueOf_9;
        defineProp($org$androidworks$engine$commands.ClearCommandClearType, 'COLOR', ClearCommandClearType_COLOR_getInstance);
        defineProp($org$androidworks$engine$commands.ClearCommandClearType, 'DEPTH', ClearCommandClearType_DEPTH_getInstance);
        defineProp($org$androidworks$engine$commands.ClearCommandClearType, 'COLOR_AND_DEPTH', ClearCommandClearType_COLOR_AND_DEPTH_getInstance);
        $org$androidworks$engine$commands.ClearCommand = ClearCommand;
        var $org = _.org || (_.org = {});
        var $org$androidworks = $org.androidworks || ($org.androidworks = {});
        var $org$androidworks$engine = $org$androidworks.engine || ($org$androidworks.engine = {});
        var $org$androidworks$engine$commands = $org$androidworks$engine.commands || ($org$androidworks$engine.commands = {});
        $org$androidworks$engine$commands.Command = Command;
        var $org = _.org || (_.org = {});
        var $org$androidworks = $org.androidworks || ($org.androidworks = {});
        var $org$androidworks$engine = $org$androidworks.engine || ($org$androidworks.engine = {});
        var $org$androidworks$engine$commands = $org$androidworks$engine.commands || ($org$androidworks$engine.commands = {});
        $org$androidworks$engine$commands.CommandType = CommandType;
        $org$androidworks$engine$commands.CommandType.values = values_10;
        $org$androidworks$engine$commands.CommandType.valueOf = valueOf_10;
        defineProp($org$androidworks$engine$commands.CommandType, 'NOOP', CommandType_NOOP_getInstance);
        defineProp($org$androidworks$engine$commands.CommandType, 'GROUP', CommandType_GROUP_getInstance);
        defineProp($org$androidworks$engine$commands.CommandType, 'CLEAR_COLOR', CommandType_CLEAR_COLOR_getInstance);
        defineProp($org$androidworks$engine$commands.CommandType, 'CLEAR', CommandType_CLEAR_getInstance);
        defineProp($org$androidworks$engine$commands.CommandType, 'VIGNETTE', CommandType_VIGNETTE_getInstance);
        defineProp($org$androidworks$engine$commands.CommandType, 'DRAW_MESH', CommandType_DRAW_MESH_getInstance);
        defineProp($org$androidworks$engine$commands.CommandType, 'BLURRED_PASS', CommandType_BLURRED_PASS_getInstance);
        defineProp($org$androidworks$engine$commands.CommandType, 'DRAW_BLURRED', CommandType_DRAW_BLURRED_getInstance);
        defineProp($org$androidworks$engine$commands.CommandType, 'RENDER_PASS', CommandType_RENDER_PASS_getInstance);
        defineProp($org$androidworks$engine$commands.CommandType, 'MAIN_PASS', CommandType_MAIN_PASS_getInstance);
        defineProp($org$androidworks$engine$commands.CommandType, 'CUSTOM', CommandType_CUSTOM_getInstance);
        var $org = _.org || (_.org = {});
        var $org$androidworks = $org.androidworks || ($org.androidworks = {});
        var $org$androidworks$engine = $org$androidworks.engine || ($org$androidworks.engine = {});
        var $org$androidworks$engine$commands = $org$androidworks$engine.commands || ($org$androidworks$engine.commands = {});
        $org$androidworks$engine$commands.DrawMeshState = DrawMeshState;
        $org$androidworks$engine$commands.DrawMeshCommand = DrawMeshCommand;
        var $org = _.org || (_.org = {});
        var $org$androidworks = $org.androidworks || ($org.androidworks = {});
        var $org$androidworks$engine = $org$androidworks.engine || ($org$androidworks.engine = {});
        var $org$androidworks$engine$commands = $org$androidworks$engine.commands || ($org$androidworks$engine.commands = {});
        $org$androidworks$engine$commands.DrawTransformedMeshCommand = DrawTransformedMeshCommand;
        var $org = _.org || (_.org = {});
        var $org$androidworks = $org.androidworks || ($org.androidworks = {});
        var $org$androidworks$engine = $org$androidworks.engine || ($org$androidworks.engine = {});
        var $org$androidworks$engine$commands = $org$androidworks$engine.commands || ($org$androidworks$engine.commands = {});
        $org$androidworks$engine$commands.GroupCommand = GroupCommand;
        $org$androidworks$engine$commands.GroupCommand.GroupCommandArr = GroupCommandArr;
        var $org = _.org || (_.org = {});
        var $org$androidworks = $org.androidworks || ($org.androidworks = {});
        var $org$androidworks$engine = $org$androidworks.engine || ($org$androidworks.engine = {});
        var $org$androidworks$engine$commands = $org$androidworks$engine.commands || ($org$androidworks$engine.commands = {});
        $org$androidworks$engine$commands.Hint = Hint;
        $org$androidworks$engine$commands.ShadingRate = ShadingRate;
        $org$androidworks$engine$commands.ShadingRate.values = values_11;
        $org$androidworks$engine$commands.ShadingRate.valueOf = valueOf_11;
        defineProp($org$androidworks$engine$commands.ShadingRate, 'SHADING_RATE_1X1', ShadingRate_SHADING_RATE_1X1_getInstance);
        defineProp($org$androidworks$engine$commands.ShadingRate, 'SHADING_RATE_1X2', ShadingRate_SHADING_RATE_1X2_getInstance);
        defineProp($org$androidworks$engine$commands.ShadingRate, 'SHADING_RATE_2X1', ShadingRate_SHADING_RATE_2X1_getInstance);
        defineProp($org$androidworks$engine$commands.ShadingRate, 'SHADING_RATE_2X2', ShadingRate_SHADING_RATE_2X2_getInstance);
        defineProp($org$androidworks$engine$commands.ShadingRate, 'SHADING_RATE_4X2', ShadingRate_SHADING_RATE_4X2_getInstance);
        defineProp($org$androidworks$engine$commands.ShadingRate, 'SHADING_RATE_4X4', ShadingRate_SHADING_RATE_4X4_getInstance);
        $org$androidworks$engine$commands.VrsHint = VrsHint;
        var $org = _.org || (_.org = {});
        var $org$androidworks = $org.androidworks || ($org.androidworks = {});
        var $org$androidworks$engine = $org$androidworks.engine || ($org$androidworks.engine = {});
        var $org$androidworks$engine$commands = $org$androidworks$engine.commands || ($org$androidworks$engine.commands = {});
        $org$androidworks$engine$commands.MainPassCommand = MainPassCommand;
        $org$androidworks$engine$commands.MainPassCommand.MainPassCommandConstructor = MainPassCommandConstructor;
        $org$androidworks$engine$commands.MainPassCommand.MainPassCommandArr = MainPassCommandArr;
        var $org = _.org || (_.org = {});
        var $org$androidworks = $org.androidworks || ($org.androidworks = {});
        var $org$androidworks$engine = $org$androidworks.engine || ($org$androidworks.engine = {});
        var $org$androidworks$engine$commands = $org$androidworks$engine.commands || ($org$androidworks$engine.commands = {});
        $org$androidworks$engine$commands.NoopCommand = NoopCommand;
        var $org = _.org || (_.org = {});
        var $org$androidworks = $org.androidworks || ($org.androidworks = {});
        var $org$androidworks$engine = $org$androidworks.engine || ($org$androidworks.engine = {});
        var $org$androidworks$engine$commands = $org$androidworks$engine.commands || ($org$androidworks$engine.commands = {});
        $org$androidworks$engine$commands.RenderPassCommand = RenderPassCommand;
        $org$androidworks$engine$commands.RenderPassCommand.RenderPassCommandConstructor = RenderPassCommandConstructor;
        $org$androidworks$engine$commands.RenderPassCommand.RenderPassCommandArr = RenderPassCommandArr;
        var $org = _.org || (_.org = {});
        var $org$androidworks = $org.androidworks || ($org.androidworks = {});
        var $org$androidworks$engine = $org$androidworks.engine || ($org$androidworks.engine = {});
        var $org$androidworks$engine$commands = $org$androidworks$engine.commands || ($org$androidworks$engine.commands = {});
        $org$androidworks$engine$commands.VignetteCommand = VignetteCommand;
        var $org = _.org || (_.org = {});
        var $org$androidworks = $org.androidworks || ($org.androidworks = {});
        var $org$androidworks$engine = $org$androidworks.engine || ($org$androidworks.engine = {});
        var $org$androidworks$engine$common = $org$androidworks$engine.common || ($org$androidworks$engine.common = {});
        $org$androidworks$engine$common.ColorMode = ColorMode;
        $org$androidworks$engine$common.ColorMode.values = values_12;
        $org$androidworks$engine$common.ColorMode.valueOf = valueOf_12;
        defineProp($org$androidworks$engine$common.ColorMode, 'Normal', ColorMode_Normal_getInstance);
        defineProp($org$androidworks$engine$common.ColorMode, 'Grayscale', ColorMode_Grayscale_getInstance);
        defineProp($org$androidworks$engine$common.ColorMode, 'Sepia', ColorMode_Sepia_getInstance);
        defineProp($org$androidworks$engine$common.ColorMode, 'HighContrast', ColorMode_HighContrast_getInstance);
        defineProp($org$androidworks$engine$common.ColorMode, 'LowContrast', ColorMode_LowContrast_getInstance);
        defineProp($org$androidworks$engine$common.ColorMode, 'BlackAndWhite', ColorMode_BlackAndWhite_getInstance);
        defineProp($org$androidworks$engine$common.ColorMode, 'IsolatedColor', ColorMode_IsolatedColor_getInstance);
        defineProp($org$androidworks$engine$common.ColorMode, 'Crosshatch', ColorMode_Crosshatch_getInstance);
        defineProp($org$androidworks$engine$common.ColorMode, 'LimitedColors', ColorMode_LimitedColors_getInstance);
        var $org = _.org || (_.org = {});
        var $org$androidworks = $org.androidworks || ($org.androidworks = {});
        var $org$androidworks$engine = $org$androidworks.engine || ($org$androidworks.engine = {});
        var $org$androidworks$engine$math = $org$androidworks$engine.math || ($org$androidworks$engine.math = {});
        $org$androidworks$engine$math.Vec2 = Vec2;
        var $org = _.org || (_.org = {});
        var $org$androidworks = $org.androidworks || ($org.androidworks = {});
        var $org$androidworks$engine = $org$androidworks.engine || ($org$androidworks.engine = {});
        var $org$androidworks$engine$math = $org$androidworks$engine.math || ($org$androidworks$engine.math = {});
        $org$androidworks$engine$math.Vec3 = Vec3;
        var $org = _.org || (_.org = {});
        var $org$androidworks = $org.androidworks || ($org.androidworks = {});
        var $org$androidworks$engine = $org$androidworks.engine || ($org$androidworks.engine = {});
        var $org$androidworks$engine$math = $org$androidworks$engine.math || ($org$androidworks$engine.math = {});
        $org$androidworks$engine$math.Vec4 = Vec4;
    }
    $jsExportAll$(_);
    _.$jsExportAll$ = $jsExportAll$;
    _.$_$ = _.$_$ || {};
    _.$_$.a = CameraState_TRANSITIONING_getInstance;
    _.$_$.b = BlurSize_KERNEL_3_getInstance;
    _.$_$.c = BlurSize_KERNEL_5_getInstance;
    _.$_$.d = ClearCommandClearType_COLOR_AND_DEPTH_getInstance;
    _.$_$.e = CommandType_CUSTOM_getInstance;
    _.$_$.f = ColorMode_Normal_getInstance;
    _.$_$.g = ColorMode_Sepia_getInstance;
    _.$_$.h = BlendingEquation_ADD_getInstance;
    _.$_$.i = BlendingFactor_ONE_getInstance;
    _.$_$.j = CullFace_BACK_getInstance;
    _.$_$.k = TextureFiltering_LINEAR_MIPMAP_LINEAR_getInstance;
    _.$_$.l = TextureFiltering_NEAREST_getInstance;
    _.$_$.m = TextureFormat_ASTC_getInstance;
    _.$_$.n = TextureFormat_RGBA16F_getInstance;
    _.$_$.o = TextureWrapping_CLAMP_TO_EDGE_getInstance;
    _.$_$.p = VertexFormat_FLOAT2_getInstance;
    _.$_$.q = VertexFormat_FLOAT3_getInstance;
    _.$_$.r = VertexFormat_FLOAT4_getInstance;
    _.$_$.s = VertexFormat_HALF2_getInstance;
    _.$_$.t = VertexFormat_HALF3_getInstance;
    _.$_$.u = GroupCommandArr;
    _.$_$.v = MainPassCommandArr;
    _.$_$.w = Matrix_getInstance;
    _.$_$.x = TextureAnimationChunked;
    _.$_$.y = CameraPathAnimator;
    _.$_$.z = CameraPositionPair;
    _.$_$.a1 = CameraPosition;
    _.$_$.b1 = AffineTranformation;
    _.$_$.c1 = BlurredPassCommand;
    _.$_$.d1 = ClearColorCommand;
    _.$_$.e1 = ClearCommand;
    _.$_$.f1 = Command;
    _.$_$.g1 = DrawBlurredCommand;
    _.$_$.h1 = DrawMeshCommand;
    _.$_$.i1 = DrawMeshState;
    _.$_$.j1 = DrawTransformedMeshCommand;
    _.$_$.k1 = GroupCommand;
    _.$_$.l1 = get_HINT_VRS_2X2;
    _.$_$.m1 = get_HINT_VRS_4X4;
    _.$_$.n1 = get_HINT_VRS_NONE;
    _.$_$.o1 = NoopCommand;
    _.$_$.p1 = VignetteCommand;
    _.$_$.q1 = Vec3;
    _.$_$.r1 = Vec4;
    _.$_$.s1 = TimersMap;
    _.$_$.t1 = get_BLENDING_NONE;
    _.$_$.u1 = Blending;
    _.$_$.v1 = get_DEPTH_NO_WRITE;
    _.$_$.w1 = get_DEPTH_TEST_ENABLED;
    _.$_$.x1 = Mesh;
    _.$_$.y1 = Scene;
    _.$_$.z1 = Shader;
    _.$_$.a2 = Texture;
    _.$_$.b2 = UniformFloatValue;
    _.$_$.c2 = UniformIntValue;
    _.$_$.d2 = UniformTextureValue;
    _.$_$.e2 = VertexAttributesDescriptor;
    _.$_$.f2 = VertexAttribute;
    _.$_$.g2 = setUniform_2;
    _.$_$.h2 = setUniform_1;
    _.$_$.i2 = setUniform_0;
    //endregion
    return _;
}));
//# sourceMappingURL=KMP-library-engine.js.map
//# sourceMappingURL=KMP-library-engine.js.map