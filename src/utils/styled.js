"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const versions_1 = require("./versions");
exports.CSS_IN_JS_DEPENDENCIES = {
    'styled-components': {
        dependencies: {
            'react-is': versions_1.reactIsVersion,
            'styled-components': versions_1.styledComponentsVersion,
        },
        devDependencies: {
            '@types/styled-components': versions_1.typesStyledComponentsVersion,
            '@types/react-is': versions_1.typesReactIsVersion,
            'babel-plugin-styled-components': versions_1.babelPluginStyledComponentsVersion,
        },
    },
    '@emotion/styled': {
        dependencies: {
            '@emotion/styled': versions_1.emotionStyledVersion,
            '@emotion/core': versions_1.emotionCoreVersion,
        },
        devDependencies: {
            '@emotion/babel-preset-css-prop': versions_1.emotionBabelPresetCssPropVersion,
        },
    },
};
//# sourceMappingURL=styled.js.map