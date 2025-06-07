import { SceneRenderer } from "../SceneRenderer";
import { lib } from "../KotlinLib";

export function loadFp32Texture(
    renderer: SceneRenderer<lib.org.androidworks.engine.Scene>,
    data: ArrayBuffer,
    gl: WebGL2RenderingContext,
    width: number,
    height: number,
    minFilter = gl.LINEAR,
    magFilter = gl.LINEAR,
    clamp = false,
    type: "fp32" | "fp16" | "snorm8" | "sbyte" = "fp16",
    numberOfComponents = 3
): WebGLTexture {
    const texture = gl.createTexture();

    if (texture === null) {
        throw new Error("Error creating WebGL texture");
    }

    let internalFormat: number = gl.RGB32F;
    let format: number = gl.RGB;
    if (numberOfComponents === 2) {
        internalFormat = gl.RG32F;
        format = gl.RG;
    } else if (numberOfComponents === 1) {
        internalFormat = gl.R32F;
        format = gl.RED;
    } else if (numberOfComponents === 4) {
        internalFormat = gl.RGBA32F;
        format = gl.RGBA;
    }

    const dataView = new Float32Array(data);

    gl.bindTexture(gl.TEXTURE_2D, texture);
    renderer.checkGlError("loadFp32Texture 0");
    gl.pixelStorei(gl.UNPACK_ALIGNMENT, 1);
    // gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB16F, width, height, 0, gl.RGB, gl.HALF_FLOAT, dataView);
    // gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, width, height, 0, format, gl.HALF_FLOAT, dataView);
    gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, width, height, 0, format, gl.FLOAT, dataView);
    renderer.checkGlError("loadFp32Texture 1");
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, minFilter);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, magFilter);
    if (clamp === true) {
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    } else {
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
    }
    renderer.checkGlError("loadFp32Texture 2");
    gl.bindTexture(gl.TEXTURE_2D, null);

    return texture;
}

export function loadFloatingPointTexture(
    renderer: SceneRenderer<lib.org.androidworks.engine.Scene>,
    data: ArrayBuffer,
    gl: WebGL2RenderingContext,
    width: number,
    height: number,
    minFilter: number | undefined = gl.LINEAR,
    magFilter: number | undefined = gl.LINEAR,
    clamp = false,
    type: "fp32" | "fp16" | "snorm8" | "sbyte" = "fp16",
    numberOfComponents = 3
): WebGLTexture {
    const texture = gl.createTexture();

    if (texture === null) {
        throw new Error("Error creating WebGL texture");
    }

    const dataView = type === "fp16"
        ? new Uint16Array(data)
        : type === "fp32"
            ? new Float32Array(data)
            : new Int8Array(data);

    gl.bindTexture(gl.TEXTURE_2D, texture);
    renderer.checkGlError("loadFloatingPointTexture 0");

    gl.pixelStorei(gl.UNPACK_ALIGNMENT, 1);

    let internalFormat: number = gl.RGB16F;
    let format: number = gl.RGB;
    let typeValue: number = gl.HALF_FLOAT;
    if (numberOfComponents === 2) {
        internalFormat = gl.RG16F;
        format = gl.RG;
    } else if (numberOfComponents === 1) {
        internalFormat = gl.R16F;
        format = gl.RED;
    } else if (numberOfComponents === 4) {
        internalFormat = gl.RGBA16F;
        format = gl.RGBA;
    }
    if (type === "snorm8") {
        internalFormat = gl.RGB8_SNORM;
        format = gl.RGB;
        typeValue = gl.BYTE;
        if (numberOfComponents === 2) {
            internalFormat = gl.RG8_SNORM;
            format = gl.RG;
        } else if (numberOfComponents === 1) {
            internalFormat = gl.R8_SNORM;
            format = gl.RED;
        } else if (numberOfComponents === 4) {
            internalFormat = gl.RGBA8_SNORM;
            format = gl.RGBA;
        }
    } else if (type === "sbyte") {
        internalFormat = gl.RGB8I;
        format = gl.RGB_INTEGER;
        typeValue = gl.BYTE;
        if (numberOfComponents === 2) {
            internalFormat = gl.RG8I;
            format = gl.RG_INTEGER;
        } else if (numberOfComponents === 1) {
            internalFormat = gl.R8I;
            format = gl.RED_INTEGER;
        } else if (numberOfComponents === 4) {
            internalFormat = gl.RGBA8I;
            format = gl.RGBA_INTEGER;
        }
    } else if (type === "fp32") {
        internalFormat = gl.RGB32F;
        format = gl.RGB;
        typeValue = gl.FLOAT;
        if (numberOfComponents === 2) {
            internalFormat = gl.RG32F;
            format = gl.RG;
        } else if (numberOfComponents === 1) {
            internalFormat = gl.R32F;
            format = gl.RED;
        } else if (numberOfComponents === 4) {
            internalFormat = gl.RGBA32F;
            format = gl.RGBA;
        }
    }
    gl.texImage2D(
        gl.TEXTURE_2D,
        0,
        internalFormat, // type === "fp16" ? gl.RGB16F : gl.RGB8_SNORM,
        width,
        height,
        0,
        format, //gl.RGB,
        typeValue, // type === "fp16" ? gl.HALF_FLOAT : gl.BYTE,
        dataView
    );
    renderer.checkGlError("loadFloatingPointTexture 1");
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, minFilter);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, magFilter);
    if (clamp === true) {
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    } else {
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
    }
    renderer.checkGlError("loadFloatingPointTexture 2");
    gl.bindTexture(gl.TEXTURE_2D, null);

    return texture;
}
