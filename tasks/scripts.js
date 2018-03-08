import gulp from 'gulp';
import gulpif from 'gulp-if';//条件判断
import concat from 'gulp-concat';//文件拼接
import webpack from 'webpack';
import gulpWebpack from 'webpack-stream';
import named from 'vinyl-named';//文件重命名
import livereload from 'gulp-livereload';//文件更新后 自动刷新
import plumber from 'gulp-plumber'//处理文件信息流 管道拼接
import rename from 'gulp-rename'//重命名
import uglify  from 'gulp-uglify' //文件压缩
import {log,colors} from 'gulp-util'//在命令行输出
import args from './util/args'//命令行管理
//gulp.src打开文件
//处理常规错误逻辑 出现错误要抛出异常 plumber改变了默认抛出异常的方法 不用深究
//文件重新命名
//通过loader编译 然后错误处理
//编译完gulp.dest放在相应的目录
//重新备份一下编译好的文件 rename
//压缩uglify
//存储在相应位置
//监听文件 文件更新后自动刷新 热更新
gulp.task('scripts',()=>{
    return gulp.src(['app/js/index.js'])
        .pipe(plumber({
            errorHandle:function(){

            }
        }))
        .pipe(named())
        .pipe(gulpWebpack({
            module:{
                loaders:[{
                    test:/\.js$/,
                    loader:'babel-loader'
                }]
            }
        }),null,(err,stats)=>{
            log(`Finished '${colors.cyan('scripts')}'`,stats.toString({
                chunks:false
            }))
        })
        .pipe(gulp.dest('server/public/js'))
        .pipe(rename({
            basename:'cp',
            extname:'.min.js'
        }))
        .pipe(uglify({compress:{properties:false},output:{'quote_keys':true}}))
        .pipe(gulp.dest('server/public/js'))
        .pipe(gulpif(args.watch,livereload()))
})