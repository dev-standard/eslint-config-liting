/*
 * @Date: 2022-12-07 23:11:29
 * @Author: liting luz.liting@gmail.com
 * @LastEditors: liting luz.liting@gmail.com
 * @LastEditTime: 2022-12-17 15:29:05
 * @FilePath: /eslint-config-liting/src/index.js
 */
module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: ['./base.js', './ts.js', './vue.js', 'plugin:prettier/recommended'],
}
