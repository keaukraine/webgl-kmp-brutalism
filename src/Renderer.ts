import { BaseShader, UncompressedTextureLoader } from "webgl-framework";
import { brutalism, lib } from "./KotlinLib";
import { SceneRenderer } from "./SceneRenderer";
import { ShaderInputs } from "./shaders/ShaderInputs";
import { DiffuseShader } from "./shaders/DiffuseShader";
import { ClockOverlay } from "./utils/ClockOverlay";
import { Preprocessing, ShaderPreprocessing } from "./ShaderPreprocessing";
import *  as GlslUtils from "./utils/GlslUtils";
import { getFilters } from "./Filters";

export class Renderer extends SceneRenderer<lib.org.androidworks.brutalism.BrutalismScene> {
    protected SCENE_BOUNDING_BOX = {
        minX: -5000,
        maxX: 5000,
        minY: -5000,
        maxY: 5000,
        minZ: -1000,
        maxZ: 3000
    };
    protected FREE_MOVEMENT_SPEED = 200;

    protected clockOverlay?: ClockOverlay;
    protected texClock?: WebGLTexture;

    constructor() {
        super();
        this.initCommands();
    }

    /**
     * Fills static array `commands` with the commands from the scene. Use only if scene has static commands.
     */
    protected initCommands(): void {
    }

    createScene(): lib.org.androidworks.brutalism.BrutalismScene {
        return new brutalism.BrutalismScene;
    }

    createShader(name: string): (BaseShader & ShaderInputs) {
        const filters = getFilters("gl_FragColor");
        const filter = filters[this.scene?.settings.colorMode.name!];

        if (name === "Diffuse") {
            return new DiffuseShader(this.gl, [], filter);
        }

        throw new Error(`Unknown shader type ${name}`);
    }

    public nextCamera(): void {
        this.scene?.nextCamera();
    }

    public nextRoom(): void {
        this.scene?.nextRoom();
    }

    public nextCameraOrRoom(): void {
        this.scene?.nextCameraOrRoom();
    }

    public randomCameraOrNextRoom(): void {
        this.scene?.randomCameraOrNextRoom();
    }

    public get settings() {
        return this.scene!.settings;
    }

    protected processCustomCommand(command: lib.org.androidworks.engine.commands.Command): void {
        if (!command.enabled) {
            return;
        }

        if (command instanceof brutalism.DrawClockCommand) {
            this.processDrawClock();
        }
    }

    protected async loadSceneTextures(): Promise<void> {
        await super.loadSceneTextures();
        this.texClock = await UncompressedTextureLoader.load("data/textures/time.webp", this.gl, this.gl.LINEAR, this.gl.LINEAR, false);
    }

    protected processDrawClock(): void {
        this.clockOverlay ??= new ClockOverlay(this.gl);
        const ratio = this.canvas!.width / this.canvas!.height;
        this.clockOverlay.ratio = ratio;
        this.clockOverlay.offsetY = 0.3;
        this.clockOverlay.size = ratio > 1 ? 0.4 : 0.75;

        this.gl.disable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.BLEND);
        this.gl.blendFunc(this.gl.ONE, this.gl.ONE);
        this.gl.depthMask(false);
        this.unbindBuffers();
        this.shaderDiffuse!.use();
        this.setTexture2D(0, this.texClock!, this.shaderDiffuse!.sTexture!);
        this.clockOverlay.draw(this.shaderDiffuse!);
    }
}
