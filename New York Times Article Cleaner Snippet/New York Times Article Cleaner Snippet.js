/* 
  My GitHub : https://github.com/Mending-Electronics 
  Author : JALLET Alexandre 
  Version : 0.2
  
/** 
* The New York Times Article Cleaner JS Snippet is designed to enhance your English language study experience by streamlining the reading process. It achieves this by: 
* 
* What the snippet does: 
* 1. Removing Ads and Non-Essential Elements: It eliminates distracting ads and other unnecessary content, leaving only the article text and relevant images. 
* 2. Customizable Themes: It adds a button that lets you toggle between light and dark themes for comfortable reading. 
* 3. Text Formatting: It justifies paragraphs and uses a legible font for improved readability. 
* 4. Text Size: It adds a range slider to allow you to adjust the text size as desired. 
* 5. Note Area: It adds a button that lets you toggle between adding or removing empty areas below each paragraph to take notes. 
* 6. Translate: It includes the Google Translate service in the webpage to translate the article. 
* 7. Audio Isolation: If the New York Times provides an audio reader, the snippet isolates the article audio, allowing you to adjust sound levels and download it as an MP3. 
* 8. PDF Export: It adds a button to save the cleaned article as a PDF directly from your web browser's PDF reader. 
* (Tip: Save the article in two PDF files, first in English (US) and the second in your native language to compare.) 
*/



// **** APPEND bootstrap data-bs-theme attribute (toggle light/dark theme with bootstrap) >> HTML ELEMENT ****

// Get the html element
var html = document.documentElement;
// Add the data-bs-theme attribute to the html element and set it to light 
html.setAttribute('data-bs-theme', 'light');


// **** remove : base, link, meta elements >> HEAD ELEMENT ****

// Get the head element
var head = document.head;
// Remove all style, script, base, link and meta elements from the head
head.querySelectorAll('base, link, meta').forEach(function (el) {
  el.remove();
});


// **** APPEND CDN link & script elements (Bootstrap 5.3.3 [bootswatch lux], Bootstrap icons) >> HEAD ELEMENT ****

var bootstrapLink = document.createElement('link');
bootstrapLink.rel = 'stylesheet';
bootstrapLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/bootswatch/5.3.3/lux/bootstrap.min.css';
bootstrapLink.crossOrigin = 'anonymous';
head.appendChild(bootstrapLink);

// Append a new link element to the head to include bootstrap icons css cdn
var bootstrapIconsLink = document.createElement('link');
bootstrapIconsLink.rel = 'stylesheet';
bootstrapIconsLink.href = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css';
bootstrapIconsLink.integrity = 'sha384-4LISF5TTJX/fLmGSxO53rV4miRxdg84mZsxmO8Rx5jGtp/LbrixFETvWa5a6sESd';
bootstrapIconsLink.crossOrigin = 'anonymous';
head.appendChild(bootstrapIconsLink);

// // Append a new script element to the head to include jquery cdn
// var jqueryScript = document.createElement('script');
// jqueryScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js';
// head.appendChild(jqueryScript);



// **** APPEND CSS Template >> HEAD ELEMENT ****

// create a style element
let style = document.createElement('style');

// set the type attribute to "text/css"
style.setAttribute('type', 'text/css');

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
  
.alert h4, 
.alert strong, 
.alert li { 
    color: white; !important; 
opacity: 0.8 !important; 
} 
  
.alert strong,  
.alert li { 
    font-size: 0.7em; !important 
} 
    
/* Adjust sizes with ratio */ 
.adjusted p { font-size: calc(1em * var(--ratio)); } 
.adjusted h1 { font-size: calc(2em * var(--ratio)); } 
.adjusted h2 { font-size: calc(1.5em * var(--ratio)); } 
.adjusted h3 { font-size: calc(1.17em * var(--ratio)); } 
.adjusted h4 { font-size: calc(1em * var(--ratio)); } 
.adjusted h5 { font-size: calc(0.83em * var(--ratio)); } 
    
