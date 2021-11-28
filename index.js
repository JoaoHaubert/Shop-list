//Creating close button for every item

let addList = document.getElementsByTagName("li");
for(let i = 0; i < addList.length; i++){
    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt)
    addList[i].appendChild(span);
}

//Remove the item from the list using the close button

let close = document.getElementsByClassName("close")
for(let i = 0; i < close.length; i++){
    close[i].onclick = function(){
        let div = this.parentElement;
        div.style.display = "none";
    }
}

//Checked when clicking item 

let checkList = document.querySelector('ul');
checkList.addEventListener('click', function(every) {
    if (every.target.tagName === 'LI'){
        every.target.classList.toggle('checked');
    }
}, false);



//New list item on addList

function addToList(){
    let li = document.createElement("li");
    let inputValue = document.getElementById("textItem").value;
    let text = document.createTextNode(inputValue);
    li.appendChild(text);
    if (inputValue === '') {
        window.alert("Write something, please.");
    } else {
        document.getElementById("ulList").appendChild(li);
    }
    document.getElementById("textItem").value = ''

    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    
    for(let i = 0; i < close.length; i++){
        close[i].onclick = function(){
            let div = this.parentElement;
            div.style.display = "none";
        }
    }

}

//Refresh page
window.setTimeout(function(){
    location.reload();

}, 30000);


