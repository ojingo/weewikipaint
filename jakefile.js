task("default", ["lint"]);

desc("Lint Everything Description!");

task("lint",[], function() {
    console.log("Linting code goes here!");
    var lint = require("./build/lint/lint_runner.js");
    lint.validateFile("jakefile.js", {}, {});
});
