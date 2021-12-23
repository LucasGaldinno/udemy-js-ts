function meuEscopo () {
  const form = document.querySelector('.form');
  const resultado = document.querySelector('.resultado');

  const pessoas = [];

  // Exemplo 1
  // Previne que o formulário seja enviado 
  // form.onsubmit = function(evento) {
  //   evento.preventDefault();
  //   alert(1);
  //   console.log('Foi enviado.');
  // };

  // Exemplo 2
  // let contador = 1;
  function recebeEventoForm (evento) {
    evento.preventDefault();
    const nome = form.querySelector('.nome');
    const sobrenome = form.querySelector('.sobrenome');
    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura');

    pessoas.push = ({
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value,
    })

    console.log(pessoas);

    resultado.innerHTML += `<p>${nome.value} ${sobrenome.value}` + `${peso.value} ${altura.value}</p>`
    
    // const result = document.createElement('p');
    // result.innerText = nome.value + ' ' + sobrenome.value + ' ' + peso.value + ' ' + altura.value;
    // resultado.appendChild(result);

    // console.log(`Form não foi enviado ${contador}`);
    // contador++;
  }

  form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();