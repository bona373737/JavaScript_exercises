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