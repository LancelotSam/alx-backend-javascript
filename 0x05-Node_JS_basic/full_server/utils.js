const fs = require('fs');

const readDatabase = (dataPath) => new Promise((resolve, reject) => {
  if (!dataPath) {
    reject(new Error('Cannot load the database'));
    return;
  }

  fs.readFile(dataPath, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const fileLines = data.trim().split('\n');
    const studentGroups = {};

    for (const line of fileLines.slice(1)) {
      const studentRecord = line.split(',');
      const firstName = studentRecord[0];
      const field = studentRecord[studentRecord.length - 1];

      if (!studentGroups[field]) {
        studentGroups[field] = [];
      }

      studentGroups[field].push(firstName);
    }

    resolve(studentGroups);
  });
});

module.exports = readDatabase;
