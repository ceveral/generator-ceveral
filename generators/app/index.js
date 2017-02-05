'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('lodash');
var Path = require('path');

module.exports = Generator.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the breathtaking ' + chalk.red('generator-ceveral') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'name',
      message: 'Enter name',
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    let packageName = `ceveral-transformer-${this.props.name}`;
    let out = Path.join(process.cwd(), packageName);
    let className = _.upperFirst(_.camelCase(this.props.name));
    this.destinationRoot(out)
    this.fs.copyTpl(
      this.templatePath('visitor.ts'),
      this.destinationPath('src/visitor.ts'), {
        className: className
      }
    );

    this.fs.copyTpl(
      this.templatePath('index.ts'),
      this.destinationPath('src/index.ts'), {
        className: className,
        name: this.props.name
      }
    );

    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'), {
        className: className,
        name: packageName
      }
    );

    this.fs.write(this.destinationPath('index.js'),`
    module.exports = require('./lib/index');
    `)
  },

  install: function () {
    this.installDependencies();
  }
});
