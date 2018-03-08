{//默认值后面不能有没有默认值的变量了
    function test(x, y = 'world'){
        console.log('默认值',x,y);
    }
    test('hello');//hello world
    test('hello','kill');//hello kill
}

{
    let x='test';
    function test2(x,y = x){
        console.log('作用域',x,y);
    }
    test2('kill');//kill kill
}

{//rest参数 后面不能有别的参数了
    function test3(...arg){
        for(let v of arg){
            console.log('rest',v);//把参数转换为数组 和arguments类似
        }
    }
    test3(1,2,3,4,'a');
}

{//和rest相反的方法
    console.log(...[1,2,4]);//1,2,4 把数组拆成三个离散的值
    console.log('a',...[1,2,4]);//a 1 ，2,3,4
}

{
    let arrow = v => v*2;//arrow函数名  前面v是参数  后面v*2是返回值
    let arrow2 = () => 5;//如果没有参数用 （）表示
    console.log('arrow',arrow(3));//6
    console.log(arrow2());//5

}

{//尾调用 提升性能用的
    function tail(x){
        console.log('tail',x);
    }
    function fx(x){
        return tail(x)//函数的最后一句话是不是一个函数 这里的tail是个函数
    }
    fx(123)
}
