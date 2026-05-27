const botaoGostei = document.getElementById("curtir")
const corpoPagina = document.body
const titulo = document.getElementById("titulo")

let gostei = false
botaoGostei.addEventListener("click",() => {
        if (gostei === false){
            gostei = true 
            console.log (gostei)
            botaoGostei.innerText = "vc curtiu!"
            botaoGostei.style.color = "#eeff00"
            titulo.innerText = "Você gostou! 😊"
            

        }
        else {
            gostei = false
            console.log(gostei)
            botaoGostei.innerText = "descurtiu"
            botaoGostei.style.color ="#ffffff"
            titulo.innerText = "Aperte no like se gostou"
            
        }
})
