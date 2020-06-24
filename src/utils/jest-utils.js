"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function updateJestConfigContent(content) {
    return content.replace('transform: {', "transform: {\n    '^(?!.*\\\\.(js|jsx|ts|tsx|css|json)$)': '@lighth7015/preact/plugins/jest',");
}
exports.updateJestConfigContent = updateJestConfigContent;
//# sourceMappingURL=jest-utils.js.map