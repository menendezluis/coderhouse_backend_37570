var quotes = require("random-movie-quotes");
setInterval(() => {
  console.log(quotes.getQuote());
}, 1500);

