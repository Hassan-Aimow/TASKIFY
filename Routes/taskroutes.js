const { createTasks, getTasks } = require("../Controlles/taskControlles")
const { getTasks }= require("../Controlles/taskControlles");

const taskRoutes = (req, res) => {
    // TOD: Define all routes
    
    if (req.method === 'GET') {
        // res.end('Get all tasks');
        getTasks  (req,res)
    } else if (req.method === 'POST') {
        // res.end('Create a new task');
        createTasks(req,res)
    } else if (req.method === 'PATCH') {
        // res.end('Update a task');
        updateTasks(req,res)
    } else if (req.method === 'DELETE') {
        // res.end('Delete a task');
        DeleteTasks(req,res)
    } else {
        res.writeHead(404, 'Data Not Found', { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Unknow Method required' }));
    }
}

module.exports = taskRoutes;
