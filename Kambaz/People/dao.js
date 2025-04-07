import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";

export function findPeopleInCourse(courseId) {
    const { enrollments, users } = Database;
    const courseEnrollments = enrollments.filter(e => e.course === courseId);

    return courseEnrollments.map(enrollment => {
        const user = users.find(u => u._id === enrollment.user);
        if (!user) return null;
        return {
            ...user,
            role: enrollment.role,
            enrollmentId: enrollment._id,
            enrollmentDate: enrollment.enrollmentDate
        };
    }).filter(p => p !== null);
}

export function addUserToCourse(courseId, userId, role = "STUDENT") {
    const { enrollments } = Database;

    const existingEnrollment = enrollments.find(
        e => e.course === courseId && e.user === userId
    );

    if (existingEnrollment) {
        return existingEnrollment;
    }

    const newEnrollment = {
        _id: uuidv4(),
        user: userId,
        course: courseId,
        enrollmentDate: new Date().toISOString(),
        role: role
    };

    Database.enrollments.push(newEnrollment);
    return newEnrollment;
}

export function updateUserRoleInCourse(enrollmentId, role) {
    const { enrollments } = Database;
    const enrollment = enrollments.find(e => e._id === enrollmentId);

    if (enrollment) {
        enrollment.role = role;
        return enrollment;
    }

    return null;
}

export function removeUserFromCourse(enrollmentId) {
    const { enrollments } = Database;
    Database.enrollments = enrollments.filter(e => e._id !== enrollmentId);
    return { status: "OK" };
}

export function createUserAndAddToCourse(courseId, userData, role = "STUDENT") {
    const newUser = {
        _id: uuidv4(),
        ...userData,
        createdAt: new Date().toISOString()
    };

    Database.users.push(newUser);

    return addUserToCourse(courseId, newUser._id, role);
} 