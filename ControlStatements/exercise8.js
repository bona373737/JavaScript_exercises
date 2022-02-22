/* 
양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 한다.
예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수이다.
자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수,
solution을 완성하여 아래의 테스트 코드에 대한 출력 결과를 만드시오. 
*/

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