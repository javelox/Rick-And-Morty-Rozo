url = "https://rickandmortyapi.com/api/character";
const main = document.getElementById("main");
const valuesearch = document.getElementById("search").value;
url2 = `https://rickandmortyapi.com/api/character/?name=${valuesearch}`
console.log(valuesearch);

const getData = (url) =>{
  fetch(url)
  .then(response => response.json())
  .then(data => {
    const { results } = data;
    results.map(item => {
      card(item);
    });
  })
  .catch((err) => console.error(err));
}


search.addEventListener("keyup", (e) => {
  if (e.target.matches("#search")) {
    if (e.key === "Escape") e.target.value = "";

    document.querySelectorAll(".card").forEach((seccion) => {
      seccion.textContent.toLowerCase().includes(e.target.value.toLowerCase())
        ? seccion.classList.remove("filter")
        : seccion.classList.add("filter");
    });
  }
});



function card(data) {
  const card = document.createElement("div");
  const row = document.createElement("div");
  const col_image = document.createElement("div");
  const col_body = document.createElement("div");
  const card_body = document.createElement("div");
  const title = document.createElement("h2");
  const species = document.createElement("p");
  const gender = document.createElement("p");
  const img = document.createElement("img");

  title.textContent = data.name;
  species.textContent = data.species;
  gender.textContent = data.gender;
  img.setAttribute("src", data.image);
  img.setAttribute("alt", data.name);

  card.classList.add("card");
  card.classList.add("mb-3");
  row.classList.add("row");
  row.classList.add("g-0");
  col_image.classList.add("col-md-3");
  col_body.classList.add("col-md-8");
  card_body.classList.add("card-body");
  title.classList.add("card-title");
  species.classList.add("card-text");
  gender.classList.add("card-text");
  img.classList.add("img-fluid");
  img.classList.add("rounded-start");

  card.appendChild(row);
  row.appendChild(col_image);
  row.appendChild(col_body);
  col_body.appendChild(card_body);
  card_body.appendChild(title);
  card_body.appendChild(species);
  card_body.appendChild(gender);
  col_image.appendChild(img);

  main.appendChild(card);
}

getData(url2);
