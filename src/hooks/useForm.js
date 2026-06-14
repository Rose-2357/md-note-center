import { useState } from "react";
import { getFormValidity } from "../utils/validation";

export default function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  const [errors, setErrors] = useState({});

  const [isFormValid, setIsFormValid] = useState(false);

  // function resetErrors() {
  //   Object.keys(values).forEach((field) => {
  //     setErrors((prevErrors) => ({ ...prevErrors, [field]: "" }));
  //   });
  // }

  function resetErrors() {
    setErrors({});
  }

  function updateFormValidity(form) {
    const validity = getFormValidity(form);
    setIsFormValid(validity.valid);
    if (!validity.valid) {
      const { errorMessage, field } = validity;
      setErrors((prev) => ({ ...prev, [field]: errorMessage }));
    } else {
      resetErrors();
    }
  }

  function resetField(fieldName) {
    setValues({ ...values, [fieldName]: "" });
  }

  // function resetForm() {
  //   setValues(initialValues);
  //   resetErrors();
  //   setIsFormValid(false);
  // }

  function resetForm() {
    setValues(initialValues);
    setErrors({});
    setIsFormValid(false);
  }

  function displayValidform() {
    setIsFormValid(true);
    resetErrors();
  }

  return [
    values,
    (e) => {
      if (!e?.target?.name) return;
      setValues({ ...values, [e.target.name]: e.target.value });
    },
    resetField,
    resetForm,
    errors,
    updateFormValidity,
    isFormValid,
    displayValidform,
  ];
}
