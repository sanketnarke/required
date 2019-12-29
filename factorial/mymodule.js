fs=require("fs");
exports.fact=function(a){
     
	 var i,fact=1;
	 
	 for(i=1;i<=a;i++)
	 {
		 fact=fact*i;
		 
	 }	 
		 
	 return parseInt(fact); 
}

