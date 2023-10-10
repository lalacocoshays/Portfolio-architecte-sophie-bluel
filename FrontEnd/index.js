const galerie = document.querySelector(".gallery")

let works = [];

function fetchWorks(){
fetch("http://localhost:5678/api/works")
.then((response) => response.json())
.then((data) => {
  works = data;
  displayWorks();
})
.catch((err)=> {
  console.error("Error fetching works:", err); 
  });
}


function displayWorks(filteredWorks = null){
  galerie.innerHTML = "";

  const worksToDisplay = filteredWorks || works;

for (let i=0; i < worksToDisplay.length ; i++) {
    const work = worksToDisplay[i];
    const travauxUrl = work.iamgeUrl;
    const title =work.title;

    const travauxImg = document.createElement("img");
    travauxImg.setAttribute('src',travauxUrl);
    travauxImg.classList.add("showcase");

    const travauxDiv = document.createElement("div");
    travauxDiv.appendChild(travauxImg);

    const titlePara = document.createElement('p');
    titlePara.textContent = title;
    titlePara.classList.add('work-title');

          travauxDiv.appendChild(titlePara);

          galerie.appendChild(travauxDiv);
        }
  }



fetchWorks();

function filterWorks(categoryId){
  const filteredWorks = works.filter((item) => 
  item.categoryId === categoryId);
    displayWorks(filteredWorks);
}


