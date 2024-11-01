const { IncomingForm } = require('formidable');
const { readTasksFromFile, writeTasksToFile } = require("../utils/fileHandlers");

// Get all tasks
exports.getTasks = (req, res) => {
    const tasks = readTasksFromFile();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(tasks));
};

// Create a new task
exports.createTasks = (req, res) => {
    const form = new IncomingForm();
    form.parse(req, (err, fields) => {
        if (err) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Error parsing form' }));
            return;
        }
        
        const tasks = readTasksFromFile();
        const newTask = {
            id: Date.now(),
            title: fields.title,
            description: fields.description, // Fixed 'description' typo
            status: fields.status || "pending",
            Image:Files.Image ? `/uploads/${files.image.name}`: null,
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

// Placeholder for updating a task
exports.updateTasks = (req, res) => {
    // Logic for updating a task goes here
};

// Placeholder for deleting a task
exports.deleteTasks = (req, res) => {
    // Logic for deleting a task goes here
};
