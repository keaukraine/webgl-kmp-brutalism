import { CameraPositionInterpolator, CameraPositionPair } from "./CameraPositionInterpolator";
import { CameraState } from "./CameraState";

export class CameraPathAnimator {
    protected enabled = true;

    private cameraPositionInterpolator = new CameraPositionInterpolator();
    private previousCameraReverse = false;
    private currentCamera = 0;
    private stateCamera = CameraState.Animating;
    private cameras: CameraPositionPair[] = [];

    private lastTime = 0;

    constructor(
        protected canvas: HTMLCanvasElement,
        protected speed: number,
        protected minDuration: number,
        protected transitionDuration: number
    ) {
        this.initialize();

        this.cameraPositionInterpolator.speed = this.speed;
        this.cameraPositionInterpolator.minDuration = this.minDuration;
        this.updateCameraInterpolator();
    }

    public enable(): void {
        this.enabled = true;
    }

    public disable(): void {
        this.enabled = false;
    }

    public get positionInterpolator() {
        return this.cameraPositionInterpolator;
    }

    public get state() {
        return this.stateCamera;
    }

    public setCameras(value: CameraPositionPair[]): void {
        this.cameras = value;
        this.currentCamera = 0;
        this.updateCameraInterpolator();
    }

    protected initialize(): void {
        const canvas = this.canvas;

        canvas.addEventListener("touchstart", (eventStart) => {
            const camera = this.cameras[this.currentCamera];
            if (camera.interactive === false) {
                return;
            }

            if (!this.enabled) {
                return;
            }

            const touchend = (eventEnd: TouchEvent) => {
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
                        } else {
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

    private nextCamera(): void {
        if (!this.enabled) {
            return;
        }

        this.setCameraState(CameraState.Transitioning);
    }

    private updateCameraInterpolator(): void {
        const camera = this.cameras[this.currentCamera];
        this.cameraPositionInterpolator.minDuration = this.minDuration;
        this.cameraPositionInterpolator.position = camera;
        this.cameraPositionInterpolator.reset();
    }

    protected setCameraState(state: CameraState): void {
        if (this.stateCamera === CameraState.Animating && state === CameraState.Transitioning) {
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
        } else if (this.stateCamera === CameraState.Transitioning && state === CameraState.Animating) {
            this.updateCameraInterpolator();
            this.cameraPositionInterpolator.reverse = this.previousCameraReverse;
            this.cameraPositionInterpolator.timer = 0.5; // start from the center of new path
        }

        this.stateCamera = state;
    }

    public animate(timeNow: number): void {
        if (this.lastTime != 0) {
            this.cameraPositionInterpolator.iterate(timeNow);
            if (this.cameraPositionInterpolator.timer === 1.0) {
                if (this.stateCamera === CameraState.Animating) {
                    this.cameraPositionInterpolator.reverse = !this.cameraPositionInterpolator.reverse;
                    this.cameraPositionInterpolator.reset();
                } else {
                    this.setCameraState(CameraState.Animating);
                }
            }
        }

        this.lastTime = timeNow;
    }
}
