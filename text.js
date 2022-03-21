/* 
문제2.
어느  학급의 수학 시험 점수가 다음 표와 같았다.
재석:82
민영:91
종민:54
광수:62
승기:88
새정:90
6명의 성적에 대해서 이름을 저장하고 있는 문자열 1차 배열 names와 점수를 저장하고 있는 
1차 배열 points를 각각 정의하고 점수가 높은 순으로 이름을 출력하는 프로그램을 
for문과 ig문만 활용하여 구현하시오

출력결과 : 민영,승기,재석,광수,종민,새정
(결과값 전체를 하나의 string값으로 출력하기)
 */
const names = ['재석', '민영', '종민', '광수', '승기', '새정'];
const points = [82, 91, 54, 62, 88, 90];


console.log('높은순으로 출력 !!! ------------------------------------------');
for (let j = 0, pointsLength = points.length; j < pointsLength; j++) {
    for (let i = pointsLength - 1; i > 0; i--) {
        if (points[i] > points[i - 1]) {
            let tempPoints = points[i];
            points[i] = points[i - 1];
            points[i - 1] = tempPoints;

            let tempNames = names[i];
            names[i] = names[i - 1];
            names[i - 1] = tempNames;
        }
    }
}
console.log(names);


console.log('강사님 답안-------------------------------------------');
const len = points.length;
for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len; j++) {
        if (points[i] > points[j]) {
            const p = points[i];
            points[i] = points[j];
            points[j] = p;

            const n = names[i];
            names[i] = names[j];
            names[j] = n;
        }
    }
}
//결과값을 하나의 string으로 변환하여 출력하기
let output = '';
for (let i = 0; i < names.length;) {
    output += names[i];
    if (i + 1 < len) {
        output += ',';
    }
}
console.log(output);

/*
문제3.“Life is too short, You need Javascript”라는 문자열에서 
알파벳“e”가 총 몇번 등장하는지를 구하는 프로그램을 while문을 활용하여 구형하시오
*/
const str = 'Life is too short, You need Javascript';

console.log('\nfor문을 활용한 풀이-----------------------------');
let count = 0;
for (let i = 0; i < str.length; i++) {
    if (str[i] === 'e') {
        count++;
    }
}
console.log('알파벳 e가 등장하는 횟수:' + count);


console.log('\nwhile문을 활용한 풀이 ver1-----------------------------');
count = 0;
let i = 0;
while (i < str.length) {
    if (str[i] === 'e') {
        count++;
    }
    i++;
}
console.log('알파벳 e가 등장하는 횟수:' + count);


console.log('\nwhile문을 활용한 풀이 ver2(강사님 답안)-----------------------------');
const word = 'e';
let is_ok = true;
count = 0;
let p = -1;

while (is_ok) {
    p = str.indexOf(word, p + 1);
    is_ok = p > -1;
    if (is_ok) {
        count++
    }
}
console.log('알파벳 e가 등장하는 횟수:' + count);


/* 
문제4.카메라를 구입하기로 한 당신은 네이버에서 카메라 라는 키워드로 검색하여 아래와 같은 검색 결과를 확인할 수 있었다 
제품10개 가격:[283890,299990,1317990,535000,227560,465300,300000,1890630,942670,2898970]
현재 보유하고 있는 돈이 150만원일 때 구입 가능한 제품은 모두 몇 개인가?
 */
const products = [283890, 299990, 1317990, 535000, 227560, 465300, 300000, 1890630, 942670, 2898970];
const myBudget = 1500000;
let buy = 0;
//제품 한개의 가격이 150만원이상인 제품을 먼저 추려내기 
const filtedProducts = products.filter(arrItem => arrItem < myBudget);
console.log(filtedProducts);
//150만원 이하의 제품들로 추려진 데이터를 갖고 경의의 수 구하기 
//강사님 답안보면... 내가 문제를 잘못 이해한듯.. 경우의 수가 아닌듯...
let sum = 0;
for (item in filtedProducts) {
    if (sum < myBudget) {
        sum += item;
        buy++;
    }
}
console.log(buy);


console.log('for문 사용(강사님 답안)----------------------------------------');
let cameraCount = 0;
for (let i = 0; i < products.length; i++) {
    if (products[i] < myBudget) {
        cameraCount++;
    }
}
console.log('구입 가능한 카매라 개수 : ' + cameraCount);


/* 
문제5.
고무공을 100미터 높이에서 떨어뜨리는데 이 공은 땅에 닿을 때마다 원래 높이의 2/5 만큼
튀어오른다 공이 다섯번 튈 동안의 높이는 아래와 같았다.
1번째 : 40
2번재 : 16
3번째 : 6
4번째 : 2
5번째 : 0
총 4번 튀어오름
공의 높이에 대해 소수점을 버리고 정수만 취하여 높이가 0이 되는 순간을 더 이상 튀어오르지 않는
시점이라고 가정했을 때, 이 공이 더 이상 튀어오르지 않기 위해서는 총 몇 번을 튀어올라야 하는가
예를 들어 5번째에서 높이가 0이 되었다면 4번 튀어오른 것이다
고무 공의 높이 m을 int형 변수로 선언하여 풀이하시오
*/





/*
문제6.1부터 10,000까지 8이라는 숫자가 총 4000번 나타난다고 한다 
8이 등장하는 횟수를 카운팅 하는 프로그램을 작성하시오.
8이 포함되어 있는 숫자의 개수를 카운팅 하는 것이 아니라 
8이라는 숫자를 모두 카운팅 해야 한다
예를 들어서 8808은 -> 3,  8888은 -> 4로 카운팅 해야 함
*/