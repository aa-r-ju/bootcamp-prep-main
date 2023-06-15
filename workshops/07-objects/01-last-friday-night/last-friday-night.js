// YOUR CODE BELOW
function lastFridayNight(transactions) {
    let totalAmount = 0;
  
    for (let i = 0; i < transactions.length; i++) {
      let transaction = transactions[i];
      totalAmount += transaction.amount;
    }
  
    return totalAmount;
  }
  let transactions = [
    {
      name: "Tons of glitter",
      amount: 70,
    },
    {
      name: "Porcelain Pink Flamingos",
      amount: 92,
    },
    {
      name: "Chandelier replacement",
      amount: 10000,
    },
    {
      name: "Dinner at TGIF x6",
      amount: 350,
    },
  ];
  
  console.log(lastFridayNight(transactions)); // Output: 10512
  