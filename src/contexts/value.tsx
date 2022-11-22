import React from "react";
import { UserInfo } from "../services/Interface";

interface ValueContext {
  user: UserInfo;
  enterAccount: (email: string, password: string) => boolean;
  registerAccount: (name: string, email: string, password: string) => boolean;
}

interface ValueProviderProps {
  children: React.ReactNode;
}

export const ValueContext = React.createContext({} as ValueContext);

export const ValueProvider: React.FC<ValueProviderProps> = ({ children }) => {
  const [users, setUsers] = React.useState<UserInfo[]>([]);
  const [user, setUser] = React.useState<UserInfo>({
    name: "",
    email: "",
    password: "",
  });

  console.log(users);

  const enterAccount = (email: string, password: string) => {
    const userAux = users.filter(
      (user) => user.email === email && user.password === password
    );
    if (userAux[0]) {
      setUser(userAux[0]);
      return true;
    } else {
      return false;
    }
  };

  const registerAccount  = (name: string, email: string, password: string) => {
    console.log(name, email, password);
    const isSameEmailValid = users.some(user => user.email === email);
    const usersArray = [...users];
    if (isSameEmailValid) {
      return false;
    }
    usersArray.push({name, email, password});
    setUsers(usersArray);
    return true;
  };

  return (
    <ValueContext.Provider
      value={{
        user,
        registerAccount,
        enterAccount,
      }}
    >
      {children}
    </ValueContext.Provider>
  );
};
