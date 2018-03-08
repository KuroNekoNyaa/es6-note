import gulp from 'gulp';
import gulpif from 'gulp-if';
import gutil from 'gulp-util';
import args from './util/args';
//文件发生改变自动编译
//监听js文件 改变就调用scripts.js

gulp.task('browser',(cb)=>{
  if(!args.watch) return cb();
  gulp.watch('app/**/*.js',['scripts']);
  gulp.watch('app/**/*.ejs',['pages']);
  gulp.watch('app/**/*.css',['css']);
});
