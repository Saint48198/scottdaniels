const { override, addWebpackModuleRule } = require('customize-cra');

module.exports = override(
    addWebpackModuleRule({
        test: /\.scss$/,
        exclude: /\.module\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
    })
);
