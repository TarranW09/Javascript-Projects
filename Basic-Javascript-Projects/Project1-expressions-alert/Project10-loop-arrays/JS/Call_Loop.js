function Call_Loop() {
    var Digit = "";
    var x = 1;
    while (x < 11) {
        Digit += "<br>" + x;
        x++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

    var instruments = ["Guitar", "Piano", "Drums", "Bass", "Violin", "Trumpet", "Flute"];
    var Content = "";
    var Y;
    function For_Loop() {
        for (Y = 0; Y < instruments.length; Y++) {
            Content += instruments[Y] + "<br>";
        }
        document.getElementById("List_of_Instruments").innerHTML = Content;
    }

    function Scope() {
        var carName = "Corvette";
        document.getElementById("Example").innerHTML = carName;
    }

    function constant_function() {
        const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
        Musical_Instrument.color = "blue";
        Musical_Instrument.price = "$900";
        document.getElementById("Constant").innerHTML = "The cost of the " +
            Musical_Instrument.type + " was " + Musical_Instrument.price;
    }

    var x = 82;
    document.write(X);
    {
        let X = 33;
        document.write("<br>" + X);
    }
    document.write("<br>" + X);

    let car = {
        make: "Dodge ",
        model: "Viper ",
        year: "2021 ",
        color: "red ",
        description: function() {
            return "The car is a " + this.year + this.color + this.make + this.model;
        }
    };
    document.getElementById("Car_Object").innerHTML = car.description();

    function Cont() {
let text = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) { continue; }
  text += "The number is " + i + "<br>";
}
document.getElementById("Cont").innerHTML = text;
}