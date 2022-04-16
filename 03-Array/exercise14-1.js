// 학과별 학생수를 세로막대그래프로 표현하시오

import './res/exercise14_dataset';
import 'https://cdn.jsdelivr.net/npm/chart.js@3.7.1/dist/chart.js';


// my ver1-----------------------------------------------------------------
const department = [];
const studentCount = [0, 0, 0];

for (s of student) {
    if (!department.includes(s.deptno)) {
        department.push(s.deptno);
    }
};
console.log(department);

for (let j = 0; j < department.length; j++) {
    for (s of student) {
        if (department[j] == s.deptno) {
            studentCount[j]++;
        }
    }
};
console.log(studentCount[0]);
//department[i]번째가 있으면 studentCount[i]의 값을 1씩 늘려줘야한다. 
//즉, department에 해당 값이 있는지 여부와 인덱스번호를 알수 있어야 한다. 
//incluedes()보다는 forEach((v,i)=>{})을 사용하는것이 좀더 효율적이다.

// my ver2-----------------------------------------------------------------
// for(s of student){
//     if(!department.includes(s.deptno)){
//         let idx = department.length;
//         department[idx] = s.deptno;
//         studentCount[idx] = 1;
//         continue; 
//     }
//     let idx = department.indexOf(s.deptno);
//     studentCount[idx]++;
//     };


//강사님 풀이ver------------------------------------------------------------------------
//department[i]번째가 있으면 studentCount[i]의 값을 1씩 늘려줘야한다. 
//즉, department에 해당 값이 있는지 여부와 인덱스번호를 알수 있어야 한다. 
//incluedes()보다는 forEach((v,i)=>{})을 사용하는것이 효과적이다.

const department1 = [];
const studentCount1 = [];

student.forEach((v, i) => {
    d = v.deptno;
    p = department.indexOf(d);
    if (p == -1) {
        department1.push(d);
        studentCount1.push(1);
    } else {
        studentCount1[p]++;
    }
})