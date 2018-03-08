
{//set是一种集合 可以当做数组用  但是元素不能重复
    let list = new Set();
    list.add(5);
    list.add(7);//set添加元素用add方法

    console.log('size',list.size);//set中有多少元素  相当于数组的 length 2
}

{
    let arr = [1,2,3,4,5];
    let list = new Set(arr);//set的另一种定义方式

    console.log('size',list.size);//5
}

{//使用场景为去重
    let list = new Set();
    list.add(1);
    list.add(2);
    list.add(1);

    console.log('list',list);//【1,2】

    let arr=[1,2,3,1,'2'];
    let list2=new Set(arr);

    console.log('unique',list2);//【1,2,3，’2‘】
}

{
    let arr=['add','delete','clear','has'];
    let list=new Set(arr);
    console.log('has', list.has('add'));//set类型有没有add这个元素  true
    console.log('delete', list.delete('add'),list);//删除add
    list.clear();
    console.log('list', list);//清空

}

{
    let arr=['add','delete','clear','has'];
    let list=new Set(arr);


    for(let key of list.keys()){
        console.log('keys',key);//打印的value值
    }
    for(let value of list.values()){
        console.log('value',value);
    }
    for(let [key,value] of list.entries()){
        console.log('entries',key,value);
    }

    list.forEach(function(item){console.log(item);})
}


{//和set很像 区别 1.和set支持的数据类型不一样 weakset的元素只能是对象 2.不会检测对象在其他地方使用过吗 只是地址的引用 也不检测地址是不是被垃圾回收机制回收了
//3.没有size属性没有clear不能遍历
    let weakList=new WeakSet();

    let arg={};

    weakList.add(arg);

    // weakList.add(2);

    console.log('weakList',weakList);
}
//map和对象的区别 就是key可以是任何类型 对象的key只能是字符串
{//map的第一种定义方式
    let map = new Map();
    let arr=['123'];

    map.set(arr,456);//map添加元素用的set

    console.log('map',map,map.get(arr));//{['1,2,3'] -> 456}  ,456
}

{//第二种定义方式
    let map = new Map([['a',123],['b',456]]);
    console.log('map args',map);//{'a'  -> 123 'b'->456}
    console.log('size',map.size);//2
    console.log('delete',map.delete('a'),map);
    console.log('clear',map.clear(),map);
}

{//key必须是对象
    let weakmap=new WeakMap();

    let o={};
    weakmap.set(o,123);
    console.log(weakmap.get(o));//123
}

{
    //数据结构横向对比 增查改删
    let map  = new Map();
    let array = [];

    //增
    map.set('t',1);
    array.push({t:1});
    console.info('map-array', map, array);
//查  不同的是map查找返回布尔值  array把查找到的元素返回
    let map_exist = map.has('t');//true
    let array_exist = array.find(item=>item.t);//{t:1}
    console.info('map-array', map_exist, array_exist);

    //改
    map.set('t',2);
    array.forEach(item => item.t? item.t = 2 : '')
    console.info('map-array-modify', map, array);
//删除 数组中要splice前提是知道索引位置
    map.delete('t');
    let  index  = array.findIndex(item => item.t);
    array.splice(index, 1);
    console.info('map-array-delete', map, array);

}


//set和数组对比

{
    let set = new Set();
    let array = [];

    //增
    set.add({t: 1});
    array.push({t: 1});
    console.info('set-array', set, array);

    //查
    let set_exist = set.has({t: 1});//false ！！！不是true  没有保存
    let array_exist = array.find(item => item.t);//{t:1}
    console.info('set-array', set_exist, array_exist);

    //改
    set.forEach(item => item.t ? item.t =2 : '');
    array.forEach(item => item.t? item.t = 2 : '');
    console.info('set-array-modify', set, array);

    //删
    set.forEach(item=>item.t?set.delete(item):'');
    let  index  = array.findIndex(item => item.t);
    array.splice(index, 1);
    console.info('set-array-delete', set, array);
}

//map set object对比
{
    let item = {t:1};
    let map = new Map();
    let set = new Set();
    let obj = {};

    //增
    map.set('t',1);
    set.add(item);
    obj['t'] = 1;
    console.info('map-set-obj',obj,map,set);
    //查
    console.info({
        map_exist : map.has('t'),
        set_exist : set.has(item),
        obj_exist :'t' in obj
    })//true  true true

    //改
    map.set('t',2);
    item.t = 2//set的修改
    obj['t'] = 2;
    console.info('map-set-obj-modify',obj,map,set);
    //删
    map.delete('t');
    set.delete(item);//之前是没有保存 所以用的foreach删除
    delete obj['t'];
    console.info('map-set-obj-delete',obj,map,set);

}
//使用场景 涉及数据结构能用map就不用数组  如果要求唯一性 再用set 放弃obj
