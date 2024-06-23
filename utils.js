const Papa = require("papaparse");
const fs = require("fs");

// Parse local CSV file
const parseCsvToJson = function (fileName) {
  const { data } = Papa.parse(fs.readFileSync(fileName, "utf-8"), {
    complete: function () {
      console.log("CSV parsed successfully");
    },
    header: true,
  });

  return data;
};

const calculatePercentage = function (part, total) {
  return ((part / total) * 100).toFixed(2) + "%";
};
module.exports = { parseCsvToJson, calculatePercentage };

