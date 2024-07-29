/*Seleção de elementos */

/*Seleciota todos os botões */
const buttons = document.querySelectorAll("#image-picker li")
const image = document.querySelector(".product-image")


/*Criando evento para cada um dos botões dentro de um forEach (espécie de loop) */

buttons.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{// o "e" serve para obter especificamente o botão que será clicado
        
        /*Remove todos os botões da classe select
        para depois adicionarmos a classe apenas no botão selecionado no momento */
        buttons.forEach((btn)=>{
            btn.querySelector(".color").classList.remove("selected")
        })

        /*Pega o botão selecionado e salva na váriavel button */
        const button = e.target

        /*Pega o ID do botão para sabermos qual imagem apresentar */
        const id = button.getAttribute("id")
        
        /*Adiciona a classe selected ao botão selecionado para ter o contorno azul */
        button.querySelector(".color").classList.add("selected")

        /*Deixa a imagem atual quase transparente no momento de transição para a próxima imagem */
        image.classList.add("changing")

        /*Muda a imagem alterando seu atributo src*/
        image.setAttribute("src", `img/${id}.jpg`)

        /*Utilizamos o setTimeOut para voltar a opacidade da imagem como uma transição.
        Ele garante que isso seja feito em um determinado tempo ao invés de uma mudança
        imediata*/

        setTimeout(()=>{
            /*O toggle adiciona ou remove a classe, dependendo de sua presença no momento da chamada.
            Diferente de remove que apenas remove */
            image.classList.toggle("changing")
        }, 200)
        
    })
})