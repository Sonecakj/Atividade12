let estudante = prompt("Você é um estudante? (sim ou não)");
let idade = Number(prompt("Digite sua idade"));
if(estudante === "Sim" || idade >= 60){
    console.log(`Possui direito a meia entrada`);
    alert(`Possui direito a meia entrada`);
}
else{
    console.log(`NÃO possui direito a meia entrada`);
    alert(`NÃO possui direito a meia entrada`);
}