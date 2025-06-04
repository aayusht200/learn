function firstUpper(sample) {
  return sample[0].toUpperCase();
}

function camelize(sample) {
  let temp = sample.split("-");
  for (let i = 1; i < temp.length; i++) {
    temp[i] = firstUpper(temp[i]) + temp[i].slice(1);
  }
  console.log(temp.join(""));
}

function filterRange(arr, a, b) {
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= a && arr[i] <= b) temp.push(arr[i]);
  }
  return `Elements that fall in range of ${a} and ${b} are: ${temp}`;
}

function filterRangeInPlace(arr, a, b) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
    }
  }
  return arr;
}
function reverseSort(arr) {
  return arr.sort((a, b) => b - a);
}
function stringSortCopy(arr) {
  let newString = [...arr];
  return newString.sort();
}

function Calculator() {
  this.read = function () {
    numOne = parseInt(prompt("Enter a first number"));
    numTwo = parseInt(prompt("Enter a second number"));
    return [numOne, numTwo];
  };
  this.sum = function () {
    let temp = this.read();
    console.log("Sum is equal to: " + (temp[0] + temp[1]));
  };
  this.mul = function () {
    let temp = this.read();
    console.log("Sum is equal to: " + temp[0] * temp[1]);
  };
}

let cal = new Calculator();

function retriveNames(users) {
  let temp = users.map((user) => user.name);
  console.log(temp);
}

function retriveFullNames(users) {
  let user = function (user) {
    return { id: user.id, fullname: user.name + " " + user.surname };
  };
  let newUser = users.map(user);
  console.log(newUser);
}

function sortByAge(users) {
  let arr = users.sort((a, b) => a.age - b.age);
  console.log(arr);
}

function shuffle(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    let j = Math.floor(Math.random() * i + 1);
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}

function getAverageAge(users) {
  let sum = 0;
  //   let temp = users.map((user) => user.age);
  for (let i = 0; i < users.length; i++) sum = sum + users[i].age;
  return sum / users.length;
}

function unique(arr) {
  let temp = new Set(arr);
  return [...temp];
}

function keyedObject(arr) {
  let keyedMap = new Map();
  let temp = function (user) {
    keyedMap.set(user.id, user);
  };
  arr.map(temp);
  console.log(keyedMap);
}
