import { Activity } from "./entities/activity.entity";
import { GradeBookSetup } from "./entities/gradeBookSetup.entity";
import { Student } from "./entities/student.entity";
import { Teacher } from "./entities/teacher.entity";

let students: Student[] = [];
let teachers: Teacher[] = [];
let activities: Activity[] = [];
let gradeBooksSetup: GradeBookSetup[] = [];

enum Area {
    Desarrollo = "Desarrollo de Software",
    Marketing = "Marketing",
    Turismo = "Turismo",
    Diseno = "Diseño de Modas",
}
enum Course {
    Programacion = 'Programcion Visual',
    baseDatos = 'Base de Datos',
    Metodologias = 'Metodologias',
}

function addStudent(): void {
    let currentStudent: Student = {
        fullName: readFormHtml("fullName"),
        identification: parseInt(readFormHtml("identification")),
        direction: readFormHtml("direction"),
        enrollment: parseInt(readFormHtml("enrollment")),
        level: readFormHtml("level"),

    }
    students.push(currentStudent);
    console.table(students)
}

function addTeacher(): void {
    let currentTeacher: Teacher = {
        fullName: readFormHtml("fullName-teacher"),
        identification: parseInt(readFormHtml("identification-teacher")),
        direction: readFormHtml("direction-teacher"),
        title: readFormHtml("title-teacher"),
        area: readFormHtml("area-teacher"),
    }
    teachers.push(currentTeacher);
    console.table(teachers);
}

function addActivity(): void {
    let currentActivity: Activity = {
        name: readFormHtml("name-activity"),
    }
    activities.push(currentActivity);
    console.table(activities);
    initSelect();
}

function addGradeBookSetup(): void {
    let currentGradeBookSetup: GradeBookSetup = {
        value: readFormHtml("value-gradebook"),
        course: readFormHtml("course-gradebook"),
        activity: readFormHtml("activity-gradebook"),
        maximunGrade: parseInt(readFormHtml("maximun-gradebook")),
    }
    gradeBooksSetup.push(currentGradeBookSetup);
    console.table(gradeBooksSetup);
}

function readFormHtml(id: string): string {
    return (<HTMLInputElement>document.getElementById(id)).value;
}
function initSelect(): void {

    let area = document.getElementById("area-teacher") as HTMLSelectElement;
    let areas = Object.values(Area);
    areas.forEach(
        (area1) => {
            let option = document.createElement("option");
            option.value = area1;
            option.text = area1,
                area.add(option);
        }
    );
    let courseGradeBook = document.getElementById("course-gradebook") as HTMLSelectElement;
    let courses = Object.values(Course);
    courses.forEach(
        (value) => {
            let option = document.createElement("option");
            option.value = value;
            option.text = value,
                courseGradeBook.add(option);
        }
    );
    let activityGradebook = document.getElementById("activity-gradebook") as HTMLSelectElement;
   document.querySelectorAll("#activity-gradebook option").forEach(option => option.remove())
    activities.forEach(
        (value) => {
            let option = document.createElement("option");
            option.value = value.name,
                option.text = value.name,
                activityGradebook.add(option);
        }
    );
}


initSelect();