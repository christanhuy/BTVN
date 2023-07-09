var all = [
  { name: "huy", score: 10, class: "A" },
  { name: "hai", score: 7, class: "B" },
  { name: "hung", score: 8, class: "A" },
  { name: "kien", score: 6, class: "A" },
  { name: "vinh", score: 9, class: "B" },
  { name: "binh", score: 8, class: "B" },
  { name: "cuong", score: 5, class: "B" },
  { name: "chien", score: 6, class: "A" },
  { name: "minh", score: 7, class: "B" },
];
var doiTuyen = ["huy", "vinh", "binh", "hung", "minh"];

// a, Hãy tạo ra arrayA chỉ chứa object  các học sinh lớp A
// b, Hãy tạo ra array chứa object các học viên có điểm từ 6 trở xuống
// c, Hãy tạo ra array vip chứa object các học viên tham gia đội tuyển

let length = all.length;
let length1 = doiTuyen.length;
let arrayA = [];
for (let i = 0; i < length; i++) {
  if (all[i].class === "A") {
    arrayA.push(all[i]);
  }
}
let arrayB = [];
for (let i = 0; i < length; i++) {
  if (all[i].score <= 6) {
    arrayB.push(all[i]);
  }
}
let vip = [];
for (let i = 0; i < length; i++) {
  for (let j = 0; j < length1; j++) {
    if (all[i].name === doiTuyen[j]) {
      vip.push(all[i]);
    }
  }
}
console.log("ArrayA:", arrayA);
console.log("ArrayB:", arrayB);
console.log("Array vip:", vip);
