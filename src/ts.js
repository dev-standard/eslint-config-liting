/*
 * @Date: 2022-12-14 22:45:22
 * @Author: liting luz.liting@gmail.com
 * @LastEditors: liting luz.liting@gmail.com
 * @LastEditTime: 2022-12-16 19:51:42
 * @FilePath: /eslint-config-liting/src/ts.js
 */
module.exports = {
  overrides: [
    {
      extends: ['eslint:recommended', 'plugin:@typescript-eslint/eslint-recommended'],
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      /*
       * rules: {
       *   // typeScript rules
       *   '@typescript-eslint/adjacent-overload-signatures': 'error',
       *   '@typescript-eslint/array-type': [
       *     'error',
       *     {
       *       default: 'array',
       *       readonly: 'array',
       *     },
       *   ],
       *   '@typescript-eslint/await-thenable': 'error',
       *   '@typescript-eslint/ban-ts-comment': [
       *     'error',
       *     {
       *       'ts-check': false,
       *       'ts-expect-error': false,
       *       'ts-ignore': true,
       *       'ts-nocheck': 'allow-with-description',
       *     },
       *   ],
       *   '@typescript-eslint/ban-tslint-comment': 'warn',
       *   '@typescript-eslint/ban-types': 'error',
       *   '@typescript-eslint/class-literal-property-style': ['error', 'fields'],
       *   '@typescript-eslint/consistent-generic-constructors': ['error', 'type-annotation'],
       *   '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
       *   '@typescript-eslint/consistent-type-assertions': [
       *     'error',
       *     {
       *       assertionStyle: 'as',
       *       objectLiteralTypeAssertions: 'never',
       *     },
       *   ],
       *   '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
       *   '@typescript-eslint/consistent-type-exports': [
       *     'error',
       *     {
       *       fixMixedExportsWithInlineTypeSpecifier: false,
       *     },
       *   ],
       *   '@typescript-eslint/consistent-type-imports': [
       *     'error',
       *     {
       *       disallowTypeAnnotations: true,
       *       fixStyle: 'separate-type-imports',
       *       prefer: 'type-imports',
       *     },
       *   ],
       *   '@typescript-eslint/explicit-function-return-type': [
       *     'error',
       *     {
       *       allowConciseArrowFunctionExpressionsStartingWithVoid: true,
       *       allowDirectConstAssertionInArrowFunctions: true,
       *       allowExpressions: true,
       *       allowHigherOrderFunctions: true,
       *       allowTypedFunctionExpressions: true,
       *     },
       *   ],
       *   '@typescript-eslint/explicit-member-accessibility': [
       *     'error',
       *     {
       *       accessibility: 'no-public',
       *     },
       *   ],
       *   '@typescript-eslint/explicit-module-boundary-types': [
       *     'error',
       *     {
       *       allowArgumentsExplicitlyTypedAsAny: false,
       *       allowDirectConstAssertionInArrowFunctions: false,
       *       allowHigherOrderFunctions: false,
       *       allowTypedFunctionExpressions: false,
       *     },
       *   ],
       *   '@typescript-eslint/member-ordering': [
       *     'error',
       *     {
       *       default: [
       *         // index signature
       *         'signature',
       *         'call-signature',
       */

      /*
       *         // fields
       *         'public-static-field',
       *         'protected-static-field',
       *         'private-static-field',
       *         '#private-static-field',
       */

      /*
       *         'public-decorated-field',
       *         'protected-decorated-field',
       *         'private-decorated-field',
       */

      /*
       *         'public-instance-field',
       *         'protected-instance-field',
       *         'private-instance-field',
       *         '#private-instance-field',
       */

      /*
       *         'public-abstract-field',
       *         'protected-abstract-field',
       */

      /*
       *         'public-field',
       *         'protected-field',
       *         'private-field',
       *         '#private-field',
       */

      /*
       *         'static-field',
       *         'instance-field',
       *         'abstract-field',
       */

      //         'decorated-field',

      //         'field',

      /*
       *         // static initialization
       *         'static-initialization',
       */

      /*
       *         // constructors
       *         'public-constructor',
       *         'protected-constructor',
       *         'private-constructor',
       */

      //         'constructor',

      /*
       *         // getters
       *         'public-static-get',
       *         'protected-static-get',
       *         'private-static-get',
       *         '#private-static-get',
       */

      /*
       *         'public-decorated-get',
       *         'protected-decorated-get',
       *         'private-decorated-get',
       */

      /*
       *         'public-instance-get',
       *         'protected-instance-get',
       *         'private-instance-get',
       *         '#private-instance-get',
       */

      /*
       *         'public-abstract-get',
       *         'protected-abstract-get',
       */

      /*
       *         'public-get',
       *         'protected-get',
       *         'private-get',
       *         '#private-get',
       */

      /*
       *         'static-get',
       *         'instance-get',
       *         'abstract-get',
       */

      //         'decorated-get',

      //         'get',

      /*
       *         // setters
       *         'public-static-set',
       *         'protected-static-set',
       *         'private-static-set',
       *         '#private-static-set',
       */

      /*
       *         'public-decorated-set',
       *         'protected-decorated-set',
       *         'private-decorated-set',
       */

      /*
       *         'public-instance-set',
       *         'protected-instance-set',
       *         'private-instance-set',
       *         '#private-instance-set',
       */

      /*
       *         'public-abstract-set',
       *         'protected-abstract-set',
       */

      /*
       *         'public-set',
       *         'protected-set',
       *         'private-set',
       *         '#private-set',
       */

      /*
       *         'static-set',
       *         'instance-set',
       *         'abstract-set',
       */

      //         'decorated-set',

      //         'set',

      /*
       *         // methods
       *         'public-static-method',
       *         'protected-static-method',
       *         'private-static-method',
       *         '#private-static-method',
       */

      /*
       *         'public-decorated-method',
       *         'protected-decorated-method',
       *         'private-decorated-method',
       */

      /*
       *         'public-instance-method',
       *         'protected-instance-method',
       *         'private-instance-method',
       *         '#private-instance-method',
       */

      /*
       *         'public-abstract-method',
       *         'protected-abstract-method',
       */

      /*
       *         'public-method',
       *         'protected-method',
       *         'private-method',
       *         '#private-method',
       */

      /*
       *         'static-method',
       *         'instance-method',
       *         'abstract-method',
       */

      //         'decorated-method',

      /*
       *         'method',
       *       ],
       *     },
       *   ],
       *   '@typescript-eslint/method-signature-style': ['error', 'property'],
       *   '@typescript-eslint/naming-convention': [
       *     'warn',
       *     {
       *       format: ['camelCase'],
       *       leadingUnderscore: 'allow',
       *       selector: 'default',
       *       trailingUnderscore: 'allow',
       *     },
       */

      /*
       *     {
       *       format: ['camelCase', 'UPPER_CASE'],
       *       leadingUnderscore: 'allow',
       *       selector: 'variable',
       *       trailingUnderscore: 'allow',
       *     },
       */

      /*
       *     {
       *       format: ['PascalCase'],
       *       selector: 'typeLike',
       *     },
       *   ],
       *   '@typescript-eslint/no-base-to-string': 'error',
       *   '@typescript-eslint/no-confusing-non-null-assertion': 'error',
       *   '@typescript-eslint/no-confusing-void-expression': [
       *     'error',
       *     {
       *       ignoreArrowShorthand: true,
       *       ignoreVoidOperator: true,
       *     },
       *   ],
       *   '@typescript-eslint/no-duplicate-enum-values': 'error',
       *   '@typescript-eslint/no-dynamic-delete': 'error',
       *   '@typescript-eslint/no-empty-interface': 'error',
       *   '@typescript-eslint/no-explicit-any': 'error',
       *   '@typescript-eslint/no-extra-non-null-assertion': 'error',
       *   '@typescript-eslint/no-extraneous-class': [
       *     'error',
       *     {
       *       allowConstructorOnly: true,
       *       allowEmpty: false,
       *       allowStaticOnly: false,
       *       allowWithDecorator: true,
       *     },
       *   ],
       *   '@typescript-eslint/no-floating-promises': [
       *     'error',
       *     {
       *       ignoreIIFE: true,
       *       ignoreVoid: true,
       *     },
       *   ],
       *   '@typescript-eslint/no-for-in-array': 'error',
       *   '@typescript-eslint/no-inferrable-types': [
       *     'error',
       *     {
       *       ignoreParameters: true,
       *       ignoreProperties: true,
       *     },
       *   ],
       *   '@typescript-eslint/no-invalid-void-type': [
       *     'error',
       *     {
       *       allowAsThisParameter: false,
       *       allowInGenericTypeArguments: false,
       *     },
       *   ],
       *   '@typescript-eslint/no-meaningless-void-operator': [
       *     'error',
       *     {
       *       checkNever: false,
       *     },
       *   ],
       *   '@typescript-eslint/no-misused-new': 'error',
       *   '@typescript-eslint/no-misused-promises': [
       *     'error',
       *     {
       *       checksConditionals: true,
       *       checksSpreads: true,
       *       checksVoidReturn: true,
       *     },
       *   ],
       *   '@typescript-eslint/no-namespace': [
       *     'error',
       *     {
       *       allowDeclarations: true,
       *       allowDefinitionFiles: true,
       *     },
       *   ],
       *   '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
       *   '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
       *   '@typescript-eslint/no-non-null-assertion': 'error',
       *   '@typescript-eslint/no-redundant-type-constituents': 'error',
       *   '@typescript-eslint/no-require-imports': 'warn',
       *   '@typescript-eslint/no-this-alias': [
       *     'warn',
       *     {
       *       allowDestructuring: true,
       *     },
       *   ],
       *   '@typescript-eslint/no-type-alias': [
       *     'error',
       *     {
       *       allowAliases: 'in-unions-and-intersections',
       *       allowCallbacks: 'always',
       *       allowConditionalTypes: 'always',
       *       allowConstructors: 'always',
       *       allowLiterals: 'in-unions-and-intersections',
       *       allowMappedTypes: 'in-unions-and-intersections',
       *       allowTupleTypes: 'in-unions-and-intersections',
       *     },
       *   ],
       * },
       */
    },
  ],
}
