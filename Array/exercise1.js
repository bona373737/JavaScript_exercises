/* 
## 문제1
배열에 저장되어 있는 값들을 반전(true는 false로, false는 true로)변환하는 처리를 완성하시오.   
[true,false,false,true,false] -> [false,true,true,false,true]
 */
let arr = [true, false, false, true, false];
let arrLength = arr.length

console.log('----------------------------------')
for (let i = 0; i < arrLength; i++) {
    if (arr[i] == true) {
        arr[i] = false;
    } else {
        arr[i] = true;

}
console.log(arr);



console.log('-------------------------------');
for (let i = 0; i < arrLength; i++) {
    arr[i] = arr[i] == true ? false : true;
}
console.log(arr);



console.log('---------------------------------');
for (let i = 0; i < arrLength; i++) {
    arr[i] = !arr[i];
}
console.log(arr);