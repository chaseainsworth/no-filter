/******************
 * YOUR CODE HERE *
 ******************/


const onlyOdds = function(arr) {
  let result = [];
  
  for (const arrIndex of arr) {
    if (arrIndex % 2 === 1)

    result.push(arrIndex)
  }
  
  return result;
  }

  const onlyEvens = function(arr) {
    let result = [];
  
  for (const arrIndex of arr) {
    if (arrIndex % 2 === 0)
    
    result.push(arrIndex)
  }
  return result;
  }

  const shortNamesOnly = function(arr) {
    let result = [];

    for (const arrIndex of arr) {
      if (arrIndex.length <= 6) {
        result.push(arrIndex)
      }
    }

    return result;
  }

  const dNames = function(arr) {
    let result = [];

    for (const arrIndex of arr) {
      if (arrIndex[0].includes("D" || "d")) {
        result.push(arrIndex);
      }
    }
    return result;
  }


/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof onlyOdds === 'undefined') {
  onlyOdds = undefined;
}

if (typeof onlyEvens === 'undefined') {
  onlyEvens = undefined;
}

if (typeof shortNamesOnly === 'undefined') {
  shortNamesOnly = undefined;
}

if (typeof dNames === 'undefined') {
  dNames = undefined;
}


module.exports = {
  onlyOdds,
  onlyEvens,
  shortNamesOnly,
  dNames,
}
