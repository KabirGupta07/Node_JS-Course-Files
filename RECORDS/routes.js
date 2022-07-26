const fs = require("fs");

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === "/") {
        res.write("<html>");
        res.write("<head><title>Enter the Message</title></head>");
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">SUBMIT</button></input></form></body>');
        res.write("</html>");
        return res.end();
    }
    if (url === "/message" && method === "POST") {
        const body = [];
        //Event Listener for "data" Event
        req.on('data', (chunk) => {
            // console.log(chunk);
            // console.log(body);
            body.push(chunk);
            // console.log(body);
        });
        //Event Listener for "end" Event
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            // console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            fs.writeFile("message.txt", message, (err) => {
                if (!err) {
                    res.statusCode = 302;
                    res.setHeader("Location", "/");
                    return res.end();
                }
            });
        });
    }
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write("<body><h1>Hello from MyNode Js Program</h1></body>");
    res.write("</html>");
    res.end();// tells that the response has been written
}

module.exports = {
    handler: requestHandler,
    someText: "Some text in the export"
};