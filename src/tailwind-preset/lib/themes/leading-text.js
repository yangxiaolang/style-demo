const { identity } = require('lodash');

const { convertSeriesToObj } = require('./util');

const LEADING_TEXT = ['xxl', 'xl', 'l', 'm', 's'];

module.exports = convertSeriesToObj(LEADING_TEXT, identity);
