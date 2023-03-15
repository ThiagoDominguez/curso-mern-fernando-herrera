import { useState } from "react";

const useForm = (initialState = {}) => {
  const [formValues, setFormValues] = useState(initialState);

  const handleInpChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };
  return [formValues, handleInpChange];
};

export default useForm;
