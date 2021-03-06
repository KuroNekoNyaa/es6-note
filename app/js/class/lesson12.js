
{
    // 基本定义和生成实例
    class Parent{//es5中的写法 function(){ this.xxx = xxx}
        constructor(name='mukewang'){
            this.name=name;
        }
    }
    let v_parent=new Parent('v');
    console.log('构造函数和实例',v_parent);//v
}

{
    // 继承
    class Parent{
        constructor(name='mukewang'){
            this.name=name;
        }
    }

    class Child extends Parent{

    }

    console.log('继承',new Child());//mukewang
}

{
    // 继承传递参数
    class Parent{
        constructor(name='mukewang'){
            this.name=name;
        }
    }

    class Child extends Parent{
        constructor(name='child'){
            super(name);//子类修改父类的name
            this.type='child';//子类如果要添加自己的属性 一定要放在super之后
        }
    }

    console.log('继承传递参数',new Child('hello'));
}

{
    // getter,setter
    class Parent{
        constructor(name='mukewang'){
            this.name=name;
        }

        get longName(){//这是属性  不是方法函数！！！！
            return 'mk'+this.name
        }

        set longName(value){
            this.name=value;
        }
    }

    let v=new Parent();
    console.log('getter',v.longName);//mkmukewang
    v.longName='hello';
    console.log('setter',v.longName);//mkhello
}

{
    // 静态方法
    class Parent{
        constructor(name='mukewang'){
            this.name=name;
        }

        static tell(){
            console.log('tell');
        }
    }

    Parent.tell();//tell

}

{
    // 静态属性
    class Parent{
        constructor(name='mukewang'){
            this.name=name;
        }

        static tell(){
            console.log('tell');
        }
    }

    Parent.type='test';

    console.log('静态属性',Parent.type);


}
