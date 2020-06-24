"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const jest_utils_1 = require("@lighth7015/preact/src/utils/jest-utils");
function updateJestConfig(options) {
    return options.unitTestRunner === 'none'
        ? schematics_1.noop()
        : (host) => {
            const configPath = `${options.appProjectRoot}/jest.config.js`;
            const originalContent = host.read(configPath).toString();
            const content = jest_utils_1.updateJestConfigContent(originalContent);
            host.overwrite(configPath, content);
        };
}
exports.updateJestConfig = updateJestConfig;
//# sourceMappingURL=update-jest-config.js.map