const { parseCsvToJson } = require("./utils");
const sortDataByDate = function(data) {
  return data.sort((a, b) => {
    const dateA = new Date(a.Date);
    const dateB = new Date(b.Date);
    console.log(dateA);
    console.log(dateB);
    return dateB - dateA;
  });
};
 const data = parseCsvToJson("./data/day_wise.csv");
const sortedData = sortDataByDate(data);
console.log(sortedData);