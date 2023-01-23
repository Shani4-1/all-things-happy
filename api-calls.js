const api_url ="https://api.goprogram.ai/inspiration";
let load = true;
const quoteCard = document.querySelector(".inspiration-quote");
const sundayNavLink = document.querySelector("#sunday")
// const videojs = document.querySelector(".videojs")

async function getapi(api_url){
    fetch(api_url)
        .then(response =>
  
        response.json()
        )
        .then((data) => {

            const quote = data.quote
            const author = data.author
            
            const lineBreak = document.createElement("br")
            console.log(quote);
            console.log(author);
            quoteCard.append(quote);
            quoteCard.append(lineBreak)
            quoteCard.append(author)
        })
        .catch(err => console.error(err));
}
