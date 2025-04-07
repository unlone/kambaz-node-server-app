import * as dao from "./dao.js";

export default function ModuleRoutes(app) {
    // Get module by ID
    app.get("/api/modules/:moduleId", (req, res) => {
        const { moduleId } = req.params;
        const module = dao.findModuleById(moduleId);
        if (module) {
            res.json(module);
        } else {
            res.status(404).json({ message: "Module not found" });
        }
    });

    // Update module
    app.put("/api/modules/:moduleId", (req, res) => {
        const { moduleId } = req.params;
        const moduleUpdates = req.body;
        const status = dao.updateModule(moduleId, moduleUpdates);
        res.json(status);
    });

    // Delete module
    app.delete("/api/modules/:moduleId", (req, res) => {
        const { moduleId } = req.params;
        const status = dao.deleteModule(moduleId);
        res.json(status);
    });
} 