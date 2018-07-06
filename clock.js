window.onload=function(){
	setInterval(sum,1000);
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