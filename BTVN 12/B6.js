var data = [1, 2, 3, 1, 2, 3, 4, 5, 6, 5, 4, 6, 3];

/* hãy cho biết các phần tử trong array trên lặp lại bao nhiêu lần
 kết quả: [
{phanTu: 1, lapLai: 2},
	{phanTu: 2, lapLai: 2},
	{phanTu: 3, lapLai: 3},
	……
] */
let length = data.length;
let count = {};
let ketQua = [];
for (let i = 0; i < length; i++) {
  let phanTu = data[i];
  if (count[phanTu]) {
    count[phanTu]++;
  } else {
    count[phanTu] = 1;
  }
}
for (var key in count) {
  ketQua.push({ PhanTu: key, lapLai: count[key] });
}
console.log(ketQua);
