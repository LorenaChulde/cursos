"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let students = [];
let teachers = [];
let activities = [];
let gradeBooksSetup = [];
var Area;
(function (Area) {
    Area["Desarrollo"] = "Desarrollo de Software";
    Area["Marketing"] = "Marketing";
    Area["Turismo"] = "Turismo";
    Area["Diseno"] = "Dise\u00F1o de Modas";
})(Area || (Area = {}));
var Course;
(function (Course) {
    Course["Programacion"] = "Programcion Visual";
    Course["baseDatos"] = "Base de Datos";
    Course["Metodologias"] = "Metodologias";
})(Course || (Course = {}));
function addStudent() {
    let currentStudent = {
        fullName: readFormHtml("fullName"),
        identification: parseInt(readFormHtml("identification")),
        direction: readFormHtml("direction"),
        enrollment: parseInt(readFormHtml("enrollment")),
        level: readFormHtml("level"),
    };
    students.push(currentStudent);
    console.table(students);
}
function addTeacher() {
    let currentTeacher = {
        fullName: readFormHtml("fullName-teacher"),
        identification: parseInt(readFormHtml("identification-teacher")),
        direction: readFormHtml("direction-teacher"),
        title: readFormHtml("title-teacher"),
        area: readFormHtml("area-teacher"),
    };
    teachers.push(currentTeacher);
    console.table(teachers);
}
function addActivity() {
    let currentActivity = {
        name: readFormHtml("name-activity"),
    };
    activities.push(currentActivity);
    console.table(activities);
    initSelect();
}
function addGradeBookSetup() {
    let currentGradeBookSetup = {
        value: readFormHtml("value-gradebook"),
        course: readFormHtml("course-gradebook"),
        activity: readFormHtml("activity-gradebook"),
        maximunGrade: parseInt(readFormHtml("maximun-gradebook")),
    };
    gradeBooksSetup.push(currentGradeBookSetup);
    console.table(gradeBooksSetup);
}
function readFormHtml(id) {
    return document.getElementById(id).value;
}
function initSelect() {
    let area = document.getElementById("area-teacher");
    let areas = Object.values(Area);
    areas.forEach((area1) => {
        let option = document.createElement("option");
        option.value = area1;
        option.text = area1,
            area.add(option);
    });
    let courseGradeBook = document.getElementById("course-gradebook");
    let courses = Object.values(Course);
    courses.forEach((value) => {
        let option = document.createElement("option");
        option.value = value;
        option.text = value,
            courseGradeBook.add(option);
    });
    let activityGradebook = document.getElementById("activity-gradebook");
    document.querySelectorAll("#activity-gradebook option").forEach(option => option.remove());
    activities.forEach((value) => {
        let option = document.createElement("option");
        option.value = value.name,
            option.text = value.name,
            activityGradebook.add(option);
    });
}
initSelect();
