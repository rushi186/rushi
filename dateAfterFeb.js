// Problem 7
//  * 
//  * Get all deaths that happened after 29 Feb 2020
//  * 
//  * output: 1000
const { parseCsvToJson } = require("./utils");

const getDeathsAfterFeb2020 = function(data) {
  const targetDate = new Date('2020-06-01');
  let totalDeaths = 0;
 data.forEach(country => {
const entryDate=new Date(country.Date);
if (entryDate > targetDate) {
    totalDeaths += parseInt(country.Deaths) || 0;
  }
});
return totalDeaths;
    
 }
console.log(getDeathsAfterFeb2020(parseCsvToJson('./data/day_wise.csv')));