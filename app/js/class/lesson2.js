{
    let a
        , b
        , rest;
    [a, b] = [1, 2];
    console.log(a, b)//1 ,2
}

{//数组
    let a
        , b
        , rest;
    [a,b,...rest] = [1,2,3,4,5,6]
    console.log(a, b,rest)//1,2,[3,4,5,6]
}

{//对象解构赋值
    let a
        , b
        , rest;
    ({a,b} = {a:1,b:2});
    console.log(a,b)//1,2
}

{
    let a
        , b
        , rest
        ,c;
    [a, b, c=3] = [1, 2];
    console.log(a, b, c)//1 ,2 ,3 删掉c=3 那么最后一个是undefined
}

{//使用场景1 实现变量的交换
    let a = 1
        , b = 2;
    [a,b] = [b,a];
    console.log(a, b)//2,1

}

{//2.使用场景
    function f() {
        return [1,2]
    }
    let a,b;
    [a,b] = f();
    console.log(a,b)//1,2
}


{//3.取出值赋给
    function f() {
        return [1,2,3,4,5];
    }

    let a,b,c;
    [a,,,b] = f()
    console.log(a,b);//1,4
}

{//适用于不知道函数返回的有多少个数值   使用场景
    function f() {
        return [1,2,3,4,5];
    }

    let a,b,c;
    [a,...b] = f()
    console.log(a,b);//1,[2,3,4,5]
}

{//对象解构赋值
    let o={p:42,q:true};
    let {p,q}=o;
    console.log(p,q);
}

{
    let {a=10,b=5} = {a:3};
    console.log(a,b);//3,5
}


//对象解构赋值使用场景取到下面两个title
{
    let metaData = {
        title:'abc',
        test:[{
            title:'test',
            desc:'description'
        }]
    };
    let {title:esTitle,test:[{title:cnTitle}]} = metaData;
    console.log(esTitle,cnTitle);//abc  test
}