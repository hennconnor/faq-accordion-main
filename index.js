const viewObj = {
    show1: false,
    show2: false,
    show3: false,
    show4: false
}


const handleClick = (e) => {
    const currentSelection = `show${e.currentTarget.id}`
    if (viewObj[currentSelection] === false) {
        e.currentTarget.children[1].className = 'list-answer show'
        document.getElementById(e.currentTarget.id).children[0].children[1].className = 'plus-sign hide'
        document.getElementById(e.currentTarget.id).children[0].children[2].className = 'minus-sign show'
        viewObj[currentSelection] = true
    }
    else {
        e.currentTarget.children[1].className = 'list-answer hide'
        document.getElementById(e.currentTarget.id).children[0].children[1].className = 'plus-sign show'
        document.getElementById(e.currentTarget.id).children[0].children[2].className = 'minus-sign hide'
        viewObj[currentSelection] = false
    }

}


const listItems = document.querySelectorAll('li');
listItems.forEach((item) => {
    item.addEventListener('click', handleClick)
})

