async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/9");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

fetchData();