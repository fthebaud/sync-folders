module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sync');

  grunt.initConfig({
    files: {
      //root commun à l'origine et la destination
      root: 'D:/workspaces/eclipse4.6-neon/15.x/contextePartage/',
      //source
      origin: 'specificSillage/PS/',
      pattern: '**/*',
      //destination
      destination: 'target/m2e-wtp/web-resources/PS/'
    },
    watch: {
      files: '<%= files.root %>' + '<%= files.origin %>' + '<%= files.pattern %>',
      tasks: ['sync']
    },
    sync: {
      main: {
        files: [{
          cwd: '<%= files.root %>' + '<%= files.origin %>',
          src: '<%= files.pattern %>',
          dest: '<%= files.root %>' + '<%= files.destination %>'
        }],
        // pretend: true,
        verbose: true
      }
    }
  });

  grunt.registerTask('default', ['watch']);

};
