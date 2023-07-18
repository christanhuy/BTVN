var greeting = "Welcome to VietNam, VietNam is so beautiful";

// 5.0: đếm xem có tất cả bao ký tự
// 5.1: .indexOf tìm xem VietNam nằm ở vị trí nào
// 5.3: dùng .startWith kiểm tra xem có bắt đầu với Welcome không
// 5.4: dùng .substring để lấy chữ VietNam
// 5.5: dùng .split để tách các từ
// 5.6: dùng .trim() để xóa các dấu cách ngoài rìa
// 5.7: dùng .include để kiểm tra xem VietNam có trong câu trên không
// 5.8  dùng .replace để thay thế VietNam thành VIETNAM
// 5.9: dùng .toUppercase để in hoa chữ cái đầu
// 5.10 dùng .charAt để lấy 1 ký tự ở vị trí số 4

console.log("Tổng số kí tự:", greeting.length);
let A = greeting.indexOf("VietNam");
console.log("VietNam nằm ở vị trí: ", A);
let B = greeting.startsWith("Welcome");
console.log("Có bắt đầu với Welcome: ", B);
let C = greeting.substring(A, A + "VietNam".length);
console.log("Lấy chữ VietNam: ", C);
let D = greeting.split(" ");
console.log("Tách các từ:", D);
console.log("Xóa dấu cách ngoài rìa: ", greeting.trim());
console.log("VietNam có trong câu trên: ", greeting.includes("VietNam"));
let E = greeting.replace(/VietNam/g, "VIETNAM");
// console.log(E);
let F = D.map((word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
}).join(" ");
console.log("In hoa chữ cái đầu:", F);
console.log("Lấy 1 kí tự ở vị trí số 4:", greeting.charAt(4));
