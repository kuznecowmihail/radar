const dbHangler = require("../dbhangler");
const TYPES = require("tedious").TYPES;

module.exports = function (context, req) {
  const id = req.query.id || (req.body && req.body.id);
  const queryText = `select
    [Name] as [name],
    convert(varchar(10), StartDate, 120) as startDate,
      convert(varchar(10), EndDate, 120) as endDate
  from Certification
  where EmployeeId = @id`;
  const params = [
    {
      key: "id",
      type: TYPES.UniqueIdentifier,
      value: id || "00000000-0000-0000-0000-000000000000",
    },
  ];
  dbHangler.executeSqlWithParams(context, queryText, params, true);
};
