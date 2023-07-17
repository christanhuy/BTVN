var array = [1, 5, 7, 8, 9, 15]; //sử dụng map hoặc filter
// * in ra các số chẵn trong mảng
// * in ra các số lẻ  trong mảng
// * in ra các số lớn hơn hoặc bằng 5 trong mảng
// *in ra các số chia hết cho 5 trong mảng
// Tìm các số >5 của mảng và tăng các giá trị đó lên 1 đơn đơn vị
var soChan = array.filter((number) => number % 2 === 0);
console.log("Các số chẵn trong mảng:", soChan);

var soLe = array.filter((number) => number % 2 !== 0);
console.log("Các số lẻ  trong mảng:", soLe);

var soLon5 = array.filter((number) => {
  return number >= 5;
});
console.log("Các số lớn hơn hoặc bằng 5 trong mảng:", soLon5);

var soChia5 = array.filter((number) => number % 5 === 0);
console.log("Các số chia hết cho 5 trong mảng:", soChia5);

var A = array.filter((number) => {
  return number > 5;
});
var B = A.map((number) => {
  return number + 1;
});
console.log("Các số >5 của mảng và tăng các giá trị đó lên 1 đơn đơn vị:", B);
