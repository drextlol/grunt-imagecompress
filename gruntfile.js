"use strict";

module.exports = function( grunt ) {

	grunt.initConfig({

		smushit: {
			mygroup: {
			  src: ['img-original/*.jpg'],
			  dest: 'img-compress'
			}
		}

		tinypng: {
		    options: {
		        apiKey: "0QM2K8f5F3oq7Dqn0WbLjiriQZUywjQd",
		        checkSigs: true,
		        sigFile: 'dest/file_sigs.json',
		        summarize: true,
		        showProgress: true,
		        stopOnImageError: true
		    },
		    compress: {
		        expand: true, 
		        src: 'img-original/*.png', 
		        dest: 'img-compress/'
		        //ext: '.min.png'
		    }
		}
	});

	// carregando plugins
	grunt.loadNpmTasks('grunt-smushit');
	grunt.loadNpmTasks('grunt-tinypng');

	// registrando tarefas
	// Comando para execução GRUNT IMAGE
	grunt.registerTask( 'png', 'tinypng');
	grunt.registerTask( 'jpg', 'smushit');

};