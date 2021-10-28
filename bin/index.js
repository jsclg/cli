#!/usr/bin/env node
const { parseJSCLG } = require("@jsclg/parser");
const { JSCLGError } = require("@jsclg/parser/lib/error");
const file = process.argv.slice(2);
if (!file.length) new JSCLGError("File", "File not mentioned.");
const code = require("fs").readFileSync(file[0], "utf-8");

parseJSCLG(code).forEach((line) => {
  console.log(line);
});
