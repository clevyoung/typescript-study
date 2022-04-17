interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

/**
 * Pick - 특정 타입에서 몇 개의 속성을 선택하여 타입을 정의할 수 있다.
 */
type ShoppingItem = Pick<Product, 'id' | 'name' | 'price'>;

/**
 * Omit - 특정 타입에서 지정된 속성만 제거한 타입을 정의할 수 있다.
 */
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

/**
 * partial - 타입을 만족하는 일부만을 선택적으로 포함할 수 있다.
 */
//
type UpdateProduct = Partial<Product>;

// Partial을 이용한다면 아래와 같이 정의할 필요가 없다.
// interface UpdateProduct {
//     id?: number;
//     name?: string;
//     price?: number;
//     brand?: string;
//     stock?: number;
// }

// 유틸리티 타입 구현하기 - Partial
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

/**
 * Uppercase
 */

type Role = 'admin' | 'user' | 'guest';

// Bad practice 💩
// type UppercaseRole = 'ADMIN' | 'USER' | 'GUEST';

// Good practice ✅
type UppercaseRole = Uppercase<Role>; // "ADMIN" | "USER" | "GUEST"

type Role2 = 'ADMIN' | 'USER' | 'GUEST';

/**
 * Lowercase
 */

// Bad practice 💩
// type LowercaseRole = 'admin' | 'user' | 'guest';

// Good practice ✅
type LowercaseRole = Lowercase<Role2>; // "admin" | "user" | "guest"

/**
 * Capitalize
 */

type Role3 = 'admin' | 'user' | 'guest';
// Bad practice 💩
// type CapitalizeRole = 'Admin' | 'User' | 'Guest';

// Good practice ✅
type CapitalizeRole = Capitalize<Role3>; // "Admin" | "User" | "Guest"

/**
 * Uncapitalize
 */
type Role4 = 'Admin' | 'User' | 'Guest';
// Bad practice 💩
// type UncapitalizeRole = "admin" | "user" | "guest";

// Good practice ✅
type UncapitalizeRole = Uncapitalize<Role4>; // "admin" | "user" | "guest"

/**
 * Required
 */
interface Product2 {
  name?: string;
  price?: number;
  tag?: string;
}
// Bad practice 💩
// interface RequiredProduct {
//   name: string;
//   price: number;
//   tag: string;
// }
// Good practice ✅
type RequiredProduct = Required<Product2>;
