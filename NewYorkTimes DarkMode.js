/*
  My GitHub : https://github.com/Mending-Electronics
  Author : Jallet Alexandre
  Version : 0.1

  Browser Snippet use to:
     - Clean the web page to isolate Texte contents and illustrations
     - Set the Roboto Font Family
     - Add a DarkMode Switch button (Using Bootstrap 5.3 CDN Framworks)
     - Press 'CTRL+P' to print
       > Selecte "Save as PDF"
       > Go to the complements paramters
       > Select "Margin : None"
       > Select "Background Design"

       and SAVE

*/


// Get the html element
var html = document.documentElement;

// Add the data-bs-theme attribute to the html element and set it to light
html.setAttribute('data-bs-theme', 'light');



// Get the head element
var head = document.head;

// Remove all style, script, base, link and meta elements from the head
head.querySelectorAll('base, link, meta').forEach(function(el) {
  el.remove();
});

// Append a new link element to the head to include bootstrap 5.3 css cdn
var link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css';
link.integrity = 'sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN';
link.crossOrigin = 'anonymous';
head.appendChild(link);


// var link2 = document.createElement('link');
// link2.rel = 'stylesheet';
// link2.href = 'https://fonts.googleapis.com/css?family=Roboto:900i';
// head.appendChild(link2);



// create a style element
let style = document.createElement("style");

// set the type attribute to "text/css"
style.setAttribute("type", "text/css");

// create a text node with the CSS rules
let css = document.createTextNode(`

@import url('https://fonts.googleapis.com/css?family=Roboto:400,700');

body {
  font-family: 'Roboto', sans-serif;
  font-size: 1.2em;
}

p { 
  text-align: justify; 
  text-justify: inter-word;
  }; 
a {
  color: inherit !important; 
  text-decoration: none !important;
  };
  
h1 {
  text-align: center !important;
  padding-bottom: 50px
  };

`);

// append the text node to the style element
style.appendChild(css);

// append the style element to the head element
head.appendChild(style);




// get the h1 element stored into the <header> element
let header = document.querySelector("header"); // select the header element
let h1 = header.querySelector("h1"); // select the h1 element inside the header

try {
  // create and paste a copy of the h1 element at the root and at the first place of the body element
  let h1Copy = h1.cloneNode(true); // create a copy of the h1 element
  let body1 = document.querySelector("body"); // select the body element
  body1.insertBefore(h1Copy, body1.firstChild); // insert the copy as the first child of the body
} catch(error){
  console.log("No presentation picture found in the header")
};




// Select all the elements that match the criteria
let elements = document.querySelectorAll("h1, h2, h3, h4, h5, p, strong, section");

// Loop through each element
for (let element of elements) {
  // Remove the class and style attributes
  element.removeAttribute("class");
  element.removeAttribute("style");

  // Add a new class attribute with the value "text-secondary"
  element.setAttribute("class", "text-secondary");
}


// // Select all div elements and their descendants
// let div_elements = document.querySelectorAll("div, div *");

// // Loop through each element
// for (let element of div_elements) {
//   // Remove the class and style attributes
//   element.removeAttribute("class");
//   element.removeAttribute("style");
// }


// Select all div elements with class="css-53u6y8"
let div_elements = document.querySelectorAll("div.css-53u6y8");

// Loop through each element
for (let element of div_elements) {
  // Remove the class and style attributes
  element.removeAttribute("class");
  element.removeAttribute("style");
}




// Select all anchor elements
let anchor_elements = document.querySelectorAll("a");

// Loop through each element
for (let element of anchor_elements) {
  // Remove the class and style attributes
  element.removeAttribute("class");
  element.removeAttribute("style");
  element.removeAttribute("href");
  
  element.style.textDecoration = "none";
}


// Get the body element
var body = document.body;
body.className ="container";


// create a div element for the container
let div = document.createElement("div");
div.className = "container-fluid";

// create a button element for the dark mode
let button = document.createElement("button");
button.className = "dark-mode-button align-item-end btn btn-secondary sticky-top pt-0";
button.id = "dark-mode-button";
button.textContent ="Dark Mode";


// append the button to the div
div.appendChild(button);

// append the div to the body
document.body.insertBefore(div, document.body.firstChild);
// nav.appendChild(div);



// Append a new script element to the end of the body to include bootstrap 5.3 js cdn
var script1 = document.createElement('script');
script1.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js';
script1.integrity = 'sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL';
script1.crossOrigin = 'anonymous';
body.appendChild(script1);



// Append a script element to the body to handle the dark mode switch logic
var script4 = document.createElement('script');
script4.textContent = `
/****************************************
  Dark Mode switch
*/

// Get the dark mode button element
var darkModeButton = document.getElementById("dark-mode-button");
// Get the html element
var html = document.documentElement;
// Add a click event listener to the button
darkModeButton.addEventListener("click", function() {
  // Get the current data-bs-theme attribute of the html element
  var theme = html.getAttribute("data-bs-theme");
  // If the theme is light, change it to dark
  if (theme == "light") {
    html.setAttribute("data-bs-theme", "dark");

  // Select all the elements that match the criteria
  let elements = document.querySelectorAll("h1, h2, h3, h4, h5, p, strong");
  
  // Loop through each element
  for (let element of elements) {
    // Remove the class and style attributes
    element.removeAttribute("class");
    element.removeAttribute("style");
  
    // Add a new class attribute with the value "text-secondary"
    element.setAttribute("class", "text-secondary");
  }




    
  }
  // If the theme is dark, change it to light
  else if (theme == "dark") {
    html.setAttribute("data-bs-theme", "light");
  }
});


/****************************************
  Enable Bootstrap Tooltips ans Popovers
*/

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
})
`;
body.appendChild(script4);





// Une fonction qui prend un sélecteur CSS et un style à appliquer
function hideElement(selector, style) {
  // Un intervalle qui s'exécute toutes les 500 millisecondes
  let interval = setInterval(function() {
    // Trouver l'élément qui correspond au sélecteur
    let element = document.querySelector(selector);
    // Si l'élément existe, lui appliquer le style
    if (element) {
      element.style = style;
      // Arrêter l'intervalle
      clearInterval(interval);
    }
  }, 500);
}

// Appeler la fonction pour chaque élément à cacher
// hideElement("#app", "font-family: 'Roboto' !important");
hideElement("header", "display: none;");
hideElement(".css-10cldcv", "display: none;");
hideElement("#fullBleedHeaderContent", "display: none;");
hideElement("aside", "display: none;");
hideElement("#c-col-editors-picks", "display: none;");
hideElement("#in-story-masthead", "display: none;");
hideElement("#bottom-sheet-sensor", "display: none;");
hideElement("#bottom-of-article", "display: none;");
hideElement(".bottom-of-article", "display: none;");
hideElement(".css-yywogo", "display: none;");
// hideElement(".css-13ldwoe", "display: none;");
hideElement("#styln-guide", "display: none;");
hideElement(".related-links-block", "display: none;");
hideElement("#dock-container", "display: none;");
hideElement("#site-index", "display: none;");
hideElement("footer", "display: none;");



