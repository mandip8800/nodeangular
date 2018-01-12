setInterval(function(){
	console.log("First");
	var date = new Date();
	console.log(date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());

},1000);

setInterval(function(){
	console.log("Second");
	var date = new Date();
	console.log(date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());

},2000);