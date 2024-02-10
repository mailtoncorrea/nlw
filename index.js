const perguntas = [
    {
      pergunta: "Qual é a linguagem de programação usada para desenvolver aplicativos web?",
      respostas: [
        "Java",
        "JavaScript",
        "Python",
      ],
      correta: 1
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Document Object Model",
        "Data Object Model",
        "Dynamic Object Model",
      ],
      correta: 0
    },
    {
      pergunta: "Como você declara uma variável em JavaScript?",
      respostas: [
        "v = 10",
        "var x = 5",
        "variavel := 8",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do operador '===' em comparações em JavaScript?",
      respostas: [
        "Comparação de valor e tipo",
        "Comparação de valor apenas",
        "Comparação de tipo apenas",
      ],
      correta: 0
    },
    {
      pergunta: "O que é o JSON em JavaScript?",
      respostas: [
        "Java Script Object Notation",
        "JavaScript Oriented Notation",
        "Java Serialized Object Notation",
      ],
      correta: 0
    },
    {
      pergunta: "Como você faz um loop 'for' em JavaScript?",
      respostas: [
        "for (i = 0; i < 5; i++)",
        "loop (i = 0; i < 5; i++)",
        "while (i < 5)",
      ],
      correta: 0
    },
    {
      pergunta: "O que é o evento 'click' em JavaScript?",
      respostas: [
        "Um evento de teclado",
        "Um evento de mouse",
        "Um evento de carregamento da página",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a finalidade do método 'querySelector' em JavaScript?",
      respostas: [
        "Selecionar um elemento pelo ID",
        "Selecionar um elemento pela classe",
        "Selecionar um elemento pelo nome",
      ],
      correta: 0
    },
    {
      pergunta: "O que é o conceito de 'hoisting' em JavaScript?",
      respostas: [
        "Elevar elementos na página",
        "Elevar declarações de variáveis",
        "Elevar eventos assíncronos",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do método 'parseInt' em JavaScript?",
      respostas: [
        "Converter uma string para um número inteiro",
        "Converter um número inteiro para uma string",
        "Arredondar um número decimal",
      ],
      correta: 0
    },
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
  