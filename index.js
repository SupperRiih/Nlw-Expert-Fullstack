const perguntas = [
    {
      pergunta: "O que significa a sigla CPU?",
      respostas: [
        "Central Processing Unit",
        "Computer Processing Unit",
        "Central Peripheral Unit"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função da memória RAM em um computador?",
      respostas: [
        "Armazenar dados permanentemente",
        "Armazenar temporariamente dados em execução",
        "Gerenciar a entrada e saída de dados"
      ],
      correta: 1
    },
    {
      pergunta: "O que é um sistema operacional?",
      respostas: [
        "Um programa de edição de texto",
        "Um conjunto de hardware",
        "Um software que gerencia recursos e fornece serviços ao usuário"
      ],
      correta: 2
    },
    {
      pergunta: "O que é um firewall?",
      respostas: [
        "Um dispositivo de armazenamento externo",
        "Um software de proteção contra ameaças online",
        "Um tipo de processador"
      ],
      correta: 1
    },
    {
      pergunta: "O que é um protocolo de rede?",
      respostas: [
        "Uma linguagem de programação",
        "Um conjunto de regras para comunicação entre dispositivos",
        "Um tipo de armazenamento de dados"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do software antivírus?",
      respostas: [
        "Acelerar o desempenho do computador",
        "Detectar e remover software malicioso",
        "Gerenciar a impressão de documentos"
      ],
      correta: 1
    },
    {
      pergunta: "O que é um arquivo com a extensão '.pdf'?",
      respostas: [
        "Um arquivo de imagem",
        "Um documento de texto",
        "Um documento no formato Portable Document Format"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do navegador de internet?",
      respostas: [
        "Reproduzir vídeos",
        "Navegar por páginas da web",
        "Armazenar arquivos no disco rígido"
      ],
      correta: 1
    },
    {
      pergunta: "O que é um backup de dados?",
      respostas: [
        "Uma cópia de segurança dos dados para prevenir perda de informações",
        "Uma função de limpeza do sistema operacional",
        "Um dispositivo de entrada de dados"
      ],
      correta: 0
    },
    {
      pergunta: "O que é a nuvem (cloud computing) na informática?",
      respostas: [
        "Um tipo de vírus de computador",
        "Um modelo de armazenamento em disco rígido",
        "Um serviço que permite acessar e armazenar dados online"
      ],
      correta: 2
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
    
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-'  + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
      
      corretas.delete(item)
      if(estaCorreta) {
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
      
     

      quizItem.querySelector('dl').appendChild(dt)
    }
    
    quizItem.querySelector('dl dt').remove()
    
    //coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }  