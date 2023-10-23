var plusbutton = document.querySelector(".plusbutton")
var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")

plusbutton.addEventListener("click", function(){
    popupoverlay.style.display = "block"
    popupbox.style.display = "block"
}
)

//selecting : book-title-input , book-author-input ,book-title-input, add-button , cancel-button

var booktitleinput = document.getElementById("book-title-input")
var bookauthorinput = document.getElementById("book-author-input")
var bookdescription = document.getElementById("book-description")
var addbutton = document.getElementById("add-button")
var cancelbutton = document.getElementById("cancel-button")

var container = document.querySelector(".container")

cancelbutton.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"
}
)

addbutton.addEventListener("click", function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","bookcontainer")
    div.innerHTML = `<h2>${booktitleinput.value}</h2>
    <p>${bookauthorinput.value}</p>
    <p>${bookdescription.value}</p>
    <button onclick = "deletel(event)">Delete</button> `
    container.append(div)
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"
}
)

function deletebook(event)
{
    event.target.parentElement.remove()
}

function deletel(event)
{
    event.target.parentElement.remove()
}