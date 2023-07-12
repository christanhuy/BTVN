var string = prompt("Nhập vào một chuỗi:");
// Bài tập 3: Viết một chương trình yêu cầu người dùng nhập vào một chuỗi.
// Hãy chuyển đổi tất cả các chữ cái viết thường trong chuỗi thành chữ cái viết hoa và ngược lại.
// In ra chuỗi kết quả.
console.log("Chuỗi đã nhập:", string);
let chuyenDoi = (index) => {
  let A = "";
  for (let i in index) {
    for (let j = 0; j < index[i].length; j++) {
      if (index[i].charAt(j) === index[i].charAt(j).toUpperCase()) {
        A += index[i].charAt(j).toLowerCase();
      } else if (index[i].charAt(j) === index[i].charAt(j).toLowerCase()) {
        A += index[i].charAt(j).toUpperCase();
      }
    }
  }
  return A;
};
console.log(chuyenDoi(string));
