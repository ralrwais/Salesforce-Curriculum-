var timer = function(delay) {
    let seconds = 0;
    return new Promise((resolve, reject) => {
        let increment = function() {
            seconds++;
            console.log('Seconds passes', seconds)
            resolve(timer);
        }
        return setInterval(increment, delay)
        
    })
}

let myTimer = timer(1000);

function stop(interVal) {
    clearInterval(interVal);
}

