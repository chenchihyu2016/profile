module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/essential',
        'plugin:@typescript-eslint/recommended'
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        sourceType: 'module'
    },
    plugins: ['vue', '@typescript-eslint'],
    rules: {
        'comma-dangle': 1,
        '@typescript-eslint/comma-dangle': ['error', 'only-multiline'],
        '@typescript-eslint/no-var-requires': 0,
        'vue/no-multiple-template-root': 'off',
        quotes: [2, 'single', { avoidEscape: true }],
        'import/no-unresolved': [2, { caseSensitive: false }],
        '@typescript-eslint/no-explicit-any': 'off',
        'import/no-unresolved': 0,
        'vue/no-dupe-keys': 0
    },
    parser: 'vue-eslint-parser'
};
