let select = [...document.querySelectorAll('select')]; // All select tags in the dom

/* ======================== Multiple selections ======================== */
import glopalMultiple from './glopalMultiple.js';
import manualMultiple from './manualMltiple.js';
// glopalMultiple(select, "Choose you number");

let my_select = document.getElementById('goal');
manualMultiple(my_select, "choose");

// add animation dude ;)
let togglers = document.querySelectorAll('.replacement-input');
togglers.forEach(function (div) {
    div.onclick = function () {
        if (div.parentElement.classList.contains("replacement-opened"))
            div.parentElement.classList.remove("replacement-opened");
        else
            div.parentElement.classList.add("replacement-opened");
    }
});

document.getElementById("done").onclick = function () { 
    select.forEach( function (sl) {
        console.log(sl , sl.value);
    });
 };
