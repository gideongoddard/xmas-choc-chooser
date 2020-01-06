let chooserButton = document.getElementById('chooser');
let outcomeDisplay = document.getElementById('outcome');
let orderDisplay = document.getElementById('order');

let chocolates = ['CHOCCY SCOFFY', 'SCRUMPLE NUTTY', 'FLUTTER SCOTCH'];
let order = [];

let makeChoice = () => {
    let number = Math.floor(Math.random() * chocolates.length);
    outcomeDisplay.style.display = 'block';
    outcomeDisplay.innerHTML = `<p>${chocolates[number]}</p>`;
    chooserButton.innerHTML = 'Show me which box to open next!';
    order.push(chocolates[number]);
    chocolates.splice(number, 1);
    if (chocolates.length < 1) {
        chooserButton.innerHTML = 'The order of your chocolates has been chosen.';
        chooserButton.style.cursor = 'auto';
        outcomeDisplay.style.display = 'none';
        orderDisplay.style.display = 'block';
        orderDisplay.innerHTML = `<ol><li>${order[0]}</li><li>${order[1]}</li><li>${order[2]}</li></ol`
    }
    return order;
}

chooserButton.onclick = makeChoice;