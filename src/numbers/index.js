const isEven = (num) => {
  if (num % 2 === 0) {
    return true 
  } else {
    return false
  }

}

const sum = (arr) => {
  let newSum = arr.reduce((acc, current) => acc + current, 0);
  return newSum
}

const comboSum = (arr, sum) => {
  let returnedSum;
  for (num of arr) {
    for (let i = 0; i < arr.length; i++) {
      // console.log(arr[i], num, sum)
      if (num + arr[i] === sum) {
        returnedSum = true;
        return returnedSum;
      }
    }
  }
  if (returnedSum) {
    return true;
  } else {
    return false
  }

}

module.exports = {
  isEven,
  sum,
  comboSum
}

// comboSum([1, 3, 6, 2, 9], 14)