#!/usr/bin/env node

const clone = require("git-clone");
const program = require("commander");
const shell = require("shelljs");
const chalk = require("chalk");

program.version("1.0.0").description("PajiCli模板工程的cli");
program.command("* <tpl> <project>").action(function(tpl,project) {
  console.info(chalk.blueBright("欢迎使用Paji-Cli"));
  if (tpl==='create'&&project) {
    let pwd = shell.pwd();
    console.info(chalk.blueBright(`正在从github下载Vue模版`));
    console.info(chalk.blueBright(`下载位置：${pwd}/${project}/ ...`))
    clone(`https://github.com/kaisa911/vue-template.git`, pwd + `/${project}`, null, function() {
      shell.rm("-rf", pwd + `/${project}/.git`);
      console.info(chalk.blueBright("下载成功"));
    });
  } else {
    console.info(chalk.redBright("请使用正确的命令 PajiCli create myApp"));
  }
});
program.parse(process.argv);
