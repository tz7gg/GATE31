window.addEventListener('load', () => {

    const elements = []
    const searchBtn = document.querySelector('.filter__search__btn')
    const searchInput = document.querySelector('.filter__search__input')
    const queryLink = 'https://jsonplaceholder.typicode.com/posts/?_start=0&_limit=7'

    searchInput.value = window.location.search.replace('?search=', '').replace('%20', ' ')

    API(queryLink)

    searchInput.addEventListener('keydown', function(e) {
        if (e.keyCode === 13) {
            setLinkAndRerender()
        }
    })

    searchBtn.onclick = () => {
        setLinkAndRerender()
    }

    function API(link) {
        fetch(link)
            .then((res) => res.json())
            .then(
                (result) => {
                    result.forEach(el => {
                        elements.push(el)
                    })
                    renderItems(searchInput.value, result)
                },
                (error) => {
                    console.log(error);
                }
            );
        return false
    }

    function renderItems(searchText, elements) {
        const wrap = document.querySelector('.filter__items')
        wrap.innerHTML = ''
        elements.forEach(element => {
            if (element.title.includes(searchText)) {
                wrap.appendChild(createFilterItem(element.title, element.body, element.id))
            }

        });
        return false
    }

    function setLinkAndRerender() {
        renderItems(searchInput.value, elements)
        if (searchInput.value) {
            window.history.pushState(null, null, `?search=${searchInput.value}`);
        } else {
            window.history.pushState(null, null, '/');
        }
        return false
    }
})