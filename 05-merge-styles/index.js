const fs = require('fs');
const path = require('path');
const stylePath = path.join(__dirname, 'styles');
const bundleFile = path.join(__dirname, 'project-dist/bundle.css');

fs.readdir(stylePath, { withFileTypes: true }, (err, files) => {
  if (err) throw err;
  const cssItems = files.filter((file) => path.extname(file.name) === '.css');
  const writeStream = fs.createWriteStream(bundleFile);
  cssItems.forEach((cssFiles) => {
    const cssfiles = path.join(stylePath, cssFiles.name);
    const readStream = fs.createReadStream(cssfiles);
    readStream.on('data', (data) => writeStream.write(data));
  });
});