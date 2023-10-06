import mysql from "serverless-mysql";

export const pool = mysql({
  config: {
    host: "mysqldb",
    user: "root",
    password: "gonza123",
    port: 3306,
    database: "nextdb",
  },
});
