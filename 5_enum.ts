//숫자형
enum DirectionNum {
  Up = 1,
  Down,
  Left,
  Right,
}

const down = DirectionNum.Down; //2

enum UserResponseNum {
  No = 0,
  Yes = 1,
}

//문자열
enum DirectionStr {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}

enum UserResponseStr {
  No = 'N',
  Yes = 'Y',
}

function getUserResponse(response: UserResponseStr) {
  if (response === UserResponseStr.Yes) {
    console.log('동의합니다');
  }

  if (response === UserResponseStr.No) {
    console.log('동의하지 않습니다');
  }
}

getUserResponse(UserResponseStr.No);
