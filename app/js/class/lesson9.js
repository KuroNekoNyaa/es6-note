
{//symbol数据类型 独一无二
    // 声明
    let a1=Symbol();
    let a2=Symbol();
    console.log(a1===a2);//false
    let a3=Symbol.for('a3');//a3是个key值 如果之前存在a3就调用 不存在就生成   返回值不是布尔值！！！
    let a4=Symbol.for('a3');
    console.log(a3===a4);//false
}

{
    let a1=Symbol.for('abc');
    let obj={
        [a1]:'123',//如果不是symbol定义的 那么这里key是abc symbol（abc）
        'abc':345,
        'c':456
    };
    console.log('obj',obj);

    for(let [key,value] of Object.entries(obj)){
        console.log('let of',key,value);//let of 方法取不到symbol值
    }

    Object.getOwnPropertySymbols(obj).forEach(function(item){
        console.log(obj[item]);//这个只能取到symbol 123
    })

    Reflect.ownKeys(obj).forEach(function(item){//symbol和非symbol都能取到
        console.log('ownkeys',item,obj[item]);
    })
}
