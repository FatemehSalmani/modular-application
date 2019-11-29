import compute from'./compute'
export default (operation , currentOperand , previousOperand) => {
    if (currentOperand === '') return
    if (previousOperand !== '') {
     compute(operation , currentOperand , previousOperand)
    }
    operation = operation
    previousOperand = currentOperand
    currentOperand = ''
}