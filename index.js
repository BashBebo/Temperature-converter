// Variables for Input, button, and Output
const TempInput = document.getElementById("Tempinput");
const convertBtn = document.getElementById("Tempconvert");
const TempOutput = document.getElementById("Tempoutput");

// Event Listener for button click for conversion
convertBtn.addEventListener("click", function() {
    const TempNumber = parseFloat(TempInput.value);   // Getting the input value form the user typed it and putting it into a varibale then converiting it to a number so when its called it gets the number value
    console.log(TempNumber);
    const fahrenheit = celciusToFahrenheit(TempNumber); // makes a varibale for farenheit calls the function 
    console.log(fahrenheit);
    TempOutput.textContent = `Temperature is ${fahrenheit}°F`;
    
});

function celciusToFahrenheit(TempNumber) {   // function to convert celcius to farenheit
    return (TempNumber * 9/5) + 32;  // creates a function to convert returns the value afrer conversion puts the formual as celcius times 9 divided by 5 plus 32
}


