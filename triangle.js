window.onload=function(){
	setInterval(move,3200)
}

function move(){
	setTimeout(move1,1000);
	setTimeout(move2,1000);
	setTimeout(move3,1000);
	setTimeout(move4,1000);
	setTimeout(move5,1000);
	setTimeout(move6,1000);
	setTimeout(move7,1000);
}

function move1(){
	var it=document.getElementById("doit");
	it.style.transform="translate(2500px,1200px)";
}

function move2(){
	var it=document.getElementById("doit");
	it.style.transform="translate(25%,75%)";
}

function move3(){
	var it=document.getElementById("doit");
	it.style.transform="translate(78%,78%)";
}

function move4(){
	var it=document.getElementById("doit");
	it.style.transform="translate(0px,200px)";
}

function move5(){
	var it=document.getElementById("doit");
	it.style.transform="translate(0px,200px)";
}

function move6(){
	var it=document.getElementById("doit");
	it.style.transform="translate(0px,200px)";
}

function move7(){
	var it=document.getElementById("doit");
	it.style.transform="translate(0px,200px)";
}