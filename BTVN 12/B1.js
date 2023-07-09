var arr2 = ["4", "6", 1, 2, 3, 5, "y", "t", 5];
//viết function có đầu vào là 1 arr return tổng các number và string number trong array
let sum = 0;
let length = arr2.length;
function sumArray(array) {
  for (let i = 0; i < length; i++) {
    if (typeof array[i] === "number" || !isNaN(array[i])) { //!isNaN() kiểm tra điều kiện có phải số không
      sum += Number(array[i]); //Number() để chuyển string sang chuỗi số
    }
  }
  return sum;
}
console.log(sumArray(arr2));