`);

// append the text node to the style element
style.appendChild(css);
// append the style element to the head element
head.appendChild(style);



// **** ISOLATE ORIGINAL ARTICLE TITLE & ARTICLE PRESENTATION PICTURE Template >> HEAD ELEMENT ****

// get the h1 element stored into the <header> element
let header = document.querySelector('header'); // select the header element
let h1 = header.querySelector('h1'); // select the h1 element inside the header

try {
  // create and paste a copy of the h1 element at the root and at the first place of the body element
  let h1Copy = h1.cloneNode(true); // create a copy of the h1 element
  let body1 = document.querySelector('body'); // select the body element
  body1.insertBefore(h1Copy, body1.firstChild); // insert the copy as the first child of the body
} catch (error) {
  console.log('No presentation picture found in the header');
}




// Get the body element
const body = document.body;



// **** REMOVE OLD 'body, h1, h2, h3, h4, h5, p, strong, section, a, div' STYLE DEPENDENCIES & PATCH NEW STYLE ****

// Function to reset style dependencies
function resetStyle() {

  // Select all the elements that match the criteria
  let elements = document.querySelectorAll('h1, h2, h3, h4, h5, p, strong, section');
  
  // Loop through each element
  for (let element of elements) {
    // Check if the element is a child of a div with class "alert"
    if (!element.closest('#features')) {
      // Remove the class and style attributes
      element.removeAttribute('class');
      element.removeAttribute('style');
      // Add a new class attribute with the value "text-secondary"
      element.setAttribute('class', 'text-secondary');
    }
  }

  
  // Select all div elements with class="css-53u6y8"
  let div_elements = document.querySelectorAll('div.css-53u6y8');
  // Loop through each element
  for (let element of div_elements) {
    // Remove the class and style attributes
    element.removeAttribute('class');
    element.removeAttribute('style');
  }
  
  // Select all anchor elements
  let anchor_elements = document.querySelectorAll('a');
  // Loop through each element
  for (let element of anchor_elements) {
    // Check if the element is a child of a div with class "alert"
    if (!element.closest('#features')) {
      // Remove the class and style attributes
      element.removeAttribute('class');
      element.removeAttribute('style');
      element.removeAttribute('href');
      element.style.textDecoration = 'none';
    }
  }
  
  // Edit the body element
  body.classList.add('container', 'adjusted');
  body.id = 'content';
  body.setAttribute('style', '--ratio: 1');
  // create a div element for the container
  let div = document.createElement('div');
  div.className = 'container-fluid';
  
  // Function to remove all dependencies from old containers
  // Select all div elements with the class "StoryBodyCompanionColumn"
  const divElements = document.querySelectorAll('.StoryBodyCompanionColumn');
  // Remove the class attribute from each div element
  divElements.forEach(div => {
    div.removeAttribute('class');
  });
};

resetStyle()



// **** ADD NEW NAVBAR with (Note-area button, Save as PDF button, Dark mode toggle button, instructions, Google trad, isolate audio player, text size ranger) & PATCH IT >> BODY ELEMENT ****

// HTML navbar template patched as the first child of the body element
const newHtmlNavbar = ` 
<nav class="navbar navbar-expand-lg bg-body-tertiary  p-1"> 
  <div class="container-fluid"> 
    <svg width="180px" class="d-inline-block bg-light m-b-lg m-t-lg me-5 border-0 px-3 py-2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 379 64" enable-background="new 0 0 379 64" xml:space="preserve"> 
    <path fill="#1A1A1A" d="M30.8,15.7c0-4.1-3.9-5.4-7.2-5.3v0.4c2,0.2,3.5,1,3.5,2.3c0,0.9-0.7,2.1-2.6,2.1c-1.6,0-4.1-0.9-6.6-1.7  c-2.7-0.9-5.2-1.8-7.3-1.8c-4.1,0-7.3,3.1-7.3,6.9c0,3.1,2.4,4.1,3.3,4.5l0.1-0.2c-0.6-0.4-1-0.9-1-2.2c0-1.1,0.8-2.6,2.9-2.6  c1.9,0,4.4,0.9,7.8,1.8c2.9,0.8,6,1.6,7.7,1.8v6.7l-3.2,2.7l3.2,2.8v9.2c-1.7,1-3.6,1.3-5.3,1.3c-3.1,0-5.9-0.9-8.2-3.4l8.7-4.2  V22.1L8.7,26.9c1.1-2.8,3.2-4.9,5.5-6.3l-0.1-0.2C7.8,22.1,2,27.9,2,35.1C2,43.7,8.9,50,16.8,50c8.6,0,13.6-6.7,13.5-13.8h-0.2  c-1.3,2.7-3.3,5.3-5.7,6.7v-9l3.4-2.7l-3.4-2.7v-6.7C27.6,21.7,30.8,19.6,30.8,15.7L30.8,15.7z M12.9,39.3l-2.5,1.3  c-1.5-2-2.5-4.7-2.5-8.3c0-1.5,0.2-3.5,0.7-4.9l4.4-2L12.9,39.3L12.9,39.3z M52.8,27.5l-1.7,1.3l-5-4.5l-5.9,4.5V11.4l-8,5.5  c0.9,0.3,2,0.8,2,2.9V44l-2.7,2.1l0.3,0.3l1.4-1l4.7,4.3l6.4-4.2L44,45.1l-1.6,1.1L40.2,44V29.4l1.5-1.1l3.5,3V44  c0,8-1.8,9.7-5.4,11v0.2c6,0.3,11.4-1.8,11.4-12.1V29.3l1.8-1.5L52.8,27.5L52.8,27.5z M63.5,49.6l9.2-7.4l-0.3-0.4l-4.8,3.8L62,41.3  v-2.7l9.6-6.8l-4.8-7.5l-10.7,5.9v13.9l-2.1,1.6l0.3,0.3l2-1.6L63.5,49.6L63.5,49.6z M62,38V27.5l4.6,7.3L62,38L62,38z M110.9,13.7  c0-0.7-0.2-1.2-0.4-2h-0.2c-0.7,1.8-1.4,2.7-3.4,2.7c-1.8,0-3.2-1.1-4-1.9c0,0.1-6.1,7-6.1,7l0.3,0.3l1.7-2c1.3,1,2.5,2.2,5.4,2.2  v17.7L91.9,16.2c-1-1.6-2.6-4-5.5-4c-3.3,0-5.9,2.9-5.5,7.7h0.2c0.3-1.2,1-2.7,2.4-2.7c1.2,0,2.1,1.1,2.7,2.1v6.9  c-3.8,0-6,1.8-6,4.8c0,1.3,0.9,4,3.5,4.4v-0.2c-0.4-0.4-0.7-0.7-0.7-1.4c0-1.2,0.9-1.8,2.4-1.8c0.3,0,0.6,0.1,0.8,0.1v9  c-4.5,0.1-8,2.5-8,6.8c0,4,3.5,5.9,7.1,5.7v-0.2c-2.3-0.3-3.4-1.4-3.4-3.1c0-1.8,1.3-2.8,3-2.8c1.7,0,2.9,1.1,4,2.3l6.1-6.8  l-0.3-0.3l-1.6,1.8c-2.3-2.1-3.8-3-6.5-3.4V19.9l17.1,29.8h0.9V20C108,19.8,110.9,17.4,110.9,13.7L110.9,13.7z M116.7,49.6l9.2-7.4  l-0.3-0.4l-4.8,3.8l-5.6-4.4v-2.7l9.6-6.8l-4.8-7.5l-10.7,5.9v13.9l-2.1,1.6l0.3,0.3l2-1.6L116.7,49.6L116.7,49.6z M115.3,38V27.5  l4.6,7.3L115.3,38L115.3,38z M158.7,26.7l-1.4,1.1l-4-3.4l-4.7,4.2l1.9,1.8v15.8l-4.8-3.3V30.1l1.7-1.2l-4.9-4.6l-4.6,4.2l1.9,1.8  v15.3l-0.3,0.2l-4.5-3.3V30c0-2.9-1.5-3.8-3.3-4.9c-1.6-1-2.4-1.9-2.4-3.3c0-1.6,1.4-2.3,1.9-2.5c-1.6-0.1-6.1,1.6-6.2,5.7  c-0.1,2.1,1,3,2,4c1.1,1,2.1,2,2.1,3.7V45l-2.2,1.7l0.3,0.3l2.1-1.6l5.4,4.4l5.2-3.6l5.7,3.6l11.1-6.6V28.9l2.5-1.9L158.7,26.7  L158.7,26.7z M195.9,14.7l-2.1,1.9l-4.7-4.1l-6.4,5.2v-4.8h-0.4v34.7c-0.7-0.1-2.2-0.5-3.8-0.8v-29c0-2.1-1.5-5-5.3-5  c-3.9,0-6.2,3.2-6.2,6h0.2c0.2-1.3,1.1-2.4,2.3-2.4c1.3,0,2.4,0.8,2.4,3.6v8.3c-3.6,0.2-5.8,2.4-5.8,4.8c0,1.4,0.9,3.9,3.6,4v-0.2  c-0.9-0.4-1.1-0.9-1.1-1.4c0-1.2,1.2-1.6,2.8-1.6h0.4v13.3c-3.1,1.1-4.5,3.1-4.5,5.7c0,3.5,2.8,6.3,7,6.3c2.9,0,5-0.5,7.7-1.1  c2.2-0.5,4.5-1,5.8-1c1.6,0,2.3,0.7,2.3,1.9c0,1.5-0.6,2.2-1.4,2.5v0.2c3.5-0.7,5.5-2.7,5.5-5.8c0-3.2-3.1-5.2-6.5-5.2  c-1.8,0-5,0.6-7.6,1.2c-2.9,0.7-5.5,1-6.4,1c-1.5,0-3.3-0.7-3.3-2.6c0-1.8,1.5-3.2,5.1-3.2c2,0,3.9,0.3,6.3,0.9  c2.6,0.6,4.3,1.3,6.6,1.3c3.1,0,5.6-1.1,5.6-5.6V17.1l2.3-2.1L195.9,14.7L195.9,14.7z M187.2,28.6c-0.6,0.6-1.2,1.1-2.3,1.1  c-1.2,0-1.8-0.6-2.3-1.1V18.2l1.5-1.2l3.1,2.6V28.6L187.2,28.6z M187.2,33.6c-0.5-0.5-1.2-1-2.3-1c-1.1,0-1.9,0.6-2.3,1v-4.4  c0.5,0.4,1.2,1,2.3,1c1.1,0,1.8-0.5,2.3-1V33.6L187.2,33.6z M187.2,44c0,1.7-0.9,3.6-3.1,3.6c-0.4,0-1.2-0.1-1.5-0.1V34.1  c0.5-0.5,1.2-1.1,2.3-1.1c1.1,0,1.7,0.5,2.3,1.1V44L187.2,44z M205.2,49.6l10.3-6.4v-14l-6.7-4.9l-10.3,5.9v13.9l-2,1.6l0.2,0.3  l1.7-1.4L205.2,49.6L205.2,49.6z M204.5,42.4V27.4l5.2,3.8v14.9L204.5,42.4L204.5,42.4z M235.2,24.6c-0.8,0.6-1.5,0.9-2.3,0.9  c-0.8,0-1.8-0.5-2.3-1.2c0,0.1-3.8,4.1-3.8,4.1l-3.8-4.1l-6.3,4.3l0.2,0.4l1.7-1.1l2.3,2.5V44l-2.7,2.1l0.3,0.3l1.4-1l5.1,4.3  l6.5-4.3l-0.2-0.3l-1.7,1l-2.6-2.4V28.8c1.1,1.2,2.3,2.2,3.7,2.2C233.1,31,234.9,27.9,235.2,24.6L235.2,24.6z M259.6,44.7l-1.9,1.2  L247,30l0.6-0.8c1.2,0.7,2.2,1.7,4.4,1.7c2.2,0,5-2.3,5.3-6.6c-0.6,0.8-1.7,1.7-3.5,1.7c-1.3,0-2.6-0.9-3.4-1.7L243.1,35l9.6,14.7  l7-4.6L259.6,44.7L259.6,44.7z M246.6,45.1l-1.6,1.1l-2.2-2.2V11.4l-8,5.5c0.9,0.3,2,0.8,2,2.9V44l-2.7,2.1l0.3,0.3l1.4-1l4.7,4.3  l6.4-4.2L246.6,45.1L246.6,45.1z M293.5,15.7c0-4.1-3.9-5.4-7.2-5.3v0.4c2,0.2,3.5,1,3.5,2.3c0,0.9-0.7,2.1-2.6,2.1  c-1.6,0-4.1-0.9-6.6-1.7c-2.7-0.9-5.2-1.8-7.3-1.8c-4.1,0-7.3,3.1-7.3,6.9c0,3.1,2.4,4.1,3.3,4.5l0.1-0.2c-0.6-0.4-1-0.9-1-2.2  c0-1.1,0.8-2.6,2.9-2.6c1.9,0,4.4,0.9,7.8,1.8c2.9,0.8,6,1.6,7.7,1.8v6.7l-3.2,2.7l3.2,2.8v9.2c-1.7,1-3.6,1.3-5.3,1.3  c-3.1,0-5.9-0.9-8.2-3.4l8.7-4.2V22.1l-10.7,4.7c1.1-2.8,3.2-4.9,5.5-6.3l-0.1-0.2c-6.3,1.7-12.1,7.5-12.1,14.7  c0,8.6,6.9,14.9,14.8,14.9c8.6,0,13.6-6.7,13.5-13.8h-0.2c-1.3,2.7-3.3,5.3-5.7,6.7v-9l3.4-2.7l-3.4-2.7v-6.7  C290.3,21.7,293.5,19.6,293.5,15.7L293.5,15.7z M275.5,39.3l-2.5,1.3c-1.5-2-2.5-4.7-2.5-8.3c0-1.5,0.2-3.5,0.7-4.9l4.4-2  L275.5,39.3L275.5,39.3z M300,14.1l-4.4,3.7l3.8,4.3l4.4-3.7L300,14.1L300,14.1z M306.8,45.1l-1.6,1.1l-2.2-2.2V29.3l1.9-1.5  l-0.3-0.3l-1.6,1.2l-3.7-4.4l-6.1,4.2l0.2,0.4l1.5-1l2,2.5V44l-2.7,2.1l0.3,0.3l1.4-1l4.7,4.3l6.4-4.2L306.8,45.1L306.8,45.1z   M340.8,44.9l-1.5,1l-2.4-2.3V29.3l1.9-1.5l-0.3-0.3l-1.7,1.3l-5-4.5l-5.7,4.4l-5-4.4l-5.6,4.4l-3.8-4.4l-6.1,4.2l0.2,0.4l1.5-1  l2.2,2.5v13.5l-1.7,1.7l4.8,4.1l4.7-4.2l-1.9-1.8V29.2l1.3-0.9l3.5,3v12.6l-1.6,1.7l4.9,4.1l4.6-4.2l-1.9-1.8V29.2l1.2-1l3.5,3.1  v12.4l-1.4,1.5l4.9,4.5l6.5-4.4L340.8,44.9L340.8,44.9z M358.5,41.9l-4.8,3.8l-5.6-4.4v-2.7l9.6-6.8l-4.8-7.5l-10.7,5.9v14.2  l7.3,5.3l9.2-7.4L358.5,41.9L358.5,41.9z M348.1,38V27.5l4.6,7.3L348.1,38L348.1,38z M377,36l-4.1-3.1c2.7-2.4,3.7-5.4,3.7-7.6  c0-0.3-0.1-0.9-0.1-1.4h-0.2c-0.4,1.1-1.5,2.1-3.1,2.1c-1.6,0-2.6-0.9-3.6-2l-9.4,5.2v7.6l3.6,2.8c-3.6,3.2-4.3,5.2-4.3,7  c0,1.9,1.1,3.4,2.9,4.1l0.2-0.3c-0.5-0.4-0.9-0.7-0.9-1.6c0-0.7,0.7-1.8,2.3-1.8c2.1,0,3.3,1.4,4,2.2c0-0.1,9-5.5,9-5.5V36L377,36z   M374.9,29.8c-1.4,2.5-4.5,5-6.4,6.4l-2.3-1.9v-7.4c0.9,2,2.8,3.7,5.2,3.7C372.9,30.6,373.8,30.3,374.9,29.8L374.9,29.8z M371,46.4  c-1.1-2.4-3.3-4.1-5.9-4.1c-0.6,0-2.5-0.1-4.1,1c1-1.6,3.8-4.5,7.5-6.7l2.5,2.1V46.4L371,46.4z"></path> 
    </svg> 

    <div id="editor"></div> 


    <div class="d-flex justify-content-end align-items-center p-1"> 

      <button id="cleanButton" type="button" class="btn d-inline-block d-flex align-items-center btn-sm btn-light border-dark me-1 fs-5" aria-pressed="false" data-bs-theme-value="light"> 
        <i class="bi bi-stars"></i> 
        <span class="ms-2" style="font-size: 0.7em">Clean Again</span> 
      </button> 

      <button id="toggleButton" type="button" class="btn d-inline-block d-flex align-items-center btn-sm btn-light border-dark me-1 fs-5" aria-pressed="false" data-bs-theme-value="light"> 
        <i class="bi bi-pen"></i> 
        <span class="ms-2" style="font-size: 0.7em">Note Area</span> 
      </button> 

      <button id="printButton" type="button" class="btn d-inline-block d-flex align-items-center btn-sm btn-light border-dark me-1 fs-5" aria-pressed="false" data-bs-theme-value="light"> 
        <i class="bi bi-filetype-pdf"></i> 
        <span class="ms-2" style="font-size: 0.7em">Save As PDF</span> 
      </button> 
  
      <button id="dark-mode-button" type="button" class="dark-mode-button btn btn-sm bg-body d-inline-block d-flex align-items-center border-1 fs-5" data-bs-theme-value="light" aria-pressed="false"> 
        <i class="bi bi-circle-half"></i> 
        <span class="ms-2" style="font-size: 0.7em">Light / Dark</span> 
      </button> 
    </div> 
  </div> 
