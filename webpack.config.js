const path = require('path');

const ROOT_PATH = path.resolve(__dirname);
const SRC_PATH = path.resolve(ROOT_PATH, 'src');

module.exports = {
    context: SRC_PATH,
    entry: 'index.js',
    output: {
        path: path.resolve(ROOT_PATH, 'build'),
        filename: 'index.js',
    },
    cache: false,
    resolve: {
        modules: [
            SRC_PATH,
            'node_modules',
        ],
        extensions: ['.js', '.jsx'],
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                enforce: 'pre',
                loader: 'eslint-loader',
                include: [
                    SRC_PATH,
                    path.join(ROOT_PATH, 'test'),
                ],
            },
            {
                test: /\.jsx?$/,
                use: ['babel-loader'],
                exclude: path.join(ROOT_PATH, 'node_modules'),
            },
            {
                test: /.scss/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
};
