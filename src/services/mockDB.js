export function createQuote(quote) {
    return new Promise((res) => {
        const quotesJson = localStorage.getItem('quotes');
        const quotes =
            quotesJson
            ?
            JSON.parse(quotesJson) : [];
        quotes.push(quote);
        const stringifiedQuotes = JSON.stringify(quotes);
        localStorage.setItem('quotes', stringifiedQuotes);
        res(`Created quote number ${quotes.length}.`);
    });
}