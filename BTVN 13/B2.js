let string = "Nguyen Xuan Chien";
// 2.1 in ra màn hình các phần tử trong chuỗi trên
let arr1 = [];
for (let i in string) {
  arr1.push(string[i]);
}
console.log(arr1);
let arr2 = string.split(" ");
for (let i in arr2) {
  console.log(arr2[i]);
}
