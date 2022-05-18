const quoteText = document.querySelector('.quote'),
authorName = document.querySelector('.author .name'),
quoteBtn = document.querySelector('button'),
soundBtn = document.querySelector('.sound'),
copyBtn = document.querySelector('.copy'),
twitterBtn = document.querySelector('.twitter')

// random quote function

function randomQuote(){
    quoteBtn.classList.add('loading')
    quoteBtn.innerText = 'Loading Quote...'

    // fetching data form the API and parsing it into
    fetch('http://api.quotable.io/random').then(res => res.json()).then(result => {
        quoteText.innerText = result.content
        authorName.innerText = result.author
        quoteBtn.innerText = 'New Quote'
        quoteBtn.classList.remove('loading')
    })
}

soundBtn.addEventListener('click', () => {
    /* the speechSyntesisUtterance is a web speech api that represents
    a speech request */
    let utternance = new SpeechSynthesisUtterance(
        `${quoteText.innerText} by ${authorName.innerText}`)
    speechSynthesis.speak(utternance)
    // method of speechSynthesis the utternance
})

copyBtn.addEventListener('click', () => {
    // writeText() writes the specified text string to the system clipboard (portapapeles)
    navigator.clipboard.writeText(quoteText.innerText)
})

twitterBtn.addEventListener('click', () => {
    let tweetUrl = `https://twitter.con/intent/tweet?url=${quoteText.innerText}`
    window.open(tweetUrl, '_blank')
    // opening a new twitter tab with passing quote in the url
})

quoteBtn.addEventListener('click', randomQuote)