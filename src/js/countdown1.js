
// To manipulate count down time 
function setCountdown(oldDays, oldHours, oldminutes) {

    // 
    futureDate = new Date("2024-04-04T00:00:00")
    currentDate = new Date();

    var difference = futureDate.getTime() - currentDate.getTime();

    var days = Math.floor(difference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    // var seconds = Math.floor((difference % (1000 * 60)) / 1000);

    console.log(oldDays, days);
    console.log(oldHours, oldHours);
    console.log(oldminutes, oldminutes);

    if (oldDays != days) {
        console.log('Day     Updated');
        var oldDays = days;
        var oldHours = hours;
        var oldminutes = minutes;

        document.getElementById('days').style='transform: rotateX(360deg);';
        document.getElementById('hours').style='transform: rotateX(360deg);';
        document.getElementById('mins').style='transform: rotateX(360deg);';

        document.getElementById('days').innerHTML=days;
        document.getElementById('hours').innerHTML=hours;
        document.getElementById('mins').innerHTML=minutes;

    } else if (oldHours != hours) {
        console.log('Hour Updated');
        var oldHours = hours;
        var oldminutes = minutes;

        document.getElementById('hours').style='transform: rotateX(360deg);';
        document.getElementById('mins').style='transform: rotateX(360deg);';

        document.getElementById('hours').innerHTML=hours;
        document.getElementById('mins').innerHTML=minutes;

    } else if (oldminutes != minutes) {
        console.log('Minute Updated');
        var oldminutes = minutes;
        document.getElementById('mins').style='transform: rotateX(360deg);';

        document.getElementById('mins').innerHTML=minutes;

    } else {
        console.log('Nothing updated');
        var oldDays = days;
        var oldHours = hours;
        var oldminutes = minutes;

        document.getElementById('days').innerHTML=days;
        document.getElementById('hours').innerHTML=hours;
        document.getElementById('mins').innerHTML=minutes;

        document.getElementById('days').style='transform: rotateX(0deg);';
        document.getElementById('hours').style='transform: rotateX(0deg);';
        document.getElementById('mins').style='transform: rotateX(0deg);';
    }


    document.getElementById('days').innerHTML=days;
    document.getElementById('hours').innerHTML=hours;
    document.getElementById('mins').innerHTML=minutes;



    setTimeout(() => {
        console.log("t")
        oldDays = days;
        oldHours = hours;
        oldminutes = minutes;
        setCountdown(oldDays, oldHours, oldminutes);

    }, 1000)
}

futureDate = new Date("2024-04-04T00:00:00")
currentDate = new Date();
var difference = futureDate.getTime() - currentDate.getTime();

var days = Math.floor(difference / (1000 * 60 * 60 * 24));
var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
setCountdown(days, hours, minutes);