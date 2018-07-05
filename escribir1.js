window.onload=function(){
	document.getElementById("first").innerHTML="First";

	var z=document.getElementsByClassName("second");
	for (i=0;i<z.length;++i){
		z[i].innerHTML="Second";
	}
	
	document.getElementsByTagName("div")[3].innerHTML="Third";
}
