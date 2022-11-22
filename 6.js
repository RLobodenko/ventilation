
var but1 = document.getElementById('but1');




function f3(){
  
    var a = document.getElementById('in4').value;
    var b = document.getElementById('in5').value;

    var c = (a - b)/b * 100
   
    document.getElementById('out1').innerHTML = c;

    var d = a*60/50
    
     document.getElementById('out').innerHTML = d + " м3/ч";
    
    
    var e = a*68/50
     document.getElementById('out2').innerHTML = e + " м3/ч";
}




