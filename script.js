const button = document.querySelector('#load-users')
const divList = document.querySelector('.user-list')

async function displayUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const user = await response.json()
    return user
}

button.addEventListener('click', async () => {
    divList.innerHTML = ""
    try {
        const users = await displayUsers()
        users.forEach(user => {
            const list = document.createElement('p')
            list.textContent = `${user.name} - ${user.email}`
            divList.appendChild(list)

        });


    } catch (error) {

    }
})