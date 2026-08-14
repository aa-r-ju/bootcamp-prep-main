let tacoCatInc = {
  gourmetShell: {
    "hard treat shell": { cost: 2, quantity: 100 },
    "soft treat shell": { cost: 1.5, quantity: 100 },
  },

  gourmetFishFilling: {
    salmon: { cost: 5, quantity: 100 },
    tuna: { cost: 5.5, quantity: 100 },
    sardines: { cost: 1.5, quantity: 100 },
  },

  gourmetVeggie: {
    "cat grass": { cost: 1, quantity: 100 },
  },

  gourmetSeasoning: {
    "cat nip": { cost: 0.5, quantity: 100 },
    "treat dust": { cost: 0.1, quantity: 100 },
  },

  cash: 0,

  currentInventory: function () {
    let sum = 0;
    for (let keys in tacoCatInc) {
      if (typeof tacoCatInc[keys] === "object") {
        for (let key in tacoCatInc[keys]) {
          if (typeof tacoCatInc[keys][key] === "object") {
            let num = 0;

            for (let id in tacoCatInc[keys][key]) {
              if (id === "cost") {
                num = tacoCatInc[keys][key][id];
              } else if (id === "quantity") {
                sum += num * tacoCatInc[keys][key][id];
              }
            }
          }
        }
      }
    }
    return sum;
  },
  sale: function (obj) {
    let cost = 0;
    for (let keys in obj) {
      if (keys in tacoCatInc) {
        if (obj[keys] in tacoCatInc[keys]) {
          let kk = obj[keys];
          tacoCatInc[keys][kk].quantity -= 1;
          cost += tacoCatInc[keys][kk].cost;
        }
      }
    }
    tacoCatInc.cash += cost;
    return cost;
  },
};

// YOUR CODE BELOW
// let order = {
//   gourmetShell: "soft treat shell",
//   gourmetFishFilling: "tuna",
//   gourmetVeggie: "cat grass",
//   gourmetSeasoning: "treat dust",
// };
// let kk = tacoCatInc.sale(order);
// console.log(kk);
// console.log(tacoCatInc.gourmetShell["soft treat shell"].quantity);
// console.log(tacoCatInc.gourmetShell["hard treat shell"].quantity);
// console.log(tacoCatInc.gourmetFishFilling.salmon.quantity);
// console.log(tacoCatInc.gourmetFishFilling.tuna.quantity);
// console.log(tacoCatInc.gourmetFishFilling.sardines.quantity);
// console.log(tacoCatInc.gourmetVeggie["cat grass"].quantity);
// console.log(tacoCatInc.gourmetSeasoning["cat nip"].quantity);
// console.log(tacoCatInc.gourmetSeasoning["treat dust"].quantity);
// console.log(tacoCatInc.currentInventory());
