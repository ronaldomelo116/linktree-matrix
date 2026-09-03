// Pega a div onde a chuva será criada
const matrixRain = document.querySelector("#matrix-rain");

// Lista de caracteres que poderão aparecer
const caracteres = "アカサタナハマヤラワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Calcula quantas colunas cabem na tela
const quantidadeColunas = Math.floor(window.innerWidth / 20);

// Função que escolhe um caractere aleatório
function caractereAleatorio() {
  // Escolhe uma posição aleatória dentro da lista
  const indice = Math.floor(Math.random() * caracteres.length);

  // Retorna o caractere escolhido
  return caracteres[indice];
}

// Função responsável por criar uma coluna
function criarColuna() {
  // Cria um elemento <span>
  const coluna = document.createElement("span");

  // Começa com um texto vazio
  let texto = "";

  // Cria 15 caracteres
  for (let i = 0; i < 15; i++) {
    // Adiciona um caractere aleatório
    texto += caractereAleatorio();

    // Quebra a linha
    texto += "\n";
  }

  // Coloca os caracteres dentro do span
  coluna.textContent = texto;

  // Define uma posição horizontal aleatória
  coluna.style.left = Math.random() * 100 + "%";

  // Define uma velocidade aleatória
  coluna.style.animationDuration = Math.random() * 5 + 3 + "s";

  // Define um atraso aleatório
  coluna.style.animationDelay = Math.random() * 5 + "s";

  // Adiciona a coluna ao container
  matrixRain.appendChild(coluna);
}

// Cria todas as colunas necessárias
for (let i = 0; i < quantidadeColunas; i++) {
  // Cria uma coluna
  criarColuna();
}

window.addEventListener("load", () => {
 const loadingScreen = document.getElementById("loading-screen");

 setTimeout(() => {
  loadingScreen.classList.add("esconder-loading");

 }, 2500);
 
});

