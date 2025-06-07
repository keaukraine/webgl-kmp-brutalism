import { BaseShader } from "webgl-framework";
import { ShaderInputs } from "./ShaderInputs";

export class ColorShader extends BaseShader implements ShaderInputs {
    // Uniforms are of type `WebGLUniformLocation`
    view_proj_matrix: WebGLUniformLocation | undefined;
    color: WebGLUniformLocation | undefined;

    // Attributes are numbers.
    rm_Vertex: number | undefined;

    public attributes?: number[];
    public uniforms?: WebGLUniformLocation[];

    fillCode() {
        this.vertexShaderCode = `precision highp float;
        attribute vec4 rm_Vertex;
        uniform mat4 view_proj_matrix;
        void main() {
            gl_Position = view_proj_matrix * rm_Vertex;
        }`;

        this.fragmentShaderCode = `precision mediump float;
        uniform vec4 color;

        void main() {
            gl_FragColor = color;
        }`;
    }

    fillUniformsAttributes() {
        this.rm_Vertex = this.getAttrib("rm_Vertex");

        this.view_proj_matrix = this.getUniform("view_proj_matrix");
        this.color = this.getUniform("color");

        this.attributes = [this.rm_Vertex];
        this.uniforms = [this.view_proj_matrix, this.color];
    }
}
