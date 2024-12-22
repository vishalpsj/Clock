let timeis = () => {
    setInterval(() => {
        let time = new Date().toLocaleTimeString()
        console.log(time);

    }, 1000)
} 
timeis()