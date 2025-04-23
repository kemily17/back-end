let livros = require("./livros.json")
function mostralivros(){
    livros.forEach((livro) => {
        console.log(livro.titulo + " - " + 
            livro.autor + "\nAno: " + 
            livro.ano + "\nPáginas: " +
            livro.paginas + "\nPreço: R$ " +
            livro.preco +
            "\n"
        )
    })
}


function adicionaLivro(titulo, autor, editora, ano, sinopse, paginas, genero, preco){
    livros.push({
        titulo: titulo,
        autor: autor,
        editora: editora,
        ano: ano,
        sinopse: sinopse,
        paginas:paginas,
        genero: genero,
        preco: preco,


    });
    console.log("livro adicionado com sucesso!");
}    

adicionaLivro("Demon Slayer - Kimetsu No Yaiba Vol. 6 ", "Koyoha ru Gotouge", "abril",  2016,
 "Demon Slayer: Kimetsu no Yaiba é um mangá japonês sobre um jovem que se torna um caçador de demônios para salvar sua irmã. A obra foi escrita e ilustrada por Koyoharu Gotōge ", 192, 
 "fantasia e ação", 47);

// JSON = javaScript object notation
// GERA UM ARQUIVO JSON DOS LIVROS 
function criarArquivo(){
    let livrotexto = JSON.stringify(livros);
    const fs = require('fs');
    fs.writeFileSync("livros.json",livrotexto);
}
//criarArquivo()
mostralivros();
    

