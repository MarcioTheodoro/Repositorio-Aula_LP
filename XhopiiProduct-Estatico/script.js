function selecionarImgProduto(imgMiniaturaEscolhida){
    document.getElementById("imgPrincipal").src = imgMiniaturaEscolhida.src;
}

function mudarPreco(botaoEscolhido){
    if(botaoEscolhido.id == "btnModeloPreto"){
        document.getElementById("precoProduto").innerHTML = "R$56,90"; //innerHTML troca o conteúdo da tag
        document.getElementById("qtdDisponivel").innerHTML = "171 peças disponíveis";
        document.getElementById("imgPrincipal").src = "img/produto1.png";
    }
    else if(botaoEscolhido.id == "btnModeloAzul"){
        document.getElementById("precoProduto").innerHTML = "R$56,90";
        document.getElementById("qtdDisponivel").innerHTML = "152 peças disponíveis";
        document.getElementById("imgPrincipal").src = "img/produto2.png";
    }
    else if(botaoEscolhido.id == "btnModeloVerde"){
        document.getElementById("precoProduto").innerHTML = "R$49,90";
        document.getElementById("qtdDisponivel").innerHTML = "213 peças disponíveis";
        document.getElementById("imgPrincipal").src = "img/produto3.png";
    }
    else if(botaoEscolhido.id == "btnModeloCinza"){
        document.getElementById("precoProduto").innerHTML = "R$69,90";
        document.getElementById("qtdDisponivel").innerHTML = "";
        document.getElementById("imgPrincipal").src = "img/produto4.png";
    }
    else if(botaoEscolhido.id == "btnModeloRosa"){
        document.getElementById("precoProduto").innerHTML = "";
        document.getElementById("qtdDisponivel").innerHTML = "";
        document.getElementById("imgPrincipal").src = "img/produto5.png";
    }
}

function mudarTamanho(tamanhoEscolhido){
    if(tamanhoEscolhido.id == "btnTamanhoP"){
        document.getElementById("tamanhoSelecionado").innerHTML = "Tamanho Selecionado: P";
    }
    else if(tamanhoEscolhido.id == "btnTamanhoM"){
        document.getElementById("tamanhoSelecionado").innerHTML = "Tamanho Selecionado: M";
    } 
    else if(tamanhoEscolhido.id == "btnTamanhoG"){
        document.getElementById("tamanhoSelecionado").innerHTML = "Tamanho Selecionado: G";
    }
    else if(tamanhoEscolhido.id == "btnTamanhoGG"){
        document.getElementById("tamanhoSelecionado").innerHTML = "Tamanho Selecionado: GG";
    }
}