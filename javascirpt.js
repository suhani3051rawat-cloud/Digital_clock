let clock = document.getElementById("clock");
console.log(clock);

function updateTime(){
let hours = document.getElementById("hours");
let min = document.getElementById("min");
let seconds = document.getElementById("seconds"); 
let now = new Date();
let month = document.getElementById("month");
let monthnames = ["January" , "February" , "March" , "April" , "May" , "June"
 , "July " , "August" , "September" , "October" , "November" , "December"]; 
 let index = now.getMonth();
 let day = document.getElementById("day");
let daynames = ["sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday"
 , "Saturday"]; 
 let today = now.getDay();
 let date = document.getElementById("date");
hours.innerHTML = now.getHours();
min.innerHTML = now.getMinutes();
seconds.innerHTML = now.getSeconds();
day.innerHTML =daynames[today];

month.innerHTML = monthnames[index];

date.innerHTML =  now.getDate();

let ampm =  document.getElementById("ampm");
let time = now.getHours();
 if(time <= 12){
    ampm.innerHTML = "AM";
 }
 if(time > 12){
    ampm.innerHTML = " PM";
 }
}
 updateTime();
 setInterval(updateTime , 1000);

 let year = document.getElementById("year");
 year.innerHTML = now.getFullYear();

const quotes = [
    {
        quote: "The best way to predict the future is to create it.",
        author: "Peter Drucker"
    },
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        quote: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson"
    },
    {
        quote: "The secret of getting ahead is getting started.",
        author: "Mark Twain"
    },
    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    }
];

const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function updateQuote() {
    const randomQuote = getRandomQuote();
    quoteElement.textContent = `${randomQuote.quote}`;
    authorElement.textContent = `-${randomQuote.author}`;
}
updateQuote();
setInterval(updateQuote, 10000);
