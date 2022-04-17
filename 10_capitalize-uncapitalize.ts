type Role3 = 'admin' | 'user' | 'guest';
// Bad practice 💩
// type CapitalizeRole = 'Admin' | 'User' | 'Guest';

// Good practice ✅
type CapitalizeRole = Capitalize<Role3>; // "Admin" | "User" | "Guest"

type Role4 = 'Admin' | 'User' | 'Guest';
// Bad practice 💩
// type UncapitalizeRole = "admin" | "user" | "guest";

// Good practice ✅
type UncapitalizeRole = Uncapitalize<Role4>; // "admin" | "user" | "guest"
