/*
Write an algorithm to extract input english language sentence characters and convert the characters to the 8-bit binary patterns.

Note:
a. Binary conversion should be done using Recursion only.
b. Take command line input for Sentence
c. Output should be 8 bit binaries only.
d. Input can have special characters like /; etc
*/

// Write a recursive function to convert decimal to binary

const toBinary = (num) => {
  if (num < 1) {
    return "";
  }
  return toBinary(Math.floor(num / 2)) + (num % 2);
};

// console.log(toBinary(16));

// Write a function to capture input convert to ascii equivalent & call recursive to convert that to binary
// append binary into a array and return the array

const readline = require("readline-sync");

const ascii2bin = (input) => {
  let result = [];
  let ascii = {
    A: 65,
    B: 66,
    C: 67,
    D: 68,
    E: 69,
    F: 70,
    G: 71,
    H: 72,
    I: 73,
    J: 74,
    K: 75,
    L: 76,
    M: 77,
    N: 78,
    O: 79,
    P: 80,
    Q: 81,
    R: 82,
    S: 83,
    T: 84,
    U: 85,
    V: 86,
    W: 87,
    X: 88,
    Y: 89,
    Z: 90,
    a: 97,
    b: 98,
    c: 99,
    d: 100,
    e: 101,
    f: 102,
    g: 103,
    h: 104,
    i: 105,
    j: 106,
    k: 107,
    l: 108,
    m: 109,
    n: 110,
    o: 111,
    p: 112,
    q: 113,
    r: 114,
    s: 115,
    t: 116,
    u: 117,
    v: 118,
    w: 119,
    x: 120,
    y: 121,
    z: 122,
    " ": 32,
    ":": 58,
    ";": 59,
    "<": 60,
    "=": 61,
    ">": 62,
    "?": 63,
    "@": 64,
    "/": 47,
    0: 48,
    1: 49,
    2: 50,
    3: 51,
    4: 52,
    5: 53,
    6: 54,
    7: 55,
    8: 56,
    9: 57,
  };

  for (let _ of input) {
    let bin = toBinary(ascii[_]);
    if (bin.length < 8) {
      result.push(("00000000" + bin).slice(-8));
    } else {
      result.push(toBinary(ascii[_]));
    }
  }

  return result;
};

user_input = readline.question("input: ");
console.log(ascii2bin(user_input));
