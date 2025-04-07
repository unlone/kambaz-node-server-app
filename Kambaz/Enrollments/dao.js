import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";

export function findEnrollmentsForUser(userId) {
  const { enrollments } = Database;
  return enrollments.filter((enrollment) => enrollment.user === userId);
}

export function findEnrollmentsForCourse(courseId) {
  const { enrollments } = Database;
  return enrollments.filter((enrollment) => enrollment.course === courseId);
}

export function findUserEnrolledInCourse(userId, courseId) {
  const { enrollments } = Database;
  return enrollments.find(
    (enrollment) => enrollment.user === userId && enrollment.course === courseId
  );
}

export function enrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  const enrollment = findUserEnrolledInCourse(userId, courseId);
  if (enrollment) {
    return enrollment;
  }
  const newEnrollment = {
    _id: uuidv4(),
    user: userId,
    course: courseId,
    enrollmentDate: new Date().toISOString(),
    role: "STUDENT"
  };
  Database.enrollments.push(newEnrollment);
  return newEnrollment;
}

export function unenrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  Database.enrollments = enrollments.filter(
    (e) => !(e.user === userId && e.course === courseId)
  );
  return { status: "OK" };
}

