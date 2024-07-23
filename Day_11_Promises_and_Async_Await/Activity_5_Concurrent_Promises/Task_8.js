const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promise 1 resolved');
    }, 2000);
});

const promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promise 2 resolved');
    }, 3000);
});

const promise3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promise 3 resolved');
    }, 1000);
});

Promise.all([promise1, promise2, promise3])
    .then((values) => {
        console.log(values);
    })
    .catch((error) => {
        console.error(error);
    });