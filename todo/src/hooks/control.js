// input
// html input + state + event value={state}
// 상태와 화면의 요소를 동기화 시킨다 => 양방향 바인딩

import { useState } from "react";

export const useInput = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const reset = () => {
    setValue("");
  };

  return [value, onChange, reset];
};

export const useSelect = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const reset = () => {
    setValue(defaultValue);
  };

  return [value, onChange, reset];
};
