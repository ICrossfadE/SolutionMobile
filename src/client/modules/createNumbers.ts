// import {} './'

type Operator = "+" | "-";

let twoNumber: [number, number] = getTwoNumbers();
let gameOperator: Operator = getRandomOperator();
let totalSum: number = total(twoNumber, gameOperator);

//(- || +)
function getRandomOperator(): Operator {
  const operators: Operator[] = ["-", "+"];
  const index = generateRandomInt(0, operators.length - 1);
  return operators[index];
}

// 0 - 1
function generateRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

//number1 - 1-100
//number2 - 1-100
function getTwoNumbers(): [number, number] {
  const num1 = generateRandomInt(1, 100);
  const num2 = generateRandomInt(1, 100);

  return [num1, num2];
}

function total([number1, number2]: [number, number], operator: Operator): number {
  if (operator == "+") {
    return number1 + number2;
  } else {
    return number1 - number2;
  }
}

export function scoreTotal(userScore: number, elem: HTMLDivElement): number {
  const experiencePoint = 25;

  elem.textContent = `${String((userScore += experiencePoint))} xp`;

  return userScore;
}

export function addHtmlText(elem: HTMLHeadingElement): void {
  elem.textContent = createHtmlText(gameOperator, twoNumber);
}

function createHtmlText(operator: Operator, [number1, number2]: [number, number]): string {
  return `${number1}${operator}${number2}`;
}

function createNewTask(taskElem: HTMLHeadingElement): void {
  twoNumber = getTwoNumbers();
  gameOperator = getRandomOperator();
  totalSum = total(twoNumber, gameOperator);

  console.log("TOTAL", totalSum);
  addHtmlText(taskElem);
}

export function initStart(elem: HTMLHeadingElement, input: HTMLInputElement): boolean {
  let inputValue = Number(input.value);

  if (inputValue === totalSum) {
    createNewTask(elem);
    return true;
  } else {
    input.value = "";
    createNewTask(elem);
    return false;
  }
}
