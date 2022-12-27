// 1. Create a variable, myAge, and set its value to your age
let myAge=22;
let ourAge=44;
// 2. Log the myAge variable to the console
document.write(myAge + "<br>");
document.write(ourAge + "<br>");

// 1. Create two variables, myAge and humanDogRatio
let humanDogRatio=7;
// 2. Multiply the two together and store the result in myDogAge 
var myDogAge=myAge*humanDogRatio;
// 3. Log myDogAge to the console
document.write(myDogAge + "<br>");

// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
let bonusPoints = 50
bonusPoints+=50
// Decrease it down to 25, and then finally increase it to 70
bonusPoints = bonusPoints - 75
bonusPoints+=45
// Console.log the value after each step
document.write(bonusPoints + "<br>");

// Create a function (you decide the name) that logs out the number 42 to the console
function fortyTwo(){
    document.write(42 + "<br>")
}
// Call/invoke the function
fortyTwo();

let lapsCompleted = 0
// Create a function that increments the lapsCompleted variable with one
function laps(){
     lapsCompleted += 1
    document.write(lapsCompleted)
}
// Run it three times
laps()
laps()
laps()
document.write("<br>")

// Create two variables, name and greeting. The name variable should store your name,
let name="Chandan";
// and the greeting should store e.g. "Hi, my name is "
let greeting = "Hi, My name is "
// Create a third variable, myGreeting, that contatenates the two strings
let myGreeting = greeting + name
// Log myGreeting to the console
document.write(myGreeting + "<br>")

document.write(4 + 5 + "<br>") // 9
document.write("2" + "4" + "<br>") // "24"
document.write("5" + 1 + "<br>") // "51"

// Grab the welcome-el paragraph and store it in a variable called welcomeEl
let welcomeEl = document.getElementById("welcome-el");
// Create two variables (name & greeting) that contains your name
let agreet = 'Hi, '
let aname = "Chandan"
// and the greeting we want to render on the page
let a = agreet + aname
// Render the welcome message using welcomeEl.innerText
welcomeEl.innerText = agreet + aname

