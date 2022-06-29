import { useState, useCallback } from "react";

export default function useStateWithValidation<T1 extends (value: T2) => boolean, T2>(
  validationFunc: T1,
  initialValue: T2,
) {
  const [state, setState] = useState(initialValue);
  const [isValid, setIsValid] = useState(() => validationFunc(state));

  const onChange = useCallback(
    (nextState: T2) => {
      const value = typeof nextState === "function" ? nextState(state) : nextState;
      setState(value);
      setIsValid(validationFunc(value));
    },
    [validationFunc, state],
  );

  return [state, onChange, isValid];
}
