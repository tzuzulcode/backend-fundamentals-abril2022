const addBtns = document.querySelectorAll(".addBtn")

addBtns.forEach(btn=>{
    btn.onclick = (event)=>{
        event.target.nextElementSibling.classList.toggle("hidden")
    }
})