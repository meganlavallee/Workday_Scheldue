// Local Storage
window.localStorage.setItem('fas fa-save', 'fas fa-save');


window.localStorage.getItem('user');
JSON.parse(window.localStorage.getItem('user'));

localStorage.setItem('fas fa-save', 'fas fa save');
const save = localStorage.getItem('fas fa save');
myStorage = window.localStorage;

// Color coded time blocks to indicate whether they are in the past, present, or future
function display_c() {
    var refresh = 1000;
    mytime = setTimeout('display_ct()', refresh)
  }

  function display_ct() {
    var x = new Date()
    document.getElementById('ct').innerHTML = x;
    display_c();
  }



// Code doesn't follow good practices for class/id names, indentation, lacks quality comments Repo doesn't include a high quality README with screenshots, a description, link to deployed application

