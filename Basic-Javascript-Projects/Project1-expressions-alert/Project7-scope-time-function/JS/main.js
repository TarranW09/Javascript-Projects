//Adding Numbers 1 & 2//
function Add_numbers_1() {
    var X = 10;
    document.write(20 + X + "<br>");
}
function Add_numbers_2()  {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();

//Adding Number 3 & 4//
function Add_numbers_3() {
    var X = 10;
    console.log(15+X);
}
function Add_numbers_4() {
    console.log(X + 100)
}
Add_numbers_3();
Add_numbers_4();

//Get Date//
function get_Date(){
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

//Age Function//
function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "Your'e old enough to vote!";
    }
    else {
        Vote = "Your'e not old enough to vote!";
    }
    document.getElementById("How-Old").innerHTML = Vote;
}

//Time Function//
function Time_Function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is Morning.";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is Evening.";
    }
    document.getElementById("Time_of_Day").innerHTML = Reply;
}