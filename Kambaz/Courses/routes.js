import * as dao from "./dao.js";
import * as modulesDao from "../Modules/dao.js";

export default function CourseRoutes(app) {
  // Get all courses
  app.get("/api/courses", (req, res) => {
    // console.log(123)
    const courses = dao.findAllCourses();
    res.send(courses);
  });

  // Get modules for a course
  app.get("/api/courses/:courseId/modules", (req, res) => {
    const { courseId } = req.params;
    const modules = modulesDao.findModulesForCourse(courseId);
    res.json(modules);
  });

  // Create module for a course
  app.post("/api/courses/:courseId/modules", (req, res) => {
    const { courseId } = req.params;
    const module = {
      ...req.body,
      course: courseId,
    };
    const newModule = modulesDao.createModule(module);
    res.json(newModule);
  });

  // Delete course
  app.delete("/api/courses/:courseId", (req, res) => {
    const { courseId } = req.params;
    const status = dao.deleteCourse(courseId);
    res.send(status);
  });

  // Update course
  app.put("/api/courses/:courseId", (req, res) => {
    const { courseId } = req.params;
    const courseUpdates = req.body;
    const status = dao.updateCourse(courseId, courseUpdates);
    res.send(status);
  });
}

