const requestHanlder  = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write("<head><title>USERS Listener</title></head>");
        res.write("<body>");
        res.write("<h1>Hello There</h1>");
        res.write('<form action="/create-user" method="POST" ><input name = "message"  type="text"><button type="submit">Submit</button></input></form>');
        
        res.write("</body>");
        res.write("</html>");
        res.end();
    }

    if (url === '/users') {
        res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write("<head><title>USERS Listener</title></head>");
        res.write("<body><ul>");
        res.write("<li>USER 1</li>");
        res.write("<li>USER 2</li>");
        res.write("<li>USER 3</li>");
        res.write("</ul></body>");
        res.write("</html>");
        res.end();
    }
    if(url === "/create-user" && method === "POST"){
        const body=[];
        req.on('data', (chunk) => {
            body.push(chunk);
        })
        req.on('end',() =>{
            const parsedMessage = Buffer.concat(body).toString();
            const message = parsedMessage.split("=")[1];
            console.log(message);
            res.statusCode = 302;
            res.setHeader("Location", "/");
            return res.end();
        })
    }


}

module.exports= {
    handler: requestHanlder
}