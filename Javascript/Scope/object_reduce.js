const users = [
  { name: "John", age: 25 },
  { name: "Maya", age: 30 },
];

console.log(users.reduce((temp, users) => temp + users.age, 0));

const active_users = [
  { name: "Johnny", age: 25, isActive: true, id: 1, role: "user" },
  { name: "Mayan", age: 30, isActive: true, id: 2, role: "admin" },
  { name: "James Mathew", age: 28, isActive: false, id: 3, role: "user" },
  { name: "Joan", age: 32, isActive: false, id: 4, role: "admin" },
  { name: "Trivedi", age: 35, isActive: true, id: 5, role: "user" },
];

console.log(
  active_users.reduce((count, active_users) => {
    if (active_users.isActive) count++;
    return count;
  }, 0)
);

console.log(
  active_users.reduce((longest_name, temp) => {
    if (longest_name.length <= temp.name.length) longest_name = temp.name;
    return longest_name;
  }, "")
);

console.log(
  active_users.reduce((a, b) => {
    a[b.id] = { ...b };
    return a;
  }, {})
);

console.log(
  active_users.reduce(
    (a, b) => {
      if (b.role == "admin") a.admin = a.admin + 1;
      else a.user = a.user + 1;
      return a;
    },
    { admin: 0, user: 0 }
  )
);

const students = [
  { name: "Aayush", score: 85 },
  { name: "Maya", score: 90 },
  { name: "Jay", score: 91 },
];

console.log(students.reduce((a, b) => (a = a + b.score), 0) / students.length);

console.log(
  students.reduce((a, b) => {
    if (a <= b.score) a = b.score;
    return a;
  }, 0)
);

console.log(active_users.reduce((a, b) => a + "," + b.name, "").slice(1));

const products = [
  { name: "pen", quantity: 2 },
  { name: "book", quantity: 3 },
];

console.log(products.reduce((a, b) => a + b.quantity, 0));
