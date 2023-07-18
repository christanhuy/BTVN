var phucBirthday = "26-11-1992";
var cuongBirthday = "27-11-1994";
// 6.1 Đổi định dạng ngày thành ‘1992-11-26
// 6.2 Quy đổi về cả 2 về object date
// 6.3 So sánh xem phuc hay cuong lớn tuổi hơn
// 6.4 Hỏi sau 100 ngày từ lúc phucBirthday là ngày hôm nào, thứ mấy?
// 	gợi ý: dùng setDate(getDate + 100)

// 	dùng hàm getDay để tìm ra thứ  biết rằng:
// 	0: chủ nhật
// 	1: thứ 2  ..

var A = phucBirthday.split("-").reverse().join("-");
console.log("Đổi định dạng ngày thành 1992-11-26:", A);
var B = new Date(phucBirthday.split("-").reverse().join("-"));
var C = new Date(cuongBirthday.split("-").reverse().join("-"));
console.log("Quy đổi về object date:", B);
console.log("Quy đổi về object date:", C);

if (B.getFullYear() < C.getFullYear()) {
  console.log("Phúc lớn tuổi hơn");
} else {
  console.log("Cường lớn tuổi hơn");
}
B.setDate(B.getDate() + 100);
console.log("Sau sinh nhật Phúc 100 ngày là vào:", B);
switch (B.getDay()) {
  case 0:
    console.log("Và hôm đó là CN");
    break;
  case 1:
    console.log("Và hôm đó là T2");
    break;
  case 2:
    console.log("Và hôm đó là T3");
    break;
  case 3:
    console.log("Và hôm đó là T4");
    break;
  case 4:
    console.log("Và hôm đó là T5");
    break;
  case 5:
    console.log("Và hôm đó là T6");
    break;
  case 6:
    console.log("Và hôm đó là T7");
    break;
  default:
    break;
}
