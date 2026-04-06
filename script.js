const btn = document.getElementById('btn');
const btnCpf = document.getElementById('btnCpf');
const status = document.getElementById('status');
const btnDark = document.getElementById('btnDark');
const body = document.body;

// 1. Validar Nome
btn.onclick = function(){

let nome = prompt("Digite seu Nome Completo:");
if (!nome) return;

let nomesArray = nome.trim().split(/\s+/);
if(nomesArray.length < 2) {
    alert("Erro: Digite nome e sobrenome.");
    return;
}

status.innerHTML = `<span style="color:green"> Cliente ${nomesArray[0]} validado!</span>`;

};

// 2. Validar CPF
btnCpf.onclick = function(){

let cpf = prompt ("Digite o CPF (apenas números): ");
if (!cpf) return;
let cpfLimpo = cpf.replace(/\D/g, '');

if (validarCPF(cpfLimpo)) {
    status.innerHTML = `<span style="color:green"> CPF ${cpfLimpo} validado!</span>`;
} else {
    status.innerHTML = `<span style="color:red"> CPF ${cpf} é inválido.</span>`;
}

};

// Função Algoritmo do CPF

function validarCPF(cpf) {
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;
    let s = 0, r;
    for (let i=1; i<=9; i++) s += parseInt(cpf[i-1]) * (11-i);
    r = (s* 10) % 11;
    if (r=== 10 || r=== 11) r = 0;
    if (r !== parseInt(cpf[9])) return false;
    s = 0;
    for (let i=1; i<=10; i++) s += parseInt(cpf[i-1]) * (12-i);
    r = (s * 10) % 11;
    if ( r === 10 || r === 11) r = 0;
    return r === parseInt(cpf[10]);
}

btnDark.onclick = function(){
    body.classList.toggle('dark');    
}