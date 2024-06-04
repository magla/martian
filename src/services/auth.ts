type User = {};

export const isBrowser = (): boolean => typeof window !== 'undefined';

export const getUser = (): User | undefined =>
  isBrowser() && window.localStorage.getItem('user')
    ? JSON.parse(window.localStorage.getItem('user')!)
    : undefined;

const setUser = (user: User): void => window.localStorage.setItem('user', JSON.stringify(user));

export const handleLogin = (email: string): void => {
  console.log(email);
  return setUser(email);
};

export const isLoggedIn = (): boolean => {
  const user = getUser();

  return !!user;
};

export const logout = (callback: () => void): void => {
  window.localStorage.removeItem('user');
  callback();
};
