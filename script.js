// Clicking a time block's save button doesn't save the input text to local storage
// Time blocks aren't color coded to indicate whether they are in the past, present, or future
// Code doesn't follow good practices for class/id names, indentation, lacks quality comments Repo doesn't include a high quality README with screenshots, a description, link to deployed application

var d = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


var d = new Date();


for (let i = 9; i < 18; i++) {
}



var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

var utc = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
document.write(utc);

Date.now()

today = mm + '/' + dd + '/' + yyyy;
document.write(today);
localStorage.setItem('fas fa-save', 'value');


localStorage.setItem('fas fa-save', 'fas fa save');
const save = localStorage.getItem('fas fa save');
myStorage = window.localStorage;


$("#prospects_form").submit(function (e) {
    e.preventDefault();
});

