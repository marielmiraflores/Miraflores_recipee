src="https://cdnjs.cloudflare.com/ajax/libs/flickity/2.2.2/flickity.pkgd.min.js"

    var flkty = new Flickity('.gallery', {
        cellAlign: 'left',
        contain: true,
        prevNextButtons: true,
        prevNextButtons: {
            prevButton: '.custom-prev-button',
            nextButton: '.custom-next-button'
        }
    });


function sendMessage() {
    var userInput = document.getElementById("input").value;

    displayUserMessage(userInput);

    var botResponse = generateBotResponse(userInput);

    setTimeout(function() {
        displayBotMessage(botResponse);
    }, 1000);


    document.getElementById("input").value = "";
}


function displayUserMessage(message) {
    var messageSection = document.getElementById("message-section");
    var userDiv = document.createElement("div");
    userDiv.className = "message";
    userDiv.id = "user";
    userDiv.innerHTML = '<span id="user-response">' + message + '</span>';
    messageSection.appendChild(userDiv);
}


function generateBotResponse(userInput) {
    var lowerCaseInput = userInput.toLowerCase();
    if (lowerCaseInput.includes("cupcake")) {
        return "Ah, cupcakes are delightful! Have you tried our latest cupcake recipe?";
    } else if (lowerCaseInput.includes("croissant")) {
        return "Croissants are a French delicacy! Would you like a recipe to make your own croissants at home?";
    } else if (lowerCaseInput.includes("donut") || lowerCaseInput.includes("doughnut")) {
        return "Donuts are a classic treat! We have some amazing donut recipes you might want to try.";
    } else if (lowerCaseInput.includes("baking")) {
        return "Baking is such a fun activity! What kind of baking project are you working on?";
    } else if (lowerCaseInput.includes("recipe")) {
        return "Looking for a recipe? We have a variety of delicious recipes to choose from!";
    } else if (lowerCaseInput.includes("sweet")) {
        return "Sweet treats are our specialty! Which sweet treat are you craving?";
    } else if (lowerCaseInput.includes("delicious")) {
        return "I agree, delicious food is the best! What's your favorite dish?";
    } else if (lowerCaseInput.includes("yum")) {
        return "Yum indeed! What's making your mouth water right now?";
    } else if (lowerCaseInput.includes("hungry")) {
        return "Hungry for something tasty? We've got you covered with mouthwatering recipes!";
    } else if (lowerCaseInput.includes("hi") || lowerCaseInput.includes("hello")) {
        return "Hello! How can I assist you today?";
    } else if (lowerCaseInput.includes("how are you")) {
        return "I'm just a virtual assistant, but thanks for asking!";
    } else if (lowerCaseInput.includes("website")) {
        return "You're currently on Mariel Miraflores' website. How can I help you navigate?";
    } else if (lowerCaseInput.includes("what is this")) {
        return "This is Mariel Miraflores' website. You can explore recipes, learn about Mariel, and more!";
    } else if (lowerCaseInput.includes("cupcake")) {
        return "Ah, cupcakes are delightful! Have you tried our latest cupcake recipe?";
    } else if (lowerCaseInput.includes("croissant")) {
        return "Croissants are a French delicacy! Would you like a recipe to make your own croissants at home?";
    } else if (lowerCaseInput.includes("donut") || lowerCaseInput.includes("doughnut")) {
        return "Donuts are a classic treat! We have some amazing donut recipes you might want to try.";
    } else if (lowerCaseInput.includes("baking")) {
        return "Baking is such a fun activity! What kind of baking project are you working on?";
    } else if (lowerCaseInput.includes("recipe")) {
        return "Looking for a recipe? We have a variety of delicious recipes to choose from!";
    } else if (lowerCaseInput.includes("sweet")) {
        return "Sweet treats are our specialty! Which sweet treat are you craving?";
    } else if (lowerCaseInput.includes("delicious")) {
        return "I agree, delicious food is the best! What's your favorite dish?";
    } else if (lowerCaseInput.includes("yum")) {
        return "Yum indeed! What's making your mouth water right now?";
    } else if (lowerCaseInput.includes("hungry")) {
        return "Hungry for something tasty? We've got you covered with mouthwatering recipes!";
    } else {
        return "Hi! Welcome to Mariel's Kitchen. How can I assist you today?";
    } 

    
}


function displayBotMessage(message) {
    var messageSection = document.getElementById("message-section");
    var botDiv = document.createElement("div");
    botDiv.className = "message";
    botDiv.id = "bot";
    botDiv.innerHTML = '<span id="bot-response">' + message + '</span>';
    messageSection.appendChild(botDiv);
}


