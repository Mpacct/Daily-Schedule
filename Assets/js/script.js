// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// Saves the text area of each user input section to a variable
var nineBlock = document.querySelector("#h9Text");
var tenBlock = document.querySelector("#h10Text");
var elevenBlock = document.querySelector("#h11Text");
var twelveBlock = document.querySelector("#h12Text");
var oneBlock = document.querySelector("#h1Text");
var twoBlock = document.querySelector("#h2Text");
var threeBlock = document.querySelector("#h3Text");
var fourBlock = document.querySelector("#h4Text");
var fiveBlock = document.querySelector("#h5Text");

// Saves the .btn class to a variable
var saveButton = document.querySelector(".btn");

// Saves the current Date to a variable
var currentDay = dayjs();

// Calls the current date to display as text in the ID of "currentDay"
$("#currentDay").text(currentDay.format("[Today is ]MMMM D, YYYY "));

//Saves the current Time Hour as a variable
var currentTime = dayjs().format("HH");

// for loop to add classes of past, present, or future to each div based on their id name and comapring the current hour with their assigned hour
for(i = 9; i < 18; i++) {
  if(currentTime > i) {
    $("#hour-" + i).addClass("past");
  } else if(currentTime < i) {
    $("#hour-" + i).addClass("future");
  } else {
    $("#hour-" + i).addClass("present");
  };
};

// function that Saves an object with user input in local storage
function saveMessage () {
  var calendarEvent = {
    nineBlockMsg: nineBlock.value.trim(),
    tenBlockMsg: tenBlock.value.trim(),
    elevenBlockMsg: elevenBlock.value.trim(),
    twelveBlockMsg: twelveBlock.value.trim(),
    oneBlockMsg: oneBlock.value.trim(),
    twoBlockMsg: twoBlock.value.trim(),
    threeBlockMsg: threeBlock.value.trim(),
    fourBlockMsg: fourBlock.value.trim(),
    fiveBlockMsg: fiveBlock.value.trim(),
  };
  localStorage.setItem("calendarEvent", JSON.stringify(calendarEvent));
};

// funtion that loads local storage objects into the text areas upon refreshing / loading the page
function renderMessage () {
  var lastMessage = JSON.parse(localStorage.getItem("calendarEvent"));
  if (lastMessage !== null) {
    nineBlock.innerHTML = lastMessage.nineBlockMsg;
    tenBlock.innerHTML = lastMessage.tenBlockMsg;
    elevenBlock.innerHTML = lastMessage.elevenBlockMsg;
    twelveBlock.innerHTML = lastMessage.twelveBlockMsg;
    oneBlock.innerHTML = lastMessage.oneBlockMsg;
    twoBlock.innerHTML = lastMessage.twoBlockMsg;
    threeBlock.innerHTML = lastMessage.threeBlockMsg;
    fourBlock.innerHTML = lastMessage.fourBlockMsg;
    fiveBlock.innerHTML = lastMessage.fiveBlockMsg;
  } else {
    return;
  };
};

// Function that saves user input into local storage when clicking a button
saveButton.addEventListener("click", function(event) {
  event.preventDefault();
  saveMessage();
  renderMessage();
});

// Runs renderMessage function
function init() {
  renderMessage();
};

//Runs the init function immediatly when opening the page
init();

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
