module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'../css/main.css' : '../css/sass/main.scss'
				}
			}
		},
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			}
		}
		cssmin:  {
			// combine: {
			//     files: {
			//     	'...css': ['path/to/input_one.css', 'path/to/input_two.css']
			// 	}
			// }

			minify: {
				'../css/main.css' : ['../css/main.css']
			}


		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.registerTask('default',['sass']);
}