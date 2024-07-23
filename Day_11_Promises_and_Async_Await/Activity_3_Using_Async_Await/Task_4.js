async function waitForPromise() {
    const result = await new Promise((resolve) => {
        // Replace the following line with your own promise
        setTimeout(() => resolve("Resolved value"), 2000);
    });
    console.log(result);
}

waitForPromise();