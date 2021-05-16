//숫자
type MyNum = number;
let bigNumber: MyNum = 100000;

// 문자열
type MyChars = string;
let message: MyChars;

// 유니온 타입
type Alphanumeric = string | number;
let input: Alphanumeric;

//  객체 리터럴로
type User = {
  id: number;
  name: string;
  password: string;
};

const person: User = {
  id: 1,
  name: 'Tu',
  password: '214',
};

//배열
type Names = string[];

//함수
type Log = (message: string) => void;

//튜플
type Point = [number, number];
