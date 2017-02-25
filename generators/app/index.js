"use strict"
const Generator = require('yeoman-generator')

module.exports = class GeneratorLibrary extends Generator {
	constructor(args, opts){
		super(args, opts)
	}

	prompting(){
		return this.prompt([{
			type: 'input',
			name: 'name',
			message: 'Your project name',
			default: this.appname
		}]).then(answers => {
			this.appname = answers.name
			this.log('app name ' + answers.name)
		})
	}

	writing(){
		this.fs.copyTpl(
			this.templatePath('_package.json'),
			this.destinationPath('package.json'),
			{
				appname: this.appname,
				name: this.user.git.name(),
				email: this.user.git.email()
			}
		)
		this.fs.copyTpl(
			this.templatePath('src/index.js'),
			this.destinationPath('src/' + this.appname + '.js'),
			{
				appname: this.appname
			}
		)
		this.fs.copyTpl(
			this.templatePath('webpack.config.js'),
			this.destinationPath('webpack.config.js'),
			{
				appname: this.appname
			}
		)

		this.fs.copy(
			this.templatePath('babelrc'),
			this.destinationPath('.babelrc')
		)
		this.fs.copy(
			this.templatePath('gitignore'),
			this.destinationPath('.gitignore')
		)
		this.fs.copy(
			this.templatePath('LICENSE'),
			this.destinationPath('LICENSE')
		)
		this.fs.copy(
			this.templatePath('README.md'),
			this.destinationPath('README.md')
		)
		this.fs.copy(
			this.templatePath('eslintrc'),
			this.destinationPath('.eslintrc')
		)
	}
}









