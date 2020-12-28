module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  // vant ui 按需引入配置
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
};


