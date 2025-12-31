/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 9
   Review Assignment

   Event Timer
   Author: David Quintana
   Date: 11/08/2025
*/

runClock();
setInterval(runClock, 1000);

function runClock() {
   var thisDay = new Date();
   var thisDate = thisDay.toLocaleDateString();
   var thisDayNum = thisDay.getDay();
   var thisWeekday = getWeekday(thisDayNum);
   var thisTime = thisDay.toLocaleTimeString();

   document.getElementById("date").textContent = thisDate;
   document.getElementById("wday").textContent = thisWeekday;
   document.getElementById("time").textContent = thisTime;

   var j4Date = nextJuly4(thisDay);
   var daysLeft = (j4Date - thisDay) / (1000 * 60 * 60 * 24);

   var hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;
   var minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;
   var secsLeft = (minsLeft - Math.floor(minsLeft)) * 60;

   document.getElementById("dLeft").textContent = Math.floor(daysLeft);
   document.getElementById("hLeft").textContent = Math.floor(hrsLeft);
   document.getElementById("mLeft").textContent = Math.floor(minsLeft);
   document.getElementById("sLeft").textContent = Math.floor(secsLeft);
}

function getWeekday(dayNum) {
   var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   return weekdays[dayNum];
}

function nextJuly4(currentDate) {
   var cYear = currentDate.getFullYear();
   var jDate = new Date("July 4, 2021");
   jDate.setFullYear(cYear);
   if ((jDate - currentDate) < 0) jDate.setFullYear(cYear + 1);
   return jDate;
}
