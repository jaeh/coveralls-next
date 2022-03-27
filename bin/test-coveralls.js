#!/usr/bin/env node

'use strict';

const path = require('path');
const fs = require('fs');
const {handleInput} = require('..');

const file = path.join(process.cwd(), 'coverage', 'lcov.info');
const input = fs.readFileSync(file, 'utf8');

handleInput(input, err => {
  if (err) {
    throw err;
  }
});
