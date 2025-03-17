const text = "Software Developer"; 
let index = 0;
const speed = 150; 

function type() {
    if (index < text.length) {
        document.getElementById("typing-text").innerHTML = 
            text.substring(0, index + 1) + '<span class="cursor">|</span>'; 
        index++;
        setTimeout(type, speed);
    } else {
        document.getElementById("typing-text").innerHTML = text + '<span class="cursor">|</span>'; 
    }
}
type(); 