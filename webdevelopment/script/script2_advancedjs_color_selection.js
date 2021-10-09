//source: Not copied from external sources.

// The code below is responsible for sorting the images in "interior" page by color.
// everytime you press any color button, only the images of that color will be dispayed and all else will disappear.


//everytime the color button is clicked, this funtion starts

function checkColor(number) {
    //first the function creates arrays of images for each of the 6 colors
    let rpic = document.getElementsByClassName("red");
    let bpic = document.getElementsByClassName("blue");
    let gpic = document.getElementsByClassName("green");
    let beipic = document.getElementsByClassName("beige");
    let bnwpic = document.getElementsByClassName("blacknwhite");
    let wpic = document.getElementsByClassName("wooden");

    //if the pressed button is for red, the display property of all arrays will be made none except for that of the red array
    // the same happens for each color

    //this is when all button is clicked and is the default as well. 
    if(number=='a'){
        for(var i=0; i<rpic.length; i++){                                        
            rpic[i].style.display = "inline";
            bpic[i].style.display = "inline";
            gpic[i].style.display = "inline";
            beipic[i].style.display = "inline";
            bnwpic[i].style.display = "inline";
            wpic[i].style.display = "inline";
        } 
    }
    //when red button is pressed
    if(number=='r'){
        for(var i=0; i<rpic.length; i++){                                        
            rpic[i].style.display = "inline";
            bpic[i].style.display = "none";
            gpic[i].style.display = "none";
            beipic[i].style.display = "none";
            bnwpic[i].style.display = "none";
            wpic[i].style.display = "none";

        } 
    }

    //when blue button is pressed
    if(number=='b'){
        for(var i=0; i<rpic.length; i++){ 
            rpic[i].style.display = "none";                                      
            bpic[i].style.display = "inline";            
            gpic[i].style.display = "none";
            beipic[i].style.display = "none";
            bnwpic[i].style.display = "none";
            wpic[i].style.display = "none";
        }
    } 

    //when green button is pressed    
    if(number=='g'){
        for(var i=0; i<rpic.length; i++){
            rpic[i].style.display = "none";                                        
            bpic[i].style.display = "none";            
            gpic[i].style.display = "inline";
            beipic[i].style.display = "none";
            bnwpic[i].style.display = "none";
            wpic[i].style.display = "none";
        }
    }
    //when beige button is pressed
    if(number=='bei'){
        for(var i=0; i<rpic.length; i++){ 
            rpic[i].style.display = "none";                                       
            bpic[i].style.display = "none";            
            gpic[i].style.display = "none";
            beipic[i].style.display = "inline";
            bnwpic[i].style.display = "none";
            wpic[i].style.display = "none";
        }
    }
    //when black/white button is pressed
    if(number=='bnw'){
        for(var i=0; i<rpic.length; i++){ 
            rpic[i].style.display = "none";                                      
            bpic[i].style.display = "none";            
            gpic[i].style.display = "none";
            beipic[i].style.display = "none";
            bnwpic[i].style.display = "inline";
            wpic[i].style.display = "none";
        }
    }
    //when wooden button is pressed
    if(number=='w'){
        for(var i=0; i<rpic.length; i++){                                        
            bpic[i].style.display = "none";
            rpic[i].style.display = "none";
            gpic[i].style.display = "none";
            beipic[i].style.display = "none";
            bnwpic[i].style.display = "none";
            wpic[i].style.display = "inline";
        }
    }
   
    
}
