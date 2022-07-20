type Operator = '+' |'-';


function getRandomOperator(): Operator {
    const operators: Operator[] = ['-', '+'];
    const index = generateRandomInt(0, operators.length - 1);
    return operators[index]
};

export function generateRandomInt(min: number, max: number): number { 
    return Math.floor(Math.random() * (max + 1 - min) + min) // 0 - 1
};

export function createTwoNumbers(): [number, number] {
    const num1 = generateRandomInt(1, 100);
    const num2 = generateRandomInt(1, 100);

    return [num1, num2]
};



 export function checkTrueValue(input: HTMLInputElement) {

    const inputNumber = Number(input.value)
    
    console.log(inputNumber);

    if(!(inputNumber == 0)) {
        console.log('Yes');
        
    } else {
        console.log('No');
        
    }
    
    
 
};



