var d = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
document.getElementById("demo").innerHTML = months[d.getMonth()];

var d = new Date();
document.getElementById("demo").innerHTML = d.getDate();

for (let i = 9; i < 18; i++) {
    $(".container").append(buildTimeSlot(i));
}


const saveBtn = addLocalStorage
localStorage.setItem('fas fa-save', 'value')
console.log("You Clicked")

localStorage.setItem('fas fa-save', 'Tom');
const cat = localStorage.getItem('fas fa save');

$("#prospects_form").submit(function(e) {
    e.preventDefault();
});