let salBruto = Number(prompt("Digite o seu salário bruto"));
let valorParcela = Number(prompt("Solicite o valor da parcela"));
if (valorParcela <= 0.30){
    console.log(`${valorParcela*salBruto}. Crédito APROVADO`);
    alert(`${valorParcela*salBruto}. Crédito APROVADO`);
}
else{
    console.log(`${valorParcela*salBruto}. Crédito RECUSADO`);
    alert(`${valorParcela*salBruto}. Crédito RECUSADO`);
}