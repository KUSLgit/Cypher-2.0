
var inputs = document.querySelectorAll('input');
var element = document.querySelector('h1');

async function copyToClipboard(selector) {
    var element = document.querySelector(selector);
    await navigator.clipboard.writeText(element.value);
}

function encrypt() {
    var inp1 = document.querySelector('#inp1');
    var letters = inp1.value.split('');
    console.log(letters);
}
// encrypt();
function decrypt() {
    var inp2 = document.querySelector('#inp2');
} 