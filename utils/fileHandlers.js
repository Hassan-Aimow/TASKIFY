const fs =require('fs');

exports.writeTasksToFile=(data) =>{
    
    fs.writeFilesync('./..fata/tasks.json',  JSON.stringify(data));
}

exports.readTaskaFromFile =() => {
    if(!fs.existsSync('./../data/tasks.json'))
        this.writeTasksToFile([]);

    return[];
}

const data =fs.readFileSync('./..data/tasks.json')
return JSON.parse(data);