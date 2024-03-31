
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


    if (oldDays != days) {
        var oldDays = days;
        var oldHours = hours;
        var oldminutes = minutes;

        document.getElementById('days').style='transform: rotateX(180deg);';
        document.getElementById('hours').style='transform: rotateX(180deg);';
        document.getElementById('mins').style='transform: rotateX(180deg);';

        setTimeout(() => {
            document.getElementById('days').innerHTML=days;
            document.getElementById('hours').innerHTML=hours;
            document.getElementById('mins').innerHTML=minutes;
        })

    } else if (oldHours != hours) {
        var oldHours = hours;
        var oldminutes = minutes;

        document.getElementById('hours').style='transform: rotateX(180deg);';
        document.getElementById('mins').style='transform: rotateX(180deg);';

        setTimeout(() => {
            document.getElementById('hours').innerHTML=hours;
            document.getElementById('mins').innerHTML=minutes;
        })

    } else if (oldminutes != minutes) {
        var oldminutes = minutes;
        document.getElementById('mins').style='transform: rotateX(180deg);';

        document.getElementById('mins').innerHTML=minutes;

    } else {
        var oldDays = days;
        var oldHours = hours;
        var oldminutes = minutes;

        document.getElementById('days').style='transform: rotateX(0deg);';
        document.getElementById('hours').style='transform: rotateX(0deg);';
        document.getElementById('mins').style='transform: rotateX(0deg);';

        setTimeout(() => {
            document.getElementById('days').innerHTML=days;
            document.getElementById('hours').innerHTML=hours;
            document.getElementById('mins').innerHTML=minutes;
        })
    }


    document.getElementById('days').innerHTML=days;
    document.getElementById('hours').innerHTML=hours;
    document.getElementById('mins').innerHTML=minutes;



    setTimeout(() => {
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


// function playBackgroundAudio() {
//     var audio = document.getElementById("background-music");

//     // Check if the audio is supported and can be played
//     if (audio.canPlayType) {
//         console.log("Playing audio..")
//         // Set the source of the audio element
//         audio.src = "../../assets/audios/ticking-clock_1-27477.mp3";

//         // Autoplay the audio
//         audio.play().catch(function(error) {
//         // Autoplay was prevented. You might want to handle this case.
//         console.error("Autoplay was prevented:", error);
//         });

//         // Loop the audio
//         audio.loop = true;
//     }
// }

// playBackgroundAudio();