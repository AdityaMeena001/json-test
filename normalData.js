const { groupBy } = require("lodash");
var fs = require("fs");

function runLodash() {
  const input = JSON.parse(fs.readFileSync("input.json", "utf8"));
  const data = input.data;

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

  const groupedData = groupBy(data, props[0]);
  //   for (let prop of props) {

  // fs.writeFile(
  //   `groupedData${prop}.json`,
  //   JSON.stringify(groupedData),
  //   function (err) {
  //     if (err) throw err;
  //     console.log("complete");
  //   }
  // );
  //   }
}

module.exports = { runLodash };
