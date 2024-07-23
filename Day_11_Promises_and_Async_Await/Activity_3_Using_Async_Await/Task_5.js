async function handleRejectedPromise() {
    try {
        await someAsyncFunction();
    } catch (error) {
        console.error(error.message);
    }
}

async function someAsyncFunction() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("Something went wrong"));
        }, 2000);
    });
}

handleRejectedPromise();