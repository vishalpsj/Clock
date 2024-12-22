let curTime = document.getElementById('curTime')
let greetings = document.getElementById('greetings')

setInterval(() => {
    curTime.innerText = new Date().toLocaleTimeString()
}, 1000);



const makegreetings = (greet) =>{
    greetings.innerText = greet
} 

let hour = new Date().getHours()


if(hour < 12){
    makegreetings("Good Morning 🌞🌄")
}
else if(hour < 16){
    makegreetings("Good Afternoon 🌞")
}
else if(hour < 20){
    makegreetings("Good Evening 🌇")
}
else{
    makegreetings("Good Night 🌛")
}