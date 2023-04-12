//Function that adds too variables//
function addition_Function() {
    var x=parseInt(document.getElementById('val1').value);
    var y=parseInt(document.getElementById('val2').value);
    var res= x + y;
    console.log(res);
    document.getElementById('Add').innerHTML = res;
};
//End of section//

//Function to subtract two variables//
function subtraction_Function() {
    var x=parseInt(document.getElementById('val3').value);
    var y=parseInt(document.getElementById('val4').value);
    var res= x - y;
    console.log(res);
    document.getElementById('Subtract').innerHTML = res;
};
//End of section//

//Function to multiply two variables//
function multiplication_Function() {
    var x=parseInt(document.getElementById('val5').value);
    var y=parseInt(document.getElementById('val6').value);
    var res= x * y;
    console.log(res);
    document.getElementById('Multiply').innerHTML = res;
};
//End of section//

//Function to divide two variables//
function division_Function() {
    var x=parseInt(document.getElementById('val7').value);
    var y=parseInt(document.getElementById('val8').value);
    var ras= x / y;
    console.log(res);
    document.getElementById('Subtract').innerHTML = res;
};
//End of section//
var A = 5;
A++;
document.write(A);

var B =7;
B--;
document.write(B);

window.alert(Math.random() * 100);

document.getElementById("demo").innerHTML = Math.PI;

