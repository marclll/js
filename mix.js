window.onload=function(){
	setInterval(change,250);
	setInterval(sum,1000);
}
var butt=document.getElementById("button").onclick=greet();

function change(){
	var x=document.getElementById("aqui").src;
	if (x=="file:///C:/Users/inlab/Documents/GitHub/js/colores/red.png") document.getElementById("aqui").src="colores/blue.png";
	else if (x=="file:///C:/Users/inlab/Documents/GitHub/js/colores/blue.png") document.getElementById("aqui").src="colores/green.png"
	else document.getElementById("aqui").src="colores/red.png";
}

function sum(){
	var x=document.getElementById("second").innerHTML;
	++x;
	if (x==60){
		x=0;
		var y=document.getElementById("minute").innerHTML;
		++y;
		if (y==60){
			y=0;
			var z=document.getElementById("hour").innerHTML;
			++z;
			if (z==24) z=0;
			if (z<10) document.getElementById("hour").innerHTML='0'+z;
			else document.getElementById("hour").innerHTML=z;
		}
		if (y<10) document.getElementById("minute").innerHTML='0'+y;
		else document.getElementById("minute").innerHTML=y;
	}
	if (x<10) document.getElementById("second").innerHTML='0'+x;
	else document.getElementById("second").innerHTML=x;
}

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