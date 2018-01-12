var http=require("http");
var fs = require("fs");
var path = require("path");

function HttpServer(port){
	var obj=this;

	obj.start=function(){
		console.log("Server is running at " + port);
       http.createServer(function(req,res){
       	 switch(req.method){
       	 	case "GET":
       	 	obj.doGet(req,res);
       	 	break;
       	 	case "POST":
       	 	break;
       	 }

       }).listen(port);
	}

	obj.doGet=function(req,res){
		var filePath = path.join(__dirname, 'public/'+req.url);

		fs.stat(filePath,function(err,stat){
			if(err == null){
				var stat = fs.statSync(filePath);

				var readStream = fs.createReadStream(filePath).pipe(res);
			}
		});

	}

	return obj;
}

	new HttpServer(3000).start();