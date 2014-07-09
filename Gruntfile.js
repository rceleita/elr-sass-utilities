module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        appFolder: 'app/',
        distFolder: 'dist/',

        copy: {
            build: {
                cwd: '<%= appFolder %>',
                src: [ '**', '!**/sass/**/*'],
                dest: '<%= distFolder %>',
                expand: true
            }
        }, 

        clean: {
            build: {
                nonull: false,
                src: ['<%= distFolder %>']
            },

            stylesheets: {
                nonull: false,
                src: ['<%= distFolder %>*.css']
            },

            postbuild: {
                nonull: false,
                src: ['<%= distFolder %>sass','<%= distFolder %>css']
            }
        },

        compass: {
            dev: {
                options: {
                    cssDir: '<%= distFolder %>',
                    httpPath: '/',
                    sassDir: '<%= appFolder %>sass',
                    fontsDir: '<%= distFolder %>fonts',
                    imagesDir: '<%= distFolder %>images',
                    javascriptsDir: '<%= distFolder %>js',
                    outputStyle: 'expanded',
                    relativeAssets: true,
                    lineComments: false
                }
            },

            dist: {
                options: {
                    cssDir: '<%= distFolder %>',
                    httpPath: '/',
                    sassDir: '<%= appFolder %>sass',
                    fontsDir: '<%= distFolder %>fonts',
                    imagesDir: '<%= distFolder %>images',
                    javascriptsDir: '<%= distFolder %>js',
                    outputStyle: 'compressed',
                    relativeAssets: true,
                    lineComments: false
                }
            }
        },

		autoprefixer: {
            options: {
                browsers: ['last 8 versions']
            },
			build: {
				expand: false,
                files: {
                    '<%= distFolder %>styles.css': '<%= distFolder %>styles.css'
                }
			}
		},

        csslint: {
            strict: {
                options: {
                    "unique-headings": false,
                    "font-sizes": false,
                    "box-sizing": false,
                    "floats": false,
                    "duplicate-background-images": false,
                    "font-faces": false,
                    "star-property-hack": false,
                    "qualified-headings": false,
                    "ids": false,
                    "text-indent": false,
                    "box-model": false,
                    "adjoining-classes": false,
                    "compatible-vendor-prefixes": false
                },
                src: ['<%= distFolder %>*.css']
            }
        },

        watch: {

            compass: {
                // We watch and compile sass files as normal but don't live reload here
                files: ['<%= appFolder %>sass/**/*.scss'],
                tasks: [ 'compass:dev', 'csslint' ],
            },

            copy: {
                files: [ '<%= appFolder %>**/*', '!<%= appFolder %>**/*.scss'],
                tasks: [ 'copy' ]
            },

            livereload: {
                // These files are sent to the live reload server after sass compiles to them
                options: { livereload: true },
                files: ['<%= distFolder %>**/*'],
            },
        }

    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-rev');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-autoprefixer');

    // Default task(s).
    grunt.registerTask('cssstuff', ['clean:stylesheets', 'copy', 'compass:dev', 'autoprefixer', 'csslint', 'clean:postbuild']);
    grunt.registerTask('default', ['clean:build', 'copy', 'compass:dev', 'autoprefixer', 'csslint', 'watch']);
    grunt.registerTask('build', ['clean:build', 'copy', 'compass:dist', 'autoprefixer', 'csslint', 'clean:postbuild'])

};