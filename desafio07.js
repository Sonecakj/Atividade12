let nota = Number(prompt("Digite a nota do aluno(0 a 10)"));
if(nota >= 7.0){
    console.log(`Nota ${nota}. Aluno APROVADO`);
    alert(`Nota ${nota}. Aluno APROVADO`);
}
else if(nota >= 5.0 && nota <= 6.9){
    console.log(`Nota ${nota}. Aluno em RECUPERAÇÃO`);
    alert(`Nota ${nota}. Aluno em RECUPERAÇÃO`);
}
else{
    console.log(`Nota ${nota}. Aluno REPROVADO`);
    alert(`Nota ${nota}. Aluno REPROVADO`);
}