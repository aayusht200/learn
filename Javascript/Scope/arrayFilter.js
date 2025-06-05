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

function cleanArray(arr) {
  return arr.filter((value) => {
    return value != null || value != undefined;
  });
}

function genZFilter(arr) {
  return arr.filter((people) => {
    return people.birthYear > 2000;
  });
}

function primeNumber(arr) {
  return arr.filter((value) => {
    if (value < 2) return false;
    for (i = 2; i <= Math.sqrt(value); i++) {
      if (value % i == 0) {
        return false;
      }
    }
    return true;
  });
}

function taskFilter(arr) {
  return arr.filter((status) => {
    if (status.completed === false) return status;
  });
}
