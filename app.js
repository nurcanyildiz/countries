//make sure if something goes wrong the app does not break;
//loop trough  foreach of them make html
//when we call the function it will return to the response
//function inside another function is callback function.
// if parameter is function it is callback function if it is not it is only parametir
// continent should be parameter

const BASE_URL = "https://restcountries.com/v2/all"

const btn = document.querySelector("button")
const input = document.querySelector("input")

function getCountriesData() {
  return fetch(BASE_URL)
  .then(turnDataIntoJson)
  .then(renderDataToDom)
  .catch(handleError)
}

function filterCountryData() {
  getCountriesData()
}

btn.addEventListener("click", filterCountryData)

function turnDataIntoJson(response) {
  return response.json()
}

function renderCountry(country) {
  if (country.name === "Afghanistan") return
  const div = document.createElement("div")
  div.classList.add("country")

  const h2 = document.createElement("h2")
  h2.innerHTML = country.name
  div.append(h2);

  const capital = document.createElement('p');
  capital.innerHTML = country.capital;
  div.append(capital)

  const img = document.createElement("img")
  img.src = country.flag
  div.append(img)
  document.body.append(div)



}

function renderDataToDom(data) {
  let collection = document.querySelectorAll(".country")

  for (let a = 0; a < collection.length; a++) {
    console.log(collection[a])
    collection[a].remove()
  }

  for (let i = 0; i < data.length; i++) {
    const country = data[i]
    if (country.region === input.value) {
      renderCountry(country)
    }
  }
}

function handleError(err) {
  console.log(err)
  alert("Something went wrong")
}

// getCountriesData()
// getCountriesData()