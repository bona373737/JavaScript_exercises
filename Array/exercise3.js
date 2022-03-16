/* 
## 문제3
다음 표는 어떤 학생이 일요일부터 토요일까지의 일주일간 아르바이트를 한 시간이다.   
|일|월|화|수|목|금|토|
|--|--|--|--|--|--|--|  
|7 | 5| 5| 5| 5|10| 7|

주말에는 7시간, 평일에는 5시간을 일하기로 했지만, 금요일에 다른 직원의 사정으로   
대신 근무를 하게되어 10시간을 일했다.   
이 학생의 시급이 4,500이었지만 목요일부터는 5,200원으로 올랐다고 할 때   
일주일간의 총 급여를 구하는 프로그램을 작성하시오.   
 */
const workTime = [7, 5, 5, 5, 5, 10, 7];
const workTimeLength = workTime.length;
const prevSalary = 4500;
const nowSalary = 5200;


console.log('for문 사용 --------------------------------------------------');
let total0 = 0;
for (let i = 0; i < workTimeLength; i++) {
    if (i < 4) {
        total0 += workTime[i] * prevSalary;
    } else {
        total0 += workTime[i] * nowSalary;
    }
}
console.log("일주일간의 총급여 총액 :" + total0);



console.log('\n ternary operator사용---------------------------------------');
let total = 0;
for (let i = 0; i < workTimeLength; i++) {
    total += i < 4 ? workTime[i] * prevSalary : workTime[i] * nowSalary;
}
console.log("일주일간의 총급여 총액 :" + total);


console.log('\n-----------------------------------------------------------');
let total1 = 0;
for (let i = 0; i < workTimeLength; i++) {
    total1 += workTime[i] * (i < 4 ? prevSalary : nowSalary);
}
console.log("일주일간의 총급여 총액 :" + total1);



console.log('\n-----------------------------------------------------------');
let total2 = 0;
for (let i = 0; i < workTimeLength; i++) {
    let salary = i < 4 ? prevSalary : nowSalary;
    total2 += workTime[i] * salary;
}
console.log("일주일간의 총급여 총액 :" + total2);