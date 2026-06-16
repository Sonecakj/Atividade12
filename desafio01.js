let numero = Number(prompt("Digite um número de 0 a 10"));

if(numero > 0) {
    console.log(`número ${numero} é positivo`);
    alert(`número ${numero} é positivo`);
}
else if(numero < 0){
    console.log(`número ${numero} é negativo`);
    alert(`número ${numero} é negativo`);
}
else{
    console.log(`número ${numero} é exatamente zero`)
    alert(`número ${numero} é exatamente zero`)
}
