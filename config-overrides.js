// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = function override(config, env) {
    // config.plugins.push(...[
    //     new BundleAnalyzerPlugin()
    // ]);

    config.optimization.usedExports = true
    return config
}