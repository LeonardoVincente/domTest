function throttle(callback, limit) {
    var wait = false;
    return function () {
        var context = this;
        var args = arguments;
        if (!wait) {
            callback.apply(context, args);
            wait = true;
            setTimeout( () => { wait = false; }, limit);
        }
    }
}


function debouncer(callback, time) {
    var timeout;
    return function () {
        var context = this;
        var args = arguments;
        var later = function () {
            callback.apply(context, args);
        }
        clearInterval(timeout);
        timeout = setTimeout(later, time);
    }
}

function test() {
    console.log("Test");
}

function ts() {
    console.log("Debounc man");
}

function getCommonParent(el1, el2) {
    var answerParent = null;
    var tmpParent = [];
    var oneP = el1.parentElement;
    var twoP = el2.parentElement;
    while (oneP.tagName != "BODY") {
        if (oneP === twoP) {
            return twoP;
        }
        tmpParent.push(oneP);
        oneP = oneP.parentElement;
    }
    while (twoP.tagName != "BODY") {
        let index = tmpParent.indexOf(twoP);
        console.log(index);
        if (index >= 0) {
            return twoP;
        }
        twoP = twoP.parentElement;

    }
    // tmpParent.indexOf()
    // answerParent = twoP;
    return answerParent;
}

function parentTest() {
    var ele1 = document.getElementById("t1");
    var ele2 = document.getElementById("t2");
    var commonParent = getCommonParent(ele1, ele2);
    return commonParent;
}

function init() {
    console.log("Init");
    document.getElementById("asd").addEventListener("click", throttle(test, 3000));
    document.getElementById("dw2").addEventListener("click", debouncer(ts, 3000));
    console.log(parentTest());
}

window.onload = init;
