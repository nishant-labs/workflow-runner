import chalk from 'chalk';
import {test, expect} from 'vitest';
import {render} from 'ink-testing-library';
import Index from '../index';

test('greet user', () => {
	const {lastFrame} = render(<Index options={{name: 'Jane'}} />);

	expect(lastFrame()).toBe(`Hello, ${chalk.green('Jane')}`);
});
