function Anade(){
	var x=document.getElementById("texto").value;
	var y=document.getElementById("word").innerHTML;
	document.getElementById("word").innerHTML=y+x+'-';
	document.getElementById("texto").value="";
}