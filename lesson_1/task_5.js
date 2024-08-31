// 5. **Калькулятор**
    
//     На вход два числа и название операции:
    
//     addition
//     difference
//     multiplication
//     division
//     modulo division
    
//     Выдаем их результат
// ----------------------------------------------------------------------------------------------------

const addition = (firstNumber, secondNumber) => {
    return firstNumber + ' + ' + secondNumber + ' = ' + Number(firstNumber + secondNumber)
}

const difference = (firstNumber, secondNumber) => {
    return firstNumber + '- ' + secondNumber + ' = ' + Number(firstNumber - secondNumber)
}

const multiplication = (firstNumber, secondNumber) => {
    return firstNumber + ' * ' + secondNumber + ' = ' + Number(firstNumber * secondNumber)
}

const division = (firstNumber, secondNumber) => {
    return firstNumber + ' / ' + secondNumber + ' = ' + Number(firstNumber / secondNumber)
}

const moduloDivision = (firstNumber, secondNumber) => {
    return firstNumber + ' % ' + secondNumber + ' = ' + Number(firstNumber % secondNumber)
}

console.log(addition(3, 4))
console.log(difference(3, 4))
console.log(multiplication(3, 4))
console.log(division(3, 4))
console.log(moduloDivision(3, 4))