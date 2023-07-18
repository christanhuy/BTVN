// 7.1 tạo ra số random từ 1 - 10, 1-100, 50 - 100
// 7.2 làm tròn số 7.434345 (.round) , làm tròn lên ( .ceil) , làm tròn xuống ( .floor)
// 7.3 lấy sau số thập phân 2 đơn vị :  ví dụ 7.434345 = 7.43 dùng toFixed(2)
// 7.5 tính 2 mũ 10 dùng pow
var A = Math.floor(Math.random() * 11);
var B = Math.floor(Math.random() * 101);
var C = Math.floor(Math.random() * 51 + 50);

console.log("Số random từ 1 - 10:", A);
console.log("Số random từ 1 - 100:", B);
console.log("Số random từ 50 - 100:", C);

var D = 7.434345;
console.log("Làm tròn 7.434345:", D);
console.log("Làm tròn 7.434345 lên:", Math.ceil(D));
console.log("Làm tròn 7.434345 xuống:", Math.floor(D));
console.log("Lấy sau số thập phân 2 đơn vị:", D.toFixed(2) * 1);

console.log("2 mũ 10 bằng:", Math.pow(2, 10));
