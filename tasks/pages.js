//编译模板文件
import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';
//**/*代表app下面所有的ejs文件而不是仅限于下一级里的ejs

gulp.task('pages',()=>{
    return gulp.src('app/**/*.ejs')
        .pipe(gulp.dest('server'))
        .pipe(gulpif(args.watch,livereload()))
})
