{
    let arr = Array.of(3,4,7,9,11);
    console.log('arr=',arr);//将数据变量转换为数组类型

    let empty=Array.of();
    console.log('empty',empty);//[]空数组
}

{
    let p=document.querySelectorAll('p');//类数组
    let pArr=Array.from(p);//转为真正的数组
    pArr.forEach(function(item){
        console.log(item.textContent);//获取文本节点
    });
//类似于map
    console.log(Array.from([1,3,5],function(item){return item*2}));//[2,6,10]
}

{
    console.log('fill-7',[1,'a',undefined].fill(7));//[7,7,7] 全部替换成7
    console.log('fill,pos',['a','b','c','d'].fill(7,1,3));//1,3表示起始和截止位置 ['a',7,7,'d']
}

{
    for(let index of ['1','c','ks'].keys()){
        console.log('keys',index);//0,1,2
    }
    for(let value of ['1','c','ks'].values()){
        console.log('values',value);
    } //没有babel-polyfill 是不兼容的
    for(let [index,value] of ['1','c','ks'].entries()){
        console.log('values',index,value);//0 '1' ,1 'c',2 ks
    }
}

{//不常用
    console.log([1,2,3,4,5].copyWithin(0,2,4));//第一个参数从哪里开始替换 第二个从哪个位置读数据  第三个是在哪截止读取
}//3,4,3,4,5，

{
    console.log([1,2,3,4,5,6].find(function(item){return item>3}));//4只返回找到的第一个值
    console.log([1,2,3,4,5,6].findIndex(function(item){return item>3}));//3 返回找到的第一个值的位置
}

{//和find差不多
    console.log('number',[1,2,NaN].includes(1));//true
    console.log('number',[1,2,NaN].includes(NaN));//true
}
