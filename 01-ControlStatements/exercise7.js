/* 
## 문제 7.
number라는 변수를 정의하고 1 혹은 2의 값을 임의로 할당하시오.   
이 변수에는 1이나 2밖에 저장될 수 없습니다.

구구단 프로그램을 만들고자 한다.   
전체를 출력하는 구구단이 아니라 number가 1일 때는 홀수 단(3, 5, 7, 9),   
number가 2일 때는 입력하면 짝수 단(2, 4, 6, 8)을 출력하는 프로그램을 완성하시오.
*/

//number의 값은 바꿔줘야하고... 중복된 내용의 코드가 있다.
let number = 1;
for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
        if (number === 2) {
            if (i % 2 === 0) {
                console.log('%d * %d = %d', i, j, i * j);
            }
        } else {
            if (i % 2 !== 0) {
                console.log('%d * %d = %d', i, j, i * j);
            }
        }
    }
}

console.log('짝수,홀수의 규칙성 활용 ver1 ------------------------------------');
//짝수,홀수값의 규칙성 활용....시작값부터 +2씩 변화되는 수
const inputNum1 = 2;
let startNum = inputNum1 == 2 ? 2 : 3;

for (let i = startNum; i < 10; i += 2) {
    for (let j = 1; j < 10; j++) {
        console.log("%d x %d = %d", i, j, i * j);
    }
}

console.log('짝수,홀수 규칙성 활용 ver2----------------------------------');
const inputNum2 = 2;
for (let i = 4 - inputNum2; i < 10; i += 2) {
    for (let j = 1; j < 10; j++) {
        console.log("%d x %d = %d", i, j, i * j);
    }
}

console.log('함수로 묶어서 코드 작성--------------------------------');
//dan에는 1 또는 2만 입력 가능
function gugudan(dan) {
    const inputNum = dan;
    let startNum = inputNum1 == 2 ? 2 : 3;

    for (let i = startNum; i < 10; i += 2) {
        for (let j = 1; j < 10; j++) {
            console.log("%d x %d = %d", i, j, i * j);
        }
    }
}
gugudan(1);