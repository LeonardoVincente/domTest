function init(){
    console.log("init");
    document.getElementById("asd").addEventListener("click", throttle(callback, 3000));
    document.getElementById("dw2").addEventListener("click", debouncer(callback2, 3000));

}

function debouncer(func, time){
    let timeout;
    return ()=>{
        clearTimeout(timeout);
        timeout = setTimeout(()=>{
            func();
        }, time);
    }
}

function throttle(callback, limit) {
    var wait = false;
    return function () {

        if (!wait) {
            callback.apply(this, arguments);
            wait = true;
            setTimeout( () => { wait = false; }, limit);
        }
    }
}

function callback(p){
    console.log("Thorttler " + p + " acv")
    console.log(asd)
}

function callback2(abc){
    console.log("Debouncer " + abc + " acv")
}

window.onload = init;

