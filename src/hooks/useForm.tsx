import { ChangeEvent, FormEvent, useCallback, useEffect, useState } from 'react';

export interface FormState {
  valid: boolean;
  submitted: boolean;
}

interface Field {
  type: string;
  defaultValue?: string;
  validators?: ValidatorType[];
}

interface Input extends Field {
  value: string;
  errors: string[];
}

export enum ValidatorType {
  email = 'email',
  minLength = 'minLength',
  required = 'required',
}

export const valid = (validator: ValidatorType, value: any) => {
  if (!value) {
    return false;
  }

  switch (validator) {
    case ValidatorType.email:
      return value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    case ValidatorType.minLength:
      return value.length >= 6;
    case ValidatorType.required:
      return value.length > 0;
    default:
      return true;
  }
};

export const validateField = (
  name: string,
  validators?: ValidatorType[],
  value?: any,
): string[] => {
  let errors: string[] = [];

  validators?.forEach((validator) => {
    if (!valid(validator, value)) {
      errors.push(getFieldError(validator, name));
    }
  });

  return errors;
};

export const getFieldError = (validator: ValidatorType, name: string): string => {
  switch (validator) {
    case ValidatorType.email:
      return 'Please input a valid email address';
    case ValidatorType.minLength:
      return `${name} should be 6 characters or more`;
    case ValidatorType.required:
      return `${name} is required`;
    default:
      return 'Field input invalid';
  }
};

const useForm = (props: { [name: string]: Field }) => {
  const [inputState, setInputState] = useState<{ [name: string]: Input }>({});
  const [valid, setValid] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  // Initial setup
  useEffect(() => {
    const state = Object.keys(props).reduce((previous, index) => {
      const errors = validateField(index, props[index].validators, props[index].defaultValue);

      return {
        ...previous,
        [index]: {
          ...props[index],
          value: props[index].defaultValue,
          errors,
        },
      };
    }, {});

    setInputState(state);
  }, [props]);

  const handleInput = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const name = e.target.name;
      const value = e.target.value;

      const fieldErrors = validateField(name, inputState[name].validators, value);

      if (fieldErrors.length) {
        setValid(false);
      }

      setInputState({ ...inputState, [name]: { ...inputState[name], value, errors: fieldErrors } });
    },
    [inputState, validateField],
  );

  const handleSubmitForm = useCallback(
    (e: FormEvent, successFn?: Function) => {
      e.preventDefault();

      const errorNumber = Object.keys(inputState).reduce((previous, name) => {
        return previous + inputState[name].errors.length;
      }, 0);

      const isValid = errorNumber === 0;

      setSubmitted(true);
      setValid(isValid);

      if (isValid && typeof successFn === 'function') {
        successFn();
      }

      return false;
    },
    [inputState],
  );

  return {
    handleInput,
    handleSubmitForm,
    valid,
    submitted,
    inputState,
  };
};

export default useForm;
