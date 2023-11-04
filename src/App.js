import { Console, MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGE, MESSAGE_INPUT } from "./constants/constant.js";

class App {
  async play() {
    // 보유 금액 입력 - 유효한지 확인하는 코드 추가하기
    const userMoney = await Console.readLineAsync(MESSAGE.START);
    const randomCount = (userMoney / 1000);
    Console.print(MESSAGE_INPUT(randomCount).COUNT);
    
    // 랜덤한 6개 번호를 randomCount 개수만큼 출력
    // 동일한 값 나왔을때의 예외처리 테스트 필요
    let userRandomNums = [];
    let count = 0;
    
    while (1) {
      const randomNums = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      randomNums.sort((a, b) => a - b); // 오름차순 정렬
      if (!randomNums.includes(userRandomNums)) {
        userRandomNums.push(randomNums);
        Console.print(randomNums)
        count++;
      }
      if (count === randomCount) {
        break
      }
    };



    // 당첨 번호 입력 - 유효한지 확인하는 코드 추가하기
    const winningNums = await Console.readLineAsync(MESSAGE.WINNING_INPUT);
    

    // 보너스 번호 입력 - 유효한지 확인하는 코드 추가하기
    const bonusNums = await Console.readLineAsync(MESSAGE.BONUS_INPUT);
    
    // 당첨 확인
    let winningThree = 0;
    let winningFour = 0;
    let winningFive = 0;
    let winningBonus = 0;
    let winningSix = 0;
    
    // 통계
    Console.print(MESSAGE.CALC);
    Console.print(MESSAGE_INPUT(winningThree).RANK_THREE);
    Console.print(MESSAGE_INPUT(winningFour).RANK_FOUR);
    Console.print(MESSAGE_INPUT(winningFive).RANK_FIVE);
    Console.print(MESSAGE_INPUT(winningBonus).RANK_BONUS);
    Console.print(MESSAGE_INPUT(winningSix).RANK_SIX);
    
    // 수익률 계산
    // 깔끔하게 수정하기
    const sums = 5000 * winningThree + 50000 * winningFour + 1500000 * winningFive
    + 30000000 * winningBonus + 2000000000 * winningSix
    const rate = (1000000 / userMoney).toFixed(1);
    Console.print(MESSAGE_INPUT(rate).RATE);
    
  }
}

export default App;
