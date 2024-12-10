import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [username, setUsername] = useState(null);

  const value = {
    userId,
    setUserId,
    username,
    setUsername,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
