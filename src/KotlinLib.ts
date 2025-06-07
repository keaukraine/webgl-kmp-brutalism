import * as lib from "./lib/KMP-library-shared";

const engine = (lib as any).default.org.androidworks.engine as typeof lib.org.androidworks.engine;
const example = (lib as any).default.org.androidworks.example as typeof lib.org.androidworks.example;
const brutalism = (lib as any).default.org.androidworks.brutalism as typeof lib.org.androidworks.brutalism;

export { engine, example, brutalism, lib };
