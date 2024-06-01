import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { getDefaultValue, getFieldError, validateField } from '../utils/validator';

export interface FormState {
  values: { [name: string]: string };
  errors: { [name: string]: string };
  valid: boolean;
}

interface Field {
  [name: string]: {
    type: string;
    defaultValue?: string;
  };
}

const useForm = (fields: Field) => {
  const defaultValues = useCallback(() => {
    const values = Object.keys(fields).reduce((previous, name) => {
      const defaultValue = fields[name].defaultValue || getDefaultValue(fields[name].type);

      return { ...previous, [name]: defaultValue };
    }, {});

    return values;
  }, [fields]);

  const [formState, setFormState] = useState<FormState>({
    values: defaultValues(),
    errors: {},
    valid: true,
  });

  const handleInput = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const name = e.target.name;
      const value = e.target.value;
      const type = e.target.type;

      const isValid = validateField(type, value);

      if (isValid) {
        delete formState.errors[name];
      }

      setFormState({
        ...formState,
        values: { ...formState.values, [name]: value },
        errors: { ...formState.errors, ...(!isValid && { [name]: getFieldError(type) }) },
      });
    },
    [formState, validateField],
  );

  const validateForm = useCallback(() => {
    const errors = Object.keys(fields).reduce((previous, name) => {
      const isValid = validateField(fields[name].type, formState.values[name]);

      return { ...previous, ...(!isValid && { [name]: getFieldError(fields[name].type) }) };
    }, {});

    const isValid = Object.keys(errors).length === 0 && errors.constructor === Object;

    setFormState({
      ...formState,
      valid: isValid,
      errors,
    });
  }, [formState, fields]);

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      validateForm();

      return false;
    },
    [formState],
  );

  return {
    handleInput,
    handleSubmit,
    formState,
  };
};

export default useForm;
