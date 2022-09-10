/*document.addEventListener("keydown", keyPressed);

function keyPressed(e) {
  console.log(e);
  var currentChar = e.key;
  document.getElementById("displayText").innerHTML = currentChar;
}*/

var comandos = []; //armazena os os comandos todos
var total = 0; //dimensao de comandos
var current = 0; //indice de comandos apos ultimo clear

function createPrompt() {
  var tag1 = document.createElement("span");
  var text = document.createTextNode("guest@joao's_terminal:~$ ");
  tag1.appendChild(text);
  var tag2 = document.createElement("input");
  var newElement = document.getElementById("new");
  newElement.appendChild(tag1);
  newElement = document.getElementById("new");
  newElement.appendChild(tag2);
  tag2.focus();
}

function displayCommands(x) {
  for (let i = x; i < total; i++) {
    var tag = document.createElement("span");
    var breakLine = document.createElement("br");
    var text = document.createTextNode(
      "guest@joao's_terminal:~$ " + comandos[i]
    );
    tag.appendChild(text);
    var newElement = document.getElementById("new");
    newElement.appendChild(tag);
    newElement.appendChild(breakLine);
  }
}

function processaComando(ultimoComando, listaComandos) {
  switch (ultimoComando) {
    case "clear":
      document.getElementById("introducao").innerHTML = "";
      current = total;
      break;

    case "send e-mail":
      window.open("mailto:jpmnandes@gmail.com");
      displayCommands(current);
      break;

    case "social":
      displayCommands(current);
      var tag1 = document.createElement("p");
      var tag2 = document.createElement("a");
      var link = document.createTextNode("linkedin/jpmfernandes");
      tag2.appendChild(link);
      tag2.href = "https://uk.linkedin.com/in/jo%C3%A3o-fernandes-6125b7113";
      tag2.target = "_blank";
      var newElement = document.getElementById("new");
      tag1.appendChild(tag2);
      newElement.appendChild(tag1);
      var tag3 = document.createElement("p");
      var tag4 = document.createElement("a");
      var link2 = document.createTextNode("github/joapmfernandes");
      tag4.appendChild(link2);
      tag4.href = "https://www.github.com/joaopmfernandes/";
      tag4.target = "_blank";
      tag3.appendChild(tag4);
      newElement.appendChild(tag3);
      break;

    case "cv":
      displayCommands(current);
      var tag1 = document.createElement("p");
      var tag2 = document.createElement("a");
      var link = document.createTextNode("cv/joaopmfernandes");
      tag2.appendChild(link);
      tag2.href = "/assets/cv_jf_agosto22.pdf";
      tag2.target = "_blank";
      var newElement = document.getElementById("new");
      tag1.appendChild(tag2);
      newElement.appendChild(tag1);
      break;

    case "whois":
      displayCommands(current);
      var tag1 = document.createElement("p");
      var texto = document.createTextNode(
        "Olá! Sou o João, tenho 33 anos e estou a frequentar o Curso Técnico de Cibersegurança, Redes e Sistemas Informáticos na Escola Superior de Tecnologia e Gestão do Instituto Piaget. Após terminar o 12º Ano, em 2006, ainda não tinha descoberto a minha apetência e aptidão pelas Tecnologias de Informação, pelo que comecei a trabalhar no que gostava na altura.Passei pela livraria Note! (Book.it, naqueles tempos longíquos 😅) pois sempre adorei livros, principalmente histórias de ficção científica e fantasia. Na Fnac Chiado tive o prazer de trabalhar no Departamento de Serviço Pós-Venda e Logística, onde pude aplicar a minha capacidade de organização. Em 2016, tive a fantástica experiência de emigrar para Edimburgo, Escócia, onde comecei a trabalhar na cozinha da Pret a Manger e rapidamente passei a supervisionar a equipa de produção. No entanto, sempre senti que poderia fazer algo mais desafiante e, após realizar alguns cursos na plataforma Udemy, percebi que a área de Informática me proporcionaria os desafios que procuro. Assim, ambiciono adquirir competências para me tornar um profissional capaz, não só de desenvolver aplicações de software, mas também de as tornar seguras, bem como a organização que me empregue, face às crescentes ameaças ciberbéticas."
      );
      tag1.appendChild(texto);
      var newElement = document.getElementById("new");
      newElement.appendChild(tag1);
      break;

    default:
      displayCommands(current);
      var tag1 = document.createElement("p");
      var texto = document.createTextNode(
        "Comando Inválido. Escolha uma opção da lista:"
      );
      tag1.appendChild(texto);
      tag1.id = "error";
      var newElement = document.getElementById("new");
      newElement.appendChild(tag1);
      var clone = listaComandos.cloneNode(true);
      var newElement2 = document.getElementById("new");
      newElement2.appendChild(clone);
  }
}

const listaComandos = document.getElementById("lista");
document.addEventListener("keydown", keyTest);

function keyTest(event) {
  if (event.key == "Enter") {
    total++;
    var ultimoComando = document.querySelector("input").value;
    comandos.push(ultimoComando);
    document.getElementById("new").innerHTML = "";

    processaComando(ultimoComando, listaComandos);

    createPrompt();
  }
}
