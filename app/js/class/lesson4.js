{//安装babel-polyfill
    console.log('a',`\u0061`);//a的unicode 正常打印
    console.log('s',`\u20BB7`);//后面被当成两个字符 错误打印

    console.log('s',`\u{20BB7}`);//加{}可以当做一个字符
}

{
    let s='𠮷';
    console.log('length',s.length);//长度是2
    console.log('0',s.charAt(0));
    console.log('1',s.charAt(1));
    console.log('at0',s.charCodeAt(0));//取第一个字符的编码值
    console.log('at1',s.charCodeAt(1));//第二个  但是都会有乱码

    let s1='𠮷a';
    console.log('length',s1.length);//3
    console.log('code0',s1.codePointAt(0));//本身是取第一个字节 但是这个方法可以自己判断 所以取2个字节了
    console.log('code0',s1.codePointAt(0).toString(16));
    console.log('code1',s1.codePointAt(1));//只取第二个字节
    console.log('code2',s1.codePointAt(2));//a的code
}


{
    let str='\u{20bb7}abc';
    for(let i=0;i<str.length;i++){
        console.log('es5',str[i]);
    }
    for(let code of str){
        console.log('es6',code);
    }
}


{//常用
    let str="string";
    console.log('includes',str.includes("c"));//false
    console.log('start',str.startsWith('str'));//true
    console.log('end',str.endsWith('ng'));//true
}

//常用 重复的api
{
    let str="abc";
    console.log(str.repeat(2));//abcabc
}


{//字符串模板 ` `
    let name="list";
    let info="hello world";
    let m=`i am ${name},${info}`;
    console.log(m);
}

{//es7...
    console.log('1'.padStart(2,'0'));//01
    console.log('1'.padEnd(2,'0'));//10 第一个参数是长度
}

{//标签模板作用是防止xss攻击   处理多语言
    let user={
        name:'list',
        info:'hello world'
    };
    console.log(abc`i am ${user.name},${user.info}`);
    function abc(s,v1,v2){
        console.log(s,v1,v2);//Array [ "i am ", ",", "" ] list hello world
        return s+v1+v2//i am ,,,listhello world
    }
}

{//api string.raw 相当于在\前面加了个\转义 不常用
    console.log(String.raw`Hi\n${1+2}`);  //Hi\n3 换行符没有生效 被打印出来
    console.log(`Hi\n${1+2}`);//Hi   换一行  3
}
