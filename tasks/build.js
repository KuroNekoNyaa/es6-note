import gulp from 'gulp';
import gulpSequence from 'gulp-sequence';
//指定任务执行的顺序/
// /clean在最前 server一定要最后

gulp.task('build',gulpSequence('clean','css','pages','scripts',['browser','server']));
