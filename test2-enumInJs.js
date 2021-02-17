console.log('***** fich TEST2 js *****');
/** ENUM */
//in TS: enum Enum2 { A,} => in JS:
var Enum2;
(function (Enum2) {
    Enum2[Enum2.A = 0] = "A";
})(Enum2 || (Enum2 = {}));
//
console.log('test2.js=> Enum2 =', Enum2);
let a2 = Enum2.A;
console.log('Enum2.A =', a2);
let nameOfA2 = Enum2[a2]; // "A"
console.log('Enum2[Enum2.A] =', nameOfA);
// Affectation dynamique de prop a un objet:
// var Obj2:{0:string,"A":number};
// var Obj2 = {0:"A","A":0}; <=>
var Obj2 = {};
Obj2[0] = "A";
Obj2.A = 0;
console.log('Obj2 =', Obj2); //Obj2 = {0: "A", A: 0}
console.log('Obj2[0] =', Obj2[0], '; Obj2.A =', Obj2.A);
const stylo = {};
stylo.matiere = "metal"; stylo[0] = "prop0";
console.log("stylo=", stylo);
/** CASTING */
var t2_a1 = '12';
var t2_n1 = 1;
console.log('t2_n1 + t2_a1 =', t2_n1 + t2_a1);
console.log('t2_n1 + +t2_a1 =', t2_n1 + +t2_a1);
console.log('t2_n1 + Number(t2_a1) =', t2_n1 + Number(t2_a1));

console.log('t2_n1 + 7) =', t2_n1 + 7);
console.log('String(t2_n1) + 7) =', String(t2_n1) + 7);
console.log('t2_n1.toString() + 7) =', t2_n1.toString() + 7);
/** */

