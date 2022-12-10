
var but1 = document.getElementById('but1');

var but2 = document.getElementById('but2');


function f3(){
    
    var a = document.getElementById('in4').value;
    var b = document.getElementById('in5').value;

    var c = (a - b)/b * 100;
   
    document.getElementById('out1').innerHTML = c + " %";
    
   
    
}

function f4(){
    
    var d = document.getElementById('in6').value;
    var i = document.getElementById('in7').value;

    var j = (2 * d * i)/ (d + i);
      
    document.getElementById('out2').innerHTML = j + " мм";
    
   
    
}



