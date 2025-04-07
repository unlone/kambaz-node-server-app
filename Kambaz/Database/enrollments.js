export default [
    // Tony Stark (Faculty) 教授RS101和CS102课程
    {
        _id: "e001",
        user: "123", // Tony Stark
        course: "RS101",
        enrollmentDate: "2023-01-10T00:00:00.000Z",
        role: "FACULTY"
    },
    {
        _id: "e002",
        user: "123", // Tony Stark
        course: "CS102",
        enrollmentDate: "2023-01-15T00:00:00.000Z",
        role: "FACULTY"
    },

    // Frodo Baggins (Faculty) 教授RS103课程
    {
        _id: "e003",
        user: "678", // Frodo Baggins
        course: "RS103",
        enrollmentDate: "2023-02-01T00:00:00.000Z",
        role: "FACULTY"
    },

    // Bruce Wayne (Student) 选修RS101和CS102课程
    {
        _id: "e004",
        user: "234", // Bruce Wayne
        course: "RS101",
        enrollmentDate: "2023-01-20T00:00:00.000Z",
        role: "STUDENT"
    },
    {
        _id: "e005",
        user: "234", // Bruce Wayne
        course: "CS102",
        enrollmentDate: "2023-01-22T00:00:00.000Z",
        role: "STUDENT"
    },

    // Natasha Romanoff (TA) 作为RS101和CS102的助教
    {
        _id: "e006",
        user: "345", // Natasha Romanoff
        course: "RS101",
        enrollmentDate: "2023-01-12T00:00:00.000Z",
        role: "TEACHING_ASSISTANT"
    },
    {
        _id: "e007",
        user: "345", // Natasha Romanoff
        course: "CS102",
        enrollmentDate: "2023-01-14T00:00:00.000Z",
        role: "TEACHING_ASSISTANT"
    },

    // Thor Odinson (Student) 选修RS101和RS103课程
    {
        _id: "e008",
        user: "456", // Thor Odinson
        course: "RS101",
        enrollmentDate: "2023-01-25T00:00:00.000Z",
        role: "STUDENT"
    },
    {
        _id: "e009",
        user: "456", // Thor Odinson
        course: "RS103",
        enrollmentDate: "2023-02-05T00:00:00.000Z",
        role: "STUDENT"
    },

    // Bruce Banner (Student) 选修CS102和RS103课程
    {
        _id: "e010",
        user: "567", // Bruce Banner
        course: "CS102",
        enrollmentDate: "2023-01-18T00:00:00.000Z",
        role: "STUDENT"
    },
    {
        _id: "e011",
        user: "567", // Bruce Banner
        course: "RS103",
        enrollmentDate: "2023-02-03T00:00:00.000Z",
        role: "STUDENT"
    },

    // Aragorn (TA) 作为RS103的助教
    {
        _id: "e012",
        user: "789", // Aragorn
        course: "RS103",
        enrollmentDate: "2023-02-02T00:00:00.000Z",
        role: "TEACHING_ASSISTANT"
    },

    // Legolas (Student) 选修RS103课程
    {
        _id: "e013",
        user: "890", // Legolas
        course: "RS103",
        enrollmentDate: "2023-02-10T00:00:00.000Z",
        role: "STUDENT"
    },

    // Ada Lovelace (Admin) 可以访问所有课程
    {
        _id: "e014",
        user: "777", // Ada Lovelace
        course: "RS101",
        enrollmentDate: "2023-01-01T00:00:00.000Z",
        role: "ADMIN"
    },
    {
        _id: "e015",
        user: "777", // Ada Lovelace
        course: "CS102",
        enrollmentDate: "2023-01-01T00:00:00.000Z",
        role: "ADMIN"
    },
    {
        _id: "e016",
        user: "777", // Ada Lovelace
        course: "RS103",
        enrollmentDate: "2023-01-01T00:00:00.000Z",
        role: "ADMIN"
    }
];