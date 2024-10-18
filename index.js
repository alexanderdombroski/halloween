function trickOrTreat(event) {
    const div = event.target.parentElement.querySelector('div');
    const rnd = Math.random();

    if (rnd < 0.25) {
        div.innerHTML = `<img src="images/candy.png" alt="treat candy">`;
    } else if (rnd < 0.5) {
        div.innerHTML = `<img src="images/insect-silhouettes.png" alt="trick insects">`;
    } else if (rnd < 0.75) {
        div.innerHTML = `<img src="images/candycorn.png" alt="treat candycorn">`;
    } else {
        div.innerHTML = `<img src="images/bats.png" alt="tricky bats">`;
    }

    setTimeout(() => {
        div.innerHTML = ''; 
    }, 1500);
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
    setInterval(updateTimer, 1000);
})();
