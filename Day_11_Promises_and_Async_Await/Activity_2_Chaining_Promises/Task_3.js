const myPromise = new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            resolve(data);
            console.log(data)
        })
        .catch(error => {
            reject(error);
        });
});
const myPromise2 = new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            resolve(data);
            console.log(data)
        })
        .catch(error => {
            reject(error);
        });
}); 
myPromise.then((message) => {
    console.log(message);
});
myPromise2.then((message) => {
    console.log(message);
});