const butts = document.querySelectorAll(".tipButton");
let tip=0;
let bill=0;
let people=0;
let customTip=0;

let result = 0;
let resultPlace = document.getElementById("total-number");
let tipPlace = document.getElementById("tip-number");
let reset = document.getElementsByClassName("reset");




document.getElementById("bill-input").addEventListener('input', ()=> {
    result = (bill/people)*(tip/100) + (bill/people);
    tipResult = (bill/people)*(tip/100);
    bill = document.getElementById("bill-input").value;
    if (tip !== 0 && result.toString() !== "Infinity" && tipResult !== "Infinity" && result.toString() !== "NaN" && tipResult !== "NaN") {
        resultPlace.innerHTML = "$" + shorten(result.toString());
        tipPlace.innerHTML = "$" + shorten(tipResult.toString());
    }
    if(document.getElementById("people").value === "" || document.getElementById("people").value == 0){
        document.getElementById("people").style.border = "2px solid rgb(206, 97, 97)";
    }
});


document.getElementById("people").addEventListener('input', ()=> {
    result = (bill/people)*(tip/100) + (bill/people);
    tipResult = (bill/people)*(tip/100);
    people = document.getElementById('people').value;
    if (tip !== 0 && result.toString() !== "Infinity" && tipResult !== "Infinity" && result.toString() !== "NaN" && tipResult !== "NaN") {
        resultPlace.innerHTML = "$" + shorten(result.toString());
        tipPlace.innerHTML = "$" + shorten(tipResult.toString());
    }
    if (document.getElementById("people").value == 0) {
        document.getElementById("people").style.border = "2px solid rgb(206, 97, 97)";
    } else {
        document.getElementById("people").focus = "none";
        document.getElementById("people").focus = "2px solid hsl(172, 67%, 45%)";
    }
});

document.getElementById("people").addEventListener('focus', ()=> {
    if (document.getElementById("people").value !== 0){
    document.getElementById("people").style.border = "2px solid hsl(172, 67%, 45%)"; 
    } 
    
})

document.getElementById("tip").addEventListener('input', ()=>{
    tip = document.getElementById("tip").value;
    result = (bill/people)*(tip/100) + (bill/people);
    tipResult = (bill/people)*(tip/100);
    if (tip !== 0 && result.toString() !== "Infinity" && tipResult !== "Infinity" && result.toString() !== "NaN" && tipResult !== "NaN") {
        resultPlace.innerHTML = "$" + shorten(result.toString());
        tipPlace.innerHTML = "$" + shorten(tipResult.toString());
    }
    butts.forEach(but => {
        but.style.backgroundColor = "hsl(183, 100%, 15%)"; but.style.color = "white";
    })
    if(document.getElementById("people").value === "" || document.getElementById("people").value == 0){
        document.getElementById("people").style.border = "2px solid rgb(206, 97, 97)";
    }
});

butts.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = "hsl(172, 75%, 81%)";
        button.style.color = "black";
    });
    button.addEventListener('mouseout', () => {
        if (button.style.backgroundColor !== "hsl(183, 100%, 15%)") {
            button.style.backgroundColor = "hsl(183, 100%, 15%)";
            button.style.color = "white";
        }
    });
});

butts.forEach(button => {
    button.addEventListener('click', () => {
        tip = parseInt(button.innerHTML);
        tipResult = (bill/people)*(tip/100);
        result = (bill/people)*(tip/100) + (bill/people);
        if (tip !== 0 && result.toString() !== "Infinity" && tipResult !== "Infinity" && result.toString() !== "NaN" && tipResult !== "NaN") {
            resultPlace.innerHTML = "$" + shorten(result.toString());
            tipPlace.innerHTML = "$" + shorten(tipResult.toString());
        }
        button.style.backgroundColor = "hsl(172, 67%, 45%)";
        button.style.color = "black";
        document.getElementById("tip").value = "";
        butts.forEach(but => {
            if (but != button) {but.style.backgroundColor = "hsl(183, 100%, 15%)"; but.style.color = "white";}
        })
        if(document.getElementById("people").value === "" || document.getElementById("people").value == 0){
            document.getElementById("people").style.border = "2px solid rgb(206, 97, 97)";
        }
    });
})


reset[0].addEventListener("click", () => {
    resultPlace.innerHTML = "$0.00";
    tipPlace.innerHTML = "$0.00";
    document.getElementById("bill-input").value = "";
    document.getElementById("people").value = "";
    document.getElementById("tip").value = "";
    tip = 0;
    butts.forEach(button => {
        button.style.backgroundColor = "hsl(183, 100%, 15%)";
        button.style.color = "white";
    })
});

function shorten(number) {
    let arr = number.split(".");
    if (arr.length===2) {
        return arr[0] + "." + arr[1].substr(0, 2);
    }
    return arr[0] + ".00";
}