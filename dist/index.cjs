'use strict';

var src = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  extends: ["./base.js", "./ts.js", "./vue.js", "plugin:prettier/recommended"]
};

module.exports = src;
