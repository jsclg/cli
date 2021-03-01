#!/usr/bin/env node
const parse = require("@jsclg/parser");
const file = process.argv.slice(2);
if (!file.length)
  require("@jsclg/parser/structs/Error")("File", "File not mentioned.");
const code = require("fs").readFileSync(file[0], "utf-8");

parse(code).forEach((line) => {
  console.log(line);
});
