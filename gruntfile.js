module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');

    var taskConfig = {
        pkg : grunt.file.readJSON('package.json'),

        watch: {
            jssrc: {
                files: ['app_grunt/**/ *.js'],
                tasks: ['test']
            }
        }

    };

    grunt.initConfig(taskConfig);

    grunt.registerTask('default', []);

    grunt.registerTask('test' , function () {
        grunt.log.writeln('Change is good.');
    });

};