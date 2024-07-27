const fs = require('fs');

const countStudents = (dataPath) => {
  if (!fs.existsSync(dataPath)) {
    throw new Error('Cannot load the database');
  }

  try {
    const data = fs.readFileSync(dataPath, 'utf-8').trim();
    const lines = data.split('\n');
    if (lines.length <= 1) throw new Error('No data in the file');

    const headers = lines[0].split(',');
    const students = lines.slice(1);

    const studentGroups = {};
    let totalStudents = 0;

    for (const student of students) {
      const values = student.split(',');
      const field = values[values.length - 1];

      if (!studentGroups[field]) {
        studentGroups[field] = [];
      }
      studentGroups[field].push(values[0]);
      totalStudents += 1;
    }

    console.log(`Number of students: ${totalStudents}`);
    for (const [field, group] of Object.entries(studentGroups)) {
      console.log(`Number of students in ${field}: ${group.length}. List: ${group.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
