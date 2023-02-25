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
    setBulbs();
    setSwitches();    
}

function bitToBulbImage(digit, bitValue) {
    var bit = bitValue == undefined ? 0 : bitValue;
    switch(digit) {
        case 0:
            var switchImage = bit == 0 ? "images/bulb-grey-0w.svg" : "images/bulb-yellow-1w.svg";
            return switchImage;
        case 1:
            var switchImage = bit == 0 ? "images/bulb-grey-0w.svg" : "images/bulb-yellow-2w.svg";
            return switchImage;
        case 2:
            var switchImage = bit == 0 ? "images/bulb-grey-0w.svg" : "images/bulb-yellow-4w.svg";
            return switchImage;
        case 3:
            var switchImage = bit == 0 ? "images/bulb-grey-0w.svg" : "images/bulb-yellow-8w.svg";
            return switchImage;    
        default:
          console.log("Error in bitToBulbImage");
      } 
}

function bitToImage(bitValue) {
    var bit = bitValue == undefined ? 0 : bitValue;
    var switchImage = bit == 0 ? "images/switch_off.png" : "images/switch_on.png";
    return switchImage;
}


function setBulbs() {
    document.querySelector("#bulb-1w img").setAttribute("src", bitToBulbImage(0, digits[0]));
    document.querySelector("#bulb-2w img").setAttribute("src", bitToBulbImage(1, digits[1]));
    document.querySelector("#bulb-4w img").setAttribute("src", bitToBulbImage(2, digits[2]));
    document.querySelector("#bulb-8w img").setAttribute("src", bitToBulbImage(3, digits[3]));
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
    digits.reverse()[digitNr] = currentImage == "images/switch_off.png" ? 1 : 0;
    setBulbs();
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
