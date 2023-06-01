const URL = 'http://localhost:3500/employees/1250'
fetch(URL).then(response => response.json()).then(data => console.log(data))