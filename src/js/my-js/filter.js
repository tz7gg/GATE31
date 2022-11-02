window.addEventListener('load', () => {

    let elements
    let searchBtn = document.querySelector('.filter__search__btn')
    let searchInput = document.querySelector('.filter__search__input')

    searchInput.value = window.location.search.replace('?search=', '').replace('%20', ' ')

    fetch('https://jsonplaceholder.typicode.com/posts/?_start=0&_limit=7')
        .then((res) => res.json())
        .then(
            (result) => {
                elements = result
                renderEls(searchInput.value, result)
            },
            (error) => {
                console.log(error);
            }
        );

    function renderEls(searchText, elements) {
        let content = ''
        const wrap = document.querySelector('.filter__items')

        elements.forEach(element => {
            if (element.title.includes(searchText)) {
                content += `
					<div class="filter__items__item">
						<input type="checkbox" class="filter__items__item__checkbox">
						<div class="filter__items__item__wrap">
							<div class="filter__items__item__wrap__title" title="${element.title}">
							${element.title}
							</div>
							<div class="filter__items__item__wrap__text">
							${element.body}
						</div>
                    </div>
                </div>
			`
            }

        });
        wrap.innerHTML = content
        return false
    }
    searchBtn.onclick = () => {
        renderEls(searchInput.value, elements)
        if (searchInput.value) {
            window.history.pushState(null, null, `?search=${searchInput.value}`);
        } else {
            window.history.pushState(null, null, '/');
        }

    }
})