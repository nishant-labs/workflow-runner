import prettierConfig from '@vdemedes/prettier-config' with {type: 'json'};

/**
 * @type {import("prettier").Config}
 */
const config = {
	...prettierConfig,
	printWidth: 120,
};

export default config;
