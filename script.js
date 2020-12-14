// Local Storage
window.localStorage.getItem('user');
JSON.parse(window.localStorage.getItem('user'));

window.localStorage.setItem('fas fa-save', 'fas fa-save');

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

function displayTime() {
  var time = moment().format('HH:mm:ss');
  var time2 = moment().format('MMMM Do YYYY, h:mm:ss a')
  var time3 = moment().format('LLLL');
  var time4 = moment().format();
  var time5 = moment().add(7, 'days').subtract(1, 'months').calendar();
  var time6 = moment().add(7, 'days').subtract(1, 'months').year(2009).hours(0).minutes(0).seconds(0).fromNow();
  $('#clock').html(time);
  $('#clock2').html(time2);
  $('#clock3').html(time3);
  $('#clock4').html(time4);
  $('#clock5').html(time5);
  $('#clock6').html(time6);
  setTimeout(displayTime, 1000);
}

$(document).ready(function() {
  displayTime();
});

// grab current from moment.js (api)
var moment = require('moment');
var now = moment();
moment("")


// round current time to whole number
var m = (((minutes + 7.5)/15 | 0) * 15) % 60;
var h = ((((minutes/105) + .5) | 0) + hours) % 24;


// compare current time to other time

// Document ready function in jquery