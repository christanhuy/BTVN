var arr = [1, 8, 5, 2, 7, 6, 9, 2, 6];
//dùng .sort để sắp xếp mảng tăng dần và giảm dần
var newUp = arr.sort((a, b) => {
  return a - b;
});
console.log("Sắp xếp mảng tăng dần:", newUp);

var newDown = arr.sort((a, b) => {
  return b - a;
});
console.log("Sắp xếp mảng giảm dần:", newDown);
