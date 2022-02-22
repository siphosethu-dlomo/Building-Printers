// Form Validation

export default function formValidation() {
  const inputs = document.querySelectorAll('input');

  // regex patterns
  const patterns = {
    name: /^[a-z\d]{5,12}$/i,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/i,
  };
  
  function validate(field, regex) {
    if(regex.test(field.value)) {
      field.classList.add('is-valid');
      field.classList.remove('is-invalid');
    } else {
      field.classList.add('is-invalid');
      field.classList.remove('is-valid');
    }
  };
  
  inputs.forEach(input => {
    input.addEventListener('keyup', e => {
      validate(e.target, patterns[e.target.attributes.name.value]);
    });
  });
};

