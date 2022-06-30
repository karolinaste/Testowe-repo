function loadUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve("user data"); }, 2000)
    });
}

function loadBooks() {
    return new Promise((resolve, reject) => {
        setTimeout(() => { reject("błąd danych"); }, 1000)
    });
}

function loadPets() {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve("pets data"); }, 500)
    });
}

Promise.all([
    loadUser(),
    loadBooks(),
    loadPets()
])

.then(res => {
    console.log(res);
})
.catch(err => {
    console.log(err);
})