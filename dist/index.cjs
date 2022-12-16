'use strict';

var src = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  extends: ["./base.js", "plugin:vue/base", "./vue.js"],
  overrides: [
    {
      extends: ["./vue.js"],
      files: ["*.vue"],
      parser: "vue-eslint-parser"
    }
  ]
};

module.exports = src;
