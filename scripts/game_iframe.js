// Variables
let game_iframe = document.getElementById("game")

let description = document.getElementById("description")
let title_buttons = document.getElementById("title_buttons")
let description_toggle_image = document.getElementById("description_toggle_image")

// Fullscreen Button
function toggleFullScreen() {
    if (game_iframe.requestFullscreen) { // Generic
        game_iframe.requestFullscreen();
    } else if (game_iframe.webkitRequestFullscreen) { // Chrome, Safari, and Opera
        game_iframe.webkitRequestFullscreen();
    } else if (game_iframe.mozRequestFullScreen) { // Firefox
        game_iframe.mozRequestFullScreen();
    } else if (game_iframe.msRequestFullscreen) { // IE/Edge
        game_iframe.msRequestFullscreen();
    }

    iframe.style.borderRadius = "0px";
}


// Exiting Fulscreen
if (document.addEventListener)
    {
     document.addEventListener('fullscreenchange', exitHandler, false); // Generic
     document.addEventListener('webkitfullscreenchange', exitHandler, false); // Chrome, Safari, and Opera
     document.addEventListener('mozfullscreenchange', exitHandler, false); // Firefox
     document.addEventListener('MSFullscreenChange', exitHandler, false); // IE/Edge
    }
    
    function exitHandler()
    {
     if (!document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement)
     {
        game_iframe.style.borderRadius = "10px 10px 0px 0px";
     }
}


// Description Button
function toggleDescription() {
    if (description.style.display === "block") {
        description.style.display = "none"
        title_buttons.style.borderRadius = "0px 0px 10px 10px"
        description_toggle_image.src = "../images/buttons/description_on.svg"
    } else {
        description.style.display = "block"
        title_buttons.style.borderRadius = "0px"
        description_toggle_image.src = "../images/buttons/description_off.svg"
    }
}