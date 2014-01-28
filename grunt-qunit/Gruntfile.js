module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        taskName: {
            qunit: {
                all: ['tests/*.html']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.registerTask('default', ['qunit'])
}