document.querySelectorAll('input[type="text"]')[0].addEventListener('input', (event) => {
    console.log(event.target.value);
});