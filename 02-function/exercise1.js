/* 
## 문제1.
아래의 형태로 출력하는 함수를 구현하시오.
```js
// max는 출력해야 할 최대 라인 수
function printStar(max) {
    ... 구현하세요 ...
}
printStar(5)
```
#### 출력결과
```
*
**
***
****
*****
```
 */
console.log('이중for문 사용한 풀이-------------------------------------------------');

function printStar1() {
    for (let i = 0; i < 5; i++) {
        let str = ""
        for (let j = 0; j < i + 1; j++) {
            str += '*';
        }
        console.log(str);
    }
}
printStar1();

console.log('재귀함수를 사용한 풀이 ------------------------------------------------');

function printStar2(level, depth = 0) {
    let str = '';
    if (depth < 5) {

        for (let i = 0; i < depth + 1; i++) {
            str += '*';
        }
        console.log(str);
        printStar2(level, depth + 1);
    }
}
printStar2(5);