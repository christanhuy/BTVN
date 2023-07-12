var string = prompt("Nhập vào một chuỗi:");
// Bài tập 2: Viết một chương trình yêu cầu người dùng nhập vào một câu. Hãy đếm số từ trong câu đó và in ra kết quả.\
console.log("Câu đã nhập:", string);
let demTu = (index) => {
  let count = 0;
  let A = index.split(" ");
  for (let i in A) {
    for (let j = 0; j < A[i].length; j++) {
      count++;
    }
  }
  return count;
};
console.log(demTu(string));
