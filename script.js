let currentDay = $("#currentDay").text(luxon.DateTime.local().toFormat("ff"));
let currentTime = parseInt(luxon.DateTime.local().toFormat("H"));

for (let i = 9; i < 18; i++) {
    $(".container").append(buildTimeSlot(i));
}



const saveBtn = addLocalStorage
localStorage.setItem('fas fa-save', 'value')
    console.log("You Clicked")