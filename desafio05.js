let usuario = prompt("Digite o nome de usuário");
let senha = prompt("Digite a senha de login");
if(usuario === "admin" && senha === "123"){
    console.log(`LOGIN liberado`);
    alert(`LOGIN liberado`);
}
else{
    console.log(`LOGIN negado`)
    alert(`LOGIN negado`)
}