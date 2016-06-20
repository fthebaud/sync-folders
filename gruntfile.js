module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sync');

  grunt.initConfig({
    files: {
      origin: 'D:/workspaces/eclipse4.5-mars/maint-15.3.x/contextePartage/specificSillage/PS/',
      pattern: '**/*',
      destination: 'D:/workspaces/eclipse4.5-mars/maint-15.3.x/contextePartage/target/m2e-wtp/web-resources/PS/'
    },
    watch: {
      files: '<%= files.origin %>' + '<%= files.pattern %>',
      tasks: ['sync']
    },
    sync: {
      main: {
        files: [{
          cwd: '<%= files.origin %>',
          src: '<%= files.pattern %>',
          dest: '<%= files.destination %>'
        }],
        // pretend: true,
        verbose: true
      }
    }
  });

  grunt.registerTask('default', ['watch']);

};
