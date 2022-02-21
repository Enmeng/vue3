//类不存在变量提升
function Point(x, y) {
    //this指代当前函数
    console.log('target', new.target);
    this.x = x;
    this.y = y;
}


Point.prototype.toString = function() {
    return '(' + this.x + ', ' + this.y + ')';
};

//函数作为构造函数时需要使用new
// let p = new Point(2, 3);

Point(6, 7);

// console.log(p.toString(), '--', Point.prototype.constructor === Point);

class Point1 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }
}

// 新建一个实例必须使用new
let p1 = new Point1(5, 6);

console.log('__proto__', Point1.prototype.constructor === Point1);
console.log('__proto__1', Point1.prototype === p1.__proto__);

console.log('p1', p1.toString(), '--', Object.getPrototypeOf(p1) === Point1.prototype);



// class NoConstructor {

//     //默认构造函数相当于构造函数就是
//     constructor() {
//         return Object.create(null);
//     }

//     //下划线作为私有方法
//     _bar() {
//         console.log("_bar");
//     }

//     consoleBar() {
//         this._bar();
//     }

// }

// let noConstructor = new NoConstructor();

// console.log(NoConstructor.prototype.constructor === noConstructor.__proto__);

//new.target

// class Shape {
//     constructor(length, width) {
//         if(new.target === Shape) {
//             throw new Error('本类不能实例化，只能被继承')
//         } 
//         this.length = length;
//         this.width = width;
//     }
// }

// class Rectangle extends Shape {
//     constructor(length, width) {
//         super(length, width);
//     }
// }

// let x = new Shape(); //报错
// let y = new Rectangle(4, 5);

// console.log(x);
// console.log(y.width);


let o = new Object(null);
console.log('Object.prototype', Object.prototype.toString);
console.log('o.prototype', o.__proto__);

function Person(){ 
} 
var friend = new Person(); 

//friend.__proto__先指向了Person.prototype所在的内存空间A

//重写： Person.prototype指向了内存空间B
 
Person.prototype = { 
 constructor: Person, 
 name : "Nicholas", 
 age : 29, 
 job : "Software Engineer", 
 sayName : function () { 
 alert(this.name); 
 } 
}; 
friend.sayName();

