#!/usr/bin/env node

const program  = require("commander");
const chalk    = require("chalk");
const shell    = require("shelljs");
const pjson    = require('./package.json');
const list     = require("./lib/list.js");
program
  .version(pjson.version);
program
  .command('list')
  .alias('ls')
  .description('List all websites in the current trellis instance')
  .action(() => {
    list();
  });

program
  .parse(process.argv);