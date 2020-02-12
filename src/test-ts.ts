//"noTmplicitAny": false,

// 类型注解
let var1:string
var1='yeee'

// 类型推论
let var2=true;
// var2=1

// 原始类型：string\number\boolean\undefined\null\symbol
// 联合类型
let var3:string|undefined;

// 类型数组
let arr:string[];
arr=['tom','boo']
// arr=['tom',1]

// 任意类型
let varAny:any;
varAny='bar';
varAny=33

// any用于数组
let arrAny:any[];
arrAny=[1,true,'foo'];
arrAny[1]=2000

// 函数类型约束
function greet(person:string): string{
    return 'hello '+ person;
}
const msg=greet('tom');

// void 类型   没有返回值
function warn():void{

}

// 对象 object，不是原始类型的就是对象类型
function fn1(o:object){}
fn1({prop:0})

// 正确的姿势
function fn2(o:{prop:number}){
    o.prop
}
fn2({prop:0})
// fn2({prop:'tom'}) //no ok

// 类型别名 type 自定义类型
type Prop={prop:number}
function fn3(o:Prop){} // 等同于fn2
// type 和 interface 的区别，基本一致

// interface Prop2{
//     prop: number
// }


// 类型断言
const someValue: any = 'this is a string';
const strLen = (someValue as string).length

// 联合类型
let union: string | number;
union='1';
union=1

// 交叉类型
type First = {first:number}
type Second = {second:number}
// 扩展新的type
type FirstAndSecond = First & Second;
function fn4(): FirstAndSecond{
    return {first:1,second:2}
}

// 函数
// 1.设置了就是必填参数
// 2.默认值msg='abc'
// 3.可选参数？
function greeting(person: string, msg1 = "abc",msg2?:string): string{
    return ''
}
greeting('tom')


// 函数重载：场景主要源码和框架，函数用参数个数、类型或者返回值类型区分同名函数
// 先声明，再实现
// 同名声明有多个
function watch(cb1:()=> void): void
function watch(cb1:()=> void,cb2:(v1:any,v2:any)=> void): void
// 实现
function watch(cb1:()=>void, cb2?:(v1:any,v2:any)=> void){
    if(cb1 && cb2){
        console.log('执行重载2')
    }else{
        console.log("执行重载1")
    }
}

// watch()


// 类


// 接口


// 泛型
// 不用泛型
// interface Result {
//     ok: 0|1;
//     data: string[];
// }
// 使用泛型
interface Result<T> {
    ok: 0|1;
    data: T;
}

// 泛型方法
function getResult<T>(data:T): Result<T> {
    return {ok:1, data}
}
// 用尖括号方式指定T为string
getResult<string>('hello')
// 用类型推断指定T为number
getResult(1)


// 声明

