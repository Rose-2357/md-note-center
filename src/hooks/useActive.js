import { useState } from "react";

export function useActive(...ids) {
  const defaultObject = {};
  ids.forEach((id) => (defaultObject[id] = false));
  const [active, setActive] = useState(defaultObject);
  function makeActive(id) {
    setActive({ ...active, [id]: true });
  }

  function makeInactive(id) {
    setActive({ ...active, [id]: false });
  }

  return [active, makeActive, makeInactive];
}
