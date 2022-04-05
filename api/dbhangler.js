const Connection = require("tedious").Connection;
const Request = require("tedious").Request;
const config = require("./connectionconfig.json");

const executeSql = function (context, queryText, isResultObject) {
  let result = [];
  const connection = new Connection(config);
  context.log(queryText);
  const request = new Request(queryText, function (err) {
    if (err) {
      context.log.error(err);
      context.res.status = 500;
      context.res.body = `Error executing the query: ${err}`;
      context.done();
    }
  });
  request.on("row", function (columns) {
    if (isResultObject) {
      let rowData = {};
      columns.forEach(function (column) {
        rowData[column.metadata.colName] = column.value;
      });
      result.push(rowData);
    } else {
      columns.forEach(function (column) {
        result.push(column.value);
      });
    }
  });
  request.on("requestCompleted", function (rowCount, more) {
    connection.close();
    context.log.error(result);
    context.res = {
      status: 200,
      isRaw: true,
      body: result,
      headers: {
        "Content-Type": "application/json",
      },
    };
    context.done();
  });
  connection.on("connect", function (err) {
    if (err) {
      context.log.error(err);
      context.res.status = 500;
      context.res.body = err;
      context.done();
    } else {
      connection.execSql(request);
    }
  });
  connection.connect();
};
const executeSqlWithParams = function (
  context,
  queryText,
  params,
  isResultObject
) {
  let result = [];
  const connection = new Connection(config);
  context.log(queryText);
  const request = new Request(queryText, function (err) {
    if (err) {
      context.log.error(err);
      context.res.status = 500;
      context.res.body = `Error executing the query: ${err}`;
      context.done();
    }
  });
  params.forEach((param) => {
    request.addParameter(param.key, param.type, param.value);
  });
  request.on("row", function (columns) {
    if (isResultObject) {
      let rowData = {};
      columns.forEach(function (column) {
        rowData[column.metadata.colName] = column.value;
      });
      result.push(rowData);
    } else {
      columns.forEach(function (column) {
        result.push(column.value);
      });
    }
  });
  request.on("requestCompleted", function (rowCount, more) {
    connection.close();
    context.log.error(result);
    context.res = {
      status: 200,
      isRaw: true,
      body: result,
      headers: {
        "Content-Type": "application/json",
      },
    };
    context.done();
  });
  connection.on("connect", function (err) {
    if (err) {
      context.log.error(err);
      context.res.status = 500;
      context.res.body = err;
      context.done();
    } else {
      connection.execSql(request);
    }
  });
  connection.connect();
};
module.exports = {
  executeSql: executeSql,
  executeSqlWithParams: executeSqlWithParams,
};
