

var but1 = document.getElementById('1');
var but2 = document.getElementById('2');
var but3 = document.getElementById('3');

function f3(){
    
    var a = document.getElementById('in4').value;
    var b = document.getElementById('in5').value;

    var c = (a - b)/b * 100;
   
    document.getElementById('out1').innerHTML = c + " %";
    
   
    
}

function f4(){
    
   var d = document.getElementById('in6').value;
    var i = document.getElementById('in7').value;

    
    
 // var j = 2 * d * i / (d + i);
    



    
  
    
// var k = 6 * j;
    
 //  var  l = 2 * j;
      
  //  document.getElementById('out2').innerHTML = k + " мм";
    
 //   document.getElementById('out3').innerHTML = l + " мм";
    
    
   var q = 0.1 * d;
    
    
    
    document.getElementById('out6').innerHTML = q;
    
var w = 0.2 * d;
    
    document.getElementById('out7').innerHTML = w;
    
   var t = 0.4 * d;
    
    document.getElementById('out8').innerHTML = t;
    
   var u = 0.1 * i;

    document.getElementById('out9').innerHTML = u;
    
    var p = 0.2 * i;
    
    document.getElementById('out10').innerHTML = p;
    
  var  s = 0.4 * i;
    
    document.getElementById('out11').innerHTML = s;
    
}


function f5(){
    
    var m = document.getElementById('in8').value;


    
var n = 6 * m;
    
   var o = 2 * m;
      
    document.getElementById('out4').innerHTML = n + " мм";
    
    document.getElementById('out5').innerHTML = o + " мм";
    
    var v = document.getElementById('in9').value;
    
    
var x = v * 0.054;
    
  var y = v * 0.12;
    
var z = v * 0.28;
    
    document.getElementById('out12').innerHTML = x;
    
    document.getElementById('out13').innerHTML = y;
    
    document.getElementById('out14').innerHTML = z;
    
}





