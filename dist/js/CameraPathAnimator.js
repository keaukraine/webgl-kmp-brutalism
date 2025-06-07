"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CameraPathAnimator = void 0;
const CameraPositionInterpolator_1 = require("./CameraPositionInterpolator");
const CameraState_1 = require("./CameraState");
class CameraPathAnimator {
    constructor(canvas, speed, minDuration, transitionDuration) {
        this.canvas = canvas;
        this.speed = speed;
        this.minDuration = minDuration;
        this.transitionDuration = transitionDuration;
        this.enabled = true;
        this.cameraPositionInterpolator = new CameraPositionInterpolator_1.CameraPositionInterpolator();
        this.previousCameraReverse = false;
        this.currentCamera = 0;
        this.stateCamera = CameraState_1.CameraState.Animating;
        this.cameras = [];
        this.lastTime = 0;
        this.initialize();
        this.cameraPositionInterpolator.speed = this.speed;
        this.cameraPositionInterpolator.minDuration = this.minDuration;
        this.updateCameraInterpolator();
    }
    enable() {
        this.enabled = true;
    }
    disable() {
        this.enabled = false;
    }
    get positionInterpolator() {
        return this.cameraPositionInterpolator;
    }
    get state() {
        return this.stateCamera;
    }
    setCameras(value) {
        this.cameras = value;
        this.currentCamera = 0;
        this.updateCameraInterpolator();
    }
    initialize() {
        const canvas = this.canvas;
        canvas.addEventListener("touchstart", (eventStart) => {
            const camera = this.cameras[this.currentCamera];
            if (camera.interactive === false) {
                return;
            }
            if (!this.enabled) {
                return;
            }
            const touchend = (eventEnd) => {
                if (!this.enabled) {
                    return;
                }
                const touchStart = eventStart.touches.item(0);
                const touchEnd = eventEnd.changedTouches.item(0);
                if (touchStart && touchEnd) {
                    const diff = touchEnd.clientX - touchStart.clientX;
                    if (Math.abs(diff) > 5) {
                        const prevReverse = this.cameraPositionInterpolator.reverse;
                        if (diff > 0) {
                            if (prevReverse === false) {
                                this.cameraPositionInterpolator.reverse = true;
                                this.cameraPositionInterpolator.timer = 1 - this.cameraPositionInterpolator.timer;
                            }
                        }
                        else {
                            if (prevReverse === true) {
                                this.cameraPositionInterpolator.reverse = false;
                                this.cameraPositionInterpolator.timer = 1 - this.cameraPositionInterpolator.timer;
                            }
                        }
                    }
                }
                canvas.removeEventListener("touchend", touchend);
            };
            canvas.addEventListener("touchend", touchend);
        });
        canvas.addEventListener("click", () => this.nextCamera());
    }
    nextCamera() {
        if (!this.enabled) {
            return;
        }
        this.setCameraState(CameraState_1.CameraState.Transitioning);
    }
    updateCameraInterpolator() {
        const camera = this.cameras[this.currentCamera];
        this.cameraPositionInterpolator.minDuration = this.minDuration;
        this.cameraPositionInterpolator.position = camera;
        this.cameraPositionInterpolator.reset();
    }
    setCameraState(state) {
        if (this.stateCamera === CameraState_1.CameraState.Animating && state === CameraState_1.CameraState.Transitioning) {
            this.currentCamera++;
            this.currentCamera %= this.cameras.length;
            const camera = this.cameras[this.currentCamera];
            this.cameraPositionInterpolator.minDuration = this.transitionDuration;
            this.cameraPositionInterpolator.position = {
                start: {
                    position: [...this.cameraPositionInterpolator.cameraPosition],
                    rotation: [...this.cameraPositionInterpolator.cameraRotation]
                },
                end: {
                    position: [
                        (camera.end.position[0] - camera.start.position[0]) / 2 + camera.start.position[0],
                        (camera.end.position[1] - camera.start.position[1]) / 2 + camera.start.position[1],
                        (camera.end.position[2] - camera.start.position[2]) / 2 + camera.start.position[2]
                    ],
                    rotation: [
                        (camera.end.rotation[0] - camera.start.rotation[0]) / 2 + camera.start.rotation[0],
                        (camera.end.rotation[1] - camera.start.rotation[1]) / 2 + camera.start.rotation[1],
                        (camera.end.rotation[2] - camera.start.rotation[2]) / 2 + camera.start.rotation[2]
                    ]
                }
            };
            this.previousCameraReverse = this.cameraPositionInterpolator.reverse;
            this.cameraPositionInterpolator.reverse = false;
            this.cameraPositionInterpolator.reset();
        }
        else if (this.stateCamera === CameraState_1.CameraState.Transitioning && state === CameraState_1.CameraState.Animating) {
            this.updateCameraInterpolator();
            this.cameraPositionInterpolator.reverse = this.previousCameraReverse;
            this.cameraPositionInterpolator.timer = 0.5; // start from the center of new path
        }
        this.stateCamera = state;
    }
    animate(timeNow) {
        if (this.lastTime != 0) {
            this.cameraPositionInterpolator.iterate(timeNow);
            if (this.cameraPositionInterpolator.timer === 1.0) {
                if (this.stateCamera === CameraState_1.CameraState.Animating) {
                    this.cameraPositionInterpolator.reverse = !this.cameraPositionInterpolator.reverse;
                    this.cameraPositionInterpolator.reset();
                }
                else {
                    this.setCameraState(CameraState_1.CameraState.Animating);
                }
            }
        }
        this.lastTime = timeNow;
    }
}
exports.CameraPathAnimator = CameraPathAnimator;
//# sourceMappingURL=CameraPathAnimator.js.map