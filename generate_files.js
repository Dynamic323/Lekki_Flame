const fs = require('fs');
const path = require('path');

const dirs = [
  'src/pages',
  'src/components',
  'src/styles'
];

dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});
