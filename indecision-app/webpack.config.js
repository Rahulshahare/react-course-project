// Entry -> output
const path =require('path');
console.log(path.join(__dirname, 'public')); 
module.exports = {
    entry: './src/app.js',
    output : {
        path : '',
        filename : 'bundle.js'
    }
};