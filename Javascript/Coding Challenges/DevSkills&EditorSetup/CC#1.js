const printForecast = (temperatures) => {
  for (let i = 0; i < temperatures.length; i++) {
    console.log(`${temperatures[i]}ºC in ${i + 1} days...`);
  }
};

// Test Data 1
printForecast([17, 21, 23]);

// Test Data 2
printForecast([12, 5, -5, 0, 4]);
