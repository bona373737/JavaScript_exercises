/* 
학생의 성적에 대해 아래의 요구사항을 충족하는 Student 클래스를 작성하고 각 메서드의 
실행결과를 제시시오.

요구사항
1 생성자에서 원소가 0개인 빈 배열 grade를 생성합니다.
2. setter에 학생 한명의 점수를 주입하면 grade의 원소로 추가됩니다. getter는 제공되지 않습니다. 
3. 주입된 점수의 총점과 평균을 배열로 리턴하는 getSumAvg() 함수를 제공합니다.
4. 주입된 점수 중에서 최하점과 최고점을 JSON으로 리턴하는 getMinMax() 함수를 제공합니다.
5. 주입된 점수에 대한 분산을 리턴하는 getVar() 함수를 제공합니다.
6. 주입된 점수에 대한 표준편차를 리턴하는 getStd() 함수를 제공합니다.
*/

class Student {
    constructor() {
        this._grade = new Array(0);
    }

    set grade(value) {
        this._grade.push(value);
    }

    getSumAvg() {
        let sum = 0;
        for (let i of this._grade) {
            sum += i;
        };
        const avg = sum / this._grade.length;
        const sumAvg = [sum, avg];
        return sumAvg;
    }

    getMinMax() {
        const minGrade = this._grade[0];
        for (let i; i < this._grade.length - 1; i++) {
            if (minGrade > this._grade[i + 1]) {
                minGrade = this._grade[i + 1];
            };
        };
        const maxGrade = this._grade[0];
        for (let i; i < this._grade.length + 1; i++) {
            if (maxGrade < this._grade[i + 1]) {
                maxGrade = this._grade[i + 1];
            };
        };
        return {
            minGrade: minGrade,
            maxGrade: maxGrade
        }
    }

    getVar() {
        //분산variance :편차의 제곱의 합/자료의 개수
        //편차 deviation:자료의값-평균
        let sum = 0;
        for (let i of this._grade) {
            sum += i;
        };
        const avg = sum / this._grade.length;
        let deviation = [];
        for (let i of this._grade) {
            deviation.push(i - avg);
        };
        let deviationSqrt = [];
        for (let i of deviation) {
            deviationSqrt.push(Math.sqrt());
        };
        let temp = 0;
        for (let i of deviationSqrt) {
            temp += i;
        };
        let variance = temp / this._grade.length;
        return variance;
    }

    getStd() {
        //표준편차 : 분산의 제곱근
        const standardDeviation = Math.sqrt(this.getVar());
        return standardDeviation;
    }
};

const student = new Student();
student.grade = 50;
student.grade = 60;
console.log(student._grade);
console.log("총계, 평균 : " + student.getSumAvg());
console.log("최대값, 최소값 : " + student.getMinMax());
console.log("분산값 : " + student.getVar());
console.log("표준편차 : " + student.getStd());



console.log("\n다른풀이------------------------------------------------------------");
class Student1 {
    constructor() {
        this._grade1 = [];
    }
    set grade1(v) {
        this._grade1.push(v);
    }
    getSumAvg1() {
        let sum1 = 0;
        for (const i of this._grade1) {
            sum1 += i;
        }
        return [sum1, sum1 / this._grade1.length];
    }
    getMinMax1() {
        let min = this._grade1[0];
        let max = this._grade1[0];
        for (let i = 0; i < this._grade1.length; i++) {
            const x = this._grade1[i];
            if (min > x) {
                min = x;
            }
            if (max < x) {
                max = x;
            };
        }
        return {
            "min": min,
            "max": max
        };
    }
    getVar1() {
        const avg1 = this.getSumAvg1()[1];
        let dev_sum = 0;
        for (const x of this._grade1) {
            const y = avg1 - x;
            dev_sum += y * y;
        }
        return dev_sum / this._grade1.length;
    }
    getStd1() {
        return Math.sqrt(this.getVar1())
    }
}

const student1 = new Student1();
student1.grade1 = 82;
student1.grade1 = 76;
student1.grade1 = 91;
student1.grade1 = 98;
student1.grade1 = 64;
console.log(student1._grade1);
console.log(student1.getSumAvg1());
//아래처럼 출력하면 출력된 값의 데이터타입이 구분되어 보이지는 않는구먼
console.log("getSumAvg1 : " + student1.getSumAvg1());
console.log(student1.getMinMax1());
console.log(student1.getVar1());
console.log(student1.getStd1());