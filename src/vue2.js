/*
 * @Date: 2022-12-12 23:09:35
 * @Author: liting luz.liting@gmail.com
 * @LastEditors: liting luz.liting@gmail.com
 * @LastEditTime: 2022-12-13 22:59:04
 * @FilePath: /eslint-config-liting/src/vue2.js
 */
module.exports = {
  'vue/block-lang': [
    'error',
    {
      script: {
        lang: 'js',
      },
    },
  ],
  'vue/component-api-style': ['error', ['options']],
  'vue/no-deprecated-destroyed-lifecycle': 'off',
  'vue/no-deprecated-dollar-listeners-api': 'off',
  'vue/no-deprecated-dollar-scopedslots-api': 'off',
  'vue/no-deprecated-events-api': 'off',
  'vue/no-deprecated-filter': 'off',
  'vue/no-deprecated-functional-template': 'off',
  'vue/no-deprecated-inline-template': 'off',
  'vue/no-deprecated-props-default-this': 'off',
  'vue/no-deprecated-router-link-tag-prop': [
    'warn',
    {
      components: ['RouterLink'],
    },
  ],
  'vue/no-deprecated-v-bind-sync': 'off',
  'vue/no-deprecated-v-on-native-modifier': 'off',
  'vue/no-deprecated-v-on-number-modifiers': 'off',
  'vue/no-deprecated-vue-config-keycodes': 'off',
  'vue/no-expose-after-await': 'off',
  'vue/no-lifecycle-after-await': 'off',
  'vue/no-unsupported-features': [
    'error',
    {
      version: '^2.6.0',
    },
  ],
  'vue/no-v-for-template-key-on-child': 'off',
  'vue/no-watch-after-await': 'off',
  'vue/require-emit-validator': 'off',
  'vue/require-slots-as-functions': 'off',
  'vue/v-for-delimiter-style': ['error', 'in'],

  // essential for Vue.js 2.x
  // eslint-disable-next-line
  'vue/no-custom-modifiers-on-v-model': 'error',
  'vue/no-multiple-template-root': 'error',
  'vue/no-v-for-template-key': 'error',
  'vue/no-v-model-argument': 'error',
  'vue/valid-model-definition': 'error',
  'vue/valid-v-bind-sync': 'error',
}
