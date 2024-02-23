function criptografarTexto(){
        
    let texto = document.getElementById("texto-digitado").value; /*Variavel texto recebe o conteudo do texto digitado */
    let copiar = document.getElementById("btn-copiar");

    if (texto == ""){
        alert("Digite o texto para ser Criptografado.");
        console.log("Vazio");
    }

    else {
    texto_resultado.innerHTML = texto.replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat"); /* texto_resultado recebe o conteudo do texto digitado, já criptografado. */
    
    copiar.style.display = 'block';
    }
}


function descriptografarTexto(){
    let textoDescriptografado = document.getElementById("texto_resultado").value;
    

    if (textoDescriptografado == "Nenhuma mensagem encontrada! Digite o texto a ser criptografado.."){
        alert("O texto precisa ser Criptografado antes.");
        
    }

    
    texto_resultado.innerHTML = textoDescriptografado.replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u"); /* texto_resultado recebe o conteudo do texto digitado, já descriptografado. */ 
}


function copiarTexto(){
   let text = texto_resultado.value;
   navigator.clipboard.writeText(text);
   alert("Copiado para a área de transferência.");
   
}



  
    
    
                
    
    
    
    
    
 