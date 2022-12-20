const breedInput = document.querySelector("input");
const button = document.querySelector("button");
const imageDiv = document.querySelector("div");

let breed = breedInput.value;

const url = `https://dog.ceo/api/breed/${breed}/image/random`;

fetch(url) //promise is coming from here. from this method
  .then((res) => res.json()) //promise fulfilled
  .then((data) => {  
    console.log(data);
    let dogPic = data.message;
    imageDiv.innerHTML = `<img src=${dogPic} >`;
  })
   .catch((error) => {
    console.log(error);
  });
