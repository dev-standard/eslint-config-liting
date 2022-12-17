module.exports = {
  overrides: [
    {
      extends: ['plugin:vue/vue3-recommended'],
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: {
          js: 'espree',
          ts: '@typescript-eslint/parser',
        },
        sourceType: 'module',
      },
    },
  ],
  rules: {
    indent: 'off',
    // base
    'vue/comment-directive': [
      'error',
      {
        reportUnusedDisableDirectives: true,
      },
    ],
    'vue/jsx-uses-vars': 'error',

    // essential
    'vue/multi-word-component-names': 'error',
    'vue/no-arrow-functions-in-watch': 'error',
    'vue/no-async-in-computed-properties': 'error',
    'vue/no-child-content': 'error',
    'vue/no-computed-properties-in-data': 'error',
    'vue/no-dupe-keys': 'error',
    'vue/no-dupe-v-else-if': 'error',
    'vue/no-duplicate-attributes': [
      'error',
      {
        allowCoexistClass: true,
        allowCoexistStyle: true,
      },
    ],
    'vue/no-export-in-script-setup': 'error',
    'vue/no-mutating-props': 'error',
    'vue/no-parsing-error': [
      'error',
      {
        'abrupt-closing-of-empty-comment': true,
        'absence-of-digits-in-numeric-character-reference': true,
        'cdata-in-html-content': true,
        'character-reference-outside-unicode-range': true,
        'control-character-in-input-stream': true,
        'control-character-reference': true,
        'duplicate-attribute': true,
        'end-tag-with-attributes': true,
        'end-tag-with-trailing-solidus': true,
        'eof-before-tag-name': true,
        'eof-in-cdata': true,
        'eof-in-comment': true,
        'eof-in-tag': true,
        'incorrectly-closed-comment': true,
        'incorrectly-opened-comment': true,
        'invalid-first-character-of-tag-name': true,
        'missing-attribute-value': true,
        'missing-end-tag-name': true,
        'missing-semicolon-after-character-reference': true,
        'missing-whitespace-between-attributes': true,
        'nested-comment': true,
        'non-void-html-element-start-tag-with-trailing-solidus': false,
        'noncharacter-character-reference': true,
        'noncharacter-in-input-stream': true,
        'null-character-reference': true,
        'surrogate-character-reference': true,
        'surrogate-in-input-stream': true,
        'unexpected-character-in-attribute-name': true,
        'unexpected-character-in-unquoted-attribute-value': true,
        'unexpected-equals-sign-before-attribute-name': true,
        'unexpected-null-character': true,
        'unexpected-question-mark-instead-of-tag-name': true,
        'unexpected-solidus-in-tag': true,
        'unknown-named-character-reference': true,
        'x-invalid-end-tag': true,
        'x-invalid-namespace': true,
      },
    ],
    'vue/no-ref-as-operand': 'error',
    'vue/no-reserved-component-names': [
      'error',
      {
        disallowVue3BuiltInComponents: false,
        disallowVueBuiltInComponents: false,
      },
    ],
    'vue/no-reserved-keys': 'error',
    'vue/no-reserved-props': [
      'error',
      {
        vueVersion: 3,
      },
    ],
    'vue/no-setup-props-destructure': 'error',
    'vue/no-shared-component-data': 'error',
    'vue/no-side-effects-in-computed-properties': 'error',
    'vue/no-template-key': 'error',
    'vue/no-textarea-mustache': 'error',
    'vue/no-unused-components': [
      'error',
      {
        ignoreWhenBindingPresent: true,
      },
    ],
    'vue/no-unused-vars': 'error',
    'vue/no-use-computed-property-like-method': 'error',
    'vue/no-use-v-if-with-v-for': [
      'error',
      {
        allowUsingIterationVar: false,
      },
    ],
    'vue/no-useless-template-attributes': 'error',
    'vue/no-v-text-v-html-on-component': 'error',
    'vue/require-component-is': 'error',
    'vue/require-prop-type-constructor': 'error',
    'vue/require-render-return': 'error',
    'vue/require-v-for-key': 'error',
    'vue/require-valid-default-prop': 'error',
    'vue/return-in-computed-property': [
      'error',
      {
        treatUndefinedAsUnspecified: true,
      },
    ],
    'vue/return-in-emits-validator': 'error',
    'vue/use-v-on-exact': 'error',
    'vue/valid-attribute-name': 'error',
    'vue/valid-define-emits': 'error',
    'vue/valid-define-props': 'error',
    'vue/valid-next-tick': 'error',
    'vue/valid-template-root': 'error',
    'vue/valid-v-bind': 'error',
    'vue/valid-v-cloak': 'error',
    'vue/valid-v-else': 'error',
    'vue/valid-v-else-if': 'error',
    'vue/valid-v-for': 'error',
    'vue/valid-v-html': 'error',
    'vue/valid-v-if': 'error',
    'vue/valid-v-model': 'error',
    'vue/valid-v-on': 'error',
    'vue/valid-v-once': 'error',
    'vue/valid-v-pre': 'error',
    'vue/valid-v-show': 'error',
    'vue/valid-v-slot': [
      'error',
      {
        allowModifiers: false,
      },
    ],
    'vue/valid-v-text': 'error',

    // essential for Vue.js 3.x
    // eslint-disable-next-line
    'vue/no-deprecated-data-object-declaration': 'error',
    'vue/no-deprecated-destroyed-lifecycle': 'error',
    'vue/no-deprecated-dollar-listeners-api': 'error',
    'vue/no-deprecated-dollar-scopedslots-api': 'error',
    'vue/no-deprecated-events-api': 'error',
    'vue/no-deprecated-filter': 'error',
    'vue/no-deprecated-functional-template': 'error',
    'vue/no-deprecated-html-element-is': 'error',
    'vue/no-deprecated-inline-template': 'error',
    'vue/no-deprecated-props-default-this': 'error',
    'vue/no-deprecated-router-link-tag-prop': [
      'error',
      {
        components: ['RouterLink'],
      },
    ],
    'vue/no-deprecated-scope-attribute': 'error',
    'vue/no-deprecated-slot-attribute': 'error',
    'vue/no-deprecated-slot-scope-attribute': 'error',
    'vue/no-deprecated-v-bind-sync': 'error',
    'vue/no-deprecated-v-is': 'error',
    'vue/no-deprecated-v-on-native-modifier': 'error',
    'vue/no-deprecated-v-on-number-modifiers': 'error',
    'vue/no-deprecated-vue-config-keycodes': 'error',
    'vue/no-expose-after-await': 'error',
    'vue/no-lifecycle-after-await': 'error',
    'vue/no-v-for-template-key-on-child': 'error',
    'vue/no-watch-after-await': 'error',
    'vue/prefer-import-from-vue': 'error',
    'vue/require-slots-as-functions': 'error',
    'vue/require-toggle-inside-transition': 'error',
    'vue/valid-v-is': 'error',
    'vue/valid-v-memo': 'error',

    // strongly Recommended
    // eslint-disable-next-line
    'vue/attribute-hyphenation': ['error', 'always'],
    'vue/component-definition-name-casing': ['error', 'PascalCase'],
    'vue/first-attribute-linebreak': [
      'error',
      {
        multiline: 'below',
        singleline: 'beside',
      },
    ],
    'vue/html-closing-bracket-newline': [
      'error',
      {
        multiline: 'always',
        singleline: 'never',
      },
    ],
    'vue/html-closing-bracket-spacing': [
      'error',
      {
        endTag: 'never',
        selfClosingTag: 'always',
        startTag: 'never',
      },
    ],
    'vue/html-end-tags': 'error',
    'vue/html-indent': [
      'error',
      // eslint-disable-next-line
      2,
      {
        alignAttributesVertically: true,
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
      },
    ],
    'vue/html-quotes': [
      'error',
      'single',
      {
        avoidEscape: true,
      },
    ],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          component: 'always',
          normal: 'always',
          void: 'never',
        },
        math: 'always',
        svg: 'always',
      },
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        multiline: 1,
        singleline: 3,
      },
    ],
    'vue/multiline-html-element-content-newline': [
      'error',
      {
        allowEmptyLines: false,
        ignoreWhenEmpty: true,
      },
    ],
    'vue/mustache-interpolation-spacing': ['error', 'always'],
    'vue/no-multi-spaces': [
      'error',
      {
        ignoreProperties: false,
      },
    ],
    'vue/no-spaces-around-equal-signs-in-attribute': 'error',
    'vue/no-template-shadow': 'error',
    'vue/one-component-per-file': 'error',
    'vue/prop-name-casing': ['error', 'camelCase'],
    'vue/require-default-prop': 'warn',
    'vue/require-prop-types': 'warn',
    'vue/singleline-html-element-content-newline': [
      'error',
      {
        ignoreWhenEmpty: true,
        ignoreWhenNoAttributes: true,
      },
    ],
    'vue/v-bind-style': ['error', 'shorthand'],
    'vue/v-on-style': ['error', 'shorthand'],
    'vue/v-slot-style': [
      'error',
      {
        atComponent: 'v-slot',
        default: 'shorthand',
        named: 'shorthand',
      },
    ],

    // strongly Recommended for Vue.js 3.x
    // eslint-disable-next-line
    'vue/require-explicit-emits': [
      'error',
      {
        allowProps: false,
      },
    ],
    'vue/v-on-event-hyphenation': [
      'error',
      'always',
      {
        autofix: false,
        ignore: [],
      },
    ],

    // recommended
    // eslint-disable-next-line
    'vue/attributes-order': [
      'error',
      {
        alphabetical: false,
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          ['UNIQUE', 'SLOT'],
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'OTHER_ATTR',
          'EVENTS',
          'CONTENT',
        ],
      },
    ],
    'vue/component-tags-order': [
      'error',
      {
        order: [['script', 'template'], 'style'],
      },
    ],
    'vue/no-lone-template': [
      'error',
      {
        ignoreAccessible: true,
      },
    ],
    'vue/no-multiple-slot-args': 'error',
    'vue/no-v-html': 'warn',
    'vue/order-in-components': [
      'error',
      {
        order: [
          'el',
          'name',
          'key',
          'parent',
          'functional',
          ['delimiters', 'comments'],
          ['components', 'directives', 'filters'],
          'extends',
          'mixins',
          ['provide', 'inject'],
          'ROUTER_GUARDS',
          'layout',
          'middleware',
          'validate',
          'scrollToTop',
          'transition',
          'loading',
          'inheritAttrs',
          'model',
          ['props', 'propsData'],
          'emits',
          'setup',
          'asyncData',
          'data',
          'fetch',
          'head',
          'computed',
          'watch',
          'watchQuery',
          'LIFECYCLE_HOOKS',
          'methods',
          ['template', 'render'],
          'renderError',
        ],
      },
    ],
    'vue/this-in-template': 'error',

    // uncategorized
    // eslint-disable-next-line
    'vue/block-lang': [
      'error',
      {
        script: {
          lang: 'ts',
        },
      },
    ],
    'vue/block-tag-newline': [
      'error',
      {
        blocks: {
          'my-block': {
            maxEmptyLines: 0,
            multiline: 'always',
            singleline: 'always',
          },
          script: {
            maxEmptyLines: 0,
            multiline: 'always',
            singleline: 'always',
          },
          template: {
            maxEmptyLines: 0,
            multiline: 'always',
            singleline: 'always',
          },
        },
      },
    ],
    'vue/component-api-style': ['error', ['script-setup', 'composition']],
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        globals: ['RouterView', 'RouterLink'],
        registeredComponentsOnly: true,
      },
    ],
    'vue/component-options-name-casing': ['error', 'PascalCase'],
    'vue/custom-event-name-casing': ['error', 'kebab-case'],
    'vue/define-emits-declaration': ['error', 'type-based'],
    'vue/define-macros-order': [
      'error',
      {
        order: ['defineProps', 'defineEmits'],
      },
    ],
    'vue/define-props-declaration': ['error', 'type-based'],
    'vue/html-button-has-type': [
      'error',
      {
        button: true,
        reset: true,
        submit: true,
      },
    ],
    'vue/html-comment-content-newline': [
      'error',
      {
        multiline: 'always',
        singleline: 'never',
      },
    ],
    'vue/html-comment-content-spacing': ['error', 'always'],
    'vue/html-comment-indent': ['error', 2],
    'vue/match-component-file-name': [
      'error',
      {
        extensions: ['jsx', 'tsx', 'vue'],
        shouldMatchCase: true,
      },
    ],
    'vue/match-component-import-name': 'error',
    'vue/new-line-between-multi-line-property': [
      'error',
      {
        minLineOfMultilineProperty: 2,
      },
    ],
    'vue/next-tick-style': ['error', 'promise'],
    'vue/no-bare-strings-in-template': [
      'warn',
      {
        allowlist: [
          '(',
          ')',
          ',',
          '.',
          '&',
          '+',
          '-',
          '=',
          '*',
          '/',
          '#',
          '%',
          '!',
          '?',
          ':',
          '[',
          ']',
          '{',
          '}',
          '<',
          '>',
          '\u00b7',
          '\u2022',
          '\u2010',
          '\u2013',
          '\u2014',
          '\u2212',
          '|',
        ],
        attributes: {
          '/.+/': ['title', 'aria-label', 'aria-placeholder', 'aria-roledescription', 'aria-valuetext'],
          img: ['alt'],
          input: ['placeholder'],
        },
        directives: ['v-text'],
      },
    ],
    'vue/no-boolean-default': ['error', 'no-default'],
    'vue/no-duplicate-attr-inheritance': 'error',
    'vue/no-empty-component-block': 'error',
    'vue/no-multiple-objects-in-class': 'error',
    'vue/no-potential-component-option-typo': [
      'error',
      {
        custom: [],
        presets: ['vue'],
        threshold: 1,
      },
    ],
    'vue/no-ref-object-destructure': 'error',
    'vue/no-required-prop-with-default': [
      'error',
      {
        autofix: true,
      },
    ],
    'vue/no-restricted-block': 'off',
    'vue/no-restricted-call-after-await': 'off',
    'vue/no-restricted-class': 'off',
    'vue/no-restricted-component-options': 'off',
    'vue/no-restricted-custom-event': 'off',
    'vue/no-restricted-html-elements': 'off',
    'vue/no-restricted-props': 'off',
    'vue/no-restricted-static-attribute': 'off',
    'vue/no-restricted-v-bind': 'off',
    'vue/no-static-inline-styles': [
      'error',
      {
        allowBinding: false,
      },
    ],
    'vue/no-template-target-blank': [
      'error',
      {
        allowReferrer: false,
        enforceDynamicLinks: 'always',
      },
    ],
    'vue/no-this-in-before-route-enter': 'error',
    'vue/no-undef-components': 'error',
    'vue/no-undef-properties': 'error',
    'vue/no-unsupported-features': [
      'error',
      {
        version: '^3.0.0',
      },
    ],
    'vue/no-unused-properties': [
      'error',
      {
        deepData: false,
        groups: ['props', 'data', 'computed', 'methods'],
        ignorePublicMembers: false,
      },
    ],
    'vue/no-unused-refs': 'error',
    'vue/no-useless-mustaches': [
      'error',
      {
        ignoreIncludesComment: false,
        ignoreStringEscape: false,
      },
    ],
    'vue/no-useless-v-bind': [
      'error',
      {
        ignoreIncludesComment: false,
        ignoreStringEscape: false,
      },
    ],
    'vue/no-v-text': 'error',
    'vue/padding-line-between-blocks': ['error', 'always'],
    'vue/padding-line-between-tags': [
      'error',
      [
        {
          blankLine: 'never',
          next: '*',
          prev: '*',
        },
      ],
    ],
    'vue/prefer-prop-type-boolean-first': 'error',
    'vue/prefer-separate-static-class': 'error',
    'vue/prefer-true-attribute-shorthand': ['error', 'always'],
    'vue/require-direct-export': [
      'error',
      {
        disallowFunctionalComponentFunction: false,
      },
    ],
    'vue/require-emit-validator': 'error',
    'vue/require-name-property': 'error',
    'vue/require-prop-comment': 'error',
    'vue/script-indent': [
      'error',
      2,
      {
        baseIndent: 0,
        switchCase: 0,
      },
    ],
    'vue/sort-keys': [
      'error',
      'asc',
      {
        caseSensitive: true,
        ignoreChildrenOf: ['model'],
        ignoreGrandchildrenOf: ['computed', 'directives', 'inject', 'props', 'watch'],
        minKeys: 2,
        natural: false,
      },
    ],
    'vue/static-class-names-order': 'error',
    'vue/v-for-delimiter-style': ['error', 'of'],
    'vue/v-on-handler-style': [
      'error',
      ['method', 'inline-function'],
      {
        ignoreIncludesComment: false,
      },
    ],

    // extension Rules
    // eslint-disable-next-line
    'vue/array-bracket-newline': [
      'error',
      {
        minItems: 2,
        multiline: true,
      },
    ],
    'vue/array-bracket-spacing': [
      'error',
      'always',
      {
        arraysInArrays: true,
        objectsInArrays: true,
        singleValue: true,
      },
    ],
    'vue/arrow-spacing': [
      'error',
      {
        after: true,
        before: true,
      },
    ],
    'vue/block-spacing': ['error', 'always'],
    'vue/brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: false,
      },
    ],
    'vue/camelcase': [
      'error',
      {
        ignoreDestructuring: false,
        ignoreGlobals: false,
        ignoreImports: false,
        properties: 'always',
      },
    ],
    'vue/comma-dangle': ['error', 'always-multiline'],
    'vue/comma-spacing': [
      'error',
      {
        after: true,
        before: false,
      },
    ],
    'vue/comma-style': ['error', 'last'],
    'vue/dot-location': ['error', 'property'],
    'vue/dot-notation': [
      'error',
      {
        allowKeywords: false,
      },
    ],
    'vue/eqeqeq': ['error', 'always'],
    'vue/func-call-spacing': ['error', 'never'],
    'vue/key-spacing': [
      'error',
      {
        afterColon: true,
        align: 'value',
        beforeColon: false,
        mode: 'strict',
      },
    ],
    'vue/keyword-spacing': [
      'error',
      {
        after: true,
        before: true,
      },
    ],
    'vue/max-len': [
      'error',
      {
        code: 128,
        comments: 128,
        ignoreComments: false,
        ignoreHTMLAttributeValues: false,
        ignoreHTMLTextContents: false,
        ignorePattern: '',
        ignoreRegExpLiterals: false,
        ignoreStrings: false,
        ignoreTemplateLiterals: false,
        ignoreTrailingComments: false,
        ignoreUrls: false,
        tabWidth: 2,
        template: 128,
      },
    ],
    'vue/multiline-ternary': ['error', 'always-multiline'],
    'vue/no-constant-condition': 'error',
    'vue/no-empty-pattern': 'error',
    'vue/no-extra-parens': 'error',
    'vue/no-irregular-whitespace': [
      'error',
      {
        skipComments: false,
        skipHTMLAttributeValues: false,
        skipHTMLTextContents: false,
        skipRegExps: false,
        skipStrings: true,
        skipTemplates: false,
      },
    ],
    'vue/no-loss-of-precision': 'error',
    'vue/no-restricted-syntax': 'off',
    'vue/no-sparse-arrays': 'error',
    'vue/no-useless-concat': 'error',
    'vue/object-curly-newline': [
      'error',
      {
        consistent: true,
        multiline: true,
      },
    ],
    'vue/object-curly-spacing': [
      'error',
      'always',
      {
        arraysInObjects: false,
        objectsInObjects: false,
      },
    ],
    'vue/object-property-newline': 'off',
    'vue/object-shorthand': [
      'error',
      'always',
      {
        avoidExplicitReturnArrows: true,
        avoidQuotes: true,
        ignoreConstructors: true,
      },
    ],
    'vue/operator-linebreak': ['error', 'before'],
    'vue/prefer-template': 'error',
    'vue/quote-props': [
      'error',
      'as-needed',
      {
        keywords: true,
        numbers: true,
        unnecessary: true,
      },
    ],
    'vue/space-in-parens': ['error', 'never'],
    'vue/space-infix-ops': [
      'error',
      {
        int32Hint: false,
      },
    ],
    'vue/space-unary-ops': [
      'error',
      {
        nonwords: true,
        words: true,
      },
    ],
    'vue/template-curly-spacing': ['error', 'always'],
  },
}
