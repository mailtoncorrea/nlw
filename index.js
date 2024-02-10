const perguntas = [
    {
      pergunta: "Qual é a palavra em inglês para 'carro'?",
      respostas: [
        "Car",
        "House",
        "Vehicle"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a palavra em inglês para 'casa'?",
      respostas: [
        "Home",
        "Mouse",
        "Tree"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a palavra em inglês para 'vermelho'?",
      respostas: [
        "Red",
        "Green",
        "Blue"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a palavra em inglês para 'cachorro'?",
      respostas: [
        "Dog",
        "Cat",
        "Bird"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a palavra em inglês para 'gato'?",
      respostas: [
        "Cat",
        "Dog",
        "Fish"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a palavra em inglês para 'amarelo'?",
      respostas: [
        "Yellow",
        "Purple",
        "Orange"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a palavra em inglês para 'azul'?",
      respostas: [
        "Blue",
        "Yellow",
        "Green"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a palavra em inglês para 'maçã'?",
      respostas: [
        "Apple",
        "Banana",
        "Orange"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a palavra em inglês para 'bicicleta'?",
      respostas: [
        "Bicycle",
        "Car",
        "Train"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a palavra em inglês para 'sol'?",
      respostas: [
        "Sun",
        "Moon",
        "Star"
      ],
      correta: 0
    }
  ];
  
  
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  
  // loop ou laco de repeticao
  for(const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta
  
  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
  
      corretas.delete(item)
  
      if(estaCorreta){
        corretas.add(item)
      }
     mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
  
    quizItem.querySelector('dl').appendChild(dt)
  }
  
  quizItem.querySelector('dl dt').remove()
  
  
  // coloca a pergunta na tela
  quiz.appendChild(quizItem)
  }
  