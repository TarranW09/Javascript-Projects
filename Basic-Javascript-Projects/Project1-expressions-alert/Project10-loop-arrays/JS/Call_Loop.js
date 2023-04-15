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
            Content += Instruments[Y] + "<br>";
        }
        document.getElementById("List_of_Instruments").innerHTML = Content;
    }