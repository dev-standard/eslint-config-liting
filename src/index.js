/*
 * @Date: 2022-12-07 23:11:29
 * @Author: liting luz.liting@gmail.com
 * @LastEditors: liting luz.liting@gmail.com
 * @LastEditTime: 2022-12-13 23:28:16
 * @FilePath: /eslint-config-liting/src/index.js
 */
module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: ['./base.js', 'plugin:vue/base', './vue.js'],
  overrides: [
    {
      extends: ['./vue.js'],
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
    },
  ],
}
