import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";

// 获取课程中的所有人员
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

// 添加用户到课程
export function addUserToCourse(courseId, userId, role = "STUDENT") {
    const { enrollments } = Database;
    
    // 检查用户是否已经在课程中
    const existingEnrollment = enrollments.find(
        e => e.course === courseId && e.user === userId
    );
    
    if (existingEnrollment) {
        return existingEnrollment;
    }
    
    // 创建新的注册记录
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

// 更新用户在课程中的角色
export function updateUserRoleInCourse(enrollmentId, role) {
    const { enrollments } = Database;
    const enrollment = enrollments.find(e => e._id === enrollmentId);
    
    if (enrollment) {
        enrollment.role = role;
        return enrollment;
    }
    
    return null;
}

// 从课程中移除用户
export function removeUserFromCourse(enrollmentId) {
    const { enrollments } = Database;
    Database.enrollments = enrollments.filter(e => e._id !== enrollmentId);
    return { status: "OK" };
}

// 创建新用户并添加到课程
export function createUserAndAddToCourse(courseId, userData, role = "STUDENT") {
    // 创建新用户
    const newUser = {
        _id: uuidv4(),
        ...userData,
        createdAt: new Date().toISOString()
    };
    
    Database.users.push(newUser);
    
    // 将新用户添加到课程
    return addUserToCourse(courseId, newUser._id, role);
} 