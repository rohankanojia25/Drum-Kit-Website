// alert("Hello");

// Adding EventListernes to Buttons
for( var i = 0; i <  document.querySelectorAll(".drum").length; i++){
document.querySelectorAll("button")[i].addEventListener("click", function (){
        makeSound(this.innerHTML);        
        buttonAnimation(this.innerHTML);
});
}


document.addEventListener("keydown", function (event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
    switch(key){
        case "w":
            var drumAudio = new Audio('sounds/tom-1.mp3');
            drumAudio.play();
            break;
        case "a":
            var drumAudio2 = new Audio('sounds/tom-2.mp3');
            drumAudio2.play();
            break;
        case "s": 
            var drumAudio3 = new Audio('sounds/tom-3.mp3');
            drumAudio3.play();
            break;
        case "d": 
            var drumAudio4 = new Audio('sounds/tom-4.mp3');
            drumAudio4.play();
            break;
        case "j":
            var drumAudio5 = new Audio('sounds/snare.mp3');
            drumAudio5.play();
            break;
        case "k":
            var drumAudio6 = new Audio('sounds/crash.mp3');
            drumAudio6.play();
            break;
        case "l":
            var drumAudio7 = new Audio('sounds/kick-bass.mp3');
            drumAudio7.play();
            break;
        default: alert("Wrong Key Pressed"); 
        }
}


function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed")
    setTimeout( function(){
        activeButton.classList.remove("pressed")
    }, 100);
    
}
