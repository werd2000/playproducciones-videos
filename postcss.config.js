module.exports = {
    plugins: [
        // require('autoprefixer')({
        //     grid: true
        // }),
        require('postcss-import'),
        require('postcss-preset-env')({
            features: {
                autoprefixer: {
                    grid: true,
                },
            },
            preserve: false, // instruir a todos los complementos para que omitan CSS pre-rellenados 
        }),
        require('cssnano'),
    ]
}