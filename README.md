express -e . 使用ejs模板 .代表在当前文件夹使用 在server目录下<br>

然后再npm install<br>

touch .babelrc  这个文件不能换别的名字<br>

touch gulpfile.babel.js  一般只用gulpfile 因为要用es6语法所以加上babel<br>

$ npm install yargs --save处理命令行参数 之前都是手动执行的<br>


装好需要的包 写好任务后<br>
使用gulp命令 没报错就证明任务跑起来了<br>

然后gulp --watch<br>

express默认在 http://localhost:3000端口创建服务<br>

在server中的```app.js中加app.use(require('connect-livereload')())//自动刷新！！！！！！```<br>
再安装一下这个包<br>
再gulp --watch<br>

修改index.ejs的内容就会自动刷新了<br>


在class下建立lesson.js  在index.js引入 import  然后gulp --watch就可以使用啦<br>


在app.js中加上需要接受热更新的东西app.use(require('connect-livereload')());<br>
$ npm install connect-livereload --save-dev<br>
