var but2 = document.getElementById('2');
var but3 = document.getElementById('3');



function f4(){
    
   var d = document.getElementById('in6').value;
    var i = document.getElementById('in7').value;

   // var f = d + i;
    
//var j = 2 * d * i / f;
    
    var q = 0.1 * d / 10;
     
    var w = 0.2 * d / 10;
     
   
     
    var t = 0.4 * d / 10;
     
    var u = 0.1 * i / 10;
     
     var p = 0.2 * i / 10;
     

     
   var  s = 0.4 * i / 10;
     
    var e = 0.9 * d / 10;
     
     
     
    
     
 var g = 0.8 * d / 10;
     
     
    var h = 0.6 * d / 10;
     
  
     
    var u1 = 0.9 * i / 10;

 
     var p1 = 0.8 * i / 10;
     
  
     
   var  s1 = 0.6 * i / 10;
     
     

    if ( i >= 100 && i <= 200) {
        
        document.getElementById('out7').innerHTML = w.toFixed(2) + " см";
        document.getElementById('out10').innerHTML = p.toFixed(2) + " см";
        
        document.getElementById('out19').innerHTML = g.toFixed(2) + " см";
        document.getElementById('out22').innerHTML = p1.toFixed(2) + " см";
        return
    }
    else if ( i > 200){
        document.getElementById('out6').innerHTML = q.toFixed(2) + " см";
    
   
        document.getElementById('out8').innerHTML = t.toFixed(2) + " см";
        
        document.getElementById('out9').innerHTML = u.toFixed(2) + " см";
        
        
        document.getElementById('out11').innerHTML = s.toFixed(2) + " см";
        
        document.getElementById('out18').innerHTML = e.toFixed(2) + " см";
        
        document.getElementById('out20').innerHTML = h.toFixed(2) + " см";
        
        document.getElementById('out21').innerHTML = u1.toFixed(2) + " см";
        document.getElementById('out23').innerHTML = s1.toFixed(2) + " см";
        
        return
    }
    
  
    
// var k = 6 * j;
    
 //  var  l = 2 * j;
      
 //document.getElementById('out2').innerHTML = j + " мм";
    
 //   document.getElementById('out3').innerHTML = l + " мм";
    
    
  
    
    
    
    
   

    
}


function f5(){
    
 //   var m = document.getElementById('in8').value;


    
//var n = 6 * m;
    
  // var o = 2 * m;
      
  //  document.getElementById('out4').innerHTML = n + " мм";
    
  //  document.getElementById('out5').innerHTML = o + " мм";
    
    var v = document.getElementById('in9').value;
    
    
var x = v * 0.054 / 10;
    
  var y = v * 0.12 / 10;
    
var z = v * 0.28 / 10;
    
 
    var a = (v - v * 0.054) / 10;
        
      var b = (v - v * 0.12) / 10;
        
    var c = (v - v * 0.28) / 10;
    
    if ( v >= 100 && v <= 300) {
        
        document.getElementById('out13').innerHTML = y.toFixed(2) + " см";
        document.getElementById('out16').innerHTML = b.toFixed(2) + " см";
        return
    }
    else if ( v > 300){
    document.getElementById('out12').innerHTML = x.toFixed(2) + " см";
    
   
    
    document.getElementById('out14').innerHTML = z.toFixed(2) + " см";
        
        document.getElementById('out15').innerHTML = a.toFixed(2) + " см";
        
        
        document.getElementById('out17').innerHTML = c.toFixed(2) + " см";
        return
    }
    

        
       
}






