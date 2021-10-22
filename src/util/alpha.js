export const randomCalc = (limit, num, arr = []) => {
  if (num) {
    const randomMethod = Math.random() < 0.5 ? 'plus' : 'minus'
    const num1 = Math.round(Math.random() * limit)
    const num2 = Math.round(Math.random() * limit)
    if (randomMethod === 'plus') {
      if (
        arr.some(
          (item) =>
            item.num1 === num1 && item.num2 === num2 && item.method === 'plus'
        )
      ) {
        return randomCalc(limit, num, arr)
      } else {
        arr.push({
          method: randomMethod,
          num1,
          num2,
          result: num1 + num2,
        })
        return randomCalc(limit, num - 1, arr)
      }
    } else {
      if (num1 < num2) {
        if (
          arr.some(
            (item) =>
              item.num1 === num2 &&
              item.num2 === num1 &&
              item.method === 'minus'
          )
        ) {
          return randomCalc(limit, num, arr)
        } else {
          arr.push({
            method: randomMethod,
            num1: num2,
            num2: num1,
            result: num2 - num1,
          })
          return randomCalc(limit, num - 1, arr)
        }
      } else {
        if (
          arr.some(
            (item) =>
              item.num1 === num1 &&
              item.num2 === num2 &&
              item.method === 'minus'
          )
        ) {
          return randomCalc(limit, num, arr)
        } else {
          arr.push({
            method: randomMethod,
            num1,
            num2,
            result: num1 - num2,
          })
          return randomCalc(limit, num - 1, arr)
        }
      }
    }
  } else {
    return arr
  }
}

export default randomCalc
