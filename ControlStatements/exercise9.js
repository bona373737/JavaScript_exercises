/* 
동수는 제과점에 과자를 사러 가는데 현재 가진 돈이 모자랄 경우 부모님께 모자란 돈을 받으려고 한다. 
과자 한 개의 가격이 K, 사려고 하는 과자의 개수가 N, 현재 가진 돈의 액수를 M이라 할 때 
여러분은 동수가 부모님께 받아야 하는 모자란 돈을 계산하려고 한다. 

과자 한 개의 가격, 사려고 하는 과자의 개수와 동수가 현재 가진 돈의 액수가 주어질 때 동수가 
부모님께 받아야 하는 돈의 액수를 리턴하는 함수 solution을 작성하고 리턴값을 출력하시오. 
*/

function solution(k, n, m) {
    const K = k; //과자 한개 가격
    const N = n; //과자 개수
    const M = m; // 현재가진 돈

    const totalPrice = K * N;
    const moreMoney = totalPrice > M ? totalPrice - M : 0;

    console.log("동수가 부모님께 받아야 하는 돈은 %d원 입니다.", moreMoney);

    // if(totalPrice > M){
    //     moreMoney = totalPrice - M;
    //     console.log("동수가 부모님께 받아야 하는 돈은 %d원 입니다.",moreMoney);
    // }else{
    //     console.log("동수가 부모님께 받야야 하는 동은 0원 입니다.",moreMoney);
    // }

};
solution(30, 4, 100);
solution(250, 2, 140);
solution(20, 6, 120);
solution(20, 10, 320);