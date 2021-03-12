currentTime = document.getElementById("currentDay");
buttons = document.getElementsByClassName('saveBtn');
inputFields = document.getElementsByClassName('past');

var savedText = [];

// Setting current day at the top
currentTime.textContent = moment().format('dddd, MMMM Do');

// Code I dont know how to figure out
function getButtons(){

    for(i=0;i<buttons.length;i++){

        thisItem = inputFields[i];

        console.log(inputFields[i])

        buttons[i].addEventListener('click', function(){
            
            console.log(thisItem);

        })
    }
}

// Instantiate all buttons like a pleb because I cant figure out the For Loops
buttons[0].addEventListener('click', function(){
            
    textInput0 = inputFields[0].innerHTML;

    localStorage.setItem("input0", textInput0);

})

buttons[1].addEventListener('click', function(){
            
    textInput1 = inputFields[1].innerHTML;

    localStorage.setItem("input1", textInput1);

})

buttons[2].addEventListener('click', function(){
            
    textInput2 = inputFields[2].innerHTML;

    localStorage.setItem("input2", textInput2);

})

buttons[3].addEventListener('click', function(){
            
    textInput3 = inputFields[3].innerHTML;

    localStorage.setItem("input3", textInput3);

})

buttons[4].addEventListener('click', function(){
            
    textInput4 = inputFields[4].innerHTML;

    localStorage.setItem("input4", textInput4);

})

buttons[5].addEventListener('click', function(){
            
    textInput5 = inputFields[5].innerHTML;

    localStorage.setItem("input5", textInput5);

})

buttons[6].addEventListener('click', function(){
            
    textInput6 = inputFields[6].innerHTML;

    localStorage.setItem("input6", textInput6);

})

buttons[7].addEventListener('click', function(){
            
    textInput7 = inputFields[7].innerHTML;

    localStorage.setItem("input7", textInput7);

})

buttons[8].addEventListener('click', function(){
            
    textInput8 = inputFields[8].innerHTML;

    localStorage.setItem("input8", textInput8);

})

// Set all saved variables and initialize them on load
function loadSaved(){

    var newInput0 = localStorage.getItem("input0");
    var newInput1 = localStorage.getItem("input1");
    var newInput2 = localStorage.getItem("input2");
    var newInput3 = localStorage.getItem("input3");
    var newInput4 = localStorage.getItem("input4");
    var newInput5 = localStorage.getItem("input5");
    var newInput6 = localStorage.getItem("input6");
    var newInput7 = localStorage.getItem("input7");
    var newInput8 = localStorage.getItem("input8");


    inputFields[0].innerHTML = newInput0;
    inputFields[1].innerHTML = newInput1;
    inputFields[2].innerHTML = newInput2;
    inputFields[3].innerHTML = newInput3;
    inputFields[4].innerHTML = newInput4;
    inputFields[5].innerHTML = newInput5;
    inputFields[6].innerHTML = newInput6;
    inputFields[7].innerHTML = newInput7;
    inputFields[8].innerHTML = newInput8;


}

// More extra code because I cant run for loops to save my life
// Syncing up moment.js with the colors
var theCurrentHour = moment().format("hA")

