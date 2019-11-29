export default (number , currentOperand) => {
    if (number === '.' && currentOperand.includes('.')) return
currentOperand = currentOperand.toString() + number.toString()}