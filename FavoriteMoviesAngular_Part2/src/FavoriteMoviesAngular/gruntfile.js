/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/
module.exports = function (grunt) {
    // load Grunt plugins from NPM
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // configure plugins
    grunt.initConfig({
        copy: {
            files: {
                cwd: 'Views/',
                src: ['**/*.html'],
                dest: 'wwwroot',
                expand: true
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: { 'wwwroot/app.js': ['Scripts/app.js', 'Scripts/**/*.js'] }
            }
        },

        watch: {
            scripts: {
                files: ['Scripts/**/*.js', 'Views/**/*.html'],
                tasks: ['uglify', 'copy']
            }
        }
    });

    // define tasks
    grunt.registerTask('default', ['uglify', 'watch']);
};