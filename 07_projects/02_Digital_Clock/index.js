const clock = document.getElementById("clock");
const date = document.querySelector("#date")
setInterval(() => {
    const time = new Date()
    clock.innerHTML = time.toLocaleTimeString();
    date.innerHTML = time.toDateString();
    // console.log(time);
}, 100);