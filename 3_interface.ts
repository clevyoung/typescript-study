interface Book {
  id: number;
  title: string;
  author: string;
  published: Date;
}

//변수에 인터페이스 활용
let book: Book = {
  id: 1,
  title: 'happiness',
  author: 'gom',
  published: new Date(),
};

//함수에 인터페이스 활용
function getBook(book: Book): Book {
  return book;
}

function getBooks(books: Book[]): Book[] {
  return books;
}

getBook({ id: 2, title: 'dream', author: 'Ru', published: new Date() });
getBooks([
  {
    id: 1,
    title: 'happiness',
    author: 'gom',
    published: new Date(),
  },
  { id: 2, title: 'dream come true', author: 'Ru', published: new Date() },
]);

// 인덱싱 방식을 정의하는 인터페이스
interface StringArray {
  [index: number]: string;
}

const arr: StringArray = ['a', 'b', 'c'];

// 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp;
}

let obj: StringRegexDictionary = {
  // sth: /abc/
  cssFile: /\.css#/,
  jsFile: /\.js$/,
};

//인터페이스 확장
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  language: string;
}

const someone: Developer = {
  name: 'Bob',
  age: 12,
  language: 'Java',
};
