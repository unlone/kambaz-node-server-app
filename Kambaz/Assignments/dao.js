import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";

// Get all assignments for a course
export function findAssignmentsForCourse(courseId) {
    return Database.assignments.filter(
        (assignment) => assignment.course === courseId
    );
}

// Create new assignment
export function createAssignment(assignment) {
    const newAssignment = {
        _id: uuidv4(),
        ...assignment,
        createdAt: new Date().toISOString()
    };
    Database.assignments.push(newAssignment);
    return newAssignment;
}

// Update assignment
export function updateAssignment(aid, assignment) {
    const index = Database.assignments.findIndex(
        (a) => a._id === aid
    );
    if (index !== -1) {
        Database.assignments[index] = {
            ...Database.assignments[index],
            ...assignment,
            updatedAt: new Date().toISOString()
        };
        return { status: "OK" };
    }
    return { status: "ERROR", message: "Assignment not found" };
}

// Delete assignment
export function deleteAssignment(aid) {
    Database.assignments = Database.assignments.filter(
        (a) => a._id !== aid
    );
    return { status: "OK" };
}

// Get assignment by ID
export function findAssignmentById(assignmentId) {
    return Database.assignments.find(
        (assignment) => assignment._id === assignmentId
    );
} 