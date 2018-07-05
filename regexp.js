window.onload=function(){
	var s=document.getElementById("answer").innerHTML;
	var a=s.match(/[A-Y]/)
	if (a>=5)  document.write("Correct Answer");
	else document.write(a);
}