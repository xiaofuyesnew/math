export const randomCalc = (limit, num, arr = []) => {
  if (num) {
    const randomMethod = Math.random() < 0.5 ? 'plus' : 'minus'
    if (randomMethod === 'plus') {
      const num1 = Math.round(Math.random() * limit)
      const num2 = Math.round(Math.random() * limit)
      const result = num1 + num2
      arr.push({
        method: randomMethod,
        num1,
        num2,
        result,
      })
    } else {
      const num1 = Math.round(Math.random() * limit)
      const num2 = Math.round(Math.random() * limit)
      if (num1 < num2) {
        const result = num2 - num1
        arr.push({
          method: randomMethod,
          num1: num2,
          num2: num1,
          result,
        })
      } else {
        const result = num1 - num2
        arr.push({
          method: randomMethod,
          num1,
          num2,
          result,
        })
      }
    }
    return randomCalc(limit, num - 1, arr)
  } else {
    return arr
  }
}

export default randomCalc
