let foo: unknown;

foo = true; // boolean
foo = 1; // number
foo = 'string'; // string
foo = {}; // object

// 모든 타입은 unknown에 할당될 수 있다.
let unknownValue: unknown;
let neverValue: never;
let anyValue: any;

unknownValue = 1;
unknownValue = '1';
unknownValue = {};
unknownValue = neverValue;
unknownValue = anyValue;

// unknown 타입으로 선언된 변수는 any, 그리고 unknown을 제외한 다른 타입으로 선언된 변수에 할당될 수 없다.
let bar: unknown;

let anyType: any = bar;
let unknownType: unknown = bar;
let booleanType: boolean = bar; //Type 'unknown' is not assignable to type 'boolean'
let numberType: number = bar; // Type 'unknown' is not assignable to type 'number'
let stringType: string = bar; // Type 'unknown' is not assignable to type 'string'
let objectType: object = bar; // Type 'unknown' is not assignable to type 'object'

// 유니온 타입에서 unknown은 any를 제외한 모든 타입을 흡수한다.
type T1 = unknown | null; // unknown
type T2 = unknown | number; // unknown
type T3 = unknown | never; // unknown
type T4 = unknown | unknown; // unknown
type T5<T> = T | unknown; // unknown
type T6 = unknown | any; // any
