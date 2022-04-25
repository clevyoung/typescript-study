// ✨ These do not specify a return type of `never`.
// Type () => never
const getNever1 = function () {
  throw new Error();
};

// Type () => never
const getNever2 = () => {
  while (true) {}
};

// ❗ Type () => void
function getNever3() {
  while (true) {}
}

getNever1();

getNever2();

getNever3();
