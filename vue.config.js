console.log('node_env', process.env.NODE_ENV); //development, production, staging
module.exports = {
    devServer: {
        port: '8082'
    },
   
    publicPath: './',
    outputDir: 'build',
    indexPath: 'demo.html',
    // pages: {
    //     public: {
    //         entry: 'src/main.js',
    //         template: 'public/index.html',
    //         filename: 'public.html',
    //         title: 'demo Page',
    //         chunks: ['chunk-verdors', 'chunk-common', 'index']
    //     }
    // },
    lintOnSave: process.env.NODE_ENV != 'production',
    chainWebpack: config => {
        config.module
          .rule('vue')
          .use('vue-loader')
          .tap(options => ({
            ...options,
            compilerOptions: {
              // 将所有以 my- 开头的标签作为自定义元素处理
              isCustomElement: tag => tag.startsWith('my-')
            }
          }))
      }
}