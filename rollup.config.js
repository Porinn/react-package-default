import babel from "rollup-plugin-babel";

const external = id => !id.startsWith("/") && !id.startsWith(".");

export default [{
    input: "./src/App.js",
    output: {
        file: "./dist/App.js",  
        format: "es",   
    },
    plugins: [
        babel({ runtimeHelpers: true }),
    ],
    external,
}, {
    input: "./src/Test.js",
    output: {
        file: "./dist/Test.js",  
        format: "es",   
    },
    plugins: [
        babel({ runtimeHelpers: true }),
    ],
    external,
}];