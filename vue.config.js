module.exports = {
  productionSourceMap: true,
  devServer: {
    host: '0.0.0.0'
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@views': path.resolve(__dirname, '@/views'),
        '@assets': path.resolve(__dirname, '@/assets'),
        '@components': path.resolve(__dirname, '@/components'),
      },
      extensions: ['.js', '.ts', '.vue', '.json', '...']
    }
  },
}