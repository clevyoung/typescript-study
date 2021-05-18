class Person {
  //접근 제어자 - 접근 가능한 범위를 설정하고, 각 속성에 데이터 타입을 지정
  public name: string;
  public age: number;
  public passOrNot: boolean;
  private address: string;

  readonly log: string;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  //접근 제어 메서드
  public printAge(): string {
    return `${this.age}입니다.`;
  }

  private setAgeAppropriate(age: number): void {
    this.passOrNot = age > 30 ? true : false;
  }

  public getPassOrNot(): string {
    this.setAgeAppropriate(this.age);
    return this.getPassOrNot ? '합격입니다' : '불합격입니다';
  }
}

const teacher = new Person('Nicole', 25);
