import React, { createContext } from "react";

export const AuthContext = createContext();

const MainContext = ({ children }) => {
  const userInfo = {};
  return (
    <div>
      <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default MainContext;
