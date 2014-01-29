module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        qunit: {
            all: ['tests/*.html'],
			options: {
				coverage: {
					src: ['src/*.js'],
					instrumentedFiles: './temp/',
					htmlReport: 'report/coverage',
					coberturaReport: 'report/'
				}
			}
        },

        qunit_junit: {
            options: {

            }
        }
    });

    grunt.loadNpmTasks('grunt-qunit-istanbul');
    grunt.loadNpmTasks('grunt-qunit-junit')
    grunt.registerTask('junit', ['qunit_junit', 'qunit']);
    grunt.registerTask('default', ['qunit'])
}