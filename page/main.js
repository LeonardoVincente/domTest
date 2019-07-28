
function init(){
    setTimeout( ()=>{
        // document.getElementById('mainCont').appendChild(popup());
        // document.getElementById('dropdown').classList.add("show_dropdown");;
    }, 3000);    
}

function popup(){
    let popup = document.createElement('div');
    popup.setAttribute('class', 'popUp');
    let createMessage = document.createElement('div');
    createMessage.setAttribute('class', 'message_container');
    createMessage.textContent = "This is a test";
    popup.appendChild(createMessage);
    return popup;
}

window.onload = init;