const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');
// const raiz = document.getElementById('raiz');
// const inteiro = document.getElementById('inteiro');
// const nan = document.getElementById('nan');
// const baixo = document.getElementById('baixo');
// const cima = document.getElementById('cima');
// const decimais = document.getElementById('decimais');

numeroTitulo.innerHTML = numero;
// raiz.innerHTML = `${Math.sqrt(numero)}`;
// inteiro.innerHTML = `${Number.isInteger(numero)}`;
// nan.innerHTML = `${Number.isNaN(numero)}`;
// baixo.innerHTML = `${Math.floor(numero)}`;
// cima.innerHTML = `${Math.ceil(numero)}`;
// decimais.innerHTML = `${(numero.toFixed(2))}`;

texto.innerHTML = '';
texto.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5}</p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${(numero.toFixed(2))}</p>`;