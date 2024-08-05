function updateTime(){
var now= new Date();
var currentHours = now.getHours();
var currentMinutes = now.getMinutes();
var currentSeconds = now.getSeconds();
var currentDay = now.getDay();
var amorpm;
if(currentHours<12){
 amorpm= "am";
}
else if(currentHours===12&& currentHours!=0){
     amorpm= "pm";
}
else if(currentHours===12 && currentHours===0){
     amorpm = "am";
}
else{
     currentHours = currentHours-12;
     amorpm="pm";
}

switch(currentDay){
     case 1:
          currentDay="Monday";
          break;
     case 2:
           currentDay="Tuesday";
          break;
     case 3:
          currentDay="Wednesday";
          break;
     case 4:
          currentDay="Thursday";
          break;
     case 5:
          currentDay="Friday";
          break;
     case 6:
          currentDay="Saturday";
          break;
     case 0:
          currentDay="Sunday";
          break;
}
// document.querySelector(".container").textContent = currentHours+" : "+currentMinutes+" : "+currentSeconds+" "+amorpm;
document.querySelector(".hours").textContent = currentHours;
document.querySelector(".minutes").textContent = currentMinutes;
document.querySelector(".seconds").textContent = currentSeconds;
document.querySelector(".amorpm").textContent = amorpm;
document.querySelector(".day").textContent = currentDay;
}
setInterval(updateTime, 1000);
