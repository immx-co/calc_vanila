// let num = 10

// let firstName = 'Slava'

// const isProgrammer = true // commentarium

// firstName = 'Max'


const resultElement = document.getElementById('result')
const divResultElement = document.getElementById('divResult')

const firstNum = document.getElementById('input1')
const secondNum = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
let operator

resultElement.textContent = Number(firstNum.value) + Number(secondNum.value)

function printResult (res) {
    if (res < 0) {
        resultElement.style.backgroundColor = 'red'
    }

    else {
        resultElement.style.backgroundColor = 'lightblue'
    }
}


function computeNumbersWithOperator (firstInput, secondInput, operator) {
    const firstNum = Number(firstInput.value)
    const secondNum = Number(secondInput.value)

    return operator == '+' ? firstNum + secondNum : firstNum - secondNum
}

plusBtn.onclick = function () {
    operator = '+'
}


minusBtn.onclick = function () {
    operator = '-'
}


submitBtn.onclick = function () {
    const res = computeNumbersWithOperator(firstNum, secondNum, operator)
    printResult(res)
    resultElement.textContent = res
}