/* 
## 문제4
상품의 가격을 원소로 갖는 1차 배열 price와 각 상품의 수량을 원소로 갖는 1차 배열 qty를   
다음과 같이 정의하였을 때 이 사람이 총 얼마를 결제해야 하는지   
총 결제금액을 구하는 프로그램을 작성하시오   
let price = [38000, 20000, 17900, 17900];   
let qty = [6,4,3,5];   

(이런종류의 문제는 두배열의 길이가 동일하다는 것이 전제가 되어야 한다!!)
 */
const price = [38000, 20000, 17900, 17900];
const qty = [6, 4, 3, 5];


const priceLength = price.length;
let sum = 0;
for (let i = 0; i < priceLength; i++) {
    sum += price[i] * qty[i];
}
console.log('총 결제금액 : ' + sum);