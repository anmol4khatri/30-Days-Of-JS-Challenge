const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise rejected after 2 seconds");
    }, 2000);
});

myPromise.catch((message) => {
    console.log(message);
});