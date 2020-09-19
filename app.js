const minutes = document.getElementById('mins');
const start = document.getElementById('start');
const stop = document.getElementById('stop');

let count = 0;
let intervalID;


start.addEventListener('click' , () => {
    intervalID = setInterval(function () {
        count += 1;
        minutes.textContent = count;
    
    }, 1000)
})

stop.addEventListener('click' ,() => {
    clearInterval(intervalID);
})