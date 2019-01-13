//This displays today's date above Today's Classes in the footer.
function todaysDate() {
    var d = new Date();
    var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var currentTime = new Date();
    var dayOfWeek = weekday[d.getDay()];
    month = month[d.getMonth()];
    var day = currentTime.getDate();
    var year = currentTime.getFullYear();
    $("#currentDate").html(dayOfWeek + ", " + month + " " + day + ", " + year);    
}
//-----------------------------------------------------------------------------------------------------------------------


//This displays Today's Classes in the homepage footer.
function todaysClasses() {
    var html;
    var today = new Date();
    var month = today.getMonth();
    var date = today.getDate();
    var dayOfTheWeek = today.getDay();

    switch (dayOfTheWeek) {
        case 0:
            html = "<strong>" + "The gym is closed on Sundays." + "</strong>";
            break;
        case 1: //Monday
            html =  "4:00-5:00pm | Kettlebox" + "<br />" +
                    "5:00-5:30pm | Core Training" + "<br />" +
                    "5:30-6:30pm | BoxerCise" + "<br />" +
                    "6:30-7:00pm | Strength Training" + "<br />" +
                    "7:00-8:30pm | BoxStrong";
            break;
        case 2: //Tuesday
            html =  "4:00-4:30pm | Cardio" + "<br />" +
                    "4:30-5:30pm | Kettlepower" + "<br />" +
                    "5:30-6:00pm | Technique" + "<br />" +
                    "5:30-6:30pm | BoxerCise" + "<br />" +
                    "6:30-7:00pm | Core Training" + "<br />" +
                    "7:00-8:30pm | BoxStrong";
            break;
        case 3: //Wednesday
            html =  "4:00-4:30pm | Heavy Bag Conditioning" + "<br />" +
                    "4:30-5:00pm | Cardio" + "<br />" +
                    "5:00-5:30pm | Strength Training" + "<br />" +
                    "5:30-6:30pm | Kettlecore" + "<br />" +       
                    "6:00-6:30pm | Technique" + "<br />" +             
                    "6:30-8:00pm | BoxStrong";
            break;
        case 4: //Thursday
            html =  "4:00-4:30pm | Strength Training" + "<br />" +
                    "4:30-5:00pm | Kettlebell" + "<br />" +
                    "5:00-6:00pm | BoxerCise" + "<br />" +
                    "6:00-6:30pm | Technique" + "<br />" +
                    "6:00-6:30pm | Core Training" + "<br />" +
                    "6:30-8:00pm | BoxStrong";
            break;
        case 5: //Friday
            html =  "5:00-5:30pm | Strength Training" + "<br />" +
                    "5:30-6:30pm | BoxerCise" + "<br />" +
                    "6:30-7:00pm | Core Training";
            break;
        case 6: //Saturday
            
            //Uncomment this code when the summer sparring class returns.
            /*if (
            month == 5 && date == 11 || 
            month == 5 && date == 25 || 
            month == 6 && date == 9 || 
            month == 6 && date == 23 || 
            month == 7 && date == 13  || 
            month == 7 && date == 27) {
                html =  "10:30-12:00pm | BoxStrong" + "<br />" +
                        "12:30-1:30pm | BoxerCise" + "<br />" +
                        "12:30-2:30pm | Sparring Class" + "<br />" +
                        "1:30-2:00pm | Core Training";
                break;
                }else {*/
            
            html =  "10:30-12:00pm | BoxStrong" + "<br />" +
                    "12:30-1:30pm | BoxerCise" + "<br />" +
                    "1:30-2:00pm | Core Training";
            break;   
            
            //} //Uncomment this bracket if Sparring class returns..
    }
    if (month == 11 && date == 25) {
        html = "There are no classes today. <br />Merry Christmas!";
    } else if (month == 0 && date == 1) {
        html = "There are no classes today. <br />Happy New Year!";
    } else if (month == 6 && date == 4) {
		html = "The gym is closed today. Happy July 4th!";
	}
    document.getElementById("byday").innerHTML = html;
}//This function gets called in index.html
//-----------------------------------------------------------------------------------------------------------------------


