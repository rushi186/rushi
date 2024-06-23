const {parseCsvToJson, calculatePercentage} = require("./utils");

const percentagesByCountry=function(data)
{  
  const result=[];
  data.forEach(country => {
  
    const totalConfirmed = parseInt(country.Confirmed) || 0;
    const totalDeaths = parseInt(country.Deaths) || 0;
    const totalRecovered = parseInt(country.Recovered) || 0;
    const totalActive = totalConfirmed - totalDeaths - totalRecovered;

    // Calculate percentages
    const deathsPercentage = totalConfirmed > 0 ? ((totalDeaths / totalConfirmed) * 100).toFixed(2) + '%' : '0%';
    const recoveredPercentage = totalConfirmed > 0 ? ((totalRecovered / totalConfirmed) * 100).toFixed(2) + '%' : '0%';
    const activePercentage = totalConfirmed > 0 ? ((totalActive / totalConfirmed) * 100).toFixed(2) + '%' : '0%';
    
    result.push({
      countryName: country['Country/Region'],
      totalConfirmedCases: totalConfirmed,
      deathsPercentage: deathsPercentage,
      recoveredPercentage: recoveredPercentage,
      activePercentage: activePercentage
    }
  )});
  return result;
};
//console.log(percentagesByCountry(parseCsvToJson("./data/country_wise_latest.csv")));
module.exports={percentagesByCountry};