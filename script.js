// Obtendo referências aos elementos do DOM
const form = document.getElementById("contactForm"); // O formulário de cadastro
const nameInput = document.getElementById("name"); // Campo de nome
const phoneInput = document.getElementById("phone"); // Campo de telefone
const contactsTableBody = document.querySelector("#contactsTable tbody"); // Corpo da tabela

// Adicionando um evento de submissão ao formulário
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Previne o comportamento padrão de recarregar a página

  // Obtendo os valores inseridos pelo usuário
  const name = nameInput.value.trim(); // Remove espaços extras
  const phone = phoneInput.value.trim();

  // Criando uma nova linha para a tabela
  const newRow = document.createElement("tr");

  // Criando a célula para o nome
  const nameCell = document.createElement("td");
  nameCell.textContent = name; // Insere o nome na célula
  newRow.appendChild(nameCell); // Adiciona a célula à linha

  // Criando a célula para o telefone
  const phoneCell = document.createElement("td");
  phoneCell.textContent = phone; // Insere o telefone na célula
  newRow.appendChild(phoneCell); // Adiciona a célula à linha

  // Adicionando a nova linha ao corpo da tabela
  contactsTableBody.appendChild(newRow);

  // Limpando os campos do formulário
  nameInput.value = "";
  phoneInput.value = "";

  // Focando novamente no campo de nome para facilitar o próximo cadastro
  nameInput.focus();
});