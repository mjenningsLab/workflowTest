module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      dist: {
        src: [
            'oo_engine.min.js', // All JS in the libs folder
            'oo_style.js',
            'oo_conf.js'  // This specific file
        ],
        dest: 'production.js'
      }
    },
    connect: {
      server: {
        options: {
          port: 3000,
          keepalive: true
        }
      }
    }
  });
   grunt.loadNpmTasks('grunt-contrib-concat');
   grunt.loadNpmTasks('grunt-contrib-connect');
   grunt.registerTask('default', ['concat', 'connect']);
}; 
