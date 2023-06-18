function mySplice(arr, startIdx, rmvNo, addElement) {
  let newArray = []
  let deleteElements = []
  for (let k = 0; k < startIdx; k++) {
      newArray.push(arr[k])
  }
  if (addElement !== undefined) {
      newArray.push(addElement)
  }
  for (let i = startIdx; i < startIdx + rmvNo; i++) {
      deleteElements.push(arr[i])
  }
  for (let j = startIdx + rmvNo; j < arr.length; j++) {
      newArray.push(arr[j])
  }
  for (let k = 0; k < arr.length; k++) {
      arr.pop()
  }
  for (let i = 0; i < newArray.length; i++) {
      arr[i] = newArray[i]
  }
  // console.log(deleteElements)
  // console.log(newArray)
  return deleteElements
}
// mySplice([1, 2, 3], 1, 1, 'mangoes')
// let arr = [1, 2, 3, 4, 5, 6, 7]
// mySplice(arr, 1, 2)
// console.log(arr)