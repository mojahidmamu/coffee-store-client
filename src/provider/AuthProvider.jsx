import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { createContext } from "react";
import { RouterProvider } from "react-router-dom";
import { auth } from "../firebase/firebase.init";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const userInfo = {
    user, 
    loading,
    createUser,
  }

  return (
    <AuthContext.Provider>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </AuthContext.Provider>
  );
};

export default AuthProvider;
