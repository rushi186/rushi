// Problem 7
//  * 
//  * Get all deaths that happened after 29 Feb 2020
//  * 
//  * output: 1000
const { parseCsvToJson } = require("./utils");

const getDeathsAfterFeb2020 = function (data) {
  const targetDate = new Date('2020-02-29');

  return data.reduce((acc, country) => {
    if (new Date(country.Date) > targetDate) {
      return acc + parseInt(country.Deaths);
    }

    return acc;
  }, 0);
}

console.log(getDeathsAfterFeb2020(parseCsvToJson('./data/day_wise.csv')));
