const quotes = [
  {
    quoteContent: "You only live once, but if you do it right, once is enough.",
    quoteAuthor: "― Mae West",
  },
  {
    quoteContent: "Be yourself; everyone else is already taken.",
    quoteAuthor: "― Oscar Wilde",
  },
  {
    quoteContent:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    quoteAuthor: "― Albert Einstein",
  },
  {
    quoteContent: "A room without books is like a body without a soul.",
    quoteAuthor: "― Marcus Tullius Cicero",
  },
  {
    quoteContent:
      "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    quoteAuthor: "― Bernard M. Baruch",
  },
  {
    quoteContent: "Be the change that you wish to see in the world.",
    quoteAuthor: "― Mahatma Gandhi",
  },
  {
    quoteContent: "In three words I can sum up everything I've learned about life: it goes on.",
    quoteAuthor: "― Robert Frost",
  },
  {
    quoteContent: "If you tell the truth, you don't have to remember anything.",
    quoteAuthor: "― Mark Twain",
  }
];

//variable to hold previous quote number
var prevRandomNum;

function generateQuote(quoteId, authorId) {
    do {
        //question: does this var get hoisted to the top of the function?
        //answer: YES, var has no block scope, only function scope and global scope
        var currRandomNum = Math.floor(Math.random() * quotes.length);
    } while (prevRandomNum == currRandomNum);

    //get quote from generated number
    const quote = quotes[currRandomNum];

    //assign quote values to the html <p></p> tags
    document.getElementById(quoteId).innerHTML = quote.quoteContent;
    document.getElementById(authorId).innerHTML = quote.quoteAuthor;

    //assign the value that was used to the previousRandomNum var to prepare for the next button press
    prevRandomNum = currRandomNum;
}
