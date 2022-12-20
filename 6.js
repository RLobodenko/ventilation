

function f3(){
    
    var a = document.getElementById('in4').value;
    var b = document.getElementById('in5').value;

    var c = (a - b)/b * 100;
   
    document.getElementById('out1').innerHTML = c + " %";
    
   
    
}

function f4(d,i){
    
    var d = document.getElementById('in6').value;
    var i = document.getElementById('in7').value;

    
    
 j = (2 * d * i) / (d + i);
    



    
  
    
 k = 6 * j;
    
     l = 2 * j;
      
    document.getElementById('out2').innerHTML = k + " мм";
    
    document.getElementById('out3').innerHTML = l + " мм";
    
    
}



