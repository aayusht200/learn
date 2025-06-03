function numberTripled(num) {
  return num * 3;
}
function sumOfTripledEvensMaps(arr) {
  const mapEg = arr.filter((num) => num % 2 == 0).map(numberTripled);
  return mapEg;
}

function transformNames(names) {
  const uppcaseNames = names
    .filter((name) => name.length > 4)
    .map((name) => name.toUpperCase());
  return uppcaseNames;
}

function filterAdults() {
  const users = [
    { name: "Alice", age: 22 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 30 },
  ];

  const adults = users.filter((user) => user.age >= 18);
  console.log(adults);
}

function wordCount(arr) {
  const arrMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (arrMap.has(arr[i])) {
      let temp = arrMap.get(arr[i]);
      arrMap.set(arr[i], (temp = temp + 1));
    } else arrMap.set(arr[i], 1);
  }
  //   const temp = arrMap.entries();
  //   for (let i = 0; i < arrMap.size; i++) {
  //     console.log(temp.next().value);
  //   }
  console.log(arrMap);
}

function mapPractice() {
  let grades = new Map();
  grades.set("Alice", 85);
  grades.set("Bob", 92);
  grades.set("Charlie", 78);
  console.log(grades);
}
