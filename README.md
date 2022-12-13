# eslint-config-liting

an eslint preset of liting-yes

# support

- Vue.js

# Precaution

- By default, vue3 is used. If you are using vue2, you need to override the default rules
  ```json
  {
    "extends": [
      "liting",
      "eslint-config-liting/src/vue2"
    ],
  }
  ```
