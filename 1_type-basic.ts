// 불리언
let bool: boolean = true;

// 문자열
let str: string = '문자열';

// 숫자
let num: number = 10;

// undefined
let notYetDefined: undefined = undefined;

// null
let nullValue: null = null;

// enum
enum fruit {
  apple = 'Apple',
  orange = 'Orange',
  banana = 'Banana',
}

let apple = fruit.apple;

// function
const double = (x: number): number => x * 2;

function reverseString(string: string): string {
  return string.split('').reverse().join('');
}

//object
let obj: { name: string; age: number; address: string } = {
  name: 'Ella',
  age: 20,
  address: 'Seoul',
};

//array
let numArr: Array<number> = [1, 2, 3, 4];
let numArr2: number[] = [1, 2, 3, 4];

let strArr: Array<string> = ['a', 'b', 'c'];
let strArr2: string[] = ['a', 'b', 'c'];

let boolArr: Array<boolean> = [false, true, false];
let boolArr2: boolean[] = [false, true, false];