//Background Slide Show
jQuery(function($) {
    $.supersized({
        // Functionality
        slide_interval: 3000, // Length between transitions
        transition: 1, // 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
        transition_speed: 700, // Speed of transition
        // Components							
        slide_links: 'blank', // Individual links for each slide (Options: false, 'num', 'name', 'blank')
        slides: [ // Slideshow Images
            {image: 'assets/img/bg-slides/1.jpg'}, 
            {image: 'assets/img/bg-slides/2.jpg'}, 
            {image: 'assets/img/bg-slides/3.jpg'}, 
            {image: 'assets/img/bg-slides/4.jpg'}, 
            {image: 'assets/img/bg-slides/5.jpg'}, 
            {image: 'assets/img/bg-slides/6.jpg'}, 
            {image: 'assets/img/bg-slides/7.jpg'},
            {image: 'assets/img/bg-slides/8.jpg'}, 
            {image: 'assets/img/bg-slides/9.jpg'}, 
            {image: 'assets/img/bg-slides/10.jpg'}
        ]
    });
});
//-----------------------------------------------------------------------------------------------------------------------


//Brings the classes onto the Class Schedule page
function populateClasses(){

    var classes = [
        {
        "name": "Cardio",
        "description": "Specifically designed to work on conditioning, this class will help you build stamina and develop faster feet as a boxer."
    }, {
        "name": "Kettlebell",
        "description": "Focuses on overall strength and conditioning drills as well as explosion drills for the hips, core and glutes, all from the handle of a kettlebell."
    }, {
        "name": "Core Training",
        "description": "With non-stop multiple core and sit up exercises, you will predominately work your abs, oblique, lower back, and hip flexor, and strengthen your core through a series of lower body strength and flexibility exercises."
    }, {
        "name": "BoxerCise",
        "description": "A heavy bag conditioning class that mixes in plyometric drills with punching drills. An intense combination of a cardio workout with heavy bag drills."
    }, {
        "name": "Strength Training",
        "description": "Designed to increase muscle strength and endurance, this class uses moderate dumbbells to exhaust your muscles through an intense non-stop weight training circuit for upper and lower body muscles. And let's not forget pushups."
    }, {
        "name": "BoxStrong",
        "description": "This total body conditioning and boxing class will give you the most intense and challenging fitness experience ever. Enjoy strength, core, explosion, speed training, a full boxing circuit with heavy bags, and mitt work with the trainers. At the end of class you will be rewarded with a brutal abdominal workout."
    }, {
        "name": "Heavy Bag Conditioning",
        "description": "Focuses on speed and power drills on the heavy bags."
    }, {
        "name": "Sparring Class",
        "description": "This class is focused on drills and technique and includes light to moderate sparring. Learn defense and counter punching basics as they pertain to sparring. Whether or not you have prior experience in the ring, you will need to pass an assessment before you are permitted to spar. Non-members interested please pay online before arriving in class. Class fee is $15.00." 
    }, {
        "name": "Live Stronger: Begins July 6 (free for the summer)",
        "description": "This class is for those of you who have fought hard to reclaim your lives after battling cancer. It's a place for you to reclaim your health, your energy, your happiness, and to make friends who are also looking for the support of a strong class that is geared towards helping you reclaim your life." 
    }, {
        "name": "Kettlebox",
        "description": "Combines a cardiovascular kettlebell workout with intense heavy bag drills for a total body workout" 
    }, {
        "name": "Kettlepower",
        "description": "Combines the power workout of a kettlebell class with a dumbbell and TRX strength training session" 
    }, {
        "name": "Kettlecore",
        "description": "Combines the speed and explosion exercises of a kettlebell class with stability and core strengthening exercises" 
    }, {
        "name": "Technique",
        "description": "New!" 
    }
    ];

    document.getElementById("Monday").innerHTML =
        "4:00-5:00pm" + " | " + classes[9].name + ": " + classes[9].description + "<hr>" +
        "5:00-5:30pm" + " | " + classes[2].name + ": " + classes[2].description + "<hr>" +
        "5:30-6:30pm" + " | " + classes[3].name + ": " + classes[3].description + "<hr>" +
        "6:30-7:00pm" + " | " + classes[4].name + ": " + classes[4].description + "<hr>" +
        "7:00-8:30pm" + " | " + classes[5].name + ": " + classes[5].description;

    document.getElementById("Tuesday").innerHTML =
        "4:00-4:30pm" + " | " + classes[0].name + ": " + classes[0].description + "<hr>" +
        "4:30-5:30pm" + " | " + classes[10].name + ": " + classes[10].description + "<hr>" +
        "5:30-6:00pm" + " | " + classes[12].name + ": " + classes[12].description + "<hr>" +
        "5:30-6:30pm" + " | " + classes[3].name + ": " + classes[3].description + "<hr>" +
        "6:30-7:00pm" + " | " + classes[2].name + ": " + classes[2].description + "<hr>" +
        "7:00-8:30pm" + " | " + classes[5].name + ": " + classes[5].description;

    document.getElementById("Wednesday").innerHTML =
        "4:00-4:30pm" + " | " + classes[6].name + ": " + classes[6].description + "<hr>" +
        "4:30-5:00pm" + " | " + classes[0].name + ": " + classes[0].description + "<hr>" +
        "5:00-5:30pm" + " | " + classes[4].name + ": " + classes[4].description + "<hr>" +
        "5:30-6:30pm" + " | " + classes[11].name + ": " + classes[11].description + "<hr>" +
        "6:00-6:30pm" + " | " + classes[12].name + ": " + classes[12].description + "<hr>" +
        "6:30-8:00pm" + " | " + classes[5].name + ": " + classes[5].description;

    document.getElementById("Thursday").innerHTML =
        "4:00-4:30pm" + " | " + classes[4].name + ": " + classes[4].description + "<hr>" +
        "4:30-5:00pm" + " | " + classes[1].name + ": " + classes[1].description + "<hr>" +
        "5:00-6:00pm" + " | " + classes[3].name + ": " + classes[3].description + "<hr>" +
        "6:00-6:30pm" + " | " + classes[12].name + ": " + classes[12].description + "<hr>" +
        "6:00-6:30pm" + " | " + classes[2].name + ": " + classes[2].description + "<hr>" +
        "6:30-8:00pm" + " | " + classes[5].name + ": " + classes[5].description;

    document.getElementById("Friday").innerHTML =
        "5:00-5:30pm" + " | " + classes[4].name + ": " + classes[4].description + "<hr>" +
        "5:30-6:30pm" + " | " + classes[3].name + ": " + classes[3].description + "<hr>" +
        "6:30-7:00pm" + " | " + classes[2].name + ": " + classes[2].description;
	
    document.getElementById("Saturday").innerHTML =
        "10:30-12:00pm" + " | " + classes[5].name + ": " + classes[5].description + "<hr>" +
        "12:30-1:30pm" + " | " + classes[3].name + ": " + classes[3].description + "<hr>" +
        /*"12:30-2:30pm" + " | " + classes[7].name + ": " + classes[7].description + "<hr>" + */ //summer sparring class
        "1:30-2:00pm" + " | " + classes[2].name + ": " + classes[2].description;  
}//This gets called in class-schedule.html


$(function() {
    $("#myModal").modal();
});



/*function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');
  var specialDiv = document.getElementById("countdown-special");

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
    document.getElementById('daycount').innerHTML = t.days;

    if (t.total <= 0) {
      clearInterval(timeinterval);
      specialDiv.style.visibility = "hidden";
      specialDiv.style.height = "0px";
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = 'January 10, 2016';
initializeClock('clockdiv', deadline); 

*/

