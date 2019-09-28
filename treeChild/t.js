function init(){
    const t1 = document.getElementById('t1');
    const t2 = document.getElementById('t2');
    const elementToGet = t1.children[0].children[1];
    let answer  = getEquivalentElement(elementToGet, t1, t2);
    console.log(answer);
}

function getEquivalentElement(elementToGet, t1, t2){
    let elementsToCheck = [];
    let mirrorElements = [];
    elementsToCheck.push(t1);
    mirrorElements.push(t2);
    while(elementsToCheck.length){
        let currentElement = elementsToCheck.shift();
        let mirrorElement = mirrorElements.shift();
        if(currentElement ===  elementToGet){
            return mirrorElement;
        }
        elementsToCheck = elementsToCheck.concat(Array.from(currentElement.children));
        mirrorElements = mirrorElements.concat(Array.from(mirrorElement.children));
    }
}

window.onload = init;