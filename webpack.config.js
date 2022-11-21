const path = require('path');

 

module.exports = {

    output: {

        path: path.join(__dirname, '/dist'),

        filename: 'index.bundle.js',

    },

    devServer: {

        port: 3000,
        historyApiFallback: true

    },


    module: {

        rules: [
         {
                test: path.join(__dirname, '.'),
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env',
                              '@babel/react',{
                              'plugins': ['@babel/plugin-proposal-class-properties']}]
                }
            },

            {

                test: /\.(js|jsx)$/,

                exclude: /node_modules/,

                use: {

                    loader: 'babel-loader'

                }

            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpe?g|gif|png|svg)$/i,
                use: [
                {
                  loader: 'url-loader',
                  options: {
                    limit: 10000
                  }
                }
              ]
            },


 

        ]

    }

    

};
