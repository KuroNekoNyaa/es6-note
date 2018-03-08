import yargs from 'yargs';
//production 默认false 也就是开发环境
//watch  要不要监听命令行
//verbose要不要输出命令行日志
//alias 方法，指定 name 是 n 的别名。  例如 .option("n",{alias: 'name'})
const args = yargs
    .option('production', {
        boolean: true,
        default : false,
        describe: 'min all scripts'
    })
    .option('watch', {
        boolean: true,
        default : false,
        describe: 'watch all files'
    })
    .option('verbose', {
        boolean: true,
        default : false,
        describe: 'log'
    })
    .option('sourcemap', {
        describe: 'force the creation of sourcemap'
    })
    .option('port', {
        String: true,
        default : 8080,
        describe: 'server port'
    })
    .argv;

export default args;
