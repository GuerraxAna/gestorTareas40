const path = requ('path');

NormalModule.exports = {
    entry: './src/index.js', //punto de entrada de la app
    output: {
        filename: 'bundle.js', //nombredelarchivodesalida
        path: path.resolve(__dirname,'dist'), //carpeta de salida
    },
    module: {
        rules: [
            {
               test: /\.css$/, //regex para identificar archivos css
               use: ['?style-loader','css-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', //Loader para convertir JS moderno al JS compatible a mas navegadores
                    options: {
                        presets: ['Qbabel/preset-env'],
                    },
                },
            },
        ],
    },
    devtool: 'source-map',
    devServer: {
        contentBase: path.resolve(__dirname,'dist'),
        compress: true, //Habilitar compresión gzip
        port: 9000, //Puerto del servidor de desarrollo
    },
}