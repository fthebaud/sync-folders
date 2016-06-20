module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sync');

  grunt.initConfig({
    files: {
      root: 'D:/workspace/project01/',
      origin: 'src/**/*',
      destination: 'target/'
    },
    watch: {
      files: '<%= files.root %>' + '<%= files.origin %>',
      tasks: ['sync']
    },
    sync: {
      main: {
        files: [{
          cwd: '<%= files.root %>',
          src: '<%= files.origin %>',
          dest: 'target/m2e-wtp/web-resources/PS/',
        }],
        //pretend: true,
        verbose: true
      }
    }
  });

  grunt.registerTask('default', ['watch']);

};
