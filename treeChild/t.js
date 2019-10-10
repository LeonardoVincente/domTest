function init(){
//     const t1 = document.getElementById('t1');
//     const t2 = document.getElementById('t2');
//     const elementToGet = t1.children[0].children[1];
    // let answer  = getEquivalentElement(elementToGet, t1, t2);
    // console.log(answer);
    // let answer = flattenArray([1 , [22,33, [123,[545]]], [3]]);
    let answer =  flattenArray([1, 2, [[4, 5, [233 , [344]]], [5, 5]]]);
    console.log("Final Answer", answer);
}



function flattenArray(A) {
    let answer = [...A];
    for(let i = 0; i < answer.length; i++){
      let currentValue = answer[i];
      if(Array.isArray(currentValue)){
          answer.splice(i, 1, ...currentValue);
          i--;
      }
    }
    return answer;
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