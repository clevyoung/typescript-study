interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

// 1. 상품 목록을 받아오기 위한 API 함수
function fetchProduct(): Promise<Product[]> {}

// Pick - 특정 타입에서 몇 개의 속성을 선택하여 타입을 정의할 수 있다.
type ShoppingItem = Pick<Product, 'id' | 'name' | 'price'>;

// 2. 특정 상품의 상세 정보를 나타내기 위한 함수
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

// partial - 타입을 만족하는 일부만을 선택적으로 포함할 수 있다.
type UpdateProduct = Partial<Product>;

// Partial을 이용한다면 아래와 같이 정의할 필요가 없다.
// interface UpdateProduct {
//     id?: number;
//     name?: string;
//     price?: number;
//     brand?: string;
//     stock?: number;
// }

// 3. 특정 상품 정보를 업데이트 하는 함수
function updateProductItem(productItem: Partial<Product>) {}

// 4. 유틸리티 타입 구현하기 - Partial
interface UserProfile {
  username: string;
  email: string;
  profilePhotoUrl: string;
}

// interface UserProfileUpdate {
//   username?: string;
//   email?: string;
//   profilePhotoUrl?: string;
// }

// #1
// type UserProfileUpdate = {
//   username?: UserProfile['username'];
//   email?: UserProfile['email'];
//   profilePhotoUrl?: UserProfile['profilePhotoUrl'];
// };

// #2
// type UserProfileUpdate = {
//   [p in 'username' | 'email' | 'profilePhotoUrl']?: UserProfile[p];
// };

// #3
type UserProfileUpdate = {
  [p in keyof UserProfile]?: UserProfile[p];
};

// #4 - Partial의 구현 모습
type Subset<T> = {
  [p in keyof T]?: T[p];
};
