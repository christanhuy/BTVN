var data = [1,2,3,1,2,3,4,5,6,5,4,6]
// viết function có dầu vào là array và return ra array mới chứa các phần tử của array đầu vào không lặp lại
let length = data.length;
let uniqueArray = arr => {
    let newArray = [];
    for (let i = 0; i< length; i++){
        if (newArray.indexOf(arr[i]) === -1){ //Nếu phần tử arr[i] chưa có trong newArray thì sẽ = -1
            newArray.push(arr[i]); //Đẩy phần tử arr[i] vào trong newArray
        }
    }
    return newArray;
}
console.log(uniqueArray(data));