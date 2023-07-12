var string = prompt("Nhập vào một chuỗi:");
console.log("Chuỗi đã nhập:", string);
if (string.charAt(0) === string.charAt(0).toUpperCase()) {
  console.log("Chữ cái bắt đầu chuỗi là chữ hoa");
} else {
  console.log("Chữ cái bắt đầu chuỗi là chữ thường");
}
let print = (index) => {
  let A = index.split(" ");
  for (let i in A) {
    if (A[i].charAt(0) === A[i].charAt(0).toUpperCase()) {
      console.log(A[i]);
    }
  }
};
print(string);
