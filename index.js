const http = require('http');
const fs = require('fs');


const backend = http.createServer((req, res) => {
    res.setHeader("content-Type", "text/html");

    let path = "./pages/";
    switch(req.url){
        case "/":
            path += "index.html";
            break;

        case "/about":
            path += "about.html";
            break;

            case "/contact-me":
            path += "about.html";
            break;

        default:
            path += "404.html";
            break;
    }

    //sending html file
    fs.readFile(path, (err, data) => {
        if(err) {
            console.log(err);
            res.end();
        }
        else{
            // fs.write(data);
            res.end(data);
        }
    });
 
}).listen(8080);
