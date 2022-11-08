//html element and selector variables
let p = document.createElement("p");
let h1 = document.querySelector(".header");
let input = document.querySelector(".input");
let userInput;

//declare variable for ghost image
let ghostImg = document.querySelector(".ghost-image");

//declare variables for all of the buttons
let hideButton = document.querySelector(".hide-button");
let showButton = document.querySelector(".show-button");
let updateImgButton = document.querySelector(".update-img-button");
let messageButton = document.querySelector(".message-button");
let nameButton = document.querySelector(".name-button");


//create an onclick event for the Hide Me button
hideButton.onclick = (function (){  
    ghostImg.style.display = "none";
});

//create an onclick event for the Show Me button
showButton.onclick = (function (){  
    ghostImg.style.display = "initial";
});


//create an onclick event for the Update Img button
updateImgButton.onclick = (function (){  
    ghostImg.src = "https://cdn.vox-cdn.com/thumbor/pr3jD5sfTRKpPinnYym_4A0gJaQ=/0x27:4415x3338/1400x1400/filters:focal(0x27:4415x3338):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/43170476/ghosts.0.0.jpg";
});


//create an onclick event for the Send Message button
messageButton.onclick = (function (){  
    ghostImg.insertAdjacentHTML("beforeend", `<p>You said: "Boo!"</p> <br> <p>Ghost said: "That's cliche!"</p>`);
});

//update the userInput variable by saving the value of the input
userInput = input.value;

//use the insertAdjacentHTML method to append the userInput in a <p> tag
p.insertAdjacentHTMl('beforeend', userInput);


//create an onclick event for the Name Me button
nameButton.onclick = (function (){  
    
});

//update the userInput variable by saving the value of the input


//use the innerHTML method to update the h1 tag
h1.innerHTML = ""