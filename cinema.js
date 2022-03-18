let cinema = "cineHouse"
console.log(cinema)

let catalogo = [{
    codigo: 1,
    titulo: "Homem-Aranha: Sem Volta para Casa",
    atores: ["Tom Holland", "Tobey Maguire", "Andre Garfield"],
    duracao: 2.28,
    anoDeLancamento: 2021,
    emCartaz: false,
},{
    codigo: 2,
    titulo: "The Batman",
    atores: ["Robert Pattinson", "Zoe Kravitz", "Colin Farrell"],
    duracao: 2.56,
    anoDeLancamento: 2022,
    emCartaz: true,
}]

let novoFilme = {
    codigo: 3,
    titulo: "Uncharted: Fora do Mapa",
    atores: ["Tom Holland", "Mark Wahlberg", "Sophia Taylor Ali"],
    duracao: 1.56,
    anoDeLancamento: 2022,
    emCartaz: true,
}

function adicionarFilme(filme){
    catalogo.push(filme)
}
adicionarFilme(novoFilme)

//console.log(catalogo)

function buscarFilme(codigo){
    for(let i = 0; i < catalogo.length; i++){
        if(catalogo[i].codigo === codigo){
            return catalogo[i]
        }
    }
}


function alterarStatusEmCartaz(codigo){
    for(let i = 0 ; i < catalogo.length ; i++){
        if(catalogo[i].codigo === codigo){
            catalogo[i].emCartaz = !catalogo[i].emCartaz
        }
    }
}
//alterarStatusEmCartaz(1)


function alterarStatusEmCartaz2(codigo, ){
    const statusFilme = buscarFilme(codigo)
        statusFilme.emCartaz = !statusFilme.emCartaz
}
//alterarStatusEmCartaz2(1, buscarFilme)
//console.log(catalogo)

