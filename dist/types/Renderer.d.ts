import { BaseShader } from "webgl-framework";
import { lib } from "./KotlinLib";
import { SceneRenderer } from "./SceneRenderer";
import { ShaderInputs } from "./shaders/ShaderInputs";
import { ClockOverlay } from "./utils/ClockOverlay";
export declare class Renderer extends SceneRenderer<lib.org.androidworks.brutalism.BrutalismScene> {
    protected SCENE_BOUNDING_BOX: {
        minX: number;
        maxX: number;
        minY: number;
        maxY: number;
        minZ: number;
        maxZ: number;
    };
    protected FREE_MOVEMENT_SPEED: number;
    protected clockOverlay?: ClockOverlay;
    protected texClock?: WebGLTexture;
    constructor();
    /**
     * Fills static array `commands` with the commands from the scene. Use only if scene has static commands.
     */
    protected initCommands(): void;
    createScene(): lib.org.androidworks.brutalism.BrutalismScene;
    createShader(name: string): (BaseShader & ShaderInputs);
    nextCamera(): void;
    nextRoom(): void;
    nextCameraOrRoom(): void;
    randomCameraOrNextRoom(): void;
    get settings(): lib.org.androidworks.brutalism.BrutalismSettings;
    protected processCustomCommand(command: lib.org.androidworks.engine.commands.Command): void;
    protected loadSceneTextures(): Promise<void>;
    protected processDrawClock(): void;
}
