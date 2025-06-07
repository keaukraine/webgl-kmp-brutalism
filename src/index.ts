import { FullScreenUtils } from "webgl-framework";
import { Renderer } from "./Renderer";
import GUI from "lil-gui";
import { CameraMode } from "./CameraMode";
import { engine } from "./KotlinLib";


function ready(fn: () => void) {
    if (document.readyState !== "loading") {
        fn();
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}


let renderer: Renderer;

ready(() => {
    renderer = new Renderer();
    renderer.ready = () => {
        initUI();
    };
    renderer.init("canvasGL", true);
});

function initUI(): void {
    document.getElementById("message")?.classList.add("hidden");
    document.getElementById("canvasGL")?.classList.remove("transparent");

    const gui = new GUI();
    const dummyConfig = {
        github: () => window.open("https://github.com/keaukraine/webgl-stylized-castle")
    };

    const fullScreenUtils = new FullScreenUtils();
    const fullscreen = {
        toggleFullscreen: () => {
            if (fullScreenUtils.isFullScreen()) {
                fullScreenUtils.exitFullScreen();
            } else {
                fullScreenUtils.enterFullScreen();
            }
        }
    };

    gui.add(
        renderer,
        "currentCameraMode",
        {
            "FrontEnd": CameraMode.FrontEnd,
            "FPS": CameraMode.FPS
        }
    ).name("Camera");

    gui.add(renderer.settings, "lowQuality");
    gui.add(renderer.settings, "cameraPeriod", 0.1, 2, 0.1);
    gui.add(renderer.settings, "vignette");
    gui.add(renderer.settings, "clock");
    gui.add(renderer.settings, "blurred");
    gui.add(renderer.settings, "autoSwitchCameras");
    gui.add(
        renderer.settings,
        "colorMode",
        {
            Normal: engine.common.ColorMode.Normal,
            Grayscale: engine.common.ColorMode.Grayscale,
            Sepia: engine.common.ColorMode.Sepia,
            HighContrast: engine.common.ColorMode.HighContrast,
            LowContrast: engine.common.ColorMode.LowContrast,
            LimitedColors: engine.common.ColorMode.LimitedColors
        }
    ).onChange(() => renderer.initShaders());
    gui.add(renderer, "nextCamera");
    gui.add(renderer, "nextRoom");
    gui.add(renderer, "nextCameraOrRoom");
    gui.add(renderer, "randomCameraOrNextRoom");
    gui.add(fullscreen, "toggleFullscreen");

    initDebugUI();
}

function initDebugUI(): void {
    const canvas = document.getElementById("canvasGL");
    if (!canvas) {
        return;
    }

    document.addEventListener("keypress", event => {
        if (event.key === "f") {
            renderer.currentCameraMode = renderer.currentCameraMode === CameraMode.FPS ? CameraMode.FrontEnd : CameraMode.FPS;
        } else if (event.key === "n") {
            renderer.nextCamera();
        } else if (event.key === "r") {
            renderer.nextRoom();
        } else if (event.key === "x") {
            renderer.nextCameraOrRoom();
        }
    });
}
