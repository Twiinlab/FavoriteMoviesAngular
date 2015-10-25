/// <binding />
module.exports = function (grunt) {
    // load Grunt plugins from NPM
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks("grunt-minified");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks('grunt-contrib-watch');

    // configure plugins
    grunt.initConfig({
        minified : {
            files: {
                src: [
                'Scripts/**/*.js',
                'Scripts/*.js'
                ],
                dest: 'wwwroot/'
            },
            options : {
                allinone: true,
                dest_filename: 'app.js'
            }
        },
        copy: {
            files: {
                cwd: '',
                src: ['Views/**/*.html'],
                dest: 'wwwroot',
                expand: true
            }
        },
        uglify: {
            options: {
                compress: {
                    drop_debugger: false
                }
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
    grunt.registerTask('default', ['uglify', 'copy', 'watch']);
};