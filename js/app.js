//dropzone
// If you are using JavaScript/ECMAScript modules:
// import Dropzone from "dropzone";

// If you are using CommonJS modules:
// const {
//   Dropzone
// } = require("dropzone");

// // If you are using an older version than Dropzone 6.0.0,
// // then you need to disabled the autoDiscover behaviour here:
// Dropzone.autoDiscover = false;

// let myDropzone = new Dropzone("#my-form");
// myDropzone.on("addedfile", file => {
//   console.log(`File added: ${file.name}`);
// });





function openTab(evt, tab) {

  let i, tabcontent, tablinks;
  
  tabcontent = document.getElementsByClassName("tabcontent");  

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    console.log('aaa', tabcontent[i].style);
  }

  tablinks = document.getElementsByClassName("tablinks");

  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.querySelector(tab).style.display = "block";
  evt.currentTarget.className += " active";
}