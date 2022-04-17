interface User {
  name: string;
  age: number;
  password: string;
}
// Bad practice 💩
// interface PartialUser {
//   name?: string;
//   age?: number;
//   password?: string;
// }

// Good practice ✅
type PartialUser = Partial<User>;
