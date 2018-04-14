#!/usr/bin/env node
var chalk = require('chalk');
var _ = require('lodash');

var kappaquotes = [
  "If you work hard enough without pay the universe will compensate you.",
  "You will refactor that code some other time!",
  "Clients care about code quality.",
  "Getting into programming was surely a good idea!",
  "Working this html UI really makes me a better programmer!",
  "I always make sure I get well compensated for my work!",
  "I focus on best practices while ensuring a quick delivery for a competitive price.",
  "It can be done because google is doing it."
]

console.log(chalk.cyan(_.sample(kappaquotes)) + chalk.bold.red(" KAPPA"));