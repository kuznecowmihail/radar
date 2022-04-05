const dbHangler = require("../dbhangler");
const TYPES = require("tedious").TYPES;

module.exports = function (context, req) {
  const id = req.query.id || (req.body && req.body.id);
  const queryText = `select
      e.Id as id,
      e.FirstName as firstname,
      e.LastName as lastname,
      s.Name as specialization,
      e.Age as age,
      e.Src as src,
      l.Name as [level],
      ut.Name as unittype,
      (um.FirstName + ' ' + um.LastName) as unitmanager,
      (m.FirstName + ' ' + m.LastName) as manager
    from Employee as e
    left join Specialization as s on s.Id = e.SpecializationId
    left join [Level] as l on l.Id = e.LevelId
    left join UnitType as ut on ut.Id = e.UnitTypeId
    left join Employee as um on um.Id = e.UnitManagerId
    left join Employee as m on m.Id = e.ManagerId
    where e.Id = @id`;
  const params = [
    {
      key: "id",
      type: TYPES.UniqueIdentifier,
      value: id || "00000000-0000-0000-0000-000000000000",
    },
  ];
  dbHangler.executeSqlWithParams(context, queryText, params, true);
};
