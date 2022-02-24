/* 
양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 한다.
예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수이다.
자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수,
solution을 완성하여 아래의 테스트 코드에 대한 출력 결과를 만드시오. 
*/

//함수 파라미터 x값의 자료형을 입력받은 대로 숫자값으로 그래도 두고 풀이함
function solution(x) {
    let originX = x;
    let sum = 0;
    while (x >= 10) {
        if (x >= 10) {
            sum += parseInt(x / 10);
            x -= (parseInt(x / 10) * 10);
            if (x < 10) {
                sum += x;
            }
        }
    }
    const result = originX % sum === 0 ? true : false;
    return result;
};

console.log(solution(10));
console.log(solution(12));
console.log(solution(11));
console.log(solution(13));



console.log("다른풀이----------------------------------------------");
// 자료형 변환하여 사용하는 것을 잘 활용 하자!!
// 함수 파라미터 x값의 자료형을 String으로 변환하여 String배열을 반복문 돌려서 합계구함
const solution1 = x => {
    const sx = new String(x);

    let sum = 0;
    for (const s of sx) {
        sum += parseInt(s);
    }
    return x % sum == 0 ? true : false;
}

console.log(solution1(10));
console.log(solution1(12));
console.log(solution1(11));
console.log(solution1(13));