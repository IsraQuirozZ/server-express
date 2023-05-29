import { Router } from "express";
import Student from "../../models/student.model.js";

let router = Router();

router.get("/", async (req, res, next) => {
  try {
    let students = await Student.find().select("name lastName course grade");
    if (students) {
      return res.json({
        status: 200,
        response: students,
      });
    }
    return res.json({
      status: 400,
      response: "there are not students in de db",
    });
  } catch (error) {
    next(error);
  }
});

router.get("/:sid", async (req, res, next) => {
  try {
    let id = req.params.sid;
    let student = await Student.findById(id);
    if (student) {
      return res.json({
        status: 200,
        response: student,
      });
    }
    return res.json({
      status: 400,
      response: `student with id: ${id} not found`,
    });
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    let student = await Student.create(req.body);
    if (student) {
      return res.json({
        status: 201,
        response: "student created",
        id: student._id,
      });
    }
  } catch (error) {
    next(error);
  }
});

router.put("/:sid", async (req, res, next) => {
  try {
    let id = req.params.sid;
    let data = req.body;
    let student = await Student.findByIdAndUpdate(id, data, { new: true });
    if (student) {
      return res.json({
        status: 200,
        response: "student info updated",
        student,
      });
    }
    return res.json({
      status: 400,
      response: `There is not a student with id ${id}`,
    });
  } catch (error) {
    next(error);
  }
});

router.delete("/:sid", async (req, res, next) => {
  try {
    let id = req.params.sid;
    let student = await Student.findByIdAndDelete(id);
    if (student) {
      return res.json({
        status: 200,
        response: "student deleted",
        student,
      });
    }
    return res.json({
      status: 400,
      response: `student with id: ${id}, doesn't exists`,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
