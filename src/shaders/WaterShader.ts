import { BaseShader } from "webgl-framework";
import { ShaderInputs } from "./ShaderInputs";

export class WaterShader extends BaseShader implements ShaderInputs {
    // Uniforms are of type `WebGLUniformLocation`
    time: WebGLUniformLocation | undefined;
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
        uniform float time;
        void main() {
            vec4 vertex = rm_Vertex;
            vertex.xy += sin(vertex.xy + time) * 4.;
            gl_Position = view_proj_matrix * vertex;
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
        this.time = this.getUniform("time");

        this.attributes = [this.rm_Vertex];
        this.uniforms = [this.view_proj_matrix, this.color, this.time];
    }
}
