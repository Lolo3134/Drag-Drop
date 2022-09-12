const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', drop)
}

function dragstart(evt) {
    evt.target.classList.add('hold')
    setTimeout(() => evt.target.classList.add('hide'), 0)

}

function dragend(evt) {
    evt.target.classList.remove('hold', 'hide')
}

function dragover(event) {
    event.preventDefault()
    console.log('over')
}

function dragenter(event) {
    event.target.classList.add('hovered')
    console.log('enter')
}

function dragleave(event) {
    event.target.classList.remove('hovered')
    console.log('leave')
}

function drop(event) {
    event.target.classList.remove('hovered')
    event.target.append(item)
    console.log('drop')
}