var list1 = [3,6,7,9,5];
var list2 = [3,5,7,8,6,6,7];
let sum1 = 0;
let sum2 = 0;
let length1 = list1.length;
let length2 = list2.length;
// viết function có đầu vào là 2 array và return tổng 2 array đầy vào
// viết function có đầu vào là 2 array return array mới gộp 2 array với nhau và các phần tử sắp xếp tăng dần
let sumArray = (arr1,arr2) => {
    for (let i = 0; i< length1; i++){
        sum1 += arr1[i];
    }
    for (let i = 0; i< length2; i++){
        sum2 += arr2[i];
    }
    return sum1 + sum2;
}


let mergeSortArray = (arr1, arr2) => {
    let mergeArray = arr1.concat(arr2);
    mergeArray.sort((a,b)=>{
        return a-b;
    });
    return mergeArray;
}

console.log("Tổng 2 mảng:", sumArray(list1,list2));
console.log("Gộp 2 mảng và sắp xếp thứ tự phần tử:", mergeSortArray(list1,list2));
