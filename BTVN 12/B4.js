var hocSinh=[
    {ten: 'huy', khoi:'A', diem: {toan: 7, van: 5, anh:5}},
    {ten: 'lam', khoi:'B', diem: {toan: 7, van: 7, anh:5}},
    {ten: 'tung', khoi:'C', diem: {toan: 7, van: 4, anh:7}},
    ]
    
    var khoiThi = [
    {khoi: 'A', heSo:{toan:2, van:1, anh:1}, diemSan:25},
    {khoi: 'B', heSo:{toan:1, van:1, anh:2}, diemSan:24},
    {khoi: 'C', heSo:{toan:1, van:2, anh:1}, diemSan:20},
    ]
    
    //hãy tính điểm thi của từng học sinh biết tổng điểm = điểm thi * hệ số
    //hệ số sẽ thay đổi theo khối thi và môn thi
    //hoc sinh thi đỗ nếu điểm thi >= điểm sàn của khối tương ứng
    //hãy cho biết ai thi đỗ, ai thi trượt
    
    let length = hocSinh.length;
    let length1 = khoiThi.length;

    let diemThi = (hocSinh, khoiThi) =>{
        let ketQuaThi = [];
        for (let i = 0; i<length; i++){
            let diemHeSo = hocSinh[i].diem;

            let heSoThi = 0;
            for (let j = 0; j < length1; j++){
                if (khoiThi[j].khoi === hocSinh[i].khoi){
                    heSoThi = khoiThi[j].heSo;
                }
            }

            let tongDiem = 0;
            for (let j in diemHeSo){
                tongDiem += diemHeSo[j] * heSoThi[j];
            }

            let diemDo = 0;
            for (let j = 0; j < length1; j++){
                if (khoiThi[j].khoi === hocSinh[i].khoi){
                    diemDo = khoiThi[j].diemSan;
                }
            }

            let ketQua = (tongDiem >= diemDo)? "Đỗ" : "Trượt";
            let ketQuaHS = {
                ten: hocSinh[i].ten,
                khoi: hocSinh[i].khoi,
                diemthi: tongDiem,
                diemsan: diemDo,
                ketqua: ketQua,
            }
            ketQuaThi.push(ketQuaHS);
        }
        return ketQuaThi;
    }
    console.log(diemThi(hocSinh,khoiThi));