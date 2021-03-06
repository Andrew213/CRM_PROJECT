const path = require("path")


let mode = 'production';
let target = "web";
if (process.env.NODE_ENV === 'production') {
    mode = 'production';
    target = "browserslist"
};



module.exports = {
    mode: mode,
    target: target,

    entry: ['babel-polyfill', './#src/js/app.js'],

    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, path.basename(__dirname)),
        // assetModuleFilename: "images/[hash][ext][query]",
        publicPath: ""
    },

    module: {
        rules: [
            {
                test: /\.(ts|js|jsx|tsx)$/,
                exclude: /node_modules/,
                use: [
                    "babel-loader",
                ]
            },
        ],
    },
    devtool: "source-map",
}