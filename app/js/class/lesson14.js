{
    let arr=['hello','world'];
    let map=arr[Symbol.iterator]();//symbol.iterator 是数组内部实现好了的接口 直接调用
    console.log(map.next());//hello  done：false
    console.log(map.next());//world  done：false
    console.log(map.next());//undefined done：true
}

{
    let obj={//对象中没有iterator接口所以自定义部署
        start:[1,3,2],
        end:[7,9,8],
        [Symbol.iterator](){//自定义的方法
            let self=this;
            let index=0;
            let arr=self.start.concat(self.end);
            let len=arr.length;
            return {
                next(){
                    if(index<len){
                        return {
                            value:arr[index++],
                            done:false
                        }
                    }else{
                        return {
                            value:arr[index++],
                            done:true
                        }
                    }
                }
            }
        }
    }
    for(let key of obj){
        console.log(key);
    }
}

{//对数组遍历
    let arr=['hello','world'];
    for(let value of arr){
        console.log('value',value);
    }
}
