// source: One-third of this carousel code was copied from w3schools.com.

var slideIndex = 0; 
var timeIndex =0; //added by student
showSlides();
timerFunction(); //added by student

function showSlides() {

    //this paragrpah was copied from w3schools.com and some texts were modified
    timeIndex =0;
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    var textstuff = document.getElementsByClassName("text");
    //above three variables are arrays.
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // The code below is added by the student
    //this code changes the color of the texts in the slide show in response to the time.
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    if (slideIndex==1){
        textstuff[slideIndex-1].style.color ="rgb(250,250,250)"; //color of text on the first image
    }
    if (slideIndex==2){
        textstuff[slideIndex-1].style.color = "rgb(250,250,250)"; //color of text on the secondimage
    }
    if (slideIndex==3){
        textstuff[slideIndex-1].style.color = "rgb(0,0,0)"; //color of text on the thirs image image(dark color)
    }
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}


// The code below is added by the student
//this code is responsibel for creating the timer bar on the slideshow
function timerFunction(){
    line = document.getElementsByClassName("timer");
    for (var i = 0; i < line.length; i++) {
        line[i].style.width = "0px"; //the bar starts at 0 px
    }  
    timeIndex++;
    if (timeIndex > 10) {timeIndex = 1};
    var newtimeIndex = 20*timeIndex;  // results in otal 10 increments for one image
    
    for (var i = 0; i < line.length; i++) {
        line[i].style.width= newtimeIndex.toString()+"px";// adds pixels to the width of the bar with each time passing
    }     
    setTimeout(timerFunction, 200);
    
}
