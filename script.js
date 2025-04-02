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
        const users = await displayUsers()
        allUsers = await displayUsers()
        users.forEach(user => {
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
    console.log(resultSearch);
    divList.innerHTML = ""

    resultSearch.forEach(result => {
        const list = document.createElement('p')
        list.textContent = result.name

        divList.appendChild(list)
    })


})