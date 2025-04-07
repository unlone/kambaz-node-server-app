import * as dao from "./dao.js";

export default function AssignmentRoutes(app) {
    // 获取课程的所有作业
    app.get("/api/courses/:cid/assignments", (req, res) => {
        const { cid } = req.params;
        const assignments = dao.findAssignmentsForCourse(cid);
        res.json(assignments);
    });

    // 获取特定作业
    app.get("/api/assignments/:aid", (req, res) => {
        const { aid } = req.params;
        const assignment = dao.findAssignmentById(aid);
        if (assignment) {
            res.json(assignment);
        } else {
            res.status(404).send("Assignment not found");
        }
    });

    // 创建新作业
    app.post("/api/courses/:cid/assignments", (req, res) => {
        const { cid } = req.params;
        const newAssignment = {
            ...req.body,
            course: cid
        };
        const assignment = dao.createAssignment(newAssignment);
        res.json(assignment);
    });

    // 更新作业
    app.put("/api/assignments/:aid", (req, res) => {
        const { aid } = req.params;
        const status = dao.updateAssignment(aid, req.body);
        res.json(status);
    });

    // 删除作业
    app.delete("/api/assignments/:aid", (req, res) => {
        const { aid } = req.params;
        const status = dao.deleteAssignment(aid);
        res.json(status);
    });
} 