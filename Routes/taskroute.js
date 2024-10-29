const { createTaskas, getTaskas } = require("../Controlles/taskControlles")

const taskRoutes = (req, res) => {
    // TOD: Define all routes
    
    if (req.method === 'GET') {
        // res.end('Get all tasks');
        getTaskasa(req,res)
    } else if (req.method === 'POST') {
        // res.end('Create a new task');
        createTaskas(req,res)
    } else if (req.method === 'PATCH') {
        // res.end('Update a task');
        updateTaskas(req,res)
    } else if (req.method === 'DELETE') {
        // res.end('Delete a task');
        DeleteTasks(req,res)
    } else {
        res.writeHead(404, 'Not Found', { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Route not found' }));
    }
}

module.exports = taskRoutes;
