"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Renderer = void 0;
const webgl_framework_1 = require("webgl-framework");
const KotlinLib_1 = require("./KotlinLib");
const SceneRenderer_1 = require("./SceneRenderer");
const DiffuseShader_1 = require("./shaders/DiffuseShader");
const ClockOverlay_1 = require("./utils/ClockOverlay");
const Filters_1 = require("./Filters");
class Renderer extends SceneRenderer_1.SceneRenderer {
    constructor() {
        super();
        this.SCENE_BOUNDING_BOX = {
            minX: -5000,
            maxX: 5000,
            minY: -5000,
            maxY: 5000,
            minZ: -1000,
            maxZ: 3000
        };
        this.FREE_MOVEMENT_SPEED = 200;
        this.initCommands();
    }
    /**
     * Fills static array `commands` with the commands from the scene. Use only if scene has static commands.
     */
    initCommands() {
    }
    createScene() {
        return new KotlinLib_1.brutalism.BrutalismScene;
    }
    createShader(name) {
        var _a;
        const filters = (0, Filters_1.getFilters)("gl_FragColor");
        const filter = filters[(_a = this.scene) === null || _a === void 0 ? void 0 : _a.settings.colorMode.name];
        if (name === "Diffuse") {
            return new DiffuseShader_1.DiffuseShader(this.gl, [], filter);
        }
        throw new Error(`Unknown shader type ${name}`);
    }
    nextCamera() {
        var _a;
        (_a = this.scene) === null || _a === void 0 ? void 0 : _a.nextCamera();
    }
    nextRoom() {
        var _a;
        (_a = this.scene) === null || _a === void 0 ? void 0 : _a.nextRoom();
    }
    nextCameraOrRoom() {
        var _a;
        (_a = this.scene) === null || _a === void 0 ? void 0 : _a.nextCameraOrRoom();
    }
    randomCameraOrNextRoom() {
        var _a;
        (_a = this.scene) === null || _a === void 0 ? void 0 : _a.randomCameraOrNextRoom();
    }
    get settings() {
        return this.scene.settings;
    }
    processCustomCommand(command) {
        if (!command.enabled) {
            return;
        }
        if (command instanceof KotlinLib_1.brutalism.DrawClockCommand) {
            this.processDrawClock();
        }
    }
    async loadSceneTextures() {
        await super.loadSceneTextures();
        this.texClock = await webgl_framework_1.UncompressedTextureLoader.load("data/textures/time.webp", this.gl, this.gl.LINEAR, this.gl.LINEAR, false);
    }
    processDrawClock() {
        var _a;
        (_a = this.clockOverlay) !== null && _a !== void 0 ? _a : (this.clockOverlay = new ClockOverlay_1.ClockOverlay(this.gl));
        const ratio = this.canvas.width / this.canvas.height;
        this.clockOverlay.ratio = ratio;
        this.clockOverlay.offsetY = 0.3;
        this.clockOverlay.size = ratio > 1 ? 0.4 : 0.75;
        this.gl.disable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.BLEND);
        this.gl.blendFunc(this.gl.ONE, this.gl.ONE);
        this.gl.depthMask(false);
        this.unbindBuffers();
        this.shaderDiffuse.use();
        this.setTexture2D(0, this.texClock, this.shaderDiffuse.sTexture);
        this.clockOverlay.draw(this.shaderDiffuse);
    }
}
exports.Renderer = Renderer;
//# sourceMappingURL=Renderer.js.map