//document.getElementById(count-el).innerText=6;

let elementCount = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
//document.write(elementCount);
 
var count=0

function increment(){
   count+=1
   elementCount.innerText = count
}

function save(){
    let countSave = count + " - ";
    saveEl.textContent += countSave
    elementCount.innerText = 0
    count = 0
    //saveEl.innerText = saveEl.innerText + countSave
    //saveEl.innerText += countSave
    
}
