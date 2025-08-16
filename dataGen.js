var fs = require("fs");

const props = [
  "COMPANY_NAME",
  "BUSINESS_ADDRESS",
  "CLIENT_FULL_NAME",
  "JOB_DESIGNATION",
  "GEOGRAPHIC_REGION",
  "SUB_REGION_CODE",
  "PRODUCT_CATEGORY",
  "SERVICE_DEPARTMENT",
  "ACCOUNT_MANAGER",
  "PROJECT_STATUS",
  "INDUSTRY_SECTOR",
  "CUSTOMER_SEGMENT",
  "SALES_TERRITORY",
  "BUSINESS_UNIT",
  "CONTRACT_TYPE",
  "VENDOR_CLASSIFICATION",
  "TRANSACTION_CATEGORY",
  "OPERATIONAL_DIVISION",
  "MARKET_SEGMENT",
  "DISTRIBUTION_CHANNEL",
];

var input = {};
input.data = [];

for (let i = 0; i < 1000; i++) {
  const obj = {};
  for (let prop of props) {
    const idx = Math.floor(Math.random() * 20.0 + 1.0);
    obj[prop] = `${prop}-${idx}`;
  }
  input.data.push(obj);
}

fs.writeFile("input.json", JSON.stringify(input), function (err) {
  if (err) throw err;
  console.log("complete");
});
