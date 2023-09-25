const galerie = document.querySelector(".gallery")

fetch("http://localhost:5678/api/works")
.then(result => result.json())
.then(result => console.log(result))