function taxCalculator(price, state) {
  if (state === "NY") {
    return (4 / 100) * price + price;
  } else {
    return (6.625 / 100) * price + price;
  }

  //console.log(4 / price + 100, 6.625 / price + 100);
  //  return 4 / price + 100, 6.625 / price + 100;
  //console.log(6.625/price + 100);
  // return 6.625 / 100 + 100;
}
console.log(taxCalculator(50, "NY"));
console.log(taxCalculator(50, "NJ"));
