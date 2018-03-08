import gulp from 'gulp';
import del from 'del';
import args from './util/args';
//清空指定文件 不然每次编译都产生一个文件
gulp.task('clean',()=>{
  return del(['server/public','server/views'])
})
