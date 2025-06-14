import { mat4, vec3 } from "gl-matrix";
export interface CameraPosition {
    position: Float32Array | number[];
    rotation: Float32Array | number[];
}
export interface CameraPositionPair {
    start: CameraPosition;
    end: CameraPosition;
    interactive?: boolean;
}
export declare class CameraPositionInterpolator {
    private _position;
    private _speed;
    private duration;
    private _minDuration;
    private _timer;
    private lastTime;
    private _reverse;
    private _cameraPosition;
    private _cameraRotation;
    private _matrix;
    get cameraPosition(): vec3;
    get cameraRotation(): vec3;
    get reverse(): boolean;
    set reverse(value: boolean);
    set minDuration(value: number);
    get matrix(): mat4;
    get speed(): number;
    set speed(value: number);
    get position(): CameraPositionPair | undefined;
    set position(value: CameraPositionPair | undefined);
    get timer(): number;
    set timer(value: number);
    private getLength;
    iterate(timeNow: number): void;
    reset(): void;
    private updateMatrix;
}
