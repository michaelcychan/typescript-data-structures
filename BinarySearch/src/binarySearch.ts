export const binarySearch = (sortedArray:(number|string)[], target:number|string):number => {
  if (sortedArray.length === 0) {
    return -1
  }
  if (typeof sortedArray[0] !== typeof target) {
    throw "target type is different from array element type"
  }
  if (!isSortedCorrectly(sortedArray)) {
    throw "array is not sorted ascendingly"
  }

  const bs = (sortedArray:(number|string)[], target:string|number, head:number, tail:number):number => {
    while (head < tail){
      const mid = Math.floor((head + tail) / 2);
      if (sortedArray[mid] === target) {
        return mid
      } else if (target < sortedArray[mid]) {
        return bs(sortedArray, target, head, mid)
      } else {
        return bs(sortedArray, target, mid +1, tail)
      }
    }
    return -1
  }

  return bs(sortedArray, target, 0, sortedArray.length)
  
}



const isSortedCorrectly = (arr: (string|number)[]):boolean => {
  const original = [...arr]
  if (typeof arr[0] === "number") {
    (arr as number[]).sort((a,b) => a - b)
  } else {
    arr.sort()
  }
  return original.toString() === arr.toString()
} 