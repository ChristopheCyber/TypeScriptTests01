class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet(): string {
        return this.greeting;
    }
}
let greeter = new Greeter("Hello, world!");
console.log(greeter.greet());
var var1: string = 'my string 1';
var var2: number = 2;
const fct1 = (a: number, b: number) => {
    console.log('fct1 => ', a, ' + ', b, ' = ', a + b);
    const c = a + b;
    return c;
    // throw new Error('It\'s ok ;)');
}
fct1(2, 3);
/** OBJECT */
let obj0: {};
obj0 = { name: 'moi', age: 48 };
console.log('obj0 =', obj0);

let obj1: { name: string, age: number };
obj1 = { name: 'moi', age: 48 };
console.log('obj1 =', obj1);

let obj2: { [key1: string]: number, age: number };
obj2 = { ['a']: 1, ['b']: .5, age: 48 };
console.log('obj2 =', obj2);
/** ARRAY */
let arr3: number[];
arr3 = [1, 2, 3];
for (const index3 of arr3) {
    console.log('index1 =', index3);
}
let arr4 = [1, 22, 3];
// let arr4 : Array<number> = [1,22,3];
console.log('arr4 =', arr4);
for (var index4 of arr4) {
    console.log('arr4=>index4 =', index4);
}

let arr5: any[] = [1, '21', true];
// let arr4 : Array<number> = [1,22,3];
console.log('arr5 =', arr5);
/** TUPLE */
let tuple6: [string, number, boolean] = ['a1', 22, false];
// let tuple6 : [string,number,number] = ['a1',22,3];
tuple6.push(true);
console.log('tuple6 =', tuple6);
let n1: number = 0;
for (const elt6 of tuple6) {
    console.log('tuple6=>tuple6[', n1, '] =', tuple6[n1]);
    console.log('tuple6=>elt6 =', elt6);
    n1++;
}

let tuple7: [string, boolean, boolean] = ['a1', false, false];
tuple7.push(true);
console.log('tuple7 =', tuple7);
/** ENUM */
enum Enum1 {
    A, B
}
console.log('test1.js=> Enum1 =', Enum1);
let a = Enum1.A;
console.log('Enum1.A =', a);
let nameOfA = Enum1[a]; // "A"
console.log('Enum1[Enum1.A] =', nameOfA);
// Affectation dynamique de prop a un objet:
// var obj3:{0:string,"A":number};
// var obj3 = {0:"A","A":0};
var obj3: { 0: string, "A": number } = { 0: "B", "A": 1 };
obj3[0] = "A";
obj3.A = 0;
console.log('obj3 =', obj3); //obj3 = {0: "A", A: 0}
console.log('obj3[0] =', obj3[0], '; obj3.A =', obj3.A);
// ENUM cree un REVERSE MAPPING:
console.log('Enum1[\"A\"] =', Enum1["A"]);
console.log('Enum1[0] =', Enum1[0]);
//
/** UNION */
function fct2(an1: string | number, n2: number) {
    if (typeof (an1) === 'number') {
        console.log('fct2 nbrs => ', an1, ' + ', n2, ' = ', an1 + n2)
    } else {
        console.log('fct2 txts => ', an1, ' + ', n2, ' = ', an1 + n2)
    }
}
fct2(1, 2);
fct2('1', 2);
/** :'LITERALS' (+ UNION) */
function fct3(an1: string | number, controlRes: 'asTxt' | 'asNbr') {
    if (controlRes === 'asTxt') {
        console.log('fct3 txt => ', an1, ' + ', 1, ' = ', (an1).toString() + 1)
    } else {
        console.log('fct3 nbr => ', an1, ' + ', 1, ' = ', Number(an1) + 1)
    }
}
fct3(1, 'asNbr');
fct3(1, 'asTxt');
/** function ():RETURN TYPE {  } */
const fct4Add = (a1: string, a2: string): number => {
    return (+a1 + +a2);
}
console.log('fct4Add => ', fct4Add('1', '10'));
//
function fct5NoReturn(): void {
    console.log('fct5=>no return here')
}
console.log(fct5NoReturn());
function fct6ReturnNothing(): void {
    console.log('fct6=>return nothing here');
    return;
}
console.log(fct6ReturnNothing());
/**FUNCTION as TYPE */
let fctType1: (n: number, m: number) => number;
let fctAdd1 = (n1: number, n2: number) => {
    return (n1 + n2);
}
fctType1 = fctAdd1;
console.log('fctType1(10,20)', fctType1(10, 20));
/** CALLBACK FCT TYPEs */
function fct7(n: number, CallBack1: (e: number) => void) {
    let res1 = n + 1;
    CallBack1(res1);
    return res1;
}
fct7(20, (e) => console.log('res fct Call Back de fct7=', e));
//
function sendRequest(data1: string, cb: (response: any) => void) {
    // ... sending a request with "data"
    console.log('data entered=', data1);
    return cb({ data2: 'Hi there :) !' });
}

sendRequest('Send this!', (response) => {
    console.log(response);
    return true;
});
/**UNKWON type */
let var3: unknown;
let var4;
var4 = var3;
// CLASS inheritance , use of SUPER()
console.log('*************** CLASS ; SUPER() ***************');
class Car {
    name: string;
    engineCapacity: string;
    price: number = 110;
    constructor(name: string, engineCapacity: string) {
        console.log(`Class Car constructor called with name= ${name} and engineCapacity= ${engineCapacity}`);
        this.name = name;
        this.engineCapacity = engineCapacity;
    }
    describeCar() {
        console.log(`${this.name} car comes with ${this.engineCapacity} displacement`);
    }
}
const res1 = new Car('a','b');
console.log('res1= ',res1,'res1.price= ',res1.price);
new Car("maruti ciaz", "1500cc").describeCar();
//
class HondaCar extends Car{
    seatingCapacity:number;
    constructor(name:string,engineCapacity:string,seatingCapacity:number){
        super(name,engineCapacity);
        this.seatingCapacity=seatingCapacity;
    }
    describeHondaCar(){
        super.describeCar();
        console.log(`this cars comes with ${this.seatingCapacity} seating capacity`);
    }
}
new HondaCar("honda jazz","1200cc",4).describeHondaCar();

