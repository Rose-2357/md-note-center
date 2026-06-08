import "./AddItemModal.css";

export default function AddItemModal({ isOpen, onClose, onAdd }) {
  function onAddTag(e) {
    e.preventDefault();
    // Implementation for adding a tag
  }

  function closeOnOverlayClick(e) {
    if (e.target.classList.contains("modal")) {
      onClose(e);
    }
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
          <form>
            <label className="modal__label" htmlFor="title">
              Title
            </label>
            <input
              className="modal__input modal__input_glow_blue"
              type="text"
              id="title"
              placeholder="Note title..."
            />
            <fieldset className="modal__fieldset">
              <legend className="modal__label">Tags</legend>
              <input
                className="modal__input"
                id="tags"
                type="text"
                placeholder="Add a tag..."
              />
              <button className="modal__add-tag-button" onClick={onAddTag}>
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
            <div className="modal__buttons">
              <button
                className="modal__button modal__cancel-button"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                className="modal__button modal__add-button"
                onClick={onAdd}
              >
                Create Note
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
