// ==UserScript==
// @name         GitHub generated Markdown
// @version      0.1
// @description  try to take over the world!
// @author       MonoSacchride
// @include *
// @match        http://*
// @match        https://www.github.com/*
// @grant        none
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js
// ==/UserScript==

window.onload = function(e){
    try{
        if (window.location.href.includes(".md")){
            console.log("first stage")

            // Getting the whole readme element (CONENT)
            var readme = document.getElementById("readme");

            // Cloning -- Deep Copy
            var readme_copy = readme.cloneNode(true);

            // Getting the body element
            var body = document.body;

            // Getting the head element
            var head = document.head;

        }
    }
    catch(err){
        console.log("Not on a readme page");
    }
}();
