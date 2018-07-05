

function square(a){
	return a*a;
}

function even(a){
	if (a%2==0) return true;
	return false;
}

function factorial(a){
	var z=1;
	while (a>0){
		z*=a;
		--a;
	}
}

function random(){
	return Math.random()*1000000;
}

function biggest(a,b,c,d){
	var z=a;
	if(b>z) z=b;
	if(c>z) z=c;
	if(d>z) z=d;
	return z;
}
function odd(a){
	if (!even(a)) return true;
	return false;
}

var z=["January","February","March","April","May","June","July","August","September","October","November","December"];
for(i=0;i<12;++i){
	console.log(z[i]);
}
