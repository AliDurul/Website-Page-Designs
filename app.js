/* var a = ['dog','lion','hen'];
a[100] = 'horse';
a.forEach(a=>{
    console.log(a);
})

console.log(a.length);
 */
console.log(typeof 2);

console.log(typeof ("2" + 1 + 2));

const employee = {
  name: "John",
  surname: "Doe",
  age: 33,
  languages: ["C++", "Go", "Java", "Javascript"],
  salary: 10000,
};

let IsTrue = employee.languages.includes("Java") ? "var" : "yok";
console.log(IsTrue);

// console.log(employee.languages.includes("Java"));

const dessert = { type: 'pie' };
dessert.type = 'pudding';

console.log(dessert.type);