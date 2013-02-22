/*global desc, task, jake, fail, complete */
"use strict";

task("default", ["lint"]);

desc("Lint Everything Description!");

task("lint",[], function() {
    console.log("Linting code goes here!");
    var lint = require("./build/lint/lint_runner.js");
    var files = new jake.FileList();
    files.include("**/*.js");
    files.exclude("node_modules");

    var options = {
      node: true
    };

    lint.validateFileList(files.toArray(), options, {});
});
