const randomCalc = (limit, num) => {
  if (num) {
    const randomMethod = Math.random() < 0.5 ? 'plus' : 'minus'
    if (randomMethod === 'plus') {
      const num1 = Math.round(Math.random() * limit)
      const num2 = Math.round(Math.random() * limit)
      const result = num1 + num2

      // console.log({
      //   method: randomMethod,
      //   num1,
      //   num2,
      //   result,
      // })
      console.log(`${num1}+${num2}=${result}`)
    } else {
      const num1 = Math.round(Math.random() * limit)
      const num2 = Math.round(Math.random() * limit)
      if (num1 < num2) {
        const result = num2 - num1
        // console.log({
        //   method: randomMethod,
        //   num1: num2,
        //   num2: num1,
        //   result,
        // })
        console.log(`${num2}-${num1}=${result}`)
      } else {
        const result = num1 - num2
        // console.log({
        //   method: randomMethod,
        //   num1,
        //   num2,
        //   result,
        // })
        console.log(`${num1}-${num2}=${result}`)
      }
    }
    randomCalc(limit, num - 1)
  } else {
    return false
  }
}

randomCalc(100, 100)