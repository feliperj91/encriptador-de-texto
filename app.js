

function criptografarTexto(){
        
    let texto = document.getElementById("texto-digitado").value; /*Variavel texto recebe o conteudo do texto digitado */
    let resultado = document.getElementById("texto_resultado");
    let copiar = document.getElementById("btn-copiar");
    let imagem = document.getElementById("img");
    let focoTexto = document.getElementById("texto-digitado").focus();
    let limpar = document.getElementById("btn-limpar");

    
    if (texto == ""){
        alert("Murphy está aguardando, digite a mensagem antes de enviar!");
        focoTexto.focus();
    }

    else {
    texto_resultado.innerHTML = texto.replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat"); /* texto_resultado recebe o conteudo do texto digitado, já criptografado. */
    
    copiar.style.display = 'block';
    resultado.style.display = 'block';
    imagem.style.display = 'none';
    limpar.style.display = "block";
    }
}


function descriptografarTexto(){
    let textoDescriptografado = document.getElementById("texto_resultado").value;
    let texto = document.getElementById("texto-digitado").value; /*Variavel texto recebe o conteudo do texto digitado */

    if (textoDescriptografado == ""){
        alert("Os dados da expedição ainda não foram criptografados!");
        focoTexto.focus();
       
    }

   
    
    texto_resultado.innerHTML = textoDescriptografado.replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u"); /* texto_resultado recebe o conteudo do texto digitado, já descriptografado. */ 
}


function copiarTexto(){
   let texto = texto_resultado.value;
   navigator.clipboard.writeText(texto);  
   alert("Copiado para a área de transferência.");   
   
}

function limparConteudo(){   
    location.reload();

    
}

  
    
    
                
    
    
    
    
    
 