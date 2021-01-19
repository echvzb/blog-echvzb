const path = require(`path`), fs = require('fs'), insertPathName = require('./insertPathName');

exports.start = (absPath) => {
    fs.readdir(absPath, (err, fileNames) => {
        if (err) throw err;
        fileNames.forEach(file => {
            insertPathName.change(path.normalize(path.join(absPath, file)));
        })
    }); 
}

