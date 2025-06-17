# JavaScript Array Methods Practice – Objects & Mapping

Practice the following exercises involving `.map()`, `.sort()`, and `.reduce()` based on object arrays. These tasks help reinforce your understanding of working with data collections in JavaScript.

---

## 1. Map to Names

```js
let users = [
  { name: "John", age: 25 },
  { name: "Pete", age: 30 },
  { name: "Mary", age: 28 },
];
```

**Task:**

- Create a new array that contains only the names from the `users` array.
- Expected Output: `["John", "Pete", "Mary"]`

---

## 2. Map to Objects (fullName + id)

```js
let users = [
  { name: "John", surname: "Smith", id: 1 },
  { name: "Pete", surname: "Hunt", id: 2 },
  { name: "Mary", surname: "Key", id: 3 },
];
```

**Task:**

- Create a new array where each object contains `fullName` and `id`.
- Example Output:

```js
[
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 },
];
```

---

## 3. Sort Users by Age

```js
let users = [
  { name: "John", age: 20 },
  { name: "Pete", age: 18 },
  { name: "Mary", age: 19 },
];
```

**Task:**

- Sort the `users` array by the `age` property in ascending order.

---

## 4. Get Average Age

```js
let users = [
  { name: "John", age: 25 },
  { name: "Pete", age: 30 },
  { name: "Mary", age: 29 },
];
```

**Task:**

- Write a function `getAverageAge(users)` that returns the average age of users.

---

## 5. Create Keyed Object from Array

```js
let users = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];
```

**Task:**

- Write a function `groupById(arr)` that returns an object where each key is the `id` and the value is the whole object.
- Example Output:

```js
{
  john: { id: 'john', name: "John Smith", age: 20 },
  ann: { id: 'ann', name: "Ann Smith", age: 24 },
  pete: { id: 'pete', name: "Pete Peterson", age: 31 }
}
```

---

**Tip:** Use `.map()` for transformations, `.sort()` for ordering, and `.reduce()` for aggregation tasks like average or object conversion.

Once done, test your code using `console.log()` to verify your results!
