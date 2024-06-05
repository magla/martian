export const validateField = (type: string, value: any): boolean => {
  switch (type) {
    case 'email':
      return value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    case 'password':
      return value.length >= 6;
    default:
      return true;
  }
};

export const getFieldError = (type: string): string => {
  switch (type) {
    case 'email':
      return 'Please input a valid email address';
    case 'password':
      return 'Password should be 6 characters or more';
    default:
      return 'Field input invalid';
  }
};

export const getDefaultValue = (type: string): string => {
  switch (type) {
    case 'email':
      return '';
    case 'password':
      return '';
    default:
      return '';
  }
};
