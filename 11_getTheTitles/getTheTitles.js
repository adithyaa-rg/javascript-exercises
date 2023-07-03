const getTheTitles = function( books ) {
    var bookTitles = [];
    for (var i = 0; i < books.length; i++)
    {
        bookTitles[bookTitles.length] = books[i].title;
    }
    return bookTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
