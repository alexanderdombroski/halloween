function trickOrTreat(event) {
    const div = event.target.parentElement.querySelector('div');
    console.log(div)
    div.innerHTML = Math.random() > 0.5 ? `<img src="bats.png" alt="tricky bats">`
        : `<img src="candycorn.png" alt="treat candycorn">`
}

