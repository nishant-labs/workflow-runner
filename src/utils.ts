import chalk from 'chalk';
import ora, { Ora } from 'ora';
import Table from 'cli-table3';

export const formatText = {
  success: (text: string): string => chalk.green(text),
  error: (text: string): string => chalk.red(text),
  info: (text: string): string => chalk.blue(text),
  warning: (text: string): string => chalk.yellow(text),
};

export const createSpinner = (text: string): Ora =>
  ora({
    text,
    spinner: 'dots',
    color: 'cyan',
  });

export const createTable = (headers: string[]): InstanceType<typeof Table> =>
  new Table({
    head: headers.map((header) => chalk.cyan(header)),
  });
