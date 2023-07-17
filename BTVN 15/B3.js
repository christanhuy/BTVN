var array = [
  {
    name: "Trung",
    class: "Nodemy01",
    dateJoin: "05-02-2020",
    age: 20,
  },
  {
    name: "Phong",
    class: "Nodemy01",
    dateJoin: "06-01-2020",
    age: 19,
  },
  {
    name: "Nam",
    class: "Nodemy02",
    dateJoin: "25-01-2020",
    age: 20,
  },
];
// 3.1 dùng .sort  để sắp xếp mảng object có tuổi tăng dần
// 3.3 dùng .sort để sắp xếp mảng theo ngày tham gia của học viên
// 3.2 dùng .filter để tìm ra những học viện tham gia trước tháng 2
// 3.4 dùng .map để tạo mảng mới, viết hoa toàn bộ Tên học viện : (Trung => TRUNG)
// 	gợi ý : dùng toUppercase để viết hoa
var newArr1 = array.sort((a, b) => {
  return a.age - b.age;
});
console.log("Sắp xếp mảng object có tuổi tăng dần:", newArr1);

var newArr2 = array.sort((a, b) => {
  // Chia chuỗi dateJoin thành các thành phần ngày, tháng, năm
  var A = a.dateJoin.split("-").reverse().join("");
  var B = b.dateJoin.split("-").reverse().join("");
  return A - B;
});
console.log("Sắp xếp mảng theo ngày tham gia của học viên:", newArr2);

var newArr3 = array.filter((item) => {
  var A = item.dateJoin.split("-")[1];
  return A < 2;
});
console.log("Những học viện tham gia trước tháng 2:", newArr3);

var newArr4 = array.map((item) => {
  let B = item.name.toUpperCase();
  return B;
});
console.log("Viết hoa toàn bộ tên học viên:", newArr4);
