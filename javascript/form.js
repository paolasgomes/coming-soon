const buttonClickSubmit = document.querySelector("div.buttonSubmit button");
const form = document.querySelector("#formOfInfoContact");

const buttonCloseModal = document.querySelector(
  "div#modalContent div.modalHeader button.closeModal"
);
const buttonCorrect = document.querySelector(
  "div#modalContent div.buttonConfirmCancel button#cancel"
);
const modal = document.querySelector("div#modalContent");
const fade = document.querySelector("div#modalOverlay");

const toggleModal = () => {
  modal.classList.toggle("hidden");
  fade.classList.toggle("hidden"); //classList procura a lista de classes dele => toggle se o elmnto tem essa classe adiciona, se não tem, remove
};

[buttonCorrect, buttonCloseModal, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal());
}); //forEach => executa uma dada função em cada elemento de um array.

form.addEventListener("submit", function (e) {
  e.preventDefault(); //impede que o formulário seja enviado

  const name = document.querySelector("form#formOfInfoContact label input#name").value;
  const phone = document.querySelector("form#formOfInfoContact label input#phone").value;
  const email = document.querySelector("form#formOfInfoContact label input#email").value;
  const date = document.querySelector("form#formOfInfoContact label input#date").value;

  const formData = { name, phone, email, date }; //data = conjunto de valores

  toggleModal();

  const descriptionInfo = document.querySelector("p.description");

  descriptionInfo.innerHTML = `Nome: ${name} <br>
    Telefone: ${phone} <br>
    E-mail: ${email} <br>
    Data: ${date} 
    `;
});

const confirmLocation = document.querySelector("#confirm");
confirmLocation.addEventListener("click", () => {
  location.href = "https://www.nasa.gov/";
}); //chamando um diretório
