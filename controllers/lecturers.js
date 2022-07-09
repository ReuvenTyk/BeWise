const joi = require("joi");
const database = require("./database");
const fileMgmt = require("../shared/fileMgmt");

module.exports = {
  getLecturersList: async function (req, res, next) {
    const sql = `SELECT lecturers.first AS "first_name",  lecturers.last AS "last_name", lecturers.email AS email, lecturers.phone AS phone, lecturers.start_date AS "start_date", lecturers.image AS image FROM lecturers`;

    try {
      const result = await database.query(sql);
      res.json(result[0]);
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  },
};
