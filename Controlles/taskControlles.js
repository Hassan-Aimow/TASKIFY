const { IncomingForm } = require('formidable');
const { readTasksFromFile, writeTasksToFile } = require("../utils/fileHandlers");

// Get tasks
exports.getTasks = (req, res) => {
    const tasks = readTasksFromFile();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(tasks));
};

// Create a new task
exports.createTasks = (req, res) => {
    const form = new IncomingForm();
    form.parse(req, (err, fields, files) => {
        if (err) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                message: 'Error parsing form'
            }));
            return;
        }
        
        const tasks = readTasksFromFile();
        const newTask = {
            id: Date.now(), 
            title: fields.title,
            description: fields.description, 
            status: fields.status || "pending",
        };

        tasks.push(newTask);
        writeTasksToFile(tasks);

        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            message: 'Task created successfully',
            task: newTask
        }));
    });
};

// Update an existing task
exports.updateTasks = (req, res) => {
    // Implementation for updating a task
};

// Delete a task
exports.deleteTasks = (req, res) => {
    // Implementation for deleting a task
};
