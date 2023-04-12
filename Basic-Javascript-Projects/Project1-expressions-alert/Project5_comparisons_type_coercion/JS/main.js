document.write(-2E310);
document.write(6E3232);
document.write(typeof "word");
document.write(typeof 3);
document.write("10" + 5);
document.write(10 > 2);
console.log(2 > 7);
document.write(10 + 5) == 15
document.write(5 > 10 && 10 > 4);
document.write(5 > 10 || 10 > 4);
document.write(5 > 10 || 10 > 20);
X = 10;
Y = 10;
T = 11;
document.write(X === Y);
document.write(X === T);
function my_Function() {
    document.getElementById("test").innerHTML = 0/0
}
document.getElementById("test").innerHTML = isNaN('This is a string');
document.getElementById("test").innerHTML = isNaN('007');
//Not Operator//
function not_Function() {
    document.getElementById("Not").innerHTML = !(5 > 10);
}
