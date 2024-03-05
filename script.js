// Strings

// 1
const noSpace = string => string.split(' ').join('')

// 2
const removeChar = str => str.slice(1, str.length - 1)

// 3
const makeUpperCase = str => str.toUpperCase()

// Arrays

// 1

const min = function (list) {
   const sortedArr = list.sort((a, b) => a - b)

   return sortedArr[0]
}

const max = function (list) {
   const sortedArr = list.sort((a, b) => a - b)

   return sortedArr[sortedArr.length - 1]
}

// 2

function countPositivesSumNegatives(input) {
   let countOfPosNum = 0
   let sumOfNegatives = 0

   if (input == null || input.length == 0) {
      return []
   } else {
      input.forEach(elem => {
         if (elem > 0) {
            countOfPosNum++
         } else {
            sumOfNegatives += elem
         }
      })
   }

   return [countOfPosNum, sumOfNegatives]
}

// 3

function grow(x) {
   return (result = x.reduce(
      (accumulator, currentValue) => (accumulator *= currentValue)
   ))
}

// 4

function removeEveryOther(arr) {
   const resultArr = []
   for (let i = 0; i < arr.length; i += 2) {
      resultArr.push(arr[i])
   }
   return resultArr
}

// 5

function findAverage(array) {
   let sum = 0

   if (array.length === 0) {
      return 0
   }

   for (let i = 0; i < array.length; i++) {
      sum += array[i]
   }

   return sum / array.length
}
