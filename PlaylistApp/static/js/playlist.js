const addBtns = document.querySelectorAll(".addBtn")

addBtns.forEach(btn=>{
    btn.onclick = (event)=>{
        event.target.nextElementSibling.classList.toggle("hidden")
    }
})


async function addToPlaylist(idPlaylist,idSong){
    const response = await fetch("/playlists/addSong",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            idPlaylist:idPlaylist,
            idSong:idSong
        })
    })

    // Obteniendo el body de la respuesta
    const data = await response.json()

    console.log(data)
    
}