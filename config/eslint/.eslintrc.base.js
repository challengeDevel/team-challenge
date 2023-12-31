/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
	parserOptions: {
		ecmaVersion: 13,
		parser: '@babel/eslint-parser',
		requireConfigFile: false,
		sourceType: 'module',
	},
	env: {
		browser: true,
	},
	plugins: ['import'],
	extends: ['eslint:recommended', 'airbnb'],
	settings: {
		'import/extensions': ['.js', '.jsx'],
		'import/resolver': {
			jsconfig: {
				config: 'jsconfig.json',
				extentions: ['.js', '.jsx'],
			},
		},
	},
	rules: {
		'import/order': 'warn',
		'import/no-cycle': 'off',
		'consistent-return': 'off',
		'no-tabs': 'off',
		'object-curly-newline': 'off',
		'no-param-reassign': [
			'error',
			{
				ignorePropertyModificationsForRegex: ['^draft.'],
			},
		],
		'no-underscore-dangle': 'off',

		// for prettier
		'operator-linebreak': [
			'error',
			'after',
			{ overrides: { '?': 'before', ':': 'before' } },
		],
		'implicit-arrow-linebreak': 'off',
		'import/prefer-default-export': 'off',
		'no-unused-vars': 'warn',
		'arrow-body-style': ['error', 'always'],
	},
};
