// JavaScript source code



//module    
let container = ('');
let text = ('');
let number = 0;
let filler = ('');
let number2 = 0;
let randomnumber1 = 1;
let randomnumber2 = 0;
let othercontainer = ("");

//view
updateView();
function updateView() {
    let HTML = '';

        document.getElementById("app").innerHTML =    `

<button onclick="incrementsPlusTwo()">Press me to get increments of to to 20</button>
<br>
<div>${container}</div><input id="input" type="text">
<br>
<button onclick="theTextTest(input.value)">Click to Send</button><button onclick="textreverse(input.value)">Reversed text</button>
<br>
<div>${filler}</div>
<br>
<div>aeiouy in text = ${number}</div>
<div>others = ${number2}</div>
<br>
<button onclick="whileloop()">Press me for two random numbers between 1-20, and roll new ones and compare them until they are equal.</button>
<br>
<div>${othercontainer}</div>










`
}






//controller
function incrementsPlusTwo() {
    let number = 0;
    for (let i = 0; i < 10; i++) {
        number += 2;
        container += `<li>${number}</li>`;
        console.log(number);
    }
    updateView();
}

function theTextTest(sentText) {
    filler = ('');
    number = 0;
    number2 = 0;
    for (let i = 0; i <= sentText.length; i++) {
        text = sentText.charAt(i);

    
        if (text === 'a' || text === 'e' || text === 'i' ||text === 'o' ||text === 'u' ||text === 'y') {
            number++;
        }
        else {
            number2++;
        }        


        console.log(text);
        console.log(sentText);
        console.log(theTextTest);
        
    }
    number2 = number2 - 1;
    filler = sentText;
    updateView();
}

function textreverse(sentText) {
    filler = ('');
    for (let i = sentText.length; i >= 0; i--) {
        text = sentText.charAt(i);
        filler += text;
    }
    updateView();
}
function whileloop() {
    othercontainer = ('')
    randomnumber1 = 1;
    randomnumber2 = 0;
    while (randomnumber1 !== randomnumber2) {
        randomnumber1 = Math.floor(Math.random() * 20) + 1;
        randomnumber2 = Math.floor(Math.random() * 20) + 1;
        console.log(randomnumber2)
        console.log(randomnumber1)
        if (randomnumber1 > randomnumber2) {
            othercontainer += `<li>${randomnumber1} > ${randomnumber2}</li >`
        }
        else if (randomnumber1 < randomnumber2) {
            othercontainer += `<li>${randomnumber1} < ${randomnumber2}</li >`
        }
        else 
            othercontainer += `<li>WOW ITS EVEN!!!!!!!!!!! ${randomnumber1} = ${randomnumber2}</li >`
    }
    updateView();
}
