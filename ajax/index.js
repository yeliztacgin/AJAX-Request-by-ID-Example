document.getElementById('fetchDataBtn').addEventListener('click', function() {
    const todoId = document.getElementById('todoId').value;
    if (!todoId) {
        alert('Please enter a valid TODO ID');
        return;
    }

    const xhr = new XMLHttpRequest();

    xhr.open("GET", `https://jsonplaceholder.typicode.com/todos/${todoId}`);
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            const response = xhr.responseText;
            document.getElementById('output').textContent = response;
            console.log(response);
        } else {
            document.getElementById('output').textContent = 'Error: ' + xhr.status;
        }
    }
    xhr.send();
});