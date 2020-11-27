var d = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
document.getElementById("demo").innerHTML = months[d.getMonth()];

var d = new Date();
document.getElementById("demo").innerHTML = d.getDate();

for (let i = 9; i < 18; i++) {
    $(".container").append(buildTimeSlot(i));
}

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

var utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
document.write(utc);

Date.now()

today = mm + '/' + dd + '/' + yyyy;
document.write(today);
const saveBtn = addLocalStorage
localStorage.setItem('fas fa-save', 'value')
console.log("You Clicked")

localStorage.setItem('fas fa-save', 'Tom');
const cat = localStorage.getItem('fas fa save');

$("#prospects_form").submit(function(e) {
    e.preventDefault();
});

// Clicking a time block's save button doesn't save the input text to local storage
// The current day isn't displayed at the top of the calendar
// Time blocks aren't color coded to indicate whether they are in the past, present, or future
// Code doesn't follow good practices for class/id names, indentation, lacks quality comments Repo doesn't include a high quality README with screenshots, a description, link to deployed application