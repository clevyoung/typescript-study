interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

// 상품 목록을 받아오기 위한 API 함수
function fetchProduct(): Promise<Product[]> {}

// Pick - 특정 타입에서 몇 개의 속성을 선택하여 타입을 정의할 수 있다.
type ShoppingItem = Pick<Product, 'id' | 'name' | 'price'>;

function displayProductDetail(shoppingItem: ShoppingItem) {}

// Omit - 특정 타입에서 지정된 속성만 제거한 타입을 정의할 수 있다.

interface AddressBook {
  name: string;
  phone: number;
  address: string;
  company: string;
}

const phoneBook: Omit<AddressBook, 'address'> = {
  name: '재택근무',
  phone: 123343,
  company: '내 방',
};

const chingtao: Omit<AddressBook, 'address' | 'company'> = {
  name: '중국집',
  phone: 1224343,
};
