function findStudentById(students, targetId) {
  // Your code here
  console.log(targetId); // check targetId

  // Loop
  for (let i = 0; i < students.length; i++) {
    console.log(students[i].id); // check for each student id
    
    // check if student id = id
    if (students[i].id === targetId) {
      return students[i]
    }
  }

  // return null if target students id
  return null
}

// Test case
const students = [
  { id: 302, name: "Emily Carter" },
  { id: 105, name: "Michael Johnson" },
  { id: 501, name: "Sarah Wilson" },
  { id: 207, name: "Daniel Brown" },
  { id: 403, name: "Sophia Martinez" },
];

console.log(findStudentById(students, 302)); // Output: { id: 302, name: "Emily Carter" }
console.log(findStudentById(students, 4)); // Output: null
