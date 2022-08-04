//detects drum button pressed
for (i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        
        //this funtion will see which drum is selected to get its class name for switch cases
        makeSound(this.innerHTML);

        buttonAnimation(this.innerHTML);

    });
}



//detects keyboard button pressed
document.addEventListener("keypress",function(event){
    
    //this funtion will match the keyboard press with event(key) as parameter
    makeSound(event.key);

    buttonAnimation(event.key);

});



function makeSound(key){

//when key from both click event and key event is matched  the following code works

    switch (key) {

        case "w":
            var tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;

        case "a":
            var snare = new Audio('./sounds/snare.mp3');
            snare.play();
            break;

        case "s":
            var tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;

        case "d":
            var crash = new Audio('./sounds/crash.mp3');
            crash.play();
            break;

        case "j":
            var tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;

        case "k":
            var kick = new Audio('./sounds/kick-bass.mp3');
            kick.play();
            break;

        case "l":
            var tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;

        default: console.log();

    }
}



//additionally, similar to makeSound() function, we are making buttonAnimation() function to add animation to each butoon pressed that we will pass it in both "click" and "key" events above
function buttonAnimation(currentKey){

    var activeButton = document.querySelector('.' + currentKey); //detects pressed key

    activeButton.classList.add("pressed"); //to attach the css applied classname to the pressed key

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100) //to removes the css effect after millisec delay

}