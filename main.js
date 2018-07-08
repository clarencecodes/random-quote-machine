$(document).ready(function () {
    var randomQuoteIndex;
    var obj;

    $("#getQuote").on("click", function () {
        $.getJSON(
            "https://gist.githubusercontent.com/dmakk767/9375ff01aff76f1788aead1df9a66338/raw/491f8c2e91b7d3b8f1c8230e32d9c9bc1a1adfa6/Quotes.json%2520",
            function (json) {
                randomQuoteIndex = Math.floor(Math.random() * (json.length + 1));
                obj = Object.values(json[randomQuoteIndex]);
                $("#quote").html(obj[0]);
                $("#author").html("- " + obj[1]);
            }
        );
        $(".card").show();
        $("#tweet").show();
    });


    $("#tweet").on("click", function () {
        window.open(
            "https://twitter.com/intent/tweet?hashtags=quotes&text=\"" + obj[0] + "\" - " + obj[1] + "&url=https%3A%2F%2Fclarencecodes.github.io%2Frandom-quote-machine%2Findex.html"
        );
    });
});