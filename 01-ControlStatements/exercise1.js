/* 
## 문제 6.
아래와 같은 출력 결과가 나타나도록 중첩 반복문을 for 문 형식으로 구현하시오.
1
12
123
1234
12345
123456
1234567
*/

/* 
오답1.문제풀이 첫번째 접근방법...삽질한듯.. 포기 ㅡ,,ㅡ  ------>>"문자열+숫자"는 문자열로 처리된다는 점을 활용하기!!
1
12  (1+11) ->(10의 1제곱 + 1)
123  (12+111) ->(10의2제곱 +10의1제곱 + 1)
1234  (123+1111) ->(10의 3제곱+ 10의 2제곱 + 10의 1제곱 +1)
12345  (1234+1111)
12345  (12345+11111)
123456  (12345+11111)
*/

for (let i = 0; i < 7; i++) {
    let str = "";
    for (let j = 1; j < i + 1; j++) {
        str += j;
    }
    console.log(str);
}

/* 
강사님 코드보면...
반복횟수 시작값 0부분을 되도록 조작하지 않고(j=0)
값변경 수식부분에서 조정을 하시는 듯(str += j+1)
반복횟수을 직관적으로 파악가능하도록 하기 위한것인듯..
*/
console.log("강사님 소스코드-------------------------------------------");
for (let i = 0; i < 7; i++) {
    let str = "";
    for (let j = 0; j < i + 1; j++) {
        str += j + 1;
    }
    console.log(str);
}


console.log("재귀함수 사용----------------------------------------------");
//바깥쪽 반복문을 재귀함수로 처리
function sevenStar(depth = 1) {
    if (depth > 7) {
        return;
    } else {
        let str = "";
        for (let i = 0; i < depth; i++) {
            str += "*";
        }
        console.log(str);
        sevenStar(++depth);
    }
}
sevenStar();


console.log("재귀함수 사용-----------------------------------------------");

function numSeven(depth = 1) {
    if (depth > 7) {
        return;
    } else {
        let str = "";
        for (let i = 0; i < depth; i++) {
            str += (i + 1);
        }
        console.log(str);
        numSeven(++depth);
    }
}
numSeven();


console.log("재귀함수사용 + 출력 행수 함수parameter로 받기----------------");

function numPrint(level, depth = 1) {
    if (depth > level) {
        return;
    } else {
        let str = "";
        for (let i = 0; i < depth; i++) {
            str += (i + 1);
        }
        console.log(str);
        numPrint(level, ++depth);
    }
}
numPrint(5);