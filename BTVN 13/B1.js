var array = [1, 5, 7, 8, 9, 15, 8];

// 1.1 in ra các số chẵn của mảng
// 1.2 in ra các số lẻ của mảng
// 1.3 in ra các số lớn hơn hoặc bằng 5 của mảng
// 1.4 Cộng tổng các số chia hết cho 5 của mảng
// 1.5 Tìm ra tích 3 số đầu của mảng array
// 1.6 Tính tổng 3 phần tử cuối của mảng
// 1.7 Tìm xem trong array có phần tử nào là số 5 không?
// 1.8 Đếm số phần tử = 8 trong mảng;
let arr1 = [];
let arr2 = [];
let arr3 = [];
let sum = 0;
let tich = 1;
let sum3 = 0;
let length = array.length;
let check = false;
let count = 0;
for (var i in array) {
  if (array[i] % 2 == 0) {
    arr1.push(array[i]);
  }
  if (array[i] % 2 == 1) {
    arr2.push(array[i]);
  }
  if (array[i] >= 5) {
    arr3.push(array[i]);
  }
  if (array[i] % 5 == 0) {
    sum += array[i];
  }
  if (i < 3) {
    tich *= array[i];
  }
  if (length - 3 <= i && i < length) {
    sum3 += array[i];
  }
  if (array[i] === 5) {
    check = true;
  }
  if (array[i] === 8) {
    count++;
  }
}
console.log("Các số chẵn của mảng:", arr1);
console.log("Các số lẻ của mảng:", arr2);
console.log("Các số lớn hơn hoặc bằng 5 của mảng:", arr3);
console.log("Tổng các số chia hết cho 5 của mảng:", sum);
console.log("Tích 3 số đầu của mảng:", tich);
console.log("Tổng 3 phần tử cuối của mảng:", sum3);
console.log("Trong array có phần tử nào là số 5:", check);
console.log("Đếm số phần tử = 8 trong mảng:", count);
