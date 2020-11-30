const split = (str, delim) => {
  return str.split(delim);
}

const pairs = (str) => {
  let pairArr = [];
  for(let i = 0; i<str.length; i = i + 2) {
    let strSlice = str.slice(i, i+2)
    // console.log(strSlice)
    pairArr.push(strSlice)
    // console.log([pairArr)
  };
  // console.log(pairArr)
  return pairArr;
}

const reverse = (str) => {
  let splitStr = str.split('');
  // console.log(splitStr)
  splitStr.reverse();
  // console.log(splitStr)
  let newStr = splitStr.join('');
  // console.log(newStr)
  return newStr;
}

module.exports = {
  split,
  pairs,
  reverse
}

// pairs('abcdefghijklmnop')
// reverse('a blue dog')