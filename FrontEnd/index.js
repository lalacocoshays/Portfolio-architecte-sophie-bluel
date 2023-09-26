const galerie = document.querySelector(".gallery")

fetch("http://localhost:5678/api/works")
.then(result => result.json())
.then(result => console.log(result))


function recupTravaux(){
  let works = document.createElement("travaux");
  fetch("http://localhost:5678/images/") .then(
  (response)=>
   response.json()
  )
  .then ((data) => {
      let travauxUrl=data[1].url;
      let travauxl = document.createElement("img")
      travauxl.setAttribute('src',`${travauxUrl}`)
      travauxl.classList.add("showcase")
      let travaux = document.createElement("travaux")
      travaux.appendChild(travauxl);
  })
  .catch (err=>console.log(err))
}


//const loadImage = async (photo_reference) => {
//  try {
//    const res = await fetch(
//      `http://localhost:5678/images/abajour-tahina1651286843956.png`
//    )
//    const data = await res.blob();
//    setImage(URL.createObjectURL(data));
//  } catch (error) {
//    console.error(error)
//  }
//};

//let travaux = document.createElement("travaux");
//travaux.className ="works";
//travaux.src="http://localhost:5678/images/abajour-tahina1651286843956.png";
//document.body.append(travaux);

//fetch("http://localhost:5678/images/abajour-tahina1651286843956.png")
//.then(response => response.blob())
//.then(image =>{
 // let element = document.createElement////("travaux");
 // element.setAttribute("src",URL.createObjectURL(image));
//});