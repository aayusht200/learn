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

