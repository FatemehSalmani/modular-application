import * as calc from './operator/operator'
export function compute(operation , currentOperand , previousOperand){
let computation
    const prev = parseFloat(previousOperand)
    const current = parseFloat(currentOperand)
    if (isNaN(prev) || isNaN(current)) return
    switch (operation) {
        case '+':
          computation = calc.sum(prev , current)
        break        
      case '-':
        computation = calc.minus(prev , current)
        break
      case '*':
        computation = calc.multiply(prev , current)
        break
      case '÷':
        computation =  calc.divide(prev , current)
        break
      default:
        return
    }
    
    currentOperand = computation
    operation = undefined
    previousOperand = ''
}
    