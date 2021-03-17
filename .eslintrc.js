module.exports = {
	env: {
		browser: true,
		es2020: true,
	},
	extends: [ 'airbnb-base' ],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 11,
		sourceType: 'module',
		project: './tsconfig.json',
	},
	plugins: [ '@typescript-eslint', 'import' ],
	rules: {
		'import/prefer-default-export': 'off',
		'import/no-unresolved': 'off',
	},
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': [ '.ts', '.tsx' ],
		},
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true,
				project: './',
			},
			node: {
				extensions: [ '.js', '.jsx', '.ts', '.tsx' ],
			},
		},
	},
}
