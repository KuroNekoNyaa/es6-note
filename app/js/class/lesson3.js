{//es5两种参数写法
    let regex = new RegExp('xyz', 'i');
    let regx2 = new RegExp(/xyz/i);
    console.log(regex.test('xyz1234')),regx2.test('xyz131')//true
    //es6写法
    let regex3  = new RegExp(/xyz/ig, 'i'); //第二个修饰符会覆盖第一个  也就是i覆盖ig
    console.log(regex3.flags);//i
}

//y修饰符  都是全局匹配  g是从上次找到的位置开始 y匹配是从第一个匹配到的字符后面的字符开始匹配   通俗讲就是g可以是同一个字符的中间开始匹配 而y是下一个字符开始匹配
{
    let s = 'bbb_bb_B';
    let a1 = /b+/g;
    let a2 = /b+/y;
    console.log('one',a1.exec(s), a2.exec(s));  //one [bbb] [bbb]
    console.log('two',a1.exec(s), a2.exec(s));//two  [bb]  null
    console.log(a1.sticky, a2.sticky)//是否开启y修饰符  false true
}
//u修饰符 unicode  1.大于两个字节的字符 要加u 例如下面那个字
{
    console.log('u-1',/^\uD83D/.test('\uD83D\uDC2A'))//u-1 true 不加u当成了2个字符
    console.log('u-2',/^\uD83D/u.test('\uD83D\uDC2A'))//u-2 false  加了u当成了一个字符

    console.log(/\u{61}/.test('a')); // false a的unicode是61  不加u不能被识别的
    console.log(/\u{61}/u.test('a')); // true

    console.log(/\u{20BB7}/u.test('𠮷')); // true
    // 2.点（.）字符不能识别码点大于0xFFFF的Unicode字符，必须加上u修饰符。
    let s = '𠮷';
    console.log('大于0xFFFF的Unicode字符',/^.$/.test(s)); // false
    console.log('使用u字符',/^.$/u.test(s)); // true
}