{
    console.log('B',0B111110111);//二进制0B 零b
    console.log(0o767);//八进制 0o 零欧
}

{
    console.log('15',Number.isFinite(15));
    console.log('NaN',Number.isFinite(NaN));//false 不是数字
    console.log('1/0',Number.isFinite('true'/0));//false 也不是数字
    console.log('NaN',Number.isNaN(NaN));
    console.log('0',Number.isNaN(0));

}

{
    console.log('25',Number.isInteger(25));
    console.log('25.0',Number.isInteger(25.0));//true
    console.log('25.1',Number.isInteger(25.1));
    console.log('25.1',Number.isInteger('25'));//false
}

{
    console.log(Number.MAX_SAFE_INTEGER,Number.MIN_SAFE_INTEGER);
    console.log('10',Number.isSafeInteger(10));//判断这个数是不是在有效范围
    console.log('a',Number.isSafeInteger('a'));
}

{
    console.log(4.1,Math.trunc(4.1));//4
    console.log(4.9,Math.trunc(4.9));//4只取整数部分
}

{//判断是在正数 负数 还是0
    console.log('-5',Math.sign(-5));//-1
    console.log('0',Math.sign(0));//0
    console.log('5',Math.sign(5));//1
    console.log('50',Math.sign('50'));//1 会自己转换
    console.log('foo',Math.sign('foo'));//NaN
}


{//立方根
    console.log('-1',Math.cbrt(-1));//-1
    console.log('8',Math.cbrt(8));//2
}
