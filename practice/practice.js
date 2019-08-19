
function init(){
    let subscriber = new Observable();

    subscriber.subscribe(subscription);
    subscriber.subscribe(subscription2);

    subscriber.next('first');
}

let subscription = function(value){
    console.log("Triggered 1 " + value)
}

let subscription2 = function(value){
    console.log("Triggered 2 " + value)
}

class Observable{
    observers = [];

    subscribe = function(observer){
        this.observers.push(observer);
    }

    next = function(value){
        this.observers.forEach(observer => {
            observer(value);
        });
    }
}

window.onload = init;