import { useEffect, useState, useRef } from "react";
import "./AddItemModal.css";
import useForm from "../../hooks/useForm";

export default function AddItemModal({ isOpen, onClose, onAdd }) {
  const [tags, setTags] = useState([]);
  const skipNextValidation = useRef(false);

  const [
    values,
    setValues,
    resetField,
    resetForm,
    errors,
    updateFormValidity,
    isFormValid,
    displayValidform,
  ] = useForm({
    title: "",
    tags: "",
  });

  console.log(errors);

  function onAddTag(e) {
    e.preventDefault();
    const newTag = e.currentTarget.previousSibling.value.trim();
    if (newTag && !tags.includes(newTag)) {
      setTags((prevTags) => [...prevTags, newTag]);
      resetField("tags");
    }
  }

  function closeOnOverlayClick(e) {
    if (e.target.classList.contains("modal")) {
      onClose(e);
    }
  }

  function onFormBlur(e) {
    console.log("Form blurred", e.target.name);
    if (skipNextValidation.current) {
      skipNextValidation.current = false;
      return;
    }
    updateFormValidity(e.currentTarget);
  }

  function onDisableButtonClick(e) {
    if (isFormValid) return;
    e.preventDefault();
    updateFormValidity(e.currentTarget.closest("form"));
  }

  function onSubmit(e) {
    e.preventDefault();
    if (!isFormValid) return;
    onAdd({ title: values.title, tags });
    resetForm();
    setTags([]);
    skipNextValidation.current = true;
    onClose(e);
  }

  return (
    <div
      onMouseDown={closeOnOverlayClick}
      className={`modal ${isOpen ? "modal_is-open" : ""}`}
    >
      <div className="modal__container">
        <div className="modal__header">
          <h2 className="modal__title">New Note</h2>
          <button className="modal__close-button" onClick={onClose}>
            <svg
              className="modal__close-icon"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              strokeLinecap="round"
            >
              <line x1="1" y1="1" x2="11" y2="11" />
              <line x1="11" y1="1" x2="1" y2="11" />
            </svg>
          </button>
        </div>
        <div className="modal__content">
          <form
            onChange={displayValidform}
            onBlur={onFormBlur}
            onSubmit={onSubmit}
            className="modal__form"
          >
            <label className="modal__label" htmlFor="title">
              Title
            </label>
            <span className="modal__error-message">{`${errors.title ? `<<${errors.title}>>` : ""}`}</span>
            <input
              className="modal__input modal__input_glow_blue"
              type="text"
              id="title"
              name="title"
              placeholder="Note title..."
              value={values.title}
              onChange={setValues}
              required
            />
            <fieldset className="modal__fieldset">
              <legend className="modal__label">Tags</legend>
              <input
                className="modal__input"
                id="tags"
                name="tags"
                type="text"
                placeholder="Add a tag..."
                value={values.tags}
                onChange={setValues}
                maxLength="15"
              />
              <button
                className={`modal__add-tag-button ${!values.tags ? "modal__add-tag-button_disabled" : ""}`}
                onClick={onAddTag}
                disabled={!values.tags}
              >
                <svg
                  className="modal__add-tag-icon"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  strokeLinecap="round"
                >
                  <line x1="6" y1="1" x2="6" y2="11" />
                  <line x1="1" y1="6" x2="11" y2="6" />
                </svg>
              </button>
            </fieldset>
            <ul className="modal__tags-list">
              {tags.map((tag, index) => (
                <li key={index} className="modal__tag-item">
                  <span className="modal__tag">{tag}</span>
                  <svg
                    className="modal__remove-tag-icon"
                    viewBox="0 0 12 12"
                    strokeLinecap="round"
                    stroke="#39ff14"
                    strokeWidth="2"
                    onClick={() => setTags(tags.filter((t) => t !== tag))}
                  >
                    <line x1="1" y1="1" x2="11" y2="11" />
                    <line x1="11" y1="1" x2="1" y2="11" />
                  </svg>
                </li>
              ))}
            </ul>
            <div className="modal__buttons">
              <button
                className="modal__button modal__cancel-button"
                onClick={onClose}
              >
                Cancel
              </button>
              <span
                className="modal__button-wrapper"
                onClick={onDisableButtonClick}
              >
                <button
                  className={`modal__button modal__add-button ${!isFormValid ? "modal__add-button_disabled" : ""}`}
                  aria-disabled={!isFormValid}
                >
                  Create Note
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
