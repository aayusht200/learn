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
    { name: `Alice`, age: 22 },
    { name: `Bob`, age: 17 },
    { name: `Charlie`, age: 30 },
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
  grades.set(`Alice`, 85);
  grades.set(`Bob`, 92);
  grades.set(`Charlie`, 78);
  console.log(grades.get(`Bob`));
  for (let [key, value] of grades) {
    console.log(key + ` : ` + value);
  }
}

function temperatures() {
  const temperature = new Map();
  temperature.set(`New York`, 22);
  temperature.set(`Delhi`, 40);
  temperature.set(`Tokyo`, 28);
  temperature.set(`London`, 18);
  console.log(temperature.get(`Tokyo`));
  for (let [key, value] of temperature)
    if (value >= 30) console.log(`Its hot in ${key} with ${value}.`);
    else console.log(`The temperature in ${key} is ${value}.`);
}

function callingCodes() {
  const callingCodesMap = new Map();
  callingCodesMap.set(`USA`, 1);
  callingCodesMap.set(`India`, 91);
  callingCodesMap.set(`UK`, 44);
  callingCodesMap.set(`Japan`, 81);
  callingCodesMap.set(`Germany`, 49);
  console.log(`India: ` + callingCodesMap.get("India"));
  console.log(`UK: ` + callingCodesMap.get("UK"));
  for (const [Key, value] of callingCodesMap) {
    console.log(`The code for ${Key} is +${value}.`);
  }
}

function manageCallingCodes(action, country, code) {
  const callingCodes = new Map([
    ["USA", "+1"],
    ["India", "+91"],
    ["UK", "+44"],
  ]);
  if (action.toLowerCase() == "search") {
    if (callingCodes.has(country)) {
      console.log(callingCodes.get(country));
    } else {
      console.log("Not Found!");
    }
  }
  if (action.toLowerCase() == "add")
    if (!callingCodes.has(country)) callingCodes.set(country, code);
    else console.log(callingCodes);

  if (action.toLowerCase() == "delete") {
    if (callingCodes.has(country)) {
      callingCodes.delete(country);
    } else {
      console.log("Not Found!");
    }
  }
}
