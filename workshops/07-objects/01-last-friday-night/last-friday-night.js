// YOUR CODE BELOW
function lastFridayNight(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i].amount;
  }
  return total;
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

console.log(lastFridayNight(transactions));
