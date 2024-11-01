const { readTaskaFromFile } = require("../utils/fileHandlers");

exports.getTaskas = (req,res) =>{
    const tasks =readTaskaFromFile();
    res.writerHead(200, {'Content-type' : 'applocation/json'})
    res.end(JSON.stringify(tasks))
    


};

exports.createTaskas = (req,res) =>{


};

exports.updateTaskas = (req,res) =>{


};

exports.DeleteTaskas = (req,res) =>{


};