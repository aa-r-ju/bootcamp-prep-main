// YOUR CODE BELOW
let tacoCatInc = {
  gourmetShell: {
    'hard treat shell': { cost: 2, quantity: 100 },
    'soft treat shell': { cost: 1.5, quantity: 100 }
  },
  gourmetFishFilling: {
    salmon: { cost: 5, quantity: 100 },
    tuna: { cost: 5.5, quantity: 100 },
    sardines: { cost: 1.5, quantity: 100 }
  },
  gourmetVeggie: {
    'cat grass': { cost: 1, quantity: 100 }
  },
  gourmetSeasoning: {
    'cat nip': { cost: 0.5, quantity: 100 },
    'treat dust': { cost: 0.1, quantity: 100 }
  },
  cash: 0,
  
  currentInventory: function() {
    let inventoryValue = 0;
    
    for (let ingredientCategory in this) {
      if (typeof this[ingredientCategory] === 'object') {
        for (let ingredient in this[ingredientCategory]) {
          let item = this[ingredientCategory][ingredient];
          console.log("item",item)
          inventoryValue += item.cost * item.quantity;
        }
      }
    }
    console.log("inv",inventoryValue)
    return inventoryValue;
  },
  
  sale: function(order) {
    let totalPrice = 0;
    
    for (let ingredientCategory in order) {
      let ingredient = order[ingredientCategory];
      
      if (this[ingredientCategory] && this[ingredientCategory][ingredient] && this[ingredientCategory][ingredient].quantity > 0) {
        let item = this[ingredientCategory][ingredient];
        item.quantity--;
        totalPrice += item.cost;
      }
    }
    
    this.cash += totalPrice;
    return totalPrice;
  }
};

console.log(tacoCatInc.currentInventory()); // => 1710

let order = {
  gourmetShell: 'hard treat shell',
  gourmetFishFilling: 'salmon'
};

console.log(tacoCatInc.sale(order)); // => 7
console.log(tacoCatInc.sale(order)); // => 7

console.log(tacoCatInc.gourmetFishFilling.tuna.quantity); // => 98
console.log(tacoCatInc.cash); // => 14

console.log(tacoCatInc.currentInventory()); // => 1696
