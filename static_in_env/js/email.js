const email = document.getElementById("email");
const submit = document.getElementById("submit");

submit.addEventListener("submit", (e) => {
  e.preventDefault();
  let ebody = `<h1>Email: ${email.value}</h1>`;

  Email.send({
    SecureToken: "be5b56b8-4478-41ec-875b-066d7125d063", //add your token here
    To: "mithunbasavaraju057@gmail.com",
    From: "thedivinestar.com",
    Subject: "New Person Joined THE DIVINE STAR",
    Body: ebody,
  }).then((res) => {
    alert("Welcome To THE DIVINE STAR ");
    email.value = "";
  });
});
