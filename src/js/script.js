

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


console.log("\n--- 2. VINHOS COM ESTOQUE BAIXO (MENOR QUE 5) (filter) ---");

const estoqueBaixo = vinicola.filter(vinho => vinho.estoque < 5);
console.log(estoqueBaixo);


console.log("\n--- 3. ESTOQUE TOTAL DA VINÍCOLA (reduce) ---");
const estoqueTotal = vinicola.reduce((acumulador, vinho) => acumulador + vinho.estoque, 0);
console.log(`Quantidade total de garrafas no estoque: ${estoqueTotal}`);


console.log("\n--- 4. NOMES DOS VINHOS EM CAIXA ALTA (map) ---");
const nomesMaiusculos = vinicola.map(vinho => vinho.nome.toUpperCase());
console.log(nomesMaiusculos);