const { log } = require("console");
const fs = require("fs");
const fileName = "countryNames.txt";
let countries;//array for countries

function readFile() {
  const data = fs.readFileSync(fileName).toString();
  countries = data.split("\r");
  console.log(countries);
}
readFile();