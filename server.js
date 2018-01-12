var http=require("http");

console.log("Http Server is running...at 3000");
http.createServer(function(req,res){
	res.write("<h1>Hello node</h1>");
	res.end();
}).listen(3000);