switch(theCurrentHour){

    case '9AM':

        inputFields[0].style.backgroundColor = '#ff6961';
        inputFields[1].style.backgroundColor = '#77dd77';
        inputFields[2].style.backgroundColor = '#77dd77';
        inputFields[3].style.backgroundColor = '#77dd77';
        inputFields[4].style.backgroundColor = '#77dd77';
        inputFields[5].style.backgroundColor = '#77dd77';
        inputFields[6].style.backgroundColor = '#77dd77';
        inputFields[7].style.backgroundColor = '#77dd77';
        inputFields[8].style.backgroundColor = '#77dd77';

    break;

    case '10AM':

        console.log(theCurrentHour);
        inputFields[0].style.backgroundColor = '#d3d3d3';
        inputFields[1].style.backgroundColor = '#ff6961';
        inputFields[2].style.backgroundColor = '#77dd77';
        inputFields[3].style.backgroundColor = '#77dd77';
        inputFields[4].style.backgroundColor = '#77dd77';
        inputFields[5].style.backgroundColor = '#77dd77';
        inputFields[6].style.backgroundColor = '#77dd77';
        inputFields[7].style.backgroundColor = '#77dd77';
        inputFields[8].style.backgroundColor = '#77dd77';

    break;

    case '11AM':

        inputFields[0].style.backgroundColor = '#d3d3d3';
        inputFields[1].style.backgroundColor = '#d3d3d3';
        inputFields[2].style.backgroundColor = '#ff6961';
        inputFields[3].style.backgroundColor = '#77dd77';
        inputFields[4].style.backgroundColor = '#77dd77';
        inputFields[5].style.backgroundColor = '#77dd77';
        inputFields[6].style.backgroundColor = '#77dd77';
        inputFields[7].style.backgroundColor = '#77dd77';
        inputFields[8].style.backgroundColor = '#77dd77';

    break;

    case '10PM':

        inputFields[0].style.backgroundColor = '#d3d3d3';
        inputFields[1].style.backgroundColor = '#d3d3d3';
        inputFields[2].style.backgroundColor = '#d3d3d3';
        inputFields[3].style.backgroundColor = '#ff6961';
        inputFields[4].style.backgroundColor = '#77dd77';
        inputFields[5].style.backgroundColor = '#77dd77';
        inputFields[6].style.backgroundColor = '#77dd77';
        inputFields[7].style.backgroundColor = '#77dd77';
        inputFields[8].style.backgroundColor = '#77dd77';

    break;

    case '1PM':

        inputFields[0].style.backgroundColor = '#d3d3d3';
        inputFields[1].style.backgroundColor = '#d3d3d3';
        inputFields[2].style.backgroundColor = '#d3d3d3';
        inputFields[3].style.backgroundColor = '#d3d3d3';
        inputFields[4].style.backgroundColor = '#ff6961';
        inputFields[5].style.backgroundColor = '#77dd77';
        inputFields[6].style.backgroundColor = '#77dd77';
        inputFields[7].style.backgroundColor = '#77dd77';
        inputFields[8].style.backgroundColor = '#77dd77';

    break;

    case '2PM':

        inputFields[0].style.backgroundColor = '#d3d3d3';
        inputFields[1].style.backgroundColor = '#d3d3d3';
        inputFields[2].style.backgroundColor = '#d3d3d3';
        inputFields[3].style.backgroundColor = '#d3d3d3';
        inputFields[4].style.backgroundColor = '#d3d3d3';
        inputFields[5].style.backgroundColor = '#ff6961';
        inputFields[6].style.backgroundColor = '#77dd77';
        inputFields[7].style.backgroundColor = '#77dd77';
        inputFields[8].style.backgroundColor = '#77dd77';

    break;

    case '3PM':

        inputFields[0].style.backgroundColor = '#d3d3d3';
        inputFields[1].style.backgroundColor = '#d3d3d3';
        inputFields[2].style.backgroundColor = '#d3d3d3';
        inputFields[3].style.backgroundColor = '#d3d3d3';
        inputFields[4].style.backgroundColor = '#d3d3d3';
        inputFields[5].style.backgroundColor = '#d3d3d3';
        inputFields[6].style.backgroundColor = '#ff6961';
        inputFields[7].style.backgroundColor = '#77dd77';
        inputFields[8].style.backgroundColor = '#77dd77';

    break;

    case '4PM':

        inputFields[0].style.backgroundColor = '#d3d3d3';
        inputFields[1].style.backgroundColor = '#d3d3d3';
        inputFields[2].style.backgroundColor = '#d3d3d3';
        inputFields[3].style.backgroundColor = '#d3d3d3';
        inputFields[4].style.backgroundColor = '#d3d3d3';
        inputFields[5].style.backgroundColor = '#d3d3d3';
        inputFields[6].style.backgroundColor = '#d3d3d3';
        inputFields[7].style.backgroundColor = '#ff6961';
        inputFields[8].style.backgroundColor = '#77dd77';

    break;

    case '5PM':

        inputFields[0].style.backgroundColor = '#d3d3d3';
        inputFields[1].style.backgroundColor = '#d3d3d3';
        inputFields[2].style.backgroundColor = '#d3d3d3';
        inputFields[3].style.backgroundColor = '#d3d3d3';
        inputFields[4].style.backgroundColor = '#d3d3d3';
        inputFields[5].style.backgroundColor = '#d3d3d3';
        inputFields[6].style.backgroundColor = '#d3d3d3';
        inputFields[7].style.backgroundColor = '#d3d3d3';
        inputFields[8].style.backgroundColor = '#ff6961';

    break;
}
loadSaved();

