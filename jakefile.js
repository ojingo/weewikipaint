task("default", [], function() {
    console.log("default");
});

desc("Example Description!");

task("example",["Dependency!"], function() {
    console.log("An Example Task!");
});

task("Dependency!", function() {
    console.log("I am a Dependency!");
});

