const QUERY_LINK = 'https://jsonplaceholder.typicode.com/posts/?_start=0&_limit=7'

function getData() {
    return fetch(QUERY_LINK)
        .then((res) => res.json())
        .then(
            (result) => {
                return result
            },
            (error) => {
                return []
            }
        );
}