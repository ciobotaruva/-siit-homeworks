document.querySelector("form").addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  const requiredField = document.querySelectorAll(".required-js");
  const x = document.querySelector(".input-name").value;
  const y = document.querySelector(".person-name");
  const z = document.querySelector(".contact-message");

  for (i = 0; i < requiredField.length; i++) {
    const field = requiredField[i];
    if (field.value === "") {
      field.style.border = "2px solid red";
      console.warn("Please complete the field: ", field.name);
      field.addEventListener(
        "change",
        () => {
          removeError(field);
        },
        { once: true }
      );
      e.preventDefault();
    }
  }

  if (x !== "") {
    z.classList.remove("hide-msg");
    y.innerHTML = x;
    e.preventDefault();
  }
}

function removeError(elem) {
  elem.style.border = "1px solid black";
}
