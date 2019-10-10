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

        clearInterval(timeout);
        timeout = setTimeout( ()=>{
            callback.apply(this, args);
        }, time);
    }
}

function test() {
    console.log("Testo");
}

function ts(abc) {
    console.log("Debounc man2 " + abc);
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
    document.getElementById("dw2").addEventListener("click", debouncer2(ts, 3000));
    // testContext();
    // testMergesort();
    testBinarysearch();
}

function testMergesort(){
    let testInput = [3,1,5,2,7,8,8];
    let sorted = mergeSort(testInput);
    console.log("Sorted");
    console.log(sorted);
}

function binarySearch(input, value){
    let left =0;
    let right = input.length -1;
    let middle = Math.floor((right + left) / 2);
    // console.log(middle);
    while(left  <= right){
        if(input[middle] === value){
            return middle;
        }
        if(input[middle] < value ){
            left = middle + 1;
        }else{
            right = middle -1;
        }
        middle = Math.floor((right + left) / 2);
    }
    console.log(left, right);
    return -1;
}

function testBinarysearch(){
    let testInput = [1,2,3,5,6,7];
    let indexOfValue = binarySearch(testInput, 7);
    console.log(indexOfValue);
}

function mergeSort(input){
    let mid = Math.floor(input.length/2);
    let fH = input.slice(0, mid);
    let sH = input.slice(mid);
    // console.log("fH " , fH);
    if(fH.length > 1 || sH.length > 1){
        fH = mergeSort(fH);
        sH = mergeSort(sH);
    }
    // console.log("First Half ", fH);
    // console.log("Second half ", sH);
    let merge = [];
    let fI = 0;
    let sI = 0;

    console.log("fH " , fH);
    console.log("sH " , sH);
    while(fI < fH.length && sI < sH.length){
        if(fH[fI] < sH[sI]){
            merge.push(fH[fI]);
            fI++;
        }else{
            merge.push(sH[sI]);
            sI++;
        }
    }
    console.log("MErged ", merge)
    if(fI < fH.length){
        merge.concat(fH.slice(fI));
    }


    if(sI < sH.length){
        console.log("SIlec ", sH.slice(sI));
        merge = merge.concat(sH.slice(sI));
    }
    console.log("MErged 2", merge);
    // console.log("Merged " , merge);
    return merge;
}

function debouncer2(func, time){
    let timeout;
    return function(){
         args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(()=>{
            func.apply(this, args)
        }, time);
    }
}

function throttler2(func, time){
    let wait;
    return function(){
        let context = this;
        let args = arguments;
        if(!wait){
            wait = true;
            setTimeout( ()=>{
                wait = false;
            }, time);
            func.apply(context, args);
        }
    }
}

function testContext(){
    let person = new Person();
    person.getName("ss", "sdx"); 
    let tContext = { name: 'Vcdas'};
    person.getName.apply(tContext, ["Vdo", "ncxsd"]);
    person.getName2();
    person.getName2.apply(tContext);
}

function Person(){
    this.name = "Leo";
    this.getName = function(lastName, ls){
        console.log("My name is "+ this.name + " and last name " + lastName + " ls " + ls);
    }
}

Person.prototype.getName2 = function(){
    console.log("Hi my name is " + this.name);
}

window.onload = init;
