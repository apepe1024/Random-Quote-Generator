"use strict";

//quotes array, with some citations & years missing. Tags included.
const quotes = [
  {
    quote: "You've got to make a statement. You've got to look inside yourself and say: \"What am I willing to put up with today?\"",
    source: "Arin Hanson",
    citation: "Game Grumps",
    year: "2012",
    tags: ["wisdom", "inspirational"]
  },
  {
    quote: "Who do you think you are?! I am!!",
    source: "Pete Weber",
    citation: "Bowling's 69th U.S. Open",
    year: "2012",
    tags: ["nonsensical", "inspirational"]
  },
  {
    quote: "I like rice. Rice is great if you're hungry and want 2000 of something.",
    source: "Mitch Hedberg",
    citation: null,
    year: null,
    tags: ["truth", "nonsensical"]
  },
  {
    quote: "It's not so much as so little as to do with what everything is, but it is within our self-interest to understand the topography of our lives unto ourselves.",
    source: "Reggie Watts",
    citation: null,
    year: null,
    tags: ["wisdom", "nonsensical", "what"]
  },
  {
    quote: "What?",
    source: "Lil Jon",
    citation: null,
    year: null,
    tags: ["wisdom", "inspirational", "what"]
  },
];

//getting random quote through randomized id #
const getRandomQuote = () => {
  let randomQuote = quotes[Math.floor(Math.random() * 5)];
  return randomQuote;
};

//getting random color through randomized rgb value
const buildRGB = () => {
  let colorPicker = (Math.floor(Math.random() * 256));
  return colorPicker;
}

//building random rgb value, appending inline body style
const getRandomColor = () => {
  let getRGB = "rgb(" + buildRGB() + "," + buildRGB() + "," + buildRGB() + ");";
  document.body.style = "background-color:" + getRGB;
}

//start of printQuote function
const printQuote = () => {
  let randomQuote = getRandomQuote();
  let randomColor = getRandomColor();
//defining variable quoteString, to be injected into HTML
  let quoteString = "";
//template literals to place specific object values
    quoteString += `<p class="quote">${randomQuote.quote}</p>
    <p class="source">${randomQuote.source}`;
//if statement to determine whether citation or year is necessary
    if (randomQuote.citation && randomQuote.year != null) {
      quoteString += `<span class="citation">${randomQuote.citation}</span><span class="year">${randomQuote.year}</span>`;
    }
//closing p tag
    quoteString += `</p>`;
//replacing HTML in target with quoteString
  document.getElementById('quote-box').innerHTML = quoteString;
};

//printQuote is called automatically after 30 seconds, refreshing quote and background-color
window.setInterval(printQuote, 30000);

// event listener to respond to "Show another quote" button clicks; when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
