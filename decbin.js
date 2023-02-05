//globals
var digits = ["0", "0", "0", "0"]
var decimalValue = 0;

function updateSlider() {
    document.querySelector("#myRange").value = decimalValue;
}

function updateDecimal() {
    document.querySelector("#decimal").innerHTML = decimalValue;
}

function setValuesFromSlider() {
    digits = parseInt(this.value).toString(2).split("").reverse();
    decimalValue = this.value;
    decimal.innerHTML =  this.value;
    setSwitches();
}

function bitToImage(bitValue) {
    var bit = bitValue == undefined ? 0 : bitValue;
    var switchImage = bit == 0 ? "switch_off.png" : "switch_on.png";
    return switchImage;
}

function setSwitches() {
    document.querySelector("#digit0 img").setAttribute("src", bitToImage(digits[0]));
    document.querySelector("#digit1 img").setAttribute("src", bitToImage(digits[1]));
    document.querySelector("#digit2 img").setAttribute("src", bitToImage(digits[2]));
    document.querySelector("#digit3 img").setAttribute("src", bitToImage(digits[3]));
}

function toggleSwitch() {
    var digitNr = this.getAttribute("id").match(/\d/)[0];    
    var currentImage = this.firstElementChild.getAttribute("src");
    digits.reverse()[digitNr] = currentImage == "switch_off.png" ? 1 : 0;
    setSwitches();
    decimalValue = parseInt(digits.reverse().join(""), 2);
    updateDecimal();
    updateSlider();
}

window.onload  = function() { 
    var slider = document.querySelector("#myRange");
    slider.oninput = this.setValuesFromSlider;

    var switches = document.querySelectorAll("#container div");
    switches.forEach(element => {
        element.onclick = toggleSwitch;
    });
 }
