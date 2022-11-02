window.addEventListener('load', async() => {

    const elements = await getData()
    const searchBtn = document.querySelector('.filter__search__btn')
    const searchInput = document.querySelector('.filter__search__input')
    const wrap = document.querySelector('.filter__items')

    searchInput.value = window.location.search.replace('?search=', '').replace('%20', ' ')

    renderItems(searchInput.value, elements)

    searchInput.addEventListener('keydown', function(e) {
        if (e.keyCode === 13) {
            setLinkAndRerender(searchInput.value, elements)
        }
    })

    searchBtn.onclick = () => {
        setLinkAndRerender(searchInput.value, elements)
    }

    function renderItems(searchText, elements) {
        wrap.innerHTML = ''
        const filteredElements = elements.filter(el => el.title.includes(searchText))
        filteredElements.forEach(element => {
            wrap.appendChild(createFilterItem(element.title, element.body, element.id))
        });
    }

    function setLinkAndRerender(searchText, elements) {
        renderItems(searchText, elements)
        if (searchText) {
            window.history.pushState(null, null, `?search=${searchText}`);
        } else {
            window.history.pushState(null, null, '/');
        }
    }
})