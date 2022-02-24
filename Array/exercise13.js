/* 
주민번호의 앞 부분과 뒷 부분의 첫 번째 글자 아래와 같이 변수에 저장하고,
아래와 같은 결과물을 출력하시오
ssn = "9203211"
당신은 00세 여자or남자입니다.

*/

const ssn = "9203211";

const gender = Number(ssn.substring(6));
const sex = gender % 2 === 0 ? "여자" : "남자";

let birthYear = Number(ssn.substring(0, 2));

// if (gender < 3) {
//     birthYear += 1900;
// } else {
//     birthYear += 2000;
// }
birthYear = gender < 3 ? birthYear + 1900 : birthYear + 2000;

const date = new Date();
const age = date.getFullYear() - birthYear + 1;


console.log("당신은 %d세 %s 입니다.", age, sex);