const joi = require("joi");
const database = require("./database");
const fileMgmt = require("../shared/fileMgmt");

module.exports = {
  getCoursesList: async function (req, res, next) {
    const sql = `SELECT * FROM courses JOIN lecturers ON courses.lecturer = lecturers.id `;

    try {
      const result = await database.query(sql);
      res.json(result[0]);
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  },
};
