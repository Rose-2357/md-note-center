import { use, useState } from "react";
import { useActive } from "../../hooks/useActive";
import "./ToggleSwitch.css";

export default function ToggleSwitch({
  setFunction,
  defaultValue,
  otherValue,
}) {
  const [checked, setChecked] = useState(false);

  const [avtive, makeActive, makeInactive] = useActive("toggle");

  function handleChange() {
    setChecked((checked) => !checked);

    if (checked) {
      setFunction(defaultValue);
    } else {
      setFunction(otherValue);
    }
  }

  return (
    <div
      className={`switch ${avtive.toggle ? "switch_active" : ""}`}
      onMouseDown={() => makeActive("toggle")}
      onMouseUp={() => makeInactive("toggle")}
      onMouseLeave={() => makeInactive("toggle")}
    >
      <label className="switch__label">
        <input
          className="switch__checkbox"
          type="checkbox"
          checked={checked}
          onChange={handleChange}
        />
        <span
          className={`switch__slider ${checked ? "switch__slider_checked" : ""}`}
        ></span>
        <div className="switch__text-container">
          <span
            className={`switch__text switch__text_length_short ${checked ? "" : "switch__text_checked"} `}
          >
            MD
          </span>
          <span
            className={`switch__text switch__text_length_long ${checked ? "switch__text_checked" : ""}`}
          >
            HTML
          </span>
        </div>
      </label>
    </div>
  );
}
