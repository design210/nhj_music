/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
	root: true,

	// 글로벌 변수 설정
	globals: {
		defineProps: 'readonly',
		defineEmits: 'readonly',
	},

	// 기본적인 ESLint 환경 설정
	env: {
		node: true,
		'vue/setup-compiler-macros': true,
	},

	// 파서 옵션 설정
	parserOptions: {
		parser: '@babel/eslint-parser',
		requireConfigFile: false,
	},

	// ESLint 확장 설정
	extends: [
		'plugin:vue/vue3-essential', // Vue 3 프로젝트라면 이렇게 설정합니다.
		'eslint:recommended',
	],

	// 플러그인 설정
	plugins: ['prettier'],

	// 규칙 설정
	rules: {
		'no-unused-vars': 'off',
		'vue/multi-word-component-names': 'off', // Disable the rule
		'prettier/prettier': [
			'error',
			{
				endOfLine: 'auto',
				singleQuote: true,
				semi: true,
				useTabs: true,
				tabWidth: 2,
				trailingComma: 'all',
				printWidth: 120,
				bracketSpacing: true,
				arrowParens: 'avoid',
			},
		],
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
	},

	// 특정 파일에 대한 설정을 오버라이드
	overrides: [
		{
			files: [
				'**/__tests__/*.{cy,spec}.{js,ts,jsx,tsx}',
				'cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}',
				'cypress/support/**/*.{js,ts,jsx,tsx}',
			],
			extends: ['plugin:cypress/recommended'],
		},
	],
};
