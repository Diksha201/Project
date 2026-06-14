export const useCurrentUser = () => {
  const user = localStorage.getItem("vivaahvows-user");
  return user ? JSON.parse(user) : null;
};
