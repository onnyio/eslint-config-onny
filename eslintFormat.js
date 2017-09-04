/**
 * @Copyright (C) 2015-2016 Onny LLC - All Rights Reserved
 *
 * This file is part of Onny and is the sole property of its owner.
 * Unauthorized use of this file, via any medium or form, whole or in part,
 * is strictly prohibited without the expressed written permission of Onny LLC and/or Isaac Marotte
 *
 * This file is proprietary and confidential
 *
 * Last Modified: 2016.10.24
 */

/**
 * @fileoverview Stylish reporter
 * @author Sindre Sorhus
 */


const chalk = require('chalk');
const table = require('text-table');
const stripAnsi = require('strip-ansi');

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Given a word and a count, append an s if count is not one.
 * @param {string} word A word in its singular form.
 * @param {int} count A number controlling whether word should be pluralized.
 * @returns {string} The original word with an s on the end if count is not one.
 */
function pluralize(word, count) {
  return (count === 1 ? word : `${word}s`);
}

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

module.exports = function (results) {
  let output = '\n',
    total = 0,
    errors = 0,
    warnings = 0,
    summaryColor = 'yellow';

  results.forEach((result) => {
    const messages = result.messages;

    if (messages.length === 0) {
      return;
    }

    total += messages.length;
    output += `${chalk.underline(result.filePath)}\n`;

    output += `${table(
      messages.map((message) => {
        let messageType;

        if (message.fatal || message.severity === 2) {
          messageType = chalk.red('error');
          summaryColor = 'red';
          errors++;
        } else {
          messageType = chalk.yellow('warning');
          warnings++;
        }

        return [
          '',
          `${result.filePath}:${message.line || 0}`,
          message.column || 0,
          messageType,
          message.message.replace(/\.$/, ''),
          chalk.dim(message.ruleId || '')
        ];
      }),
      {
        align: ['', 'r', 'l'],
        stringLength(str) {
          return stripAnsi(str).length;
        }
      }
    ).split('\n').map((el) => {
      return el.replace(/(\d+)\s+(\d+)/, (m, p1, p2) => {
        return chalk.dim(`${p1}:${p2}`);
      });
    }).join('\n')}\n\n`;
  });

  if (total > 0) {
    output += chalk[summaryColor].bold([
      '\u2716 ', total, pluralize(' problem', total),
      ' (', errors, pluralize(' error', errors), ', ',
      warnings, pluralize(' warning', warnings), ')\n'
    ].join(''));
  }

  return total > 0 ? output : '';
};
