const http = require('http');

const PORT = 9000;
const HOSTNAME = 'localhost';

const server = http.createServer((req, res) => {
    if (req.url.startsWith('/task')) {
        taskRouters(req, res);
    } else {
        res.writeHead(404, 'Not Found', {'Content-Type': 'application/json'});
        res.end(JSON.stringify({
            message: 'Page not found'
        }));
    }
});

server.listen(PORT, HOSTNAME, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});
