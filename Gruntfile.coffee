module.exports = (grunt) ->

	grunt.initConfig

		pkg: grunt.file.readJSON 'package.json'

		sass:
			styles:
				options:
					bundleExec: false
					style: 'expanded'
					loadPath: '/usr/bin/sass'
					sourcemap: 'none'

				files:
					'styles/dropdown.css': 'styles/dropdown.scss'

		coffee:
			compile:
				options:
					bare: true
				files:
					'lib/dropdown.js': 'src/dropdown.coffee'

		watch:
			styles:
				files: ['styles/*.scss']
				task: ['sass']
			scripts:
				files: ['src/*.coffee']
				task: ['coffee']

		umd: 
			all: 
				src: 'lib/dropdown.js'
				template: 'umd.hbs'
				objectToExport: 'dropdown'
				amdModuleId: 'simple-dropdown'
				globalAlias: 'dropdown'
				deps: 
					'default': ['$', 'SimpleModule', 'simpleUtil']
					amd: ['jquery', 'simple-module', 'simple-util']
					cjs: ['jquery', 'simple-module', 'simple-util']
					global:
						items: ['jQuery', 'SimpleModule', 'simple.util']
						prefix: ''

	grunt.loadNpmTasks 'grunt-contrib-sass'
	grunt.loadNpmTasks 'grunt-contrib-coffee'
	grunt.loadNpmTasks 'grunt-contrib-watch'
	grunt.loadNpmTasks 'grunt-umd'

	grunt.registerTask 'default', ['sass', 'coffee', 'umd', 'watch']