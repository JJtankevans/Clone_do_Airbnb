const apiURL = 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72';
const cardContainer = document.querySelector('#row');
let data = [];


async function fetchCards() {
    const response = await fetch(apiURL);

    return await response.json();
 }

async function Cards (card){
    cardContainer.innerHTML = "";
    card.map(renderCard);
}



async function renderCard (card) {
    const divCol = document.createElement('div');

    divCol.className = 'col-md-4';
    divCol.style.marginBottom = '15px';
    divCol.style.textAlign = 'center';
    divCol.innerHTML = ` 
        <div class="card" style="width:20rem;"> 
            <img src="${card.photo}" class="card-img-top" alt="${card.name}> 
            <div class="card-body">
                <h6 class="card-title">${card.name}</h6>
                <p class="card-text">${card.property_type}</p>
                <p class="card-text"> Preço: R$ ${card.price},00</p>
            </div>
        </div>
    `;

    
    cardContainer.appendChild(divCol);
}


 async function main() {
     data = await fetchCards();

     if(data[0]){
         Cards(data);
     }
     
 }

 main();