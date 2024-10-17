function trickOrTreat(event) {
    const div = event.target.parentElement.querySelector('div');
    console.log(div)
    div.innerHTML = Math.random() > 0.5 ? `<img src="bats.png" alt="tricky bats">`
        : `<img src="candycorn.png" alt="treat candycorn">`
}


(function createCoundown() {
    const halloween = new Date('October 31, 2024 00:00:00').getTime();
    
    function updateTimer() {

        const timeLeft = halloween - new Date().getTime();
        
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        
        // Display the countdown
        document.getElementById('countdown').innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    // Update the countdown every second
    const timer = setInterval(updateTimer, 1000);
})();
