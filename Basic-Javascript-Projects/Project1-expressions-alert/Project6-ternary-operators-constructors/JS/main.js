function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywards_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle.Color + "colored" + Erik_Vehicle_Model +
    " manufactured in " + Erik_Vehicle_Years;
}

function Age_Function() {
    var age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are too young to vote":"You can vote";
    document.getElementById("Vote").innerHTML = Can_vote + " . ";
}
