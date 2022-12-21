
var but1 = document.getElementById('1');
var but2 = document.getElementById('2');

function f3(){
    
    var a = document.getElementById('in4').value;
    var b = document.getElementById('in5').value;

    var c = 3600 * a * 3.14 * b * b / 4;
   
    document.getElementById('out1').innerHTML = c + " м3/ч";
    
   
    
}



function f4(){
    
    var x = document.getElementById('in6').value;
    var y = document.getElementById('in7').value;
    var z = document.getElementById('in8').value;
    
    
    var d = 3600 * x * y * z;
    document.getElementById('out2').innerHTML = d + " м3/ч";
    
   
    
}

