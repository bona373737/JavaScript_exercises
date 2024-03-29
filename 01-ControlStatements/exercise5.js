/* 
## 문제 5.
for문을 중첩하여 실행하여 아래와 같은 출력 결과를 만드시오
0 1 2 3 
1 2 3 4 
2 3 4 5 
3 4 5 6 
*/

console.log("for문 한개만 사용---------------------------------------");
for (let i = 0; i < 4; i++) {
    console.log(i, i + 1, i + 2, i + 3);
}

console.log("이중for문 사용-------------------------------------------");
//줄갯수 : 바깥쪽 회전 회수
for (let i = 0; i < 4; i++) {
    let str = "";
    // 열개수.. 안쪽회전 횟수
    for (let j = i; j < i + 4; j++) {
        str += j;
        if (j + 1 < i + 4) {
            str += " ";
        }
    }
    console.log(str);
}
/* 
< 풀이과정에서 혼동을 느낀부분 >
자바에서는 자료형을 string으로 잡고 풀이 했던거를 
자바스크립으에서는 변수값에 ""으로 명시해서 string으로 인식시켜야 하는 점을
인지하지 못하고 숫자+숫자으로만 진행해서 출력값으로 최종 합계가 놔왔다. 
*/

console.log("강사님 코드-------------------------------------------------");
for (let i = 0; i < 4; i++) {
    let str = "";
    for (let j = 0; j < 4; j++) {
        str += i + j;

        //str문자열 사이사이에 공백 넣기.. 제일마지막 문자열에서는 공백 생략
        if (j + 1 < 4) {
            str += " ";
        }
    }
    console.log(str);
}

console.log("재귀함수 사용-------------------------------------------------");

// function printNum(level, startNum = 0) {
//     if (level > startNum) {
//         let str = "";
//         for (let i = startNum; i < startNum + 4; i++) {
//             str += i;
//             아래부분에 실수 있었음..(i + 1 < startNum + 4) 이게 정답
//             if (startNum + 1 < startNum + 4) {
//                 str += " ";
//             }
//         }
//         console.log(str);
//         printNum(level, startNum + 1);
//     } else {
//         return;
//     }
// }
// printNum(5);
//------------------------------------>문자열 마지막에는 공백이 안들어가야 하는데 해결이 안됬었음
//------------------------------------>문자열에 공백추가하는 if문에서 i가 아닌 startNum +1으로 비교했음...실수..
function printNum(level, startNum = 0) {
    if (level > startNum) {
        let str = "";
        let length = startNum + 4
        for (let i = startNum; i < length; i++) {
            str += i;
            //문자열 사이에 공백넣기
            if (i + 1 < length) {
                str += " ";
            }
        }
        console.log(str);
        printNum(level, startNum + 1);
    } else {
        return;
    }
}
printNum(5);