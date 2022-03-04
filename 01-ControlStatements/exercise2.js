/* 
## 문제 2.
while문을 사용하여 0 부터 10 미만의 정수 중에서 홀수만을 큰수부터 출력하시오.
*/

let i = 9;
while (true) {
    if (i < 0) {
        return;
    } else if (i % 2 === 1) {
        console.log(i);
    }
    i--;
}

console.log("홀수들간의 차이는 2씩 ------------------");
let j = 9;
while (j > -1) {
    console.log(i);
    i -= 2;
}