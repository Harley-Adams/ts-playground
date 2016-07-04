module.exports = function(grunt) {
  grunt.initConfig({
    ts: {
      default : {
        src: ["**/*.ts", "!node_modules/**/*.ts"],
        outDir: "dist"
      }
    },
  tslint: {
         options: {
            configuration: grunt.file.readJSON("tslint.json")
         },
         files: {
             src: [
                 './src/**/*.ts'
             ]
         }
     }
  });
  grunt.loadNpmTasks("grunt-ts");
  grunt.loadNpmTasks("grunt-tslint");

  grunt.registerTask("default", ["ts", "tslint"]);
};