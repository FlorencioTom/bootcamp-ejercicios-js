document.querySelectorAll('input[type="text"]')[0].addEventListener('focus', (event) => {
    console.log(event.target.value);
});