module.exports = {
  rules: {
    // possible Problems
    'array-callback-return': 'error',
    'constructor-super': 'error',
    'for-direction': 'error',
    'getter-return': 'error',
    'no-async-promise-executor': 'error',
    'no-await-in-loop': 'error',
    'no-class-assign': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': 'error',
    'no-const-assign': 'error',
    'no-constant-binary-expression': 'error',
    'no-constant-condition': 'error',
    'no-constructor-return': 'error',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-else-if': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-duplicate-imports': 'error',
    'no-empty-character-class': 'error',
    'no-empty-pattern': 'error',
    'no-ex-assign': 'error',
    'no-fallthrough': 'error',
    'no-func-assign': 'error',
    'no-import-assign': 'error',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': [
      'error',
      {
        skipComments: true,
        skipRegExps: true,
        skipStrings: true,
        skipTemplates: true,
      },
    ],
    'no-loss-of-precision': 'error',
    'no-misleading-character-class': 'error',
    'no-new-native-nonconstructor': 'error',
    'no-new-symbol': 'error',
    'no-obj-calls': 'error',
    'no-promise-executor-return': 'error',
    'no-prototype-builtins': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-setter-return': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-this-before-super': 'error',
    'no-undef': 'error',
    'no-unexpected-multiline': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unreachable': 'error',
    'no-unreachable-loop': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-unsafe-optional-chaining': 'error',
    'no-unused-private-class-members': 'error',
    'no-unused-vars': 'error',
    'no-use-before-define': 'error',
    'no-useless-backreference': 'error',
    'require-atomic-updates': [
      'error',
      {
        allowProperties: false,
      },
    ],
    'use-isnan': [
      'error',
      {
        enforceForIndexOf: true,
        enforceForSwitchCase: true,
      },
    ],
    'valid-typeof': [
      'error',
      {
        requireStringLiterals: true,
      },
    ],

    // suggestions
    // eslint-disable-next-line
    'accessor-pairs': [
      'error',
      {
        enforceForClassMembers: true,
        getWithoutSet: true,
        setWithoutGet: true,
      },
    ],
    'arrow-body-style': [
      'error',
      'as-needed',
      {
        requireReturnForObjectLiteral: false,
      },
    ],
    'block-scoped-var': 'error',
    camelcase: [
      'error',
      {
        ignoreDestructuring: false,
        ignoreGlobals: false,
        ignoreImports: false,
        properties: 'always',
      },
    ],
    'capitalized-comments': [
      'error',
      'never',
      {
        ignoreConsecutiveComments: false,
        ignoreInlineComments: false,
      },
    ],
    'class-methods-use-this': [
      'error',
      {
        enforceForClassFields: false,
      },
    ],
    complexity: ['error', 10],
    'consistent-return': [
      'error',
      {
        treatUndefinedAsUnspecified: false,
      },
    ],
    'consistent-this': ['error', 'that'],
    curly: ['error', 'multi-or-nest', 'consistent'],
    'default-case': 'error',
    'default-case-last': 'error',
    'default-param-last': 'error',
    'dot-notation': [
      'error',
      {
        allowKeywords: false,
      },
    ],
    eqeqeq: ['error', 'always'],
    'func-name-matching': [
      'error',
      'always',
      {
        considerPropertyDescriptor: true,
        includeCommonJSModuleExports: false,
      },
    ],
    'func-names': ['error', 'as-needed'],
    'func-style': ['error', 'expression', { allowArrowFunctions: true }],
    'grouped-accessor-pairs': ['error', 'getBeforeSet'],
    'guard-for-in': 'error',
    'id-denylist': 'off',
    'id-length': [
      'error',
      {
        max: 64,
        min: 2,
        properties: 'always',
      },
    ],
    'id-match': 'off',
    'init-declarations': ['error', 'always'],
    'logical-assignment-operators': [
      'error',
      'always',
      {
        enforceForIfStatements: true,
      },
    ],
    'max-classes-per-file': [
      'error',
      {
        ignoreExpressions: true,
        max: 3,
      },
    ],
    'max-depth': ['error', 3],
    'max-lines': [
      'warn',
      {
        max: 1000,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    'max-lines-per-function': [
      'warn',
      {
        IIFEs: true,
        max: 50,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    'max-nested-callbacks': ['warn', 3],
    'max-params': ['warn', 6],
    'max-statements': [
      'warn',
      50,
      {
        ignoreTopLevelFunctions: true,
      },
    ],
    'multiline-comment-style': ['error', 'starred-block'],
    'new-cap': [
      'error',
      {
        capIsNew: true,
        newIsCap: true,
        properties: true,
      },
    ],
    'no-alert': 'error',
    'no-array-constructor': 'warn',
    'no-bitwise': 'off',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-confusing-arrow': [
      'warn',
      {
        allowParens: true,
        onlyOneSimpleParam: true,
      },
    ],
    'no-console': [
      'error',
      {
        allow: ['warn', 'error'],
      },
    ],
    'no-continue': 'warn',
    'no-delete-var': 'error',
    'no-div-regex': 'warn',
    'no-else-return': [
      'error',
      {
        allowElseIf: true,
      },
    ],
    'no-empty': [
      'error',
      {
        allowEmptyCatch: true,
      },
    ],
    'no-empty-function': [
      'error',
      {
        allow: ['constructors'],
      },
    ],
    'no-empty-static-block': 'error',
    'no-eq-null': 'error',
    'no-eval': [
      'error',
      {
        allowIndirect: true,
      },
    ],
    'no-extend-native': 'warn',
    'no-extra-bind': 'error',
    'no-extra-boolean-cast': [
      'error',
      {
        enforceForLogicalOperands: true,
      },
    ],
    'no-extra-label': 'error',
    'no-extra-semi': 'error',
    'no-floating-decimal': 'error',
    'no-global-assign': 'error',
    'no-implicit-coercion': [
      'error',
      {
        boolean: true,
        disallowTemplateShorthand: false,
        number: true,
        string: true,
      },
    ],
    'no-implicit-globals': [
      'error',
      {
        lexicalBindings: true,
      },
    ],
    'no-implied-eval': 'error',
    'no-inline-comments': 'error',
    'no-invalid-this': [
      'error',
      {
        capIsConstructor: false,
      },
    ],
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': [
      'error',
      {
        allowLoop: true,
        allowSwitch: true,
      },
    ],
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': 'off',
    'no-mixed-operators': [
      'error',
      {
        allowSamePrecedence: true,
      },
    ],
    'no-multi-assign': [
      'warn',
      {
        ignoreNonDeclaration: false,
      },
    ],
    'no-multi-str': 'error',
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-wrappers': 'error',
    'no-nonoctal-decimal-escape': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': [
      'error',
      {
        props: true,
      },
    ],
    'no-plusplus': [
      'warn',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'no-proto': 'error',
    'no-redeclare': [
      'error',
      {
        builtinGlobals: true,
      },
    ],
    'no-regex-spaces': 'error',
    'no-restricted-exports': 'off',
    'no-restricted-globals': 'off',
    'no-restricted-imports': 'off',
    'no-restricted-properties': 'off',
    'no-restricted-syntax': 'off',
    'no-return-assign': ['error', 'except-parens'],
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-sequences': [
      'error',
      {
        allowInParentheses: false,
      },
    ],
    'no-shadow': [
      'error',
      {
        builtinGlobals: true,
        hoist: 'all',
        ignoreOnInitialization: true,
      },
    ],
    'no-shadow-restricted-names': 'error',
    'no-ternary': 'off',
    'no-throw-literal': 'error',
    'no-undef-init': 'warn',
    'no-undefined': 'error',
    'no-underscore-dangle': [
      'warn',
      {
        allowAfterSuper: false,
        allowAfterThis: false,
        allowAfterThisConstructor: false,
        allowFunctionParams: false,
        enforceInClassFields: false,
        enforceInMethodNames: false,
      },
    ],
    'no-unneeded-ternary': [
      'error',
      {
        defaultAssignment: true,
      },
    ],
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: false,
        allowTaggedTemplates: false,
        allowTernary: false,
        enforceForJSX: false,
      },
    ],
    'no-unused-labels': 'error',
    'no-useless-call': 'error',
    'no-useless-catch': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'error',
    'no-useless-escape': 'error',
    'no-useless-rename': [
      'error',
      {
        ignoreDestructuring: false,
        ignoreExport: false,
        ignoreImport: false,
      },
    ],
    'no-useless-return': 'error',
    'no-var': 'error',
    'no-void': [
      'error',
      {
        allowAsStatement: false,
      },
    ],
    'no-warning-comments': [
      'error',
      {
        location: 'start',
        terms: ['todo'],
      },
    ],
    'no-with': 'error',
    'object-shorthand': [
      'error',
      'always',
      {
        avoidExplicitReturnArrows: true,
        avoidQuotes: true,
        ignoreConstructors: true,
      },
    ],
    'one-var': ['error', 'never'],
    'one-var-declaration-per-line': ['error', 'always'],
    'operator-assignment': ['error', 'always'],
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: false,
        allowUnboundThis: true,
      },
    ],
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
        ignoreReadBeforeAssign: false,
      },
    ],
    'prefer-destructuring': 'off',
    'prefer-exponentiation-operator': 'off',
    'prefer-named-capture-group': 'off',
    'prefer-numeric-literals': 'off',
    'prefer-object-has-own': 'error',
    'prefer-object-spread': 'error',
    'prefer-promise-reject-errors': [
      'error',
      {
        allowEmptyReject: false,
      },
    ],
    'prefer-regex-literals': [
      'error',
      {
        disallowRedundantWrapping: true,
      },
    ],
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'quote-props': [
      'error',
      'as-needed',
      {
        keywords: true,
        numbers: true,
        unnecessary: true,
      },
    ],
    radix: ['error', 'as-needed'],
    'require-await': 'error',
    'require-unicode-regexp': 'error',
    'require-yield': 'error',
    'sort-imports': [
      'error',
      {
        allowSeparatedGroups: false,
        ignoreCase: false,
        ignoreDeclarationSort: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],
    'sort-keys': [
      'warn',
      'asc',
      {
        allowLineSeparatedGroups: false,
        caseSensitive: true,
        minKeys: 2,
        natural: true,
      },
    ],
    'sort-vars': [
      'error',
      {
        ignoreCase: false,
      },
    ],
    'spaced-comment': ['error', 'always'],
    strict: ['warn', 'never'],
    'symbol-description': 'error',
    'vars-on-top': 'error',
    yoda: [
      'error',
      'never',
      {
        exceptRange: true,
        onlyEquality: true,
      },
    ],

    // layout & Formatting
    // eslint-disable-next-line
    'array-bracket-newline': [
      'error',
      {
        minItems: 2,
        multiline: true,
      },
    ],
    'array-bracket-spacing': [
      'error',
      'always',
      {
        arraysInArrays: true,
        objectsInArrays: true,
        singleValue: true,
      },
    ],
    'array-element-newline': ['error', 'always'],
    'arrow-parens': [
      'error',
      'as-needed',
      {
        requireForBlockBody: true,
      },
    ],
    'arrow-spacing': [
      'error',
      {
        after: true,
        before: true,
      },
    ],
    'block-spacing': ['error', 'always'],
    'brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: false,
      },
    ],
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': [
      'error',
      {
        after: true,
        before: false,
      },
    ],
    'comma-style': ['error', 'last'],
    'computed-property-spacing': [
      'error',
      'never',
      {
        enforceForClassMembers: true,
      },
    ],
    'dot-location': ['error', 'property'],
    'eol-last': ['error', 'always'],
    'func-call-spacing': ['error', 'never'],
    'function-call-argument-newline': ['error', 'never'],
    'function-paren-newline': ['error', 'multiline-arguments'],
    'generator-star-spacing': [
      'error',
      {
        after: false,
        before: true,
      },
    ],
    'implicit-arrow-linebreak': ['error', 'beside'],
    indent: ['error', 2],
    'jsx-quotes': ['error', 'prefer-single'],
    'key-spacing': [
      'error',
      {
        afterColon: true,
        align: 'value',
        beforeColon: false,
        mode: 'strict',
      },
    ],
    'keyword-spacing': [
      'error',
      {
        after: true,
        before: true,
      },
    ],
    'line-comment-position': [
      'error',
      {
        position: 'above',
      },
    ],
    'linebreak-style': ['error', 'unix'],
    'lines-around-comment': [
      'error',
      {
        afterBlockComment: false,
        afterLineComment: false,
        allowArrayEnd: false,
        allowArrayStart: true,
        allowBlockEnd: false,
        allowBlockStart: true,
        allowClassEnd: false,
        allowClassStart: true,
        allowObjectEnd: false,
        allowObjectStart: true,
        applyDefaultIgnorePatterns: false,
        beforeBlockComment: true,
        beforeLineComment: true,
      },
    ],
    'lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: false,
      },
    ],
    'max-len': [
      'error',
      {
        code: 128,
        comments: 128,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreTrailingComments: false,
        ignoreUrls: true,
        tabWidth: 2,
      },
    ],
    'max-statements-per-line': [
      'error',
      {
        max: 1,
      },
    ],
    'multiline-ternary': ['error', 'always-multiline'],
    'new-parens': ['error', 'always'],
    'newline-per-chained-call': [
      'error',
      {
        ignoreChainWithDepth: 3,
      },
    ],
    'no-extra-parens': [
      'error',
      'all',
      {
        conditionalAssign: false,
        enforceForArrowConditionals: true,
        enforceForFunctionPrototypeMethods: true,
        enforceForNewInMemberExpressions: true,
        enforceForSequenceExpressions: false,
        ignoreJSX: 'multi-line',
        nestedBinaryExpressions: false,
        returnAssign: false,
      },
    ],
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: false,
      },
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 2,
        maxBOF: 0,
        maxEOF: 1,
      },
    ],
    'no-tabs': [
      'error',
      {
        allowIndentationTabs: false,
      },
    ],
    'no-trailing-spaces': [
      'error',
      {
        ignoreComments: true,
        skipBlankLines: true,
      },
    ],
    'no-whitespace-before-property': 'error',
    'nonblock-statement-body-position': ['error', 'below'],
    'object-curly-newline': [
      'error',
      {
        consistent: true,
        multiline: true,
      },
    ],
    'object-curly-spacing': [
      'error',
      'always',
      {
        arraysInObjects: false,
        objectsInObjects: false,
      },
    ],
    'object-property-newline': 'off',
    'operator-linebreak': ['error', 'before'],
    'padded-blocks': ['error', 'never'],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        next: [
          'block',
          'block-like',
          'break',
          'cjs-export',
          'class',
          'continue',
          'debugger',
          'default',
          'directive',
          'do',
          'empty',
          'export',
          'for',
          'function',
          'if',
          'iife',
          'multiline-const',
          'multiline-expression',
          'multiline-let',
          'multiline-var',
          'return',
          'switch',
          'throw',
          'try',
          'while',
          'with',
        ],
        prev: '*',
      },

      /*
       * {
       *   blankLine: 'always',
       *   prev: [
       *     'block',
       *     'block-like',
       *     'break',
       *     'cjs-export',
       *     'class',
       *     'continue',
       *     'debugger',
       *     'default',
       *     'directive',
       *     'do',
       *     'empty',
       *     'export',
       *     'for',
       *     'function',
       *     'if',
       *     'iife',
       *     'multilin-block-like',
       *     'multiline-const',
       *     'multiline-expression',
       *     'multiline-let',
       *     'multiline-var',
       *     'return',
       *     'switch',
       *     'throw',
       *     'try',
       *     'while',
       *     'with',
       *   ],
       *   next: '*',
       * },
       */
    ],
    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
        avoidEscape: true,
      },
    ],
    'rest-spread-spacing': ['error', 'never'],
    semi: [
      'error',
      'never',
      {
        beforeStatementContinuationChars: 'always',
      },
    ],
    'semi-spacing': [
      'error',
      {
        after: false,
        before: false,
      },
    ],
    'semi-style': ['error', 'first'],
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': ['error', 'always'],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': [
      'error',
      {
        int32Hint: false,
      },
    ],
    'space-unary-ops': [
      'error',
      {
        nonwords: true,
        words: true,
      },
    ],
    'switch-colon-spacing': [
      'error',
      {
        after: true,
        before: false,
      },
    ],
    'template-curly-spacing': ['error', 'always'],
    'template-tag-spacing': ['error', 'always'],
    'unicode-bom': ['warn', 'never'],
    'wrap-iife': [
      'error',
      'inside',
      {
        functionPrototypeMethods: true,
      },
    ],
    'wrap-regex': 'error',
    'yield-star-spacing': [
      'error',
      {
        after: true,
        before: false,
      },
    ],
  },
}
