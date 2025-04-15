import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import stylisticJs from '@stylistic/eslint-plugin-js'


const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
    baseDirectory: __dirname,
})

const eslintConfig = [
    ...compat.extends('next/core-web-vitals', 'next/typescript'),
    {

        plugins: {
            '@stylistic/js': stylisticJs,
        },
        rules: {
            'no-console': ['warn', {
                allow: ['error', 'info'],
            }],

            'block-scoped-var': 'warn',
            curly: 'warn',
            'no-else-return': 'warn',
            'no-unused-expressions': 'error',
            'no-unused-vars': ['error', { 'caughtErrors': 'none' }],
            radix: 'error',
            strict: ['warn', 'never'],
            'no-shadow': 'warn',

            'no-use-before-define': ['error', {
                functions: false,
            }],

            'array-bracket-spacing': 'warn',
            'block-spacing': 'warn',
            'brace-style': 'warn',
            camelcase: 'warn',
            'comma-spacing': 'warn',
            'eol-last': 'warn',
            'func-call-spacing': 'warn',
            'key-spacing': 'warn',
            'keyword-spacing': 'warn',
            'linebreak-style': ['warn', 'unix'],
            'max-depth': 'warn',
            'no-multiple-empty-lines': 'warn',
            'no-trailing-spaces': 'warn',
            'no-whitespace-before-property': 'warn',

            'padded-blocks': ['warn', {
                classes: 'always',
            }],

            quotes: ['warn', 'single'],
            semi: ['warn', 'never'],
            'arrow-parens': ['warn', 'as-needed'],
            'arrow-spacing': 'warn',
            'no-duplicate-imports': 'warn',
            'no-useless-rename': 'warn',
            'no-var': 'warn',
            'prefer-const': 'warn',
            'prefer-spread': 'warn',
            'prefer-template': 'warn',
            'rest-spread-spacing': 'warn',
            'sort-imports': 'off',
            'template-curly-spacing': ['warn', 'never'],

            '@stylistic/js/indent': ['warn', 4, {
                SwitchCase: 1,
            }],

            'react/jsx-uses-react': 'warn',
            'react/jsx-uses-vars': 'warn',
        },
    },
]

export default eslintConfig
