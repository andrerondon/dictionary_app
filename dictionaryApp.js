// look at url on node documentations

// HEY GUYS PLEASE DOESN'T CHANGE THE NAME OF THE PARAMTERS PLEASE -- ANDRE



const http = require("http");
const url = require('url');
const qs = require ('query-string');
const fs = require('fs');

const server = http.createServer((request, response) => { 
  const {pathname, query} = url.parse(request.url, true); 
  console.log(query)
  let findVocabulary = query.word;
  let arr = [];
  console.log(findVocabulary);
  
fs.readFile('labrary.txt', 'utf8', (err, data) =>{
    if (err){
      console.log(err);
      
    } else{
      response.writeHead(200, {'content-type': 'text/html'});
      response.write('<html><body><h1>Welcome to Dictionary</h1></body></html>');
      let vocabulary = data.split('\n');
      console.log(vocabulary);
      
      for (let i = 0; i < vocabulary.length; i ++){
        if (vocabulary[i].startsWith(findVocabulary)){
          arr.push(vocabulary[i]);  
        } 
     }
     response.write(`<html><body><h1>${arr[0]}</h1></body></html>`);
     return response.end();
    }
    return response.end()

    
    })

});

    // const resource = `${request.method} ${pathname}`


    // if (resource === 'GET /style') {
    //   response.writeHead(200, {'content-type': 'text/text'});
    //   response.write('h1 {color: green; font-size: 50px}')
    // }
    
    // if (resource === 'GET /'){
    //   response.write('<html><body><h1>Welcome to Dictionary</h1></body></html>');
    //   return response.end()
    // }
    // if(resource === 'GET ?/word'){
        
     
    // }

    // let word = resource.substr(5);
    // for(let x = 0; x < 10; x++){
    //     word = word.replace('%20',' ');
    //  }
    //  fs.readFile('./labrary.txt','utf8',function(err,data){
    //      if(err){
    //          console.log(err);
    //      }
    //      console.log(" IM HEREEEEEEEEEEEEEEEEEEEEEE");
         
    //      let count = 0;
    //      let dictionaryConvertedIntoArrOfStrings = data.split('\n');
    //      for (let x = 0; x < dictionaryConvertedIntoArrOfStrings.length; x++){
    //          if(dictionaryConvertedIntoArrOfStrings[x].startsWith(word)){
    //              response.write(`<html><body><h1>definition :-</h1><p>${dictionaryConvertedIntoArrOfStrings[x].substr(word.length+2)}</p></body></html>`);
    //              count++;
    //          }            
    //      }
    //      if(count === 0){
    //          response.write('<html><body><h1>Sorry your word was not found</h1></body></html>');
    //      }   
    //      return response.end()    
    //  })   


  
  
  



const PORT = 5000;
const DOMAIN = 'localhost';
  
  server.listen(PORT, DOMAIN, () => {
    console.log(`Server Dictionary App running  ${DOMAIN}:${PORT}`);
  })


