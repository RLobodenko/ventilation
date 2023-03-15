var but1 = document.getElementById('1');
var but2 = document.getElementById('2');
var but3 = document.getElementById('3');


function f2(){
    
    var a = document.getElementById('in1').value;
    var b = document.getElementById('in2').value;

    var c = (a - b)/b * 100;
   
    document.getElementById('out3').innerHTML = c.toFixed(1) + " %";
    
   
    
}

function f3(){
    
    var a = document.getElementById('in4').value;
    var b = document.getElementById('in5').value;

    var c = 3600 * a * 3.14 * b * b / 4000000;
   
    document.getElementById('out1').innerHTML = c.toFixed(1) + " м3/ч";
    
   
    
}

      



function f4(){
    
    var x = document.getElementById('in6').value;
    var y = document.getElementById('in7').value;
    var z = document.getElementById('in8').value;
    
    
    var d = 3600 * x * y * z / 1000000;
    document.getElementById('out2').innerHTML = d.toFixed(1) + " м3/ч";
    
   
    
}


