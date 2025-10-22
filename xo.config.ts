import {type FlatXoConfig} from 'xo';

const xoConfig: FlatXoConfig = {
	semicolon: true,
	prettier: true,
	react: true,
	rules: {
		'react/prop-types': 'off',
		'react/react-in-jsx-scope': 'off',
		'@typescript-eslint/no-unsafe-call': 'off',
		'@typescript-eslint/no-unsafe-assignment': 'off',
		'import-x/extensions': ['error', 'never'],
	},
};

export default xoConfig;
