// 함수의 파라미터에 타입을 정의
function sum(a: number, b: number) {
  return a + b;
}

sum(1, 2);

const multiply = (a: number, b: number) => {
  return a * b;
};

multiply(1, 2);

//함수의 반환값에 타입을 정의
function sum2(): number {
  return 10;
}

sum2();

//함수의 파라미터, 반환값 모두를 정의
function sum3(a: number, b: number): number {
  return a + b;
}

sum3(1, 2);

// 옵셔널 파라미터
function sum4(a: number, b: number, c?: number): number {
  return a + b + c;
}

sum4(1, 2);

const log = (a: string, b?: string) => {};

log('typescript');
log('typescript', 'easy');

//디폴트 파라미터
function buildName(firstName: string, lastName = 'Lee') {
  return firstName + ' ' + lastName;
}

buildName('Nicole');
buildName('Nicole', 'Kim');
