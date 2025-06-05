# Assignment 2: Advanced `.filter()` Practice

## 1. Filter Negative Numbers
Given an array of numbers, return only the negative ones.

```js
[-5, 3, -1, 7, -10, 0]
```

---

## 2. Filter Words That Start with a Vowel
Given an array of words, return only the ones that begin with a vowel (a, e, i, o, u).

```js
['apple', 'banana', 'umbrella', 'ice', 'cat']
```

---

## 3. Filter Out Duplicates
Given an array, return a new array with only the first occurrence of each value.

```js
[1, 2, 2, 3, 4, 4, 5]
```

*Hint: You may need `indexOf` or `Set` logic with `.filter()`*

---

## 4. Filter Valid Emails
Given an array of strings, return only the ones that include `'@'` and `'.'`.

```js
['test@example.com', 'invalid.com', 'hello@domain', 'user@mail.org']
```

---

## 5. Filter Out Empty Strings
Given an array of strings, remove all empty strings (`""`) and whitespace-only strings.

```js
['hello', '', '  ', 'world']
```

---

## 6. Filter Numbers Within a Range
Given an array of numbers and a min/max value, return numbers between the two.

```js
range: 10 to 30  
array: [5, 10, 15, 30, 35]
```

---

## 7. Filter Objects with a Specific Role
Given an array of users, return only users with `role === 'admin'`.

```js
[
  { name: 'Alice', role: 'admin' },
  { name: 'Bob', role: 'user' }
]
```

---

## 8. Filter Palindromes
Return only words that are the same forwards and backwards.

```js
['madam', 'racecar', 'apple', 'level']
```

---

## 9. Filter Products In Stock
Given a list of products, return only those with `inStock: true`.

```js
[
  { name: 'Pen', inStock: true },
  { name: 'Notebook', inStock: false }
]
```

---

## 10. Filter Numbers with Even Index
Given an array of numbers, return the ones at even indexes only.

```js
[10, 20, 30, 40, 50] // → 10, 30, 50
```
