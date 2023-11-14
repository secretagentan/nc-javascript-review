// TASK 1
class Student {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

// TASK 2
class Bootcamp {
    constructor(name, level, students = []) {
        this.name = name;
        this.level = level;
        this.students = students;
    }

    // TASK 3
    registerStudent(studentToRegister) {
        if (!studentToRegister.name || !studentToRegister.email) {
            console.log('Invalid name or email.');
            return false;
        }

        const isRegistered = this.students.find(student => student.email === studentToRegister.email);

        if (isRegistered) {
            console.log(`The email address ${studentToRegister.email} is already registered.`)
            return false;
        }

        this.students.push(studentToRegister);
        console.log(`Registering ${studentToRegister.name} to the ${this.name} bootcamp.`);
        return true;
    }

    // TASK 4
    listStudents() {
        if (!this.students.length) {
            console.log(`No students are registered to the ${this.name} bootcamp.`);
            return false;
        }
        console.log(`The students registered in ${this.name} are: `);
        this.students.forEach(student => console.log(`Name: ${student.name}, Email: ${student.email}`));
        return true;
    }
}

// TASK 1 TEST
testStudent = new Student('Bugs Bunny', 'bugs@bunny.com');
console.log(testStudent);

if (testStudent.name === 'Bugs Bunny' && testStudent.email === 'bugs@bunny.com') {
    console.log('TASK 1: PASS');
}

// TASK 2 TEST
reactBootcamp = new Bootcamp("React", "Advanced");
console.log(reactBootcamp);

if (reactBootcamp.name === 'React' && reactBootcamp.level === 'Advanced' && Array.isArray(reactBootcamp.students) && reactBootcamp.students.length === 0) {
    console.log('TASK 2: PASS');
}

// TASK 3 TEST
const runTest = (bootcamp, student) => {
    const attemptOne = bootcamp.registerStudent(student);
    const attemptTwo = bootcamp.registerStudent(student);
    const attemptThree = bootcamp.registerStudent(new Student("Babs Bunny"));
    if (attemptOne && !attemptTwo && !attemptThree) {
        console.log("TASK 3: PASS");
    }

    // TASK 4 TEST
    bootcamp.registerStudent(new Student('Babs Bunny', 'babs@bunny.com'));
    if (bootcamp.listStudents()) {
        console.log("TASK 4: PASS 1/2");
    }
    bootcamp.students = [];
    if (!bootcamp.listStudents()) {
        console.log("TASK 4: PASS 2/2");
    }
};
runTest(reactBootcamp, testStudent);