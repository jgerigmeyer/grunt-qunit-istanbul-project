module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        qunit: {
            all: ['tests/*.html']
        },

        qunit_junit: {
            options: {

            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-qunit-junit')
    grunt.registerTask('junit', ['qunit_junit', 'qunit']);
    grunt.registerTask('default', ['qunit'])
}