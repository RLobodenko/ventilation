


var radio1 = document.getElementsByName('in1');

radio1[0].onchange = f2;
radio1[1].onchange = f2;
radio1[2].onchange = f2;
radio1[3].onchange = f2;
radio1[4].onchange = f2;
radio1[5].onchange = f2;

function f2() {
for (i=0; i<6;i++){
if (radio1[0].checked) {
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
	document.getElementById('one').src="IMG_2944.JPG";
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

}	
}

