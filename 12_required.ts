interface Product {
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
type RequiredProduct = Required<Product>;
