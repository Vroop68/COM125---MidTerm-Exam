// setup your IIFE (Immediately Invoked Function Expression)
(function () {
"use strict";


// YOUR CODE GOES HERE

function SPA(){
    let IntroParagraph=document.getElementById("IntroParagraph");
    IntroParagraph.textContent="Now is the time to travel to Greece. The country may be going through an economic crisis, but many travellers say that it hasn't impacted the experience of visiting. Plus, there may be some great deals.\r\n";
    IntroParagraph.textContent+="Greece has 1,400 islands, though only 230 of them are inhabited. "
}


function Start() {        let title = document.title;

    console.log("App Started!");
    console.log("----------------------------");
    console.log("Title: " + title);
//Content is relayed to the correct pages
switch (title) {
    case "COMP125 - MidTerm Exam":
        SPA();
        break;

    default:
        break;
}
}
window.addEventListener("load", Start);
})();

