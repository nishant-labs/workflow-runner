#!/usr/bin/env node
import { Command } from 'commander';
import { formatText, createSpinner, createTable } from './utils.js';
import { input, select } from '@inquirer/prompts';

const program = new Command();

program
  .name('runit')
  .description('A feature-rich CLI tool with various formatting options')
  .version('1.0.0');

// Command to display colored text
program
  .command('colorize')
  .description('Display text in different colors')
  .argument('<text>', 'Text to colorize')
  .option('-t, --type <type>', 'Color type (success/error/info/warning)', 'info')
  .action(async (text, options) => {
    const colorType = options.type as keyof typeof formatText;
    if (colorType in formatText) {
      console.log(formatText[colorType](text));
    } else {
      console.log(formatText.error('Invalid color type'));
    }
  });

// Command to show spinner
program
  .command('process')
  .description('Show a spinner while processing')
  .argument('<text>', 'Processing message')
  .action(async (text) => {
    const spinner = createSpinner(text);
    spinner.start();

    // Simulate some work
    await new Promise((resolve) => setTimeout(resolve, 2000));

    spinner.succeed('Processing complete!');
  });

// Command to display data as table
program
  .command('table')
  .description('Display data in a table format')
  .action(async () => {
    const table = createTable(['Name', 'Age', 'City']);

    table.push(
      ['John Doe', '30', 'New York'],
      ['Jane Smith', '25', 'Los Angeles'],
      ['Bob Johnson', '35', 'Chicago']
    );

    console.log(table.toString());
  });

// Command with interactive prompt
program
  .command('interactive')
  .description('Interactive command with prompts')
  .action(async () => {
    const inputAnswer = await input({
      message: 'What is your name?',
    });

    const selectAnswer = await select({
      message: 'Choose your favorite color:',
      choices: ['Red', 'Blue', 'Green', 'Yellow'],
    });

    console.log(formatText.success('\nYour responses:'));
    console.log(formatText.info(`Name: ${inputAnswer}`));
    console.log(formatText.info(`Favorite color: ${selectAnswer}`));
  });

program.parse();
