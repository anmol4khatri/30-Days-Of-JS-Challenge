const promises = [
    new Promise((resolve) => setTimeout(() => resolve('Promise 1 resolved'), 2000)),
    new Promise((resolve) => setTimeout(() => resolve('Promise 2 resolved'), 1000)),
    new Promise((resolve) => setTimeout(() => resolve('Promise 3 resolved'), 3000))
];

Promise.race(promises)
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.error(error);
    });