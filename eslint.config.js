export default [
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        process: 'readonly',
        module: 'readonly',
        require: 'readonly',
      },
    },
    rules: {
      semi: ['error', 'always'],
      'no-unused-vars': 'error',
      'no-console': ['error', { allow: ['info', 'error'] }],
      'no-empty-function': 'error',
      'no-useless-constructor': 'error',
      'max-len': [
        'error',
        {
          code: 70,
          ignorePattern: '^import\\s',
        },
      ],
      'max-lines-per-function': [
        'error',
        { max: 50, skipBlankLines: true },
      ],
      'no-multiple-empty-lines': ['error', { max: 2 }],
      'no-restricted-syntax': [
        'error',
        {
          selector: 'ImportDeclaration[source.value=/^@\\//]',
          message:
            'No se permite el uso de "@", use rutas relativas.',
        },
      ],
    },
  },
];
