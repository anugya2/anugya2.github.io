//source: Not copied from external sources.

//this function is called everytime the readmore buttons are pressed
function readMore(number) {
    //with query selector. only particular class and partiular data number element is beign selected  
    let dots = document.querySelector(`.highlights-grid-item[data-number="${number}"] .dots`); 
    let moreText = document.querySelector(`.highlights-grid-item[data-number="${number}"] .more`); 
    let btnText = document.querySelector(`.highlights-grid-item[data-number="${number}"] .myBtn`);

    //"number" makes sure that only the pressed readmore button gets operated 
    //there are many readmore buttons, and we want only the pressed one to work
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.textContent = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.textContent = "Read less"; 
        moreText.style.display = "inline";
    }
}
//its the repeat of the above function for a different page.
function readMore1(number) {
    let dots = document.querySelector(`.item[data-number="${number}"] .dots`);
    let moreText = document.querySelector(`.item[data-number="${number}"] .more`); 
    let btnText = document.querySelector(`.item[data-number="${number}"] .myBtn`);    

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.textContent = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.textContent = "Read less"; 
        moreText.style.display = "inline";
    }
}