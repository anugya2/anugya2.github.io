//source: Not copied from external sources.

//the heart button turns red after a animation sequence
function changeClass(n) {
    let ourVariable= document.getElementById("Mylikebutton"+n); //"+n" ensures only one pressed button is activated
    let ourClass= ourVariable.className;
    if (ourClass == "merch-like-btn8"){
        ourVariable.className = "merch-is-active"; //this css also has animation
    }
    if (ourClass == "merch-is-active"){
        ourVariable.className = "merch-like-btn8"; //returns hear button to neutral
    }
}


function addQuantity(n){ //increases priduct quantity
    let quantity = document.getElementById("merchText"+n).value;
    quantity ++;
    document.getElementById("merchText"+n).value = quantity;
    checkPrice() ;// changes the total price at the end of the page everytime quantity changes
}

function substractQuantity(n){
    let quantity = document.getElementById("merchText"+n).value;
    if (quantity>0){  //shouldnt go below 0
        quantity = quantity -1; 
        document.getElementById("merchText"+n).value = quantity;
    }
    checkPrice();// changes the total price at the end of the page everytime quantity changes
    
}

//delete quantity button
function zeroQuantity(n){   
    document.getElementById("merchText"+n).value = 0;
    quantity =0; 
    checkPrice();// changes the total price at the end of the page everytime quantity changes
}

;// changes the total price at the end of the page. 
function checkPrice(){
    let price = 0;
    console.log(price);
    let sum =0;
    for(var n=1; n<11; n= n+1 ){       
        let toadd= document.getElementById("merchText"+n).value; 
        let integertoadd = parseInt(toadd, 10);//must turn it into number from string
        sum = sum + integertoadd * 10;  
    }
    document.getElementById("totalprice").value = sum; //sum is the new price 


}

// you get an alert after you hit the "buy now" button:
document.getElementById("buy").addEventListener("click", function() {
    alert("We will prepare your order. For now, enjoy the rest of the website.");
});












// function changeClass() {
//     let ourVariable= document.getElementById("Mylikebutton");
//     let ourClass= ourVariable.className;
//     if (ourClass == "merch-like-btn8"){
//         ourVariable.className = "merch-is-active";
//     }
//     if (ourClass == "merch-is-active"){
//         ourVariable.className = "merch-like-btn8";
//     }
// }
// let quantity = document.getElementById("merchText"+n).value;

// function addQuantity(n){
//     quantity ++;
//     document.getElementById("merchText"+n).value = quantity;
// }

// function substractQuantity(n){
//     if (quantity>0){
//         quantity = quantity -1;
//         document.getElementById("merchText"+n).value = quantity;
//     }
    
// }
// function zeroQuantity(n){   
//     document.getElementById("merchText"+n).value = 0;
//     quantity =0;  
// }