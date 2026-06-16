let num1 = Number(prompt("Digite o primeiro valor"));
let num2 = Number(prompt("Digite o segundo valor"));
if(num1 > num2){
    console.log(`O valor mais alto é o ${num1}. O primeiro valor`);
    alert(`O valor mais alto é o ${num1}. O primeiro valor`);
}
else if(num2 > num1){
    console.log(`O valor mais alto é o ${num2}. O segundo valor`);
    alert(`O valor mais alto é o ${num2}. O segundo valor`);
}
else if(num1 == num2){
    console.log(`Ambos os valores são iguais`);
    alert(`Ambos os valores são iguais`);
}