// @ts-check
const { TypeScriptPlugin } = require("./packages/dprint-plugin-typescript");
const { JsoncPlugin } = require("./packages/dprint-plugin-jsonc");

/** @type { import("./packages/dprint").Configuration } */
const config = {
    projectType: "openSource",
    lineWidth: 160,
    plugins: [
        new TypeScriptPlugin({
            useBraces: "preferNone",
            "tryStatement.nextControlFlowPosition": "sameLine"
        }),
        new JsoncPlugin({
            indentWidth: 2
        })
    ]
};

module.exports.default = config;
