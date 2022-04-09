// 달력출력하기 : ver1.Date클래스사용안함, ver2.Date클래스 사용

/* 
Date클래스 활용하지 않고  달력 출력하기---------------------------------------

6행7열로 구성된 2차배열을 준비하고
배열의 모든칸에 1부터 순차적으로 증가하는 값을 할당 
또, i가 0일때 j가 3보다 작다면 0을 대입하고 인덱스가 3인 위치부터 1씩 증가하는 값을 할당
또한, counter가 30보다 크다면 그 자리에는 0을 대신 할당해야 한다.
*/
console.log("\n\nDate클래스 활용하지 않고  달력 출력하기---------------------------------------------")
let data = new Array(6);
for (let i = 0; i < data.length; i++) {
    data[i] = new Array(7);
}
console.log(data);

let counter = 1;
for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
        if (i == 0 && j < 3 || counter > 30) {
            data[i][j] = 0;
        } else {
            data[i][j] = counter++;
        }
    };
};
console.log(data);

//달력모양으로 출력
for (let i = 0; i < data.length; i++) {
    let str = "";
    for (let j = 0; j < data[i].length; j++) {
        if (data[i][j] == 0) {
            str += '\t';
        } else {
            str += data[i][j] + '\t';
        }
    };
    console.log(str);
};


/* 
Date클래스 활용하여 당월의 달력을 출력하는 기본공식 코드 작성-----------------------------

이번달 1일이 몇요일부터 시작인지와 
이번달 마지막 날짜가 몇일까지 있는지를 알면 
시작날짜부터 마지막 날짜까지 숫자를 1씩 증가시켜서 달력을 완성시킬 수 있다. 
*/
console.log("\n\nDate클래스 활용하여 당월의 달력을 출력하는 기본공식 코드 작성-----------------------");
//오늘 날짜객체를 생성
const today = new Date();
//오늘 날짜가 해당하는 달의 1일로 이동
today.setDate(1);
//이번달 1일에 대한 요일이 무슨요일인지 확인
const startDay = today.getDay();
console.log("이번달 1일의 요일은 : " + startDay);
//이번달의 마지막날을 몇일인지 구하기(:다음달의 0번째 날짜를 구하면된다.)
const m = today.getMonth();
today.setMonth(0);
today.setDate(0);
const lastDate = today.getDate();
console.log("이번달 마지막날은 : " + lastDate);


//6행 7열의 빈배열 만들기
let data1 = new Array(6);
for (let i = 0; i < data1.length; i++) {
    data1[i] = new Array(7);
};
//1씩 증가할 값
let counter1 = 1;

for (let i = 0; i < data1.length; i++) {
    for (let j = 0; j < data1[i].length; j++) {
        if (i == 0 && j < startDay || counter1 > lastDate) {
            data1[i][j] = 0;
        } else {
            data1[i][j] = counter1++;
        }
    };
};

//달력 모양으로 출력
for (let i = 0; i < data1.length; i++) {
    let str1 = '';
    for (let j = 0; j < data1.length; j++) {
        str1 += data1[i][j] == 0 ? "\t" : (data1[i][j] + "\t");
    }
    console.log(str1);
}