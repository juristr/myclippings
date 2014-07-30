'use strict';
module.exports = function(grunt) {
    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);
    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);
    //grunt.loadNpmTasks('grunt-contrib-nodeunit');
    // Project configuration.
    grunt.initConfig({
        // Configure a mochaTest task
        mochaTest: {
            unit: {
                options: {
                    reporter: 'spec',
                    clearRequireCache: true
                },
                src: ['test/unit/**/*.js']
            },
            integration: {
                options: {
                    reporter: 'spec',
                    clearRequireCache: true
                },
                src: ['test/integration/**/*.js']
            }
        },
        watch: {
            js: {
                options: {
                    spawn: false,
                },
                files: ['*.js', 'test/**/*.js', 'test/**/*.txt'],
                tasks: ['default']
            }
        
        }
        // Watches files for changes and runs tasks based on the changed files
        // watch: {
        //     js: {
        //         files: ['<%= yeoman.app %>/scripts/{,*/}*.js'],
        //         tasks: ['newer:jshint:all'],
        //         options: {
        //             livereload: '<%= connect.options.livereload %>'
        //         }
        //     },
        //     jsTest: {
        //         files: ['test/spec/{,*/}*.js'],
        //         tasks: ['newer:jshint:test', 'karma']
        //     },
        //     gruntfile: {
        //         files: ['Gruntfile.js']
        //     }
        // },
    });
    // Default task.
    grunt.registerTask('default', ['mochaTest']);
}