var a = 5;
var b = "5";
let c = "5";

if (a == b) {
  console.log("a and b are same");
} else {
  console.log("a and b are diffrent");
}

if (a === b) {
  console.log("a and b are same");
} else {
  console.log("a and b are diffrent");
}

if (a == c) {
  console.log("a and c are same");
} else {
  console.log("a and c are diffrent");
}

if (a === c) {
  console.log("a and c are same");
} else {
  console.log("a and c are diffrent");
}

console.log(a + b);
console.log(a + c);
console.log(b + c);
