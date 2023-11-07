import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from './constant.js';
import Validator from './Validator.js';
import GenerateRandomNum from './GenerateRandomNum.js';
import Lotto from './Lotto.js';

class App {
  inputMoney;
  lottos;

  constructor() {
    this.lottos = [];
    this.validator = new Validator();
  }

  async play() {
    Console.readLine(MESSAGE.INPUT_MONEY, this.gameStart.bind(this));
  }

  gameStart(inputMoney) {
    this.validator.validateInputMoney(inputMoney);
    this.inputMoney = Number(inputMoney);
    this.issueLotto();
  }

  issueLotto() {
    const generateRandomNum = new GenerateRandomNum();
    for (let countLotto = 0; countLotto < (this.inputMoney / 1000); countLotto++) {
      // this.lottos.push(new Lotto(generateRandomNum.generateNum()));
      this.lottos.push(generateRandomNum.generateNum());
    }
    Console.print(this.lottos);
  }
}

export default App;
