// Projeto CRUD Empresarial..

// Eventos

// 1. Passo (Declarar variaveis de input e fazer as funções, apartir delas..)

var buttonForm = document.querySelector(".buttonForm");
var modalClient = document.querySelector(".modalClient");

buttonForm.addEventListener("click", () => {
  var nameClient = document.querySelector(".nameClientInput").value;
  var relatClient = document.querySelector(".emailClientInput").value;

  if (
    nameClient == "" &&
    relatClient == ""
  ) {
    console.log("Coloque um valor..");
  } else {
    // 1. Passo (Criar elementos com cada um dos inputs)

    var client_object = {
      nome: nameClient,
      relat: relatClient,
    };

    const arr = JSON.parse(localStorage.getItem("db_client")) ?? []; // Isso quer dizer que, se ele for nulo, ou qualquer outro erro ele irá retornar uma string vazia, para poder dar iniciativa para outros metodos.. (Funciona basicamente como um IF e ELSE..)
    console.log(arr);
    arr.push(client_object);

    localStorage.setItem("db_client", JSON.stringify(arr));

    arr.forEach((item) => {
      var tdName = document.createElement("td");
      var tdRelat = document.createElement("td");

      var tdSal = document.createElement("td");

      var trTable = document.createElement("tr");

      tdName.textContent = item.nome;
      tdRelat.textContent = item.relat;

      trTable.append(tdName);
      trTable.append(tdRelat);

      // 2. Passo (Criar um prototipo para mostrar na tela os dados inseridos)

      var tableUse = document.querySelector(".tableUse");

      tableUse.appendChild(trTable);

      nameClient = "";
      relatClient = "";

      modalClient.classList.remove("modalOpen");

      document.location.reload();
    });
  }
});

// 2. Passo (Colocar os dados já existentes dentro do HTML)

const arr = JSON.parse(localStorage.getItem("db_client"));
var tableUse = document.querySelector(".tableUse");

tableUse.innerHTML = "";

arr.forEach((item) => {
  var tdName = document.createElement("td");
  var tdRelat = document.createElement("td");

  var trTable = document.createElement("tr");

  tdName.append(item.nome);
  tdRelat.append(item.relat);

  trTable.append(tdName);
  trTable.append(tdRelat);

  // 2. Passo (Criar um prototipo para mostrar na tela os dados inseridos)

  var tableUse = document.querySelector(".tableUse");

  tableUse.appendChild(trTable);

  modalClient.classList.remove("modalOpen");
});

// 3. Passo (Criar evento de click que irá excluir todos os dados existentes dentro do localstorage)

var buttonDelete = document.getElementById("buttonDelete");

buttonDelete.addEventListener("click", () => {
  document.location.reload();
  localStorage.clear();
});
