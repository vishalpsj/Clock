let curTime = document.getElementById('curTime')

setInterval(() => {
    curTime.innerText = new Date().toLocaleTimeString()
}, 1000);