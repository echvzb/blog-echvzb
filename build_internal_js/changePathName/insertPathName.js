const fs = require('fs'),
    matter = require('gray-matter');

const normalTextToPath = txt => '/' + txt.match(/\w+/g).join('-').toLowerCase();

exports.change = pathFile => {
    fs.readFile(pathFile, (err, dataFile)=>{
        if(err) throw err;
    
        const result = matter(dataFile.toString());
        const { path, serieData } = result.data;
        let realPath = normalTextToPath(serieData.serieName);
        
        if(result.data.title){
            realPath += normalTextToPath(result.data.title);
        }

        if(path !== realPath){
            result.data.path = realPath;
            const { data, content } = result;
            
            const newDataFile = matter.stringify(content, data); 
            fs.writeFile(pathFile, newDataFile, (err)=> {
                if (err) throw err;
                console.log('New path written: ' + realPath);
                return;
            });
        }
        else{
            console.log(`Path '${realPath}' is correct`);
        }
    })
}