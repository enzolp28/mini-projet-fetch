const button = document.querySelector('#load-users')
const divList = document.querySelector('.user-list')
const searchInput = document.querySelector('#search-input')

async function displayUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const user = await response.json()
    return user
}

let allUsers = []

button.addEventListener('click', async () => {

    divList.innerHTML = ""

    try {
        allUsers = await displayUsers()
        allUsers.forEach(user => {
            const list = document.createElement('p')
            list.textContent = `${user.name} - ${user.email}`
            divList.appendChild(list)
        });

    } catch (error) {

    }
})



searchInput.addEventListener('input', () => {

    const searchValue = searchInput.value.toLowerCase()
    const resultSearch = allUsers.filter(user => user.name.toLowerCase().includes(searchValue))
    if (resultSearch.length === 0) {
        divList.innerHTML = "Il n'existe aucun user "
    } else {
        divList.innerHTML = ""
        const count = document.createElement("span")
        divList.appendChild(count)
        const resultSearchTrier = resultSearch.sort((a, b) => {
            return a.name.localeCompare(b.name)
        })
        count.textContent = `${resultSearchTrier.length} users`

        resultSearchTrier.forEach(result => {
            const list = document.createElement('p')
            const regex = new RegExp(searchValue, 'gi')
            const nomSurligner = result.name.replace(regex, match => `<mark>${match}</mark>`)
            list.innerHTML = `${nomSurligner} -- ${result.email}`
            // list.classList.add("surbrillance")
            // list.textContent = `${result.name} - ${result.email}`

            divList.appendChild(list)
        })
    }

})