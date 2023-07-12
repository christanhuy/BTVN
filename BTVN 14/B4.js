var string = prompt("Nhập vào một chuỗi:");
// Bài tập 4: Viết một chương trình yêu cầu người dùng nhập vào một chuỗi.
// Hãy xóa tất cả các khoảng trắng trong chuỗi và in ra chuỗi kết quả.
console.log("Chuỗi đã nhập:", string);
let A = string.trim();
let B = "";
for (let i in A) {
  if (A.charAt(i) !== " ") {
    B += A.charAt(i);
  }
}
console.log(B);
