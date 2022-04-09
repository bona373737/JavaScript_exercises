/**학년별 평균키와 평균몸무게를 세로다중막대그래프로 표현하시오*/

import './res/exercise14_dataset';
import 'https://cdn.jsdelivr.net/npm/chart.js@3.7.1/dist/chart.js';

const bodyInfo = {};

for (s of student) {
    bodyInfo[s.grade] = {
        height: [],
        weight: []
    };
};

for (key in bodyInfo) {
    for (s of student) {
        if (key == s.grade) {
            bodyInfo[key]['height'].push(s.height);
            bodyInfo[key]['weight'].push(s.weight);
        };
    };
};
console.log(bodyInfo);


// 최종구해야하는 데이터
// 평규몸무게 = [1학년평균, 2학년평균,3학년평균,4학년평균];
// 평균키 = [1학년평균, 2학년평균,3학년평균,4학년평균];
const heightAvg = [];
const weightAvg = [];
for (let i = 1; i < Object.keys(bodyInfo).length + 1; i++) {
    let heightSum = 0;
    let weightSum = 0;
    for (item of bodyInfo[i]['height']) {
        heightSum += item;
    }
    for (item of bodyInfo[i]['weight']) {
        weightSum += item;
    }
    heightAvg.push(heightSum / bodyInfo[i]['height'].length);
    weightAvg.push(weightSum / bodyInfo[i]['weight'].length);
}
console.log(heightAvg);
console.log(weightAvg);

//차트그리기
const chart3 = document.getElementById('chart3');
new Chart(chart3, {
    type: 'bar',
    data: {
        labels: ['1학년', '2학년', '3학년', '4학년'],
        datasets: [{
                label: '평균 키',
                data: heightAvg,
                borderWidth: 0.5,
                borderColor: 'rgba(54,162,23,0.2)',
                backgroundColor: `rgba(54,162,23,1)`
            },
            {
                label: '평균 몸무게',
                data: weightAvg,
                borderWidth: 0.5,
                borderColor: 'rgba(54,162,235,0.2)',
                backgroundColor: 'rgba(54,162,235,1)',
            }
        ]
    },
    options: {
        maintainAspectRatio: false,
    }
});