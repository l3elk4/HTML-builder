const fs = require('fs');
const path = require('path');
const { stdin, stdout } = process;
const create = fs.createWriteStream(path.join(__dirname,'text.txt'));
stdout.write('Input text \n');
stdin.on('data', (data) => {
    if (data.toString().trim() === 'exit'){
        escFunc();
    }
    else {
        create.write(data);
    }
});
process.on('SIGINT', escFunc)
function escFunc(){
    stdout.write('\n See ya \n');
    process.exit();
}