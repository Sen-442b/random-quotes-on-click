
const API_URL = "https://api.quotable.io/random"
const API_URL_tech = "https://api.quotable.io/random?tags=technology,famous-quotes"
const API_URL_history = "https://api.quotable.io/random?tags=history|civil-rights"
const quoteBox = document.querySelector(".quote-box")
const button = document.querySelector("#btn")
const button_tech = document.querySelector("#btn-tech")
const button_his = document.querySelector("#btn-his")
const blockQuote = document.querySelector('blockquote')
const body = document.querySelector('body');
const credits = document.querySelector('.credits');

try{
function getQuoteData(url){
   
blockQuote.innerHTML="loading...."
fetch(url)
.then((res)=>(res.json()))
.then((data)=>(
    displayQuoteData(data)))
    
}
}catch{errorHandling()}  //not working
    

function displayQuoteData(data){
    const{content , author} = data
    

blockQuote.innerHTML= `${content} <hr> By -${author}`
}
 button.addEventListener("click",()=>(
    getQuoteData(API_URL),
    body.style.background= `url(/images/3452442.jpg)`,
    credits.innerHTML= `<div> Background Image <a href='https://www.freepik.com/vectors/nature'>Nature vector created by freepik - www.freepik.com</a></div>`
     


 ))
 button_tech.addEventListener("click",()=>(
    getQuoteData(API_URL_tech),
    body.style.background = `url(images/spacex-OHOU-5UVIYQ-unsplash.jpg)`
 ))
 button_his.addEventListener("click",()=>(
    getQuoteData(API_URL_history),
    body.style.background = `url(images/wallpaper2you_294687.jpg)`
 ))

 function errorHandling (){
    blockQuote.innerHTML="Sometimes people make mistakes , kindly forgive them if they are sorry for that"
    
 }