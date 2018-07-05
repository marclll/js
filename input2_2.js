function greet(){
	var x=document.getElementById("name").value;
	if (x!=""){
		document.getElementById("greet").innerHTML="Hola "+x;
	}
	else{
		document.getElementById("greet").innerHTML="Invalid name";
	}
	document.getElementById("name").value=null;
}