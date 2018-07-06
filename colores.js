window.onload=function(){
	setInterval(change,500);
}

function change(){
	var x=document.getElementById("aqui").src;
	if (x=="file:///C:/Users/inlab/Documents/GitHub/js/colores/red.png") document.getElementById("aqui").src="colores/blue.png";
	else if (x=="file:///C:/Users/inlab/Documents/GitHub/js/colores/blue.png") document.getElementById("aqui").src="colores/green.png"
	else document.getElementById("aqui").src="colores/red.png";
}