</nav> 






<div class="accordion" id="accordionExample">
  <div class="accordion-item" id="features">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
        <h5> Features </h5> 
        <i class="bi bi-gear text-body ms-2  pb-2"></i> 
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style="">
      <div class="accordion-body">
        <i class="bi bi-github text-secondary me-2"></i> <strong>My GitHub </strong>  
        <a target="_blank" href="https://github.com/Mending-Electronics"> <i> https://github.com/Mending-Electronics </i> </a>
        
      
      
      
      
        <div class="row"> 
      
          <div class="col col-6">  
            <div class="alert alert-dismissible alert-info bg-info my-2"> 
              <h4 class="alert-heading" style="color: white !important; font-size: 1em !important;">Informations</h4> 
              
              <strong class="mb-2" style="color: white !important"> 
              ✍️ Toggle Themes: 
              
                <ul style="color: white !important"> 
                  <li> 
                    Click the “Light/Dark” button to switch between light and dark themes. 
                  </li> 
                </ul> 
              </strong> 
        
              <strong class="mb-2" style="color: white !important"> 
              ✍️ Save this Article as PDF: 
              
                <ul style="color: white !important"> 
                  <li> 
                  Click the “Save as PDF” button. 
                  </li> 
                  <li> 
                    Choose “save as pdf” or “print to pdf” as the printer. 
                  </li> 
                  <li> 
                    Go to “additional parameters.” 
                  </li> 
                  <li> 
                    Set margin to “none.” 
                  </li> 
                  <li> 
                    Check the “graphic background” box. 
                  </li> 
                </ul> 
              </strong> 
        
              <strong class="mb-2" style="color: white !important"> 
              ✍️ Save Audio as MP3: 
              
                <ul style="color: white !important"> 
                  <li> 
                    Click the three dots on the audio player. 
                  </li> 
                  <li> 
                    Click “Download.” 
                  </li> 
                </ul> 
              </strong> 
        
            </div> 
          </div> 
        
            
          <div class="col col-6">  
            <div class="alert alert-dismissible alert-warning bg-warning my-2"> 
              <h4 class="alert-heading" style="color: white !important; font-size: 0.83em !important;">Translate this article</h4> 
            
              <div id="google_translate_element"></div> 
            </div> 
        
            <div id="audio" class="alert alert-dismissible alert-success bg-success my-2"> 
              <h4 class="alert-heading" style="color: white !important; font-size: 0.83em !important;">Listen to this article</h4> 
            </div> 
        
            <div class="alert alert-dismissible alert-primary bg-primary my-2"> 
              <h4 class="alert-heading" style="color: white !important; font-size: 0.83em !important;">Edit Text Size <label for="sizeRange"><span id="zoomValue">1</span>x</label></h4> 
              <input type="range" id="sizeRange" class="w-100" min="0.5" max="2" step="0.1" value="1" oninput="updateSize(this.value)"> 
                  
            </div> 
          </div> 
        
        </div> 
      
      
      
      </div>
    </div>
  </div>
