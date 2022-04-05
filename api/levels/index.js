const dbHangler = require("../dbhangler");

module.exports = function (context, req) {
  const queryText = "SELECT [Name] FROM [Level]";
  dbHangler.executeSql(context, queryText);
};
