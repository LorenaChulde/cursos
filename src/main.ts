import { Student } from "./entities/student.entity";
import { Teacher } from "./entities/teacher.entity";

let students: Student[] = [];
let teachers: Teacher[] = [];

function addStudent(): void {
    let currentStudent: Student = {
        fullName: readFormHtml("fullName"),
        identification: parseInt(readFormHtml("identification")),
        direction: readFormHtml("direction"),
        enrollment: parseInt(readFormHtml("enrollment")),
        level: readFormHtml("level"),

    }
    students.push(currentStudent);
    console.log(students)
}
function readFormHtml(id: string): string {
    return (<HTMLInputElement>document.getElementById(id)).value;
}
function addTeacher(): void {
    let currentTeacher: Teacher = {
        fullName: readFormHtml("fullName-teacher"),
        identification: parseInt(readFormHtml("identification-teacher")),
        direction: readFormHtml("direction-teacher"),
        title: readFormHtml("title-teacher"),
        matter: readFormHtml("matter-teacher"),
    }
    teachers.push(currentTeacher);
    //console.log(teachers)
    console.table(teachers)
}