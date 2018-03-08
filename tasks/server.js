import gulp from 'gulp';
import gulpif from 'gulp-if';
import liveserver from 'gulp-live-server';//启动服务器
import args from './util/args';
//如果不处于监听就返回回调
//如果处于监听 创建服务器 启动了www不用深究
//服务器启动
//js和模板文件发送改变的时候实现刷新 css这里就没有了 因为重点在js
//notify把改动通知服务器
//需要重启服务的文件（服务器发生了改变
gulp.task('server',(cb)=>{
    if(!args.watch) return cb();

    var server = liveserver.new(['--harmony','server/bin/www']);
    server.start();

    gulp.watch(['server/public/**/*.js','server/views/**/*.ejs'],function(file){
        server.notify.apply(server,[file]);
    })

    gulp.watch(['server/routes/**/*.js','server/app.js'],function(){
        server.start.bind(server)()
    });
})
