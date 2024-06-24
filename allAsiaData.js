const {parseCsvToJson}=require("./utils")
const findByitRegiom=function(data,asia)
{
    const result=[];
    data.filter(country =>{if(asia.includes(country['Country/Region'])){
        result.push(country)
    }
});
    return result;
}
const asia=['India','Japan','Iran','China']
console.log(findByitRegiom(parseCsvToJson("./data/country_wise_latest.csv"),asia))