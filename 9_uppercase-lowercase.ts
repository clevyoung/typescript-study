type Role = 'admin' | 'user' | 'guest';

// Bad practice 💩
// type UppercaseRole = 'ADMIN' | 'USER' | 'GUEST';

// Good practice ✅
type UppercaseRole = Uppercase<Role>; // "ADMIN" | "USER" | "GUEST"

type Role2 = 'ADMIN' | 'USER' | 'GUEST';

// Bad practice 💩
// type LowercaseRole = 'admin' | 'user' | 'guest';

// Good practice ✅
type LowercaseRole = Lowercase<Role2>; // "admin" | "user" | "guest"
