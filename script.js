const TextareaElement = document.querySelector("textarea")
const TotalCounterElement = document.getElementById("charecter-count")
const RemaningCounterElement = document.getElementById("Remaining-count")

TextareaElement.addEventListener("keyup" , ()=>{
   
    updateCounter()
})


updateCounter() 

function updateCounter() {
    TotalCounterElement.innerText = TextareaElement.value.length  
    
    RemaningCounterElement.innerText = TextareaElement.getAttribute("maxlength") - TextareaElement.value.length
}