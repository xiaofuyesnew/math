// 0 - -
// 1 - +
// 2 + +
// 3 + -
const getMethods = () => Math.floor(Math.random() * 4)

const hasBracket = () => Math.random() < 0.5

const getRandomNumber = () => Math.round(Math.random() * 88 + 11)

const getRandomArray = () => Array(3).fill(1).map(item => getRandomNumber())

const generateElement = () => {
  const method = getMethods()
  const bracket = hasBracket()
  const array = getRandomArray()
  console.log(method, bracket, array)

  if (bracket) {
    switch (method) {
      case 0:
        if (array[1] <= array[2] || array[0] <= array[1] - array[2]) {
          return generateElement()
        }
        return `${array[0]}-(${array[1]}-${array[2]})`
      case 1:
        if (array[1] + array[2] > 99 || array[0] <= array[1] + array[2]) {
          return generateElement()
        }
        return `${array[0]}-(${array[1]}+${array[2]})`
      case 2:
        if (array[0] + array[1] + array[2] > 99) {
          return generateElement()
        }
        return `${array[0]}+(${array[1]}+${array[2]})`
      case 3:
        if (array[1] <= array[2] || array[0] + (array[1] - array[2]) > 99) {
          return generateElement()
        }
        return `${array[0]}+(${array[1]}-${array[2]})`
    }
  } else {
    switch (method) {
      case 0:
        if (array[0] <= array[1] || array[0] - array[1] <= array[2]) {
          return generateElement()
        }
        return `${array[0]}-${array[1]}-${array[2]}`
      case 1:
        if (array[0] <= array[1] || array[0] - array[1] + array[2] > 99) {
          return generateElement()
        }
        return `${array[0]}-${array[1]}+${array[2]}`
      case 2:
        if (array[0] + array[1] + array[2] > 99) {
          return generateElement()
        }
        return `${array[0]}+${array[1]}+${array[2]}`
      case 3:
        if (array[0] + array[1] > 99 || array[0] + array[1] <= array[2]) {
          return generateElement()
        }
        return `${array[0]}+${array[1]}-${array[2]}`
    }
  }
}

export const generateList = (num) => {
  const list = []
  for (let i = 0; i < num; i++) {
    const element = generateElement()
    console.log(element)
    list.push(element)
  }
  return list
}
