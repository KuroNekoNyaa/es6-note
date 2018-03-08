{//异步编程的解决方式  早期用的回调 后来是promise
    // genertaor基本定义
    let tell=function* (){
        yield 'a';
        yield 'b';
        return 'c'
    };

    let k=tell();//遇到yield停下来 使用next就执行一个yield

    console.log(k.next());//a  done:false
    console.log(k.next());//b done:false
    console.log(k.next());//c   done:false
    console.log(k.next());//undefined  done:true
}

{
    let obj={};
    obj[Symbol.iterator]=function* (){
        yield 1;
        yield 2;
        yield 3;
    }

    for(let value of obj){
        console.log('value',value);
    }
}

{
    let state=function* (){//状态机 a-》b》-》c-》a一直跑下去
        while(1){
            yield 'A';
            yield 'B';
            yield 'C';
        }
    }
    let status=state();
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
}

// {//只是generator的语法糖 需要插件
//   let state=async function (){
//     while(1){
//       await 'A';
//       await 'B';
//       await 'C';
//     }
//   }
//   let status=state();
//   console.log(status.next());
//   console.log(status.next());
//   console.log(status.next());
//   console.log(status.next());
//   console.log(status.next());
// }

{
    let draw = function (count) {
        //具体抽奖逻辑
        console.info(`剩余${count}次`);
    }

    let residue =  function * (count) {
        while (count > 0){
            count --;
            yield draw(count);
        }
    }

    let star = residue(5);
    let btn = document.createElement('button');
    btn.id = 'start';
    btn.textContent = '抽奖';
    document.body.appendChild(btn);
    document.getElementById('start').addEventListener('click', function () {
        star.next();
    },false)
}


{//长轮询   和服务端接口连接查询一次   实时取得服务端的信息 websocket兼容不好 所以采用长轮询
    let ajax = function *() {
        yield new Promise(function (resolve, reject) {
            setTimeout(function () {//这里是模拟ajax 真实场景这里要改一下后端接口
                resolve({code:0})//这里相当于模拟的服务端返回的数据 如果改成code：1 会不断显示wait
            }, 200)
        })
    }
    let pull = function () {
        let generator = ajax();
        let step = generator.next();
        step.value.then(function (d) {
            if (d.code != 0){//查询的不是最新数据
                setTimeout(function () {
                    console.log('wait');
                    pull()
                },1000)
            }else {
                console.log(d)
            }
        })
    }
    pull()
}