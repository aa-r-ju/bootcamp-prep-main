// YOUR CODE BELOW
function billerBuilder(state) {
    if (state === 'NY') {
      return function(price) {
        let shippingCost = price * 0.03;
        let tax = (price + shippingCost) * 0.04;
        let finalPrice = price + shippingCost + tax;
        return finalPrice;
      };
    } else if (state === 'NJ') {
      return function(price) {
        let shippingCost = price * 0.05;
        let tax = (price + shippingCost) * 0.06625;
        let finalPrice = price + shippingCost + tax;    
        return finalPrice;
      };
    } else {
      return function(price) {
        return price; 
      };
    }
  }
  
  let newYorkBiller = billerBuilder('NY');
  console.log(newYorkBiller(100)); // Output: 107.12
  
  let newJerseyBiller = billerBuilder('NJ');
  console.log(newJerseyBiller(100)); // Output: 111.95625