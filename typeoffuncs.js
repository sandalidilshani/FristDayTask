//Named Functions
function func_named() {
  console.log("This is named function");
}
func_named();

//Anonymous Functions
let func_ann = function () {
  console.log("this is Anonymous Functions");
};
func_ann();

//Arrow Functions
func_arr = () => {
  console.log("this is arrow funcion");
};
func_arr();

//Generators:can stop the
//execution of a function from anywhere inside the function
function* numberInt() {
  let Number = 10;
  while (Number > 0) {
    yield Number--;
  }
}
let gen = numberInt();
console.log(gen.next().value);
console.log(gen.next().value);

numberInt();

//Invoked Function
//creating a new scope to avoid polluting the global namespac
(function () {
  const message = "Hello, world!";
  console.log(message);
})();
