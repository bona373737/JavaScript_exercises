//학년이 올라갈 수록 평균나이가 어떻게 변화하는지를 선그래프로 표현하시오

import './res/exercise14_dataset';
import 'https://cdn.jsdelivr.net/npm/chart.js@3.7.1/dist/chart.js';


// my ver1-------------------------------------------------------------------------------------
const ageInfo = {}
const thisYear = new Date().getFullYear();

for (s of student) {
    ageInfo[s.grade] = [];
};
console.log(JSON.parse(JSON.stringify(ageInfo)));

for (key in ageInfo) { //4번 반복
    for (s of student) { //16번 반복
        if (key == s.grade) {
            let birthYear = Number(s.birthdate.substring(0, 4));
            let age = thisYear - birthYear + 1;
            ageInfo[key].push(age);
        };
    };
};
console.log(JSON.parse(JSON.stringify(ageInfo)));

//최종 필요한 데이터 [1학년평균, 2학년평균, 3학년평균, 4학년평균]
const ageAvg = [];
for (let i = 1; i < Object.keys(ageInfo).length + 1; i++) {
    let sum = 0;
    let avg = 0;
    for (item of ageInfo[i]) {
        sum += item;
    }
    avg = Number((sum / ageInfo[i].length).toFixed(2));
    ageAvg.push(avg);
}
console.log(ageAvg);

//차트 그리기
const chart2 = document.getElementById('chart2');
new Chart(chart2, {
    type: 'line',

    data: {
        labels: ['1학년', '2학년', '3학년', '4학년'],
        datasets: [{
            label: '평균나이',
            data: ageAvg,
            borderWidth: 1,
            borderColor: '#00ff00',
        }],
    },

    options: {
        maintainAspectRatio: false,
    }
});

// my ver1-------------------------------------------------------------------------------------