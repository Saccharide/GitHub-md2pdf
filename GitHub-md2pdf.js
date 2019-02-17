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
            var node = document.getElementById("readme");

            // Cloning -- Deep Copy
            var readme = node.cloneNode(true);

            // Getting the body element
            var body = document.body;

            // Initialize a list of parents node
            var list_of_parents = [];

            // Generate a list of parents node
            while (node.parentNode != body){

                list_of_parents.push(node);
                node = node.parentElement;
            }
            list_of_parents.push(node.parentElement)

            // Iterate through body and remove all nodes that are not in list
            while (body != document.getElementById("readme")){
                var current = list_of_parents.pop();
                var children = body.children;
                
                for (var i = 0; i < children.length; i++) {
                    if (children[i] != current){
                        body.remove(children[i]);
                    }
                }
                body = current;
            }



        }
    }
    catch(err){
        console.log("Not on a readme page");
    }
}();
