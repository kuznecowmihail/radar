const dbHangler = require("../dbhangler");
const TYPES = require("tedious").TYPES;

module.exports = function (context, req) {
  const id = req.query.id || (req.body && req.body.id);
  const queryText = `select
      p.[Name] as [name],
      convert(varchar(10), p.StartDate, 120) as startDate,
      convert(varchar(10), p.EndDate, 120) as endDate
    from Project as p
    inner join EmployeeInProject eip on eip.ProjectId = p.Id
    where eip.EmployeeId = @id`;
  const params = [
    {
      key: "id",
      type: TYPES.UniqueIdentifier,
      value: id || "00000000-0000-0000-0000-000000000000",
    },
  ];
  dbHangler.executeSqlWithParams(context, queryText, params, true);
};
