const fs =require('fs');
const path = require('path'); // which ever os inuu handle gareeyo

const filePath ='./data/tasks.json';
 
// write task file aa smaynaa
exports.writeTasksToFile=(data) =>{
    
    fs.writeFilesync('./..data/tasks.json',  JSON.stringify(data));
}

exports.readTaskaFromFile =() => {
    if(!fs.existsSync('./../data/tasks.json'))
        this.writeTasksToFile([]);

    return[];
}

const data =fs.readFileSync('./..data/tasks.json')
return JSON.parse(data);
  