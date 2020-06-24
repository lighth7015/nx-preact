"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Add React-specific configuration
function getWebpackConfig(config) {
    config.module.rules.push({
        test: /\.(png|jpe?g|gif|webp)$/,
        loader: 'url-loader',
        options: {
            limit: 10000,
            name: '[name].[hash:7].[ext]',
        },
    }, {
        test: /\.svg$/,
        oneOf: [
            // If coming from JS/TS file, then transform into React component using SVGR.
            {
                issuer: {
                    test: /\.[jt]sx?$/,
                },
                use: [
                    '@svgr/webpack?-svgo,+titleProp,+ref![path]',
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name: '[name].[hash:7].[ext]',
                        },
                    },
                ],
            },
            // Fallback to plain URL loader.
            {
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name: '[name].[hash:7].[ext]',
                        },
                    },
                ],
            },
        ],
    });
    return config;
}
module.exports = getWebpackConfig;
//# sourceMappingURL=webpack.js.map