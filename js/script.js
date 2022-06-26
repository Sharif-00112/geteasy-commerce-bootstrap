// checking js connection
//console.log('added');

//changing color of all h2 
var allH2 = document.getElementsByTagName('h2');
for (var i = 0; i < allH2.length; i++) {
    allH2[i].style.color = 'black';
}

// changing background color of the section having id 'backpacks'
/* var backpackSection = document.getElementById('backpacks');
backpackSection.style.background = 'lightgray'; */

//changing border radius by 10px for all CARD classes
var cardClasses = document.getElementsByClassName('card');
for (var i = 0; i < cardClasses.length; i++) {
    cardClasses[i].style.borderRadius = '10px';
}

//changing font color while following function is called 
function makeFontColorTomato(){
    document.body.style.color = 'tomato';
};

// viewing console.log onclick by function 
function viewConsoleLogOnClick(){
    console.log('Tested!');
};

//will remove a button if clicked 
/*var allBtnClass = document.getElementsByClassName('button-container');
for(var i = 0; i < allBtnClass.length; i++){
    allBtnClass[i] = addEventListener('click', function(event){
        event.target.parentNode.removeChild(event.target);
    });
}*/

//will remove button having id 'button-container'
document.getElementById('button-container').addEventListener('click', function(event){
    event.target.parentNode.removeChild(event.target);
});

//disable subscribe button and enable on condition (checked conditions)
document.getElementById('exampleCheck1').addEventListener('change', function(event){
    const submitBtn = document.getElementById('email-submit-btn');
    if (event.target.checked){
        submitBtn.removeAttribute('disabled');
    }
    else{
        submitBtn.setAttribute('disabled', true)
    }
});


//double click bg change
function doubleClickBackgroundChange(){
    document.getElementById("subscribe").style.backgroundColor = "pink";
};