</div>




  
  

    
`;

// const body = document.body;
const firstBodyChild = body.firstChild;
const navbarContainerDiv = document.createElement('div');
navbarContainerDiv.innerHTML = newHtmlNavbar;
body.insertBefore(navbarContainerDiv, firstBodyChild);
try {
  // Find the first audio element in the document
  var audioElement = document.querySelector('audio');
  // Set the "controls" attribute to the audio element
  audioElement.setAttribute('controls', '');
  // Set the "w-100" class to the audio element (width 100 %)
  audioElement.classList.add('w-100');
  // Create a copy of the audio element
  var audioCopy = audioElement.cloneNode(true);
  // Find the div with id "audio"
  var audioDiv = document.getElementById('audio');
  // Append the copied audio element to the div
  audioDiv.appendChild(audioCopy);
} catch (error) {
  console.error('Error occurred while setting up audio controls:', error);
  // Handle the error or return a message indicating that there is no audio element
}


// **** APPEND JS script elements (Bootstrap.bundle , GoogleTrad, Dark mode toggle function, toggle note area function, text size edit with a range function ) >> BODY ELEMENT ****

// Append a new script element to the end of the body to include bootstrap 5.3 js cdn
var script1 = document.createElement('script');
script1.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js';
script1.integrity = 'sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL';
script1.crossOrigin = 'anonymous';
body.appendChild(script1);


// Append a GoogleTrad script element to the end of the body
// create a script element
let script2 = document.createElement('script');
// set the type attribute to "text/javascript"
script2.setAttribute('type', 'text/javascript');
// create a text node with the JS rules
let GoogleTradInitElement = document.createTextNode(` 
function googleTranslateElementInit() { 
  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element'); 
} 
`);
// append the text node to the script element
script2.appendChild(GoogleTradInitElement);
// append the style element to the head element
body.appendChild(script2);

// Append a new script element to the end of the body to include GoogleTrad init js cdn
var script3 = document.createElement('script');
script3.type = 'text/javascript';
script3.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
body.appendChild(script3);


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
  // Check if the element is a child of a div with class "alert" 
  if (!element.closest(".alert")) { 
      // Remove the class and style attributes 
      element.removeAttribute("class"); 
      element.removeAttribute("style"); 
    
      // Add a new class attribute with the value "text-secondary" 
      element.setAttribute("class", "text-secondary"); 
    } 
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
  
    
// Get the button element 
const printButton = document.getElementById('printButton'); 
  
// Add an event listener to trigger printing when the button is clicked 
printButton.addEventListener('click', function() { 
window.print(); // This will open the print dialog 
}); 
    
  
`;
body.appendChild(script4);


