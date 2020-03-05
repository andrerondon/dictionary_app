// look at url on node documentations

// HEY GUYS PLEASE DOESN'T CHANGE THE NAME OF THE PARAMTERS PLEASE -- ANDRE

const http = require("http");
const url = require('url');


const server = http.createServer((request, response) => { 
  const {pathname, query} = url.parse(request.url, true); 
  console.log(query)
  
  response.writeHead(200, {'content-type': 'text/text'});
  
  if (pathname === '/style') {
    response.writeHead(200, {'content-type': 'text/text'});
    response.write('h1 {color: green; font-size: 50px}')
  }
  
  if (pathname === '/'){
    response.write("Welcome to Dictionary");
    
    return response.end()
  }
  
  
});


const PORT = 5000;
const DOMAIN = 'localhost';
  
  server.listen(PORT, DOMAIN, () => {
    console.log(`Server Dictionary App running  ${DOMAIN}:${PORT}`);
  })
