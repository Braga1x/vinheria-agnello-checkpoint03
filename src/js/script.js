

const vinicola = [
    { nome: "casillero", tipo: "tinto", safra: 2021, estoque: 15 },
    { nome: "Terra Noble", tipo: "branco", safra: 2022, estoque: 3 },
    { nome: "Rosé do Sol", tipo: "rosé", safra: 2023, estoque: 8 },

];


function adicionarVinho(nome, tipo, safra, estoque) {
    vinicola.push({ nome, tipo, safra, estoque });
}


adicionarVinho("Cabernet Sauvignon", "tinto", 2019, 12);




console.log

vinicola.forEach(vinho => {
    console.log(`Nome: ${vinho.nome} | Tipo: ${vinho.tipo} | Safra: ${vinho.safra} | Estoque: ${vinho.estoque}`);
});




const estoqueBaixo = vinicola.filter(vinho => vinho.estoque < 5);
console.log(estoqueBaixo);



const estoqueTotal = vinicola.reduce((acumulador, vinho) => acumulador + vinho.estoque, 0);
console.log(`Quantidade total de vinhos no estoque: ${estoqueTotal}`);



const nomesMaiusculos = vinicola.map(vinho => vinho.nome.toUpperCase());
console.log(nomesMaiusculos);