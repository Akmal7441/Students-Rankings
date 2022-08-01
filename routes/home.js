const express = require("express");
const router = express.Router();
const Student = require("../model/student");

router.get("/", async (req, res) => {
  const students = await Student.find().sort({ Score: -1 });
  res.render("home", {
    title: "Home page",
    students: students,
  });
});

router.get("/add/addStudent", async (req, res) => {
  res.render("addStudent", {
    title: "Student Add",
  });
});

router.post("/add/addStudent", async (req, res) => {
  const students = await Student.find()
  const addStudent = new Student({
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    Number: req.body.Number,
    Group: req.body.Group,
    Month: req.body.Month,
    Score: req.body.Score,
    No: students.length + 1,
  });
  await addStudent.save();
  res.redirect("/");
});

router.post("/update/:id", async (req, res) => {
  const Id = await req.params.id;
  const students = await Student.findById(Id);
  const update = await Student.findByIdAndUpdate(Id, {
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    Number: req.body.Number,
    Group: req.body.Group,
    Month: req.body.Month,
    Score: +req.body.Score + +students.Score,
  });
  await update.save();
  res.redirect("/");
});

// router.post("/pupils/add", async (req, res) => {
//   let { name, surname, number, group, month, score, tr } = req.body;
//   parseInt(tr);
//   const students = await Students({
//     name,
//     surname,
//     number,
//     group,
//     month,
//     score,
//     tr,
//   });
//   await students.save();
//   res.redirect("/");
// });

// router.get("/students/add", async (req, res) => {
//   res.render("addStudent", {
//     title: "Add student",
//   });
// });

// router.get("/student/del/:id", async (req, res) => {
//   await Student.findByIdAndDelete(req.params.id);
//   res.redirect("/");
// });

// router.get("/student/edit/:id", async (req, res) => {
//   await Students.findByIdAndUpdate(req.params.id, {
//     name: req.query.name,
//     surname: req.query.surname,
//     number: req.query.number,
//     group: req.query.group,
//     month: req.query.month,
//     score: req.query.score,
//   });
//   res.redirect("/");
// });

module.exports = router;
