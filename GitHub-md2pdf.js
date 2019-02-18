// ==UserScript==
// @name         GitHub generated Markdown
// @version      1.0
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
                node = node.parentNode;
            }
            list_of_parents.push(node)
            // console.log("Before: List of parents = ", list_of_parents);
            var new_node = document.getElementById("readme");
            // Iterate through body and remove all nodes that are not in list
            while (body != new_node){
                var current = list_of_parents.pop();
                // console.log("Current = ", current);
                var children = body.children;
                // console.log("children = ", children);
                while(children.length > 1){
                    for (var i = 0; i < children.length; i++) {
                        if (children[i] != current){
                            // console.log("Removing --> ", children[i]);
                            body.removeChild(children[i]);
                        }
                        else{
                            // console.log("find one match", i);
                            // console.log("Current == children[i]");
                            // console.log("---------------------------------");
                            // console.log("Current: ",current);
                            // console.log("children[i]: ",children[i]);
                            // console.log("---------------------------------");
                            // console.log(body);
                        }
                    }
                }
                body = current;
            }
            // console.log("After: List of parents = ", list_of_parents);
        }
    }
    catch(err){
        console.log("Not on a readme page");
    }
}();
