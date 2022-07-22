// import {} './'

type Operator = '+' |'-';


let twoNumber: number[] = getTwoNumbers();
let gameOperator: Operator = getRandomOperator();  
let totalSum: number = total(twoNumber, gameOperator);

function getRandomOperator(): Operator {
    const operators: Operator[] = ['-', '+'];
    const index = generateRandomInt(0, operators.length - 1);
    return operators[index]
};

function generateRandomInt(min: number, max: number): number { 
    return Math.floor(Math.random() * (max + 1 - min) + min) // 0 - 1
};

function getTwoNumbers(): number[] {
    const num1 = generateRandomInt(1, 100);
    const num2 = generateRandomInt(1, 100);

    return [num1, num2,] ;
};

function total([number1, number2]: number[], operator: Operator): number {

    if(operator == '+') {
        return number1 + number2
    } else {
        return number1 - number2
    }
}

export function addHtmlText(elem: HTMLHeadingElement) {
    elem.textContent = createHtmlText(gameOperator, twoNumber);
    console.log('TOTAL', totalSum);
}

function createHtmlText(operator: Operator ,[number1, number2]: number[]): string {
    return `${number1}${operator}${number2}`
}

export function initStart(elem: HTMLHeadingElement, input: HTMLInputElement) {
    
    
    
    let inputValue = Number(input.value);
    
    if(!(inputValue === 0) && inputValue === totalSum) {
        console.log('ok');
        // console.log('Input',inputValue,  'Result', totalSum);

        twoNumber = getTwoNumbers();
        gameOperator = getRandomOperator();  
        totalSum = total(twoNumber, gameOperator)

        console.log('TOTAL', totalSum);

        elem.textContent = createHtmlText(gameOperator, twoNumber);
        return true
    } else {
       console.log('no');
       return false
    }
}




