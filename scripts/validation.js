window.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('.form');
  const telInputs = document.querySelectorAll('input[name="tel"]');
  const nameInputs = document.querySelectorAll('input[name="name"]');
  const checkboxInputs = document.querySelectorAll('input[name="politics"');

  const submitForm = (e) => {
    e.preventDefault();

    const nameInput = e.target.name;
    const telInput = e.target.tel;
    const checkBoxInput = e.target.politics;

    if (!checkBoxInput.checked) {
      checkBoxInput.classList.add('invalid');
    }

    [nameInput, telInput].forEach((input) => {
      if (!input.value) {
        input.classList.add('invalid');
      } else {
        input.classList.remove('invalid');
      }
    });

    if (nameInput.value.length <= 1) {
      nameInput.classList.add('invalid');
    } else {
      nameInput.classList.remove('invalid');
    }

    if (telInput.value.length != 18) {
      telInput.classList.add('invalid');
    } else {
      telInput.classList.remove('invalid');
    }

    if (
      [nameInput, telInput, checkBoxInput].some((input) =>
        input.classList.contains('invalid')
      )
    ) {
      return;
    } else {
      e.target.submit();
    }
  };

  nameInputs.forEach((input) => {
    input.addEventListener('input', (event) => {
      if (event.target.value.length > 15) {
        event.target.value = event.target.value.slice(0, 15);
      }
      const inputValue = event.target.value;
      const regex = /^[a-zA-Zа-яА-Я]+$/;

      if (!regex.test(inputValue)) {
        event.target.value = inputValue.replace(/[^a-zA-Zа-яА-Я]+/g, '');
      }
      if (event.target.value.length < 2 || event.target.value.length > 30) {
        input.classList.add('invalid');
      } else {
        input.classList.remove('invalid');
      }
    });
  });

  telInputs.forEach((tel) => {
    IMask(tel, {
      mask: '+{7} (000) 000-00-00',
    });

    tel.addEventListener('input', (e) => {
      if (!e.target.value || e.target.value.length != 18) {
        tel.classList.add('invalid');
      } else {
        tel.classList.remove('invalid');
      }
    });
  });

  checkboxInputs.forEach((check) => {
    check.addEventListener('input', () => {
      if (check.checked) {
        check.classList.remove('invalid');
      } else {
        check.classList.add('invalid');
      }
    });
  });

  forms.forEach((form) => form.addEventListener('submit', submitForm));
});
