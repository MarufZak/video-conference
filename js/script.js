const collapsibleButton = document.querySelectorAll('.collapsible__icon');

collapsibleButton.forEach(item=>{
    item.addEventListener('click',()=>{
        item.parentElement.classList.toggle('open')
    });
});