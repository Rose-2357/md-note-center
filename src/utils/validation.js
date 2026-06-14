export function getFormValidity(form) {
  const inputs = form.querySelectorAll("input");
  for (let input of inputs) {
    if (!input.checkValidity()) {
      const errorMessage = input.validationMessage;
      return { valid: false, errorMessage, field: input.name };
    }
  }
  return { valid: true, errorMessage: null, field: null };
}
