fetch("http://localhost:8080/student/1")
.then((response) => {return response.json()})
.then((data) => console.log(data))
.catch(err => console.log(err))