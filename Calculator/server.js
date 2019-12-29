var fs=require('fs');
var http=require("http");
url=require("url");
query=require("querystring");
mymodule=require("./module1")
//take function name with req and resp
processdata=function(req,resp)
{//parse url into var and para of parse is req url
d=url.parse(req.url)
//use switchcase on pathname of url
switch(d.pathname)
{
	//first case is for forward slash
	case "/":
	//h is capital in writeHead resp wirt If the response from the HTTP server is supposed to be displayed as HTML, you should include an HTTP header with the correct content type
	resp.writeHead(200,{'content-Type':'text/html'});
	//read file of html page
	fs.readFile("form.html",function(error,data)
	{
		if(error)
		{
			resp.end("Error");
		}
		else
		{
			resp.end(data);
		}
	})
	break;
	case "/operation":
	data=query.parse(d.query);
	resp.writeHead(200,{'content-Type':'text/html'});
	switch(data.p)
	{
		case 'Addition':
		resp.end("Addition:"+mymodule.addition(data.num1,data.num2));
		break;
		
		
		case 'Subtraction':
		resp.end("Subtraction:"+mymodule.subtraction(data.num1,data.num2));
		break;
		
		case 'Multiplication':
		resp.end("Multiplication:"+mymodule.multiplication(data.num1,data.num2));
		break;
		
		
		case 'Division':
		resp.end("Division:"+mymodule.division(data.num1,data.num2));
		break;
	}
	
}
}
http.createServer(processdata).listen(4000);
console.log("server is running at 4000");