function createFilterItem(titleText, bodyText, id) {
    const item = document.createElement("div")
    const checkbox = document.createElement("input")
    const wrap = document.createElement("div")
    const title = document.createElement("div")
    const text = document.createElement("div")

    item.classList.add('filter__items__item')
    checkbox.classList.add('filter__items__item__checkbox')
    wrap.classList.add('filter__items__item__wrap')
    title.classList.add('filter__items__item__wrap__title')
    text.classList.add('filter__items__item__wrap__text')

    item.dataset.id = id

    checkbox.type = 'checkbox'

    title.title = titleText
    title.innerHTML = titleText

    text.innerHTML = bodyText

    item.appendChild(checkbox)
    item.appendChild(wrap)
    wrap.appendChild(title)
    wrap.appendChild(text)

    checkbox.onclick = () => {
        if (checkbox.checked) {
            localStorage.setItem(id + title.innerText, true);
        } else {
            localStorage.setItem(id + title.innerText, false);
        }
    }
    if (localStorage.getItem(id + title.innerText) === 'true') {
        checkbox.checked = true
    }

    return item
}