// look at url on node documentations

// HEY GUYS PLEASE DOESN'T CHANGE THE NAME OF THE PARAMTERS PLEASE -- ANDRE

//





////////////////////////////////////this code was previously here////////////////////////////////////////

const http = require("http");
const url = require('url');
const qs = require ('query-string');
const fs = require('fs');

const server = http.createServer((request, response) => { 
  const {pathname, query} = url.parse(request.url, true); 
  console.log(query)

  response.writeHead(200, {'content-type': 'text/html'});

  let body = '';
  request.on('data', (chunk) =>{
    body += chunk;
    console.log(body);
  })
  request.on('end', () =>{
    request.body = qs.parse(body);
    const resource = `${request.method} ${pathname}`
    if (resource === 'GET /style') {
      response.writeHead(200, {'content-type': 'text/text'});
      response.write('h1 {color: green; font-size: 50px}')
    }
    
    if (resource === 'GET /'){
      response.write('<html><body><h1>Welcome to Dictionary</h1></body></html>');
      
      return response.end()
    }
    if(resource === 'GET /word'){
      let word = resource.substr(5);
      for(let x=0;x<10;x++){
          word =  word.replace('%20',' ');
       }
       fs.readFile('./labrary.txt','utf8',function(err,data){
           if(err){
               console.log(err);
           }
           let count = 0;
           let dictionaryConvertedIntoArrOfStrings = data.split('\n');
           for (let x=0;x<dictionaryConvertedIntoArrOfStrings.length;x++){
               if(dictionaryConvertedIntoArrOfStrings[x].startsWith(word)){
                   response.write(`<html><body><h1>definition :-</h1><p>${dictionaryConvertedIntoArrOfStrings[x].substr(word.length+2)}</p></body></html>`);
                   count++;
               }            
           }
           if(count === 0){
               response.write('<html><body><h1>Sorry your word was not found</h1></body></html>');
           }       
       })    
  }


  })
  
  
  
});


const PORT = 5000;
const DOMAIN = 'localhost';
  
  server.listen(PORT, DOMAIN, () => {
    console.log(`Server Dictionary App running  ${DOMAIN}:${PORT}`);
  })

///////////////////////////////////////this code was previously here/////////////////////////////////////







///////////////////////////////////////////sandeep's version////////////////////////////////////////////////
// const http = require('http');
// const url = require('url');
// const fs = require('fs');
// const server = http.createServer(function(req,res){
    
//     let {pathname,query} = url.parse(req.url); 
//     if(typeof(query)==='object'){
//         res.write('<html><body><h1>Welcome to Dictionary</h1></body></html>');
//     }
//     if(typeof(query) === 'string'){
//         let word = query.substr(5);
//         for(let x=0;x<10;x++){
//             word =  word.replace('%20',' ');
//          }
//          fs.readFile('./labrary.txt','utf8',function(err,data){
//              if(err){
//                  console.log(err);
//              }
//              let count = 0;
//              let dictionaryConvertedIntoArrOfStrings = data.split('\n');
//              for (let x=0;x<dictionaryConvertedIntoArrOfStrings.length;x++){
//                  if(dictionaryConvertedIntoArrOfStrings[x].startsWith(word)){
//                      res.write(`<html><body><h1>definition :-</h1><p>${dictionaryConvertedIntoArrOfStrings[x].substr(word.length+2)}</p></body></html>`);
//                      count++;
//                  }            
//              }
//              if(count === 0){
//                  res.write('<html><body><h1>Sorry your word was not found</h1></body></html>');
//              }       
//          })    
//     }

    
    
// });
// const PORT = 9876;
// const DOMAIN = '127.0.0.1';
// server.listen(PORT,DOMAIN,function(){
//     console.log('server running');
// })
///////////////////////////////////////////sandeep's version//////////////////////////////////////////////