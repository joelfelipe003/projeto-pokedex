const BotaoAlterarTema = document.getElementById("botao-alterar-tema");

    const body = document.querySelector("body");


    const ImagemBotaoTrocadeTema = document.querySelector(".imagem-botao")


     BotaoAlterarTema.addEventListener("click", () => {
       
        const ModoEscuroEstaAtivo = body.classList.contains("modo-escuro");


        console.log(ModoEscuroEstaAtivo);

        if(ModoEscuroEstaAtivo){
            body.classList.remove("modo-escuro")
            ImagemBotaoTrocadeTema.setAttribute("src", "src/imagens/moon.png");
        }
        else {
            body.classList.add("modo-escuro")

            ImagemBotaoTrocadeTema.setAttribute("src", "src/imagens/sun.png")
        }
        
        




            
            });

     