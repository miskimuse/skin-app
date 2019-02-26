const baseURL = 'https://skincare-api.herokuapp.com';

const searchForm = document.querySelector('form');
const spaceShips = document.querySelector('ul');

searchForm.addEventListener('submit', fetchSkin);

function fetchSkin(e) {
    e.preventDefault();
    //console.log(e);
   
    fetch(baseURL).then(result => {
        return result.json()
    })
    .then( json => {
        displayProducts(json)
    })
}

function displayProduucts(json) {
  
    json.forEach(product => {
     
      let r = document.createElement('li',)
      r.innerText = product.name;
      spaceShips.appendChild(r)
    });
}

const baseURL = 'https://skincare-api.herokuapp.com';

const searchForm = document.querySelector('form');
const searchSkin = document.querySelector('ul');

searchForm.addEventListener('submit', fetchSkin);

// Explain APIs
//Application Programming Interface

function fetchSkin(e) {
  e.preventDefault();
  // console.log(e);

  // Explain Fetch and Async Programming

  fetch(baseURL)

    // Explain promises
    .then(result => {
      // console.log(result);
      return result.json();
    })
    .then(json => {
      // console.log(json);

      // Explain callbacks
      displaySkin(json)
    })
}

function displaySkin(json) {
  // console.log('Results:', json);
  let product = json.forEach(r => {
    let product = document.createElement('li');
    product.innerText = r.name;
    spaceSkin.appendChild(product);
  })
}


    Object.keys(obj).forEach(i => {
        if (i === key) {
            // console.log(i, true);
            if(obj[i] === prop) {
                // console.log(obj[i]);
                console.log(true);
            }
        }
        

    }); 


checkForProperty(exampleObj, key1, prop);