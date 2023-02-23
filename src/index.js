var http = require("http");

const httpServer = http.createServer(handleServer);
const result = {  
 phone: '18602100000', 
  	email: 'guestcaredominos@jublfood.com' 
}
const PORT = 8081


function handleServer(req, res) {
   if(req.url === "/welcome"){
    res.writeHead(200)
    return res.end("Welcome to Dominos!")
   }
   else if(req.url === "/contact"){
    res.writeHead(200)
    return res.end(
        ({
            "phone": "18602100000",
            "email": "guestcaredominos@jublfood.com",
        }))
   }
   else{
    res.writeHead(404)
    return res.end("Error 404 Page not Found!")
   }
}
httpServer.listen(PORT, ()=>{
    console.log("server is running on 8081")
})

module.exports = httpServer;