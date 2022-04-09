/* 
## 문제2
이 학생의 총점과 평균점수를 구하는 프로그램에 대한 소스코드를 완성하시오.   
|--|국어|영어|수학|
|--|--|--|--|
|홍길동|75|82|91|
*/
console.log('\n데이터를 일반변수에 담아서 사용----------------------');
let studentName = '홍길동';
let kr = 75;
let en = 82;
let ma = 91;

let sum = kr + en + ma;
let avg = sum / 3;
console.log(studentName + '의 총점 %d점, 평균%d점', sum, avg);


console.log('\n데이터를 배열에 담아서 사용 ver1---------------------------');
let studentArr = ['홍길동', 75, 82, 91];
let sum1 = studentArr[1] + studentArr[2] + studentArr[3];
let avg1 = sum1 / 3
console.log(studentArr[0] + '의 총점 %d점, 평균%d점', sum1, avg1);


console.log('\n데이터를 배열에 담아서 사용 ver2---------------------------');
let studentGradeArr = studentArr.slice(1);
let sum2 = 0;
for (item of studentGradeArr) {
    sum2 += item;
}
let avg2 = sum2 / studentGradeArr.length;
avg2 = avg2.toFixed(2);
console.log(studentArr[0] + '의 총점 %d점, 평균%d점', sum2, avg2);


console.log('\n데이터롤 객체로 담아서 사용 --------------------------');
let studentObj = {
    student: '홍길동',
    korean: 75,
    english: 82,
    math: 91
}