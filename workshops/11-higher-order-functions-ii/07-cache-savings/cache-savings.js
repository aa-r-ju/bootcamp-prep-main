// YOUR CODE BELOW
function cacheSavings(callback) {
    const cache = {};
  
    return function(arg) {
      if (cache.hasOwnProperty(arg)) {
        return cache[arg];
      } else {
        const result = callback(arg);
        cache[arg] = result;
        return result;
      }
    };
  }
  
  function adds10(num) {
    let start = Date.now();
    let end = Date.now();
  
    // pause for 3 seconds, to make the function expensive!
    while (end - start < 3000) {
      end = Date.now();
    }
  
    return num + 10;
  }
  
  let cachedAdds10 = cacheSavings(adds10);
  
  console.log(cachedAdds10(20)); // Output: 30 (takes 3 seconds)
  console.log(cachedAdds10(0)); // Output: 10 (takes 3 seconds)
  
  console.log(cachedAdds10(20)); // Output: 30 (takes no time at all)