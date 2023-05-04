var but = document.getElementById('but');
var radio1 = document.getElementsByName('in1');
var radio2 = document.getElementsByName('in2');
var radio3 = document.getElementsByName('in3');
var radio4 = document.getElementsByName('in4');
var radio5 = document.getElementsByName('in5');
var radio6 = document.getElementsByName('in6');
var radio7 = document.getElementsByName('in7');


var ks1=[1100, 2200, 3300, 4400];
var ks2=[900, 1800, 2700, 3600];
var ks3=[1000, 2000, 3000, 4000];
var ks4=[1100, 2200, 3300, 4400];
var ks5=[900, 1800, 2700, 3600];
var ks6=[1000, 2000, 3000, 4000];
var ks7=[1100, 2200, 3300, 4400];
var ks8=[900, 1800, 2700, 3600];
var ks9=[1000, 2000, 3000, 4000];
var ks10=[1100, 2200, 3300, 4400];
var ks11=[900, 1800, 2700, 3600];
var ks12=[1000, 2000, 3000, 4000];
var ks13=[1100, 2200, 3300, 4400];
var ks14=[900, 1800, 2700, 3600];
var ks15=[1000, 2000, 3000, 4000];
var ks16=[1100, 2200, 3300, 4400];
var ks17=[900, 1800, 2700, 3600];
var ks18=[1000, 2000, 3000, 4000];
var ks19=[1100, 2200, 3300, 4400];
var ks20=[900, 1800, 2700, 3600];
var ks21=[1000, 2000, 3000, 4000];



function f2() {

for (i=0;i<radio7.length;i++){


    
    if(radio1[i].selected) {


    document.getElementById('out1').innerHTML = ks1[0];
        document.getElementById('out2').innerHTML = ks2[0];
        document.getElementById('out3').innerHTML = ks3[0];
    return;
    }


    else if(radio2[i].selected) {


        document.getElementById('out1').innerHTML = ks4[0];
            document.getElementById('out2').innerHTML = ks5[0];
            document.getElementById('out3').innerHTML = ks6[0];
    return;
    }
    else if(radio3[i].selected) {


        document.getElementById('out1').innerHTML = ks7[0];
            document.getElementById('out2').innerHTML = ks8[0];
            document.getElementById('out3').innerHTML = ks9[0];
    return;
    }
    else if(radio4[i].selected) {


        document.getElementById('out1').innerHTML = ks10[0];
            document.getElementById('out2').innerHTML = ks11[0];
            document.getElementById('out3').innerHTML = ks12[0];
    return;
    }
    else if(radio5[i].selected) {


        document.getElementById('out1').innerHTML = ks13[0];
            document.getElementById('out2').innerHTML = ks14[0];
            document.getElementById('out3').innerHTML = ks15[0];
    return;
    }
    else if(radio6[i].selected) {


        document.getElementById('out1').innerHTML = ks16[0];
            document.getElementById('out2').innerHTML = ks17[0];
            document.getElementById('out3').innerHTML = ks18[0];
    return;
    }
    else if(radio7[i].selected) {

        document.getElementById('out1').innerHTML = ks19[0];
            document.getElementById('out2').innerHTML = ks20[0];
            document.getElementById('out3').innerHTML = ks21[0];
    return;
    }
    
}
}
