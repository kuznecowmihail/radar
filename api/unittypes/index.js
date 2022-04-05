const dbHangler = require("../dbhangler");

module.exports = function (context, req) {
  const queryText = "SELECT [Name] FROM UnitType";
  dbHangler.executeSql(context, queryText);
};
