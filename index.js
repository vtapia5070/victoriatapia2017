const handler = require('serve-handler');
const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((request, response) => {
    // You pass two more arguments for config and middleware
    // More details here: https://github.com/zeit/serve-handler#options
    return handler(request, response);
});

server.listen(PORT, () => {
    console.log(`Our app is running on port ${PORT}`);
});