// Function to create empty space under <p> elements for taking notes.
// HTML Note Area Template
const noteArea = ` 
<div name="noteArea" class="alert alert-dismissible alert-light border-1 border-secondary py-0 ps-0" style="padding-right: 55px; height: 100px"> 
<button type="button" class="btn-close me-2 pe-4 ps-0" data-bs-dismiss="alert"> 
<span class="w-100 h-100 d-flex text-end mt-5 pt-1 fs-5 ms-2"> 
    ... 
<i class="bi bi-pen text-secondary ms-2"></i> 
</span>  
</button> 
    <textarea class="form-control bg-body border-0 w-100 h-100 p-1"></textarea> 
</div> 
`;
// JS Toggle function
document.getElementById('toggleButton').addEventListener('click', () => {
  document.querySelectorAll('p').forEach(p => {
    const existingNote = p.nextElementSibling;
    if (existingNote && existingNote.getAttribute('name') === 'noteArea') {
      existingNote.remove();
    } else if (p.textContent.length > 200) {
      p.insertAdjacentHTML('afterend', noteArea);
    }
  });
});

// Funtion to edit text size with a range
var script5 = document.createElement('script');
script5.textContent = ` 
function updateSize(value) { 
document.querySelector('.adjusted').style.setProperty('--ratio', value); 
document.getElementById('zoomValue').textContent = value; 
} 
  
`;

