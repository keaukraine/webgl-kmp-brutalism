import { SceneRenderer } from "../SceneRenderer";
import { lib } from "../KotlinLib";
export declare function loadFp32Texture(renderer: SceneRenderer<lib.org.androidworks.engine.Scene>, data: ArrayBuffer, gl: WebGL2RenderingContext, width: number, height: number, minFilter?: number, magFilter?: number, clamp?: boolean, type?: "fp32" | "fp16" | "snorm8" | "sbyte", numberOfComponents?: number): WebGLTexture;
export declare function loadFloatingPointTexture(renderer: SceneRenderer<lib.org.androidworks.engine.Scene>, data: ArrayBuffer, gl: WebGL2RenderingContext, width: number, height: number, minFilter?: number | undefined, magFilter?: number | undefined, clamp?: boolean, type?: "fp32" | "fp16" | "snorm8" | "sbyte", numberOfComponents?: number): WebGLTexture;
