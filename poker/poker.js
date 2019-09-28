let types = ['S','D','C','H'];
let numbers = ['1','2','3','4','5','6','7','8','9','10','J','Q','K','A'];
let cardsSet = new Set();

function init(){
    let cards = [];
    
    types.forEach( tupe =>{
        numbers.forEach( number =>{
            let cardName = tupe + number;
            // cards.push(cardName);
            cardsSet.add(cardName);
        });
    });
    console.log(cards);

    let selected = getCardsName(cardsSet, 5);
    loadCards(selected);

}

function newCards(){
    
    let selected = getCardsName(cardsSet, 5);
    loadCards(selected);

    
    console.log("new cards " + JSON.stringify(cardsSet));
}


function getCardsName(cards, number){
    const resultCards = [];

    for(let i = 0; i < number; i++){
        let selectedCard = getRandomCard(cards);
        resultCards.push(selectedCard);
    }
    return resultCards;
}

function getRandomCard(cards){
    let randomCard = Math.floor( Math.random() *  cards.size );
    let carsdArray = Array.from(cards.values());
    let selectedCard = carsdArray[randomCard];
    cards.delete(selectedCard);
    return selectedCard;
} 

function loadCards(selectedCards){
    let container =document.getElementById('card-container');
    container.innerHTML = '';
    selectedCards.forEach( cardName=>{
        let card = generateCard(cardName);
        container.appendChild(card);
    });
}

function generateCard( cardName ){
    let element  = document.createElement('div');
    element.className = 'card';
    element.innerText = cardName;
    return element;
}

window.onload = init;