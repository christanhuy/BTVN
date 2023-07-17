var doan = {
  name: "Doan",
  age: 22,
  salary: 1000,
};
var trung = {};

var trung = { ...doan };
trung.name = "Trung";
trung.clone = true;
console.log(trung);
