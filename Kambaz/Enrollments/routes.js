import * as dao from "./dao.js";

export default function setupEnrollmentRoutes(app) {
    // Get all enrollments for a user
    app.get("/api/users/:userId/enrollments", (req, res) => {
        const { userId } = req.params;
        try {
            const enrollments = dao.findEnrollmentsForUser(userId);
            res.json(enrollments);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    });

    // Get all enrollments for a course
    app.get("/api/courses/:courseId/enrollments", (req, res) => {
        const { courseId } = req.params;
        try {
            const enrollments = dao.findEnrollmentsForCourse(courseId);
            res.json(enrollments);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    });

    // Check if a user is enrolled in a specific course
    app.get("/api/users/:userId/courses/:courseId", (req, res) => {
        const { userId, courseId } = req.params;
        try {
            const enrollment = dao.findUserEnrolledInCourse(userId, courseId);
            res.json(enrollment || null);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    });

    // Enroll user in course
    app.post("/api/users/:userId/enrollments/:courseId", (req, res) => {
        const { userId, courseId } = req.params;
        try {
            const enrollment = dao.enrollUserInCourse(userId, courseId);
            res.json(enrollment);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    });

    // Unenroll user from course
    app.delete("/api/users/:userId/enrollments/:courseId", (req, res) => {
        const { userId, courseId } = req.params;
        try {
            const status = dao.unenrollUserInCourse(userId, courseId);
            res.json(status);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    });
} 