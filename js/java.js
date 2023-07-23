// ex 1.1 

function yesOrNo(boolValue) {
  if (boolValue === true) {
    return "Yes"; 
  } else {
    return "No"; 
  }
}

// ex 2.1

function sumOfLowestNumbers(numbers) {
  numbers.sort((a, b) => a - b);
  const sum = numbers[0] + numbers[1];
  return sum;
}

// ex 2.2 
 
function binaryArrayToNumber(arr) {
  const binaryString = arr.join('');
  const integerValue = parseInt(binaryString, 2);
  return integerValue;
}

// ex 2.3

function findNextSquare(sq) {
  const sqrt = Math.sqrt(sq);
  if (Number.isInteger(sqrt)) {
    return Math.pow(sqrt + 1, 2);
  } else {
    return -1;
  }
}

// ex 2.4

function findUniq(arr) {
  arr.sort((a, b) => a - b);

  if (arr[0] !== arr[1]) {
    return arr[0]; 
  } else {
    return arr[arr.length - 1]; 
  }
}

// ex 2.5

function summation(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
      sum += i;
    }
    return sum;
  }

  
  // ex 2.6

  function centuryFromYear(year) {
    const century = Math.ceil(year / 100);
    return century;
  }

  
  // ex 2.7 

  function basicOp(operation, value1, value2) {
    switch (operation) {
      case '+':
        return value1 + value2;
      case '-':
        return value1 - value2;
      case '*':
        return value1 * value2;
      case '/':
        return value1 / value2;
      default:
        throw new Error('Invalid operation');
    }
  }

  // ex 3.1 

  function nb_year(p0, percent, aug, p) {
    let years = 0;
    while (p0 < p) {
      p0 = p0 + (p0 * (percent / 100)) + aug;
      years++;
    }
    return years;
  }

  // ex 3.2

  function peopleOnBus(busStops) {
    let passengers = 0;
  
    for (const [getIn, getOff] of busStops) {
      passengers += getIn - getOff;
    }
  
    return passengers;
  }
  

  // ex 4.1

  function fibonacciIterative(n) {
    let prev = 0;
    let current = 1;
  
    for (let i = 2; i <= n; i++) {
      const next = prev + current;
      prev = current;
      current = next;
    }
  
    return current;
  }

  
  // ex 4.2 

  function tribonacci(signature, n) {
    if (n === 0) {
      return [];
    }
  
    const tribonacciSequence = signature.slice();
    for (let i = 3; i < n; i++) {
      const nextTribonacci = tribonacciSequence[i - 1] + tribonacciSequence[i - 2] + tribonacciSequence[i - 3];
      tribonacciSequence.push(nextTribonacci);
    }
  
    return tribonacciSequence.slice(0, n);
  }
  
  // ex 5.1  

  function trimString(str) {
    return str.substring(1, str.length - 1);
  }

  
  // ex 5.2 

  function repeatStr(count, str) {
    return str.repeat(count);
  }

  
  // ex 5.3  

  const toCamelCase = (str) => {
    let newString = "";
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "_" || str[i] === "-") {
        i++;
        newString += str[i].toUpperCase();
      } else {
        newString += str[i];
      }
    }
  
    return newString;
  };

  // ex 5.4

  const toWeirdCase = (str) => {
    const words = str.split(" ");
    const weirdWords = words.map((word) => {
      return word
        .split("")
        .map((char, index) => (index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()))
        .join("");
    });
  
    return weirdWords.join(" ");
  };
  
  console.log(toWeirdCase("String"));
  
  console.log(toWeirdCase("Weird string case"));

  // ex 5.5

  const abbreviateName = (fullName) => {
    const [firstName, lastName] = fullName.split(" ");
    return `${firstName[0].toUpperCase()}.${lastName[0].toUpperCase()}`;
  };
  
  console.log(abbreviateName("Sam Harris"));
  
  console.log(abbreviateName("Patrick Feeney"));

  
  // ex 5.6

  const maskify = (str) => {
    if (str.length <= 4) {
      return str;
    }
  
    const lastFourCharacters = str.slice(-4);
    const maskedCharacters = "#".repeat(str.length - 4);
  
    return maskedCharacters + lastFourCharacters;
  };
  
  console.log(maskify("4556364607935616"));
  
  console.log(maskify("64607935616"));
  
  console.log(maskify("1"));
  
  console.log(maskify(""));
  
  console.log(maskify("Skippy"));
  
  console.log(maskify("Nananananananananananananananana Batman!"));

  
  // ex 5.7


  const shortestWordLength = (str) => {
    const words = str.split(" ");
    const lengths = words.map((word) => word.length);
  
    return Math.min(...lengths);
  };
  
  
  console.log(shortestWordLength("Hello from the other side"));
  
  console.log(shortestWordLength("hi giraffa and pill"));

  // ex 5.8  


  const longestWords = (str) => {
    const words = str.split(" ");
    const maxLength = Math.max(...words.map((word) => word.length));
    const longestWordsArray = words.filter((word) => word.length === maxLength);
  
    return longestWordsArray;
  };
  
  
  console.log(longestWords("Hello globe"));
  
  console.log(longestWords("another test"));
  

  // ex 6.1 

  const accum = (str) => {
    const letters = str.split('');
    let result = [];
  
    for (let i = 0; i < letters.length; i++) {
      const letter = letters[i].toUpperCase() + letters[i].toLowerCase().repeat(i);
      result.push(letter);
    }
  
    return result.join('-');
  };
  
  console.log(accum("abcd"));
 
  console.log(accum("RqaEzty"));
  
  console.log(accum("cwAt"));

  // ex 6.2

  const countDuplicates = (str) => {
    const charCount = {};
    let duplicates = 0;
  
    for (let char of str.toLowerCase()) {
      charCount[char] = (charCount[char] || 0) + 1;
      if (charCount[char] === 2) {
        duplicates++;
      }
    }
  
    return duplicates;
  };
  
  

  // ex 6.3

  const longest = (s1, s2) => {
    const combinedString = s1 + s2;
    const uniqueChars = new Set(combinedString);
    const sortedString = [...uniqueChars].sort().join('');
    return sortedString;
  };
  

  
  
  
  
  
  
  




