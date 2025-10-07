// courses.js
const aCourse = {
  code: "CSE121b",
  name: "Javascript Language",
  sections: [{ sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
{ sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}],
    enrollStudent: function(sectionNum) {
        const section = this.sections.find(
            (section) => section.sectionNum === sectionNum
        );
    }
};

aCourse.code
aCourse.name

const fieldName = "code";
aCourse[fieldName]
aCourse.sections[0].roomNum

function setCourse (course) {
    const courseName = document.querySelector("courseName");
    const courseCode = document.querySelector("courseCode");
    courseName.textContent = course.name;
    courseCode.textContent = course.code;
}

function sectionTemplate(section) {
    return `<tr>
        <td>${section.sectionNum}</td>
        <td>${section.roomNum}</td>
        <td>${section.enrolled}</td>
        <td>${section.days}</td>
        <td>${section.instructor}</td>
    </tr>`

}


function renderSection (sections) {
    const sectionsEl = document.querySelector("#sections");
    const htmlStrings = sections.map(sectionTemplate);
    sectionsEl.innerHTML = htmlStrings.join("");
}

setCourse(aCourse);
renderSection(aCourse.sections);
aCourse.enrollStudent(1);



