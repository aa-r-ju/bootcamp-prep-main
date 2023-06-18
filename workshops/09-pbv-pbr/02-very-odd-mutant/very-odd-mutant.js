function veryOddMutant(arr) {
  let count = 0
  for (let i = 0; i < arr.length; i++) {
      if (!(arr[i] % 2)) {
          arr[i] = 'normie'
          count++
      }
  }
  console.log(arr)
  return count
}

veryOddMutant([1, 2, 3, 4, 5, 6, 7, 8])