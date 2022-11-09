const collapsible = document.querySelectorAll('.collapsible');

collapsible.forEach(item=>{
    item.addEventListener('click',(e)=>{
        if (!e.target.classList.contains('footer__list-item')) {
            item.classList.toggle('open')
        }
    });
});
