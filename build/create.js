const colors = require('colors');
const gulp = require('gulp');
const replace = require('gulp-replace');
const path = require('path');
const fs = require('fs');

const basePath = path.resolve(process.cwd(), './src/pages');;

const TARGET = JSON.parse(process.env.npm_config_argv);
if (!(TARGET.remain && TARGET.remain.length > 0)) {
  console.log('请输入页面名称'.red);
  return 
}
const pageName = TARGET.remain[0];

const pagePath = path.join(basePath, pageName);
if (!fs.existsSync(pagePath)) {
  fs.mkdirSync(pagePath, 0o777);
} else {
  console.log('存在相同名称的页面'.red);
  return
}

console.log(__dirname);
gulp.src(__dirname + '/template/*')
    .pipe(replace('__pageName__', pageName))
    .pipe(gulp.dest(`./src/pages/${pageName}`))
    .resume();
