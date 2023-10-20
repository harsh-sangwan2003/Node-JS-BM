const https = require('https');
const readStaticFiles = require('./utils/serveFile.js');
const urlObject = require('url');
// const queryString = require('querystring');
const fs = require('fs');

function handleRequestResponse(req, res) {

    const url = req.url;
    let contentType = url.endsWith('.css') ? 'text/css' : 'text/html';

    if (url == '/dashboard' && req.method === 'GET') {

        res.write('I am in dashboard');
        res.end();
    }

    else if (url === '/login' && req.method === 'POST') {

        let myData = '';

        req.on('data', (chunk) => {

            myData += chunk;
        })

        req.on('end', () => {

            console.log(myData);
            // const obj = queryString.parse(myData);
            const queryParameters = new URLSearchParams(myData);
            let data = [];
            let index = 0;

            for (let param of queryParameters.entries()) {

                data[index] = param[1];
                index++;
            }

            const [userid, password] = data;

            if (userid === password) {

                // Redirection
                res.write('I am in dashboard');
                res.end();
            }

            else {
                res.write('Invalid username or password');
                res.end();
            }

        })
    }

    if (url.startsWith('/login?') && req.method === 'GET') {

        const userInfo = urlObject.parse(url, true).query;

        if (userInfo.userid === userInfo.password) {

            res.write('Welcome ' + userInfo.userid);
        }

        else {

            // res.statuCode = 302;
            // res.setHeader('Location','/dashboard');
            
            res.write("Invalid username or password.");
        }

        res.end();
    }

    else {
        res.writeHead(200, { 'Content-Type': contentType });
        readStaticFiles(url, res);
    }

}

// Certificates
const options = {
    key: fs.readFileSync('./cert/privateKey.key'),
    cert: fs.readFileSync('./cert/certificate.crt')
}
const server = https.createServer(options, handleRequestResponse);

const serverObj = server.listen(3000, () => {

    console.log('Server is running on port 3000');
    console.log(serverObj.address().port);

}); 