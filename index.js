// Code your solutions in this file
function writeCards(eventNames, event) {
    const arr = [];
    for(let i = 0; i < eventNames.length; i++) {
        arr.push(`Thank you, ${eventNames[i]}, for the wonderful ${event} gift!`);
    }
    return arr;
}

function countDown(n) {
    for(let i = n; i >= 0; i--) {
        console.log(i);
    }
}