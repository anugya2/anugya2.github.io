//source: Not copied from external sources.
//the drop down menu for the hamburger icon gets displayed only when clicked.
function hamburgerFunction() {
    var x = document.getElementById("hamburgerLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}
