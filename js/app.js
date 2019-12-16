let select = [...document.querySelectorAll('select')]; // All select tags in the dom
let my_select = document.getElementById('DAS');

/* ======================== Multiple selections ======================== */

/*
import glopalMultiple from './modules/multi/all.js';
import manualMultiple from './modules/mmulti/one.js';

glopalMultiple(select, "Choose you number");
let my_multi_select = document.getElementById('dd');
manualMultiple(my_multi_select, "choose");

/* ======================== Multiple selections ======================== */


import allOne from './modules/single/all.js';
import singleSelect from './modules/single/one.js';

allOne(select, "normal");
singleSelect(my_select, "My normal");

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
        console.log("val", $('select#goal').val());
        console.log("ad", $('select#dd').val());
        console.log("DAS", $('select#DAS').val());
 };