const galerie = document.querySelector(".gallery")

let works = [];

function fetchWorks(){
fetch("http://localhost:5678/api/works")
.then((response) => response.json())
.then((data) => {
  works = data;
  displayWorks();
})
.cath((err)=> {
  console.error("Error fetching works:", err); 
  });
}


function displayWorks(filteredWorks = null){
  galerie.innerHTML = "";

  const worksToDisplay = filteredWorks || works;

      for (let i=0; i< worksToDisplay.length ; i++) {
          let travauxUrl= worksToDisplay[i].imageUrl;
          let travauxImg = document.createElement("img");
          travauxImg.setAttribute('src',travauxUrl);
          travauxImg.classList.add("showcase");

          let travauxDiv = document.createElement("div");
          travauxDiv.appendChild(travauxImg);
          galerie.appendChild(travauxDiv);
        }
  }



fetchWorks();

function filterWorks(categoryId){
  const filteredWorks = works.filter((item) => 
  item.categoryId === categoryId);
    displayWorks(filteredWorks);
}


