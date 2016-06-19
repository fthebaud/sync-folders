module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sync');

  grunt.initConfig({
    files: {
      origin: 'test/**/*',
      destination: 'dest/'
    },
    watch: {
      files: '<%= files.origin %>',
      tasks: ['copy']
    },
    // copy: {
    //   expand: true,
    //   // src: '<%= files.origin %>',
    //   // dest: '<%= files.destination %>'
    // }
  });

  grunt.registerTask('default', ['watch']);

  // grunt.event.on('watch', function(action, filepath, target) {
  //   grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
  // var cfgkey = ['copy', 'devTmpl', 'files'];
  // grunt.config.set(cfgkey, grunt.config.get(cfgkey).map(function(file) {
  //   file.src = filepath;
  //   return file;
  // }));
  // });

};
