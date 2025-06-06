function negtiveNumbers(arr) {
  return arr.filter((num) => num > 0);
}

function isVowel(letter) {
  if (
    letter == "a" ||
    letter == "e" ||
    letter == "i" ||
    letter == "o" ||
    letter == "u"
  )
    return true;
  else return false;
}

function vowel(arr) {
  return arr.filter((word) => isVowel(word[0].toLowerCase()));
}

function uniqueElements(arr) {
  return new Set(
    arr.filter((value, index) => {
      return arr.indexOf(value) == index;
    })
  );
  // return arr.filter((value) => {
  //   return arr.indexOf(value);
  // });
}

function validEmail(arr) {
  return arr.filter((val) => {
    return val.includes("@") && val.includes(".");
  });
}

function notNull(arr) {
  return arr.filter(Boolean);
}

function arrRange(arr, a, b) {
  return arr.filter((value) => {
    return value >= a && value <= b;
  });
}

function adminVerify(arr) {
  return arr.filter((value) => value.role == "admin");
}
function stringReverse(name) {
  return name.toString().split("").reverse().join("");
}

function palindrome(arr) {
  return arr.filter(
    (val) => val.toString().split("").reverse().join("") === val.toString()
  );
}

function inStock(arr) {
  return arr.filter((val) => val.inStock);
}

function evenIndex(arr) {
  return arr.filter((val, index) => index % 2 == 0);
}
