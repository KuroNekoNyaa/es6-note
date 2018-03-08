{
    // 简洁表示法
    let o=1;
    let k=2;
    let es5={
        o:o,
        k:k
    };
    let es6={
        o,
        k
    };
    console.log(es5,es6);

    let es5_method={
        hello:function(){
            console.log('hello');
        }
    };
    let es6_method={
        hello(){
            console.log('hello');
        }
    };
    console.log(es5_method.hello(),es6_method.hello());
}

{
    // 属性表达式
    let a='b';
    let es5_obj={
        a:'c',
        b:'c'
    };

    let es6_obj={
        [a]:'c'//相当于b:'c'  因为这里的a='b' 也就是es6中对象的key值可以是个表达式
    }

    console.log(es5_obj,es6_obj);

}

{
    // 新增API
    console.log('字符串',Object.is('abc','abc'),'abc'==='abc');//和 ===功能一样  true  true
    console.log('数组',Object.is([],[]),[]===[]);//false false

    console.log('拷贝',Object.assign({a:'a'},{b:'b'}));//{a:'a', b:'b'} 浅拷贝 改引用地址  不会拷贝继承的属性 只拷贝自身的

    let test={k:123,o:456};
    for(let [key,value] of Object.entries(test)){
        console.log([key,value]);
    }
}

{//用不到 支持不够好
    // 扩展运算符
    // let {a,b,...c}={a:'test',b:'kill',c:'ddd',d:'ccc'};
    // c={
    //   c:'ddd',
    //   d:'ccc'
    // }
}
