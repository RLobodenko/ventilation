


var radio1 = document.getElementsByName('in1');

radio1[0].onchange = f2;
radio1[1].onchange = f2;
radio1[2].onchange = f2;
radio1[3].onchange = f2;
radio1[4].onchange = f2;
radio1[5].onchange = f2;
radio1[6].onchange = f2;

function f2() {
for (i=0; i<7;i++){
if (radio1[i].checked) {
	document.getElementById('one').src="IMG_3041.JPG";

	return;
}

else if (radio1[1].checked){ 
		document.getElementById('one').src="IMG_3035.JPG";
		return;	
}


else if (radio1[2].checked){ 
		document.getElementById('one').src="IMG_3031.JPG";
		return;	
}

else if (radio1[3].checked){ 
	document.getElementById('one').src="planes_1.jpg";
	document.getElementById('out').innerHTML = "40000 руб";
	document.getElementById('two').src="Group47_1.png";
		return;	
}
else if (radio1[4].checked){ 
	document.getElementById('one').src="IMG_3018.JPG";
		return;	
}
else if (radio1[5].checked){ 
	document.getElementById('one').src="IMG_3009.JPG";
		return;	
}
else if (radio1[6].checked){ 
		document.getElementById('one').src="IMG_2944.JPG";
		return;	
}
	
}	
}

