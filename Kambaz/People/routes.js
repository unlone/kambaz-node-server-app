import * as dao from "./dao.js";

export default function PeopleRoutes(app) {
    app.get("/api/courses/:courseId/people", (req, res) => {
        const { courseId } = req.params;
        try {
            const people = dao.findPeopleInCourse(courseId);
            res.json(people);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    });

    app.post("/api/courses/:courseId/people/:userId", (req, res) => {
        const { courseId, userId } = req.params;
        const { role } = req.body;
        try {
            const enrollment = dao.addUserToCourse(courseId, userId, role);
            res.json(enrollment);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    });

    app.post("/api/courses/:courseId/people", (req, res) => {
        const { courseId } = req.params;
        const { userData, role } = req.body;
        try {
            const result = dao.createUserAndAddToCourse(courseId, userData, role);
            res.json(result);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    });

    app.put("/api/enrollments/:enrollmentId/role", (req, res) => {
        const { enrollmentId } = req.params;
        const { role } = req.body;
        try {
            const enrollment = dao.updateUserRoleInCourse(enrollmentId, role);
            res.json(enrollment);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    });

    app.delete("/api/enrollments/:enrollmentId", (req, res) => {
        const { enrollmentId } = req.params;
        try {
            const status = dao.removeUserFromCourse(enrollmentId);
            res.json(status);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    });
} 