body.appendChild(script5);


// **** HIDE UNNECESSARY ELEMENTS  ****

const selectorsToHide = [
  // Elements
  'header',
  'aside',
  'footer',

  // IDs
  '#top-wrapper',
  '#fullBleedHeaderContent',
  '#c-col-editors-picks',
  '#in-story-masthead',
  '#bottom-sheet-sensor',
  '#bottom-of-article',
  '#styln-guide',
  '#dock-container',
  '#site-index',

  // Classes
  '.css-10cldcv',
  '.bottom-of-article',
  '.css-yywogo',
  '.related-links-block',
  '.css-13ldwoe',
  // hide the audio player banner
  '.css-qznc1j',
  // hide advertisement
  '.css-j39py4',
  // banner below navbar
  '.css-1lnfix7',
  
];


// Function who took a CSS selector and a style to apply
function hideElements(selectors) {
  // interval to run the function all 500 milliseconds
  let interval = setInterval(function () {
    
    selectors.forEach(selector => {
      // Find the element who match with the selector
      let element = document.querySelector(selector);
      // If the element exist, the function apply the style to the element
      if (element) {
        element.style.display = 'none';
        // Reset the interval to stop the loop
        clearInterval(interval);
      }
    });
  }, 500);
}

hideElements(selectorsToHide);

// JS Clean function
document.getElementById('cleanButton').addEventListener('click', () => {
  resetStyle()
  hideElements(selectorsToHide);

});

