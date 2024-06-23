const {parseCsvToJson, calculatePercentage} = require("./utils");

const getDeathsPerMonth=function(data){
    const deathsPerMonth={};

    data.forEach(country => {
        const date=new Date(country.Date);
        const month=date.getMonth()+1;
        const year=date.getFullYear();
        const monthYear=`${year}-${month<10?'0':''}${month}`;

       const deaths=parseInt(country.Deaths)||0;
       if(!deathsPerMonth[monthYear]){
        deathsPerMonth[monthYear]=0;
       }
        deathsPerMonth[monthYear]+=deaths;
    });
    return deathsPerMonth;
}
 console.log(getDeathsPerMonth(parseCsvToJson("./data/day_wise.csv")));
