
import { createContext, useEffect, useState } from "react";
import { userObserver } from "../helper/Firebase";

export const AuthContext = createContext();

export function AuthContextProvider ({ children })  {
  const [currentUser, setCurrentUser] = useState(false);

  useEffect(() => {
    userObserver(setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

