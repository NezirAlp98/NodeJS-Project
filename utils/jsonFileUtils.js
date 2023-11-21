const fs=require('fs')
const path=require('path');
const { stringify } = require('querystring');

const dataFilePath=path.join(__dirname,'../data/employees.json')
const readJsonFile=()=>{
    try {
        if(fs.existsSync(dataFilePath)){
            const data=fs.readFileSync(dataFilePath,'utf-8')
            return JSON.parse(data)
        }

        return []
        
        
    } catch (error) {
        console.log(error)
        return [];
    }
};

const writeJsonFile=(data)=>{
    try {
        fs.writeFileSync(dataFilePath,JSON.stringify(data,null,2),'utf-8');
    } catch (error) {
        console.log(error)
    }
    
}

module.exports={
    readJsonFile,
    writeJsonFile
}