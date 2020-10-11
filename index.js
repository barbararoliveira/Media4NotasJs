alert("Digite as suas notas: ");
let n1 = prompt("Nota 1:");
let n2 = prompt("Nota 2:");
let n3 = prompt("Nota 3:");
let n4 = prompt("Nota 4:");

let media = (Number (n1) + Number (n2) + Number (n3) + Number (n4)) / 4;

if(n1 > 10 || n2 > 10 || n3 > 10 || n4 > 10)
alert("Digite somente notas entre 0 e 10.");
else if(n1 < 0 || n2 < 0 || n3 < 0 || n4 < 0)
alert("Digite somente notas entre 0 e 10.");
else if(media > 7)
alert(`Você ficou com média ${media} Resultado: APROVADO`);
else if(media > 5 && media < 7)
alert(`Você ficou com média ${media} Resultado: RECUPERAÇÃO`);
else if(media < 5)
alert(`Você ficou com média ${media} Resultado: REPROVADO`);

