const showHide = (e) => {
    e.currentTarget.children[1].classList.toggle('hide')
    document.getElementById(e.currentTarget.id).children[0].children[1].classList.toggle('hide')
    document.getElementById(e.currentTarget.id).children[0].children[2].classList.toggle('hide')
}


const listItems = document.querySelectorAll('li');
listItems.forEach((item) => {
    item.addEventListener('click', showHide)
})

