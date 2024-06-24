const { parseCsvToJson } = require("./utils");
const{percentagesByCountry}=require("./countryByPercentage")
const abovePercentageFifthy=function(file){
 return file.filter(country=>parseInt(country.deathsPercentage)>15);;
}   
console.log(abovePercentageFifthy(percentagesByCountry(parseCsvToJson("./data/country_wise_latest.csv"))
));




















































































 
