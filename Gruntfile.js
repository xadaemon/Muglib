module.exports = function (grunt) {
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      concat: {
        options: {
          stripBanners: true,
          separator: '',
          banner: '/*\nCopyright 2014 MugFoudation\nLicensed under the Apache License, Version 2.0 (the "License");\nyou may not use this file except in compliance with the License.\nYou may obtain a copy of the License at\nhttp://www.apache.org/licenses/LICENSE-2.0\n<%= pkg.title %>Version <%= pkg.version %> build at lab on day <%= grunt.template.today("mm-dd-yyyy") %>\n*/\n'
        },
        dist: {
          src: ['src/core/core.js', 'src/**/*.js'],
          dest: 'dist/<%= pkg.name %>.js'
        }
      },
      uglify: {
        options: {
          banner: '/*\nCopyright 2014 MugFoudation\nLicensed under the Apache License, Version 2.0 (the "License");\nyou may not use this file except in compliance with the License.\nYou may obtain a copy of the License at\nhttp://www.apache.org/licenses/LICENSE-2.0\n<%= pkg.title %>Version <%= pkg.version %> build at lab on day <%= grunt.template.today("mm-dd-yyyy") %>\n*/\n'
        },
        dist: {
            files: {
              'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
            }
          }
      },
      jshint: {
        files: ['src/**/*.js', 'dest/*.js']
      }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['concat', 'uglify']);
    grunt.registerTask('linted-build', ['jshint','concat', 'uglify']);
};