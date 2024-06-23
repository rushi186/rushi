const { parseCsvToJson } = require("./utils");

const calculateMarchDeaths = function(data) {
  const startDate = new Date('2020-03-01');
  const endDate = new Date('2020-04-01');
  
  const marchData = data.filter(entry => {
    const date = new Date(entry.Date);
    return date >= startDate && date < endDate;
  });

  const totalDeathsInMarch = marchData.reduce((sum, entry) => {
    return sum + (parseInt(entry.Deaths) || 0);
  }, 0);

  return totalDeathsInMarch;
};

 console.log(calculateMarchDeaths(parseCsvToJson("./data/covid_19_clean_complete.csv")));
