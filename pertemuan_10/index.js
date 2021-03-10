//destructuring
const student = {
    fullName :"John",
    addres: "Manado",
    age: 25,
};

const displayStudentInformation =({fullName, addres})=>{
    console.log(`student name: ${fullName}`);
};

displayStudentInformation(student);


