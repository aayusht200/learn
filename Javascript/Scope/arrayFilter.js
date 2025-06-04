function greaterThan(arr) {
  return arr.filter((num) => {
    return num > 50;
  });
}

function evenFilter(arr) {
  return arr.filter((num) => {
    return num % 2 == 0;
  });
}

function wordLen(arr) {
  return arr.filter((word) => {
    return word.length > 4;
  });
}

function activeUsers(arr) {
  return arr.filter((user) => {
    return user.active == true;
  });
}

function passedStudents(arr) {
  return arr.filter((pass) => {
    return pass.score >= 60;
  });
}

function inWord(arr, letter) {
  return arr.filter((word) => {
    return word.includes(letter);
  });
}
