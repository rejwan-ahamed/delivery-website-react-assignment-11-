import React from "react";
import { createContext } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  signInWithPopup,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";
import { useState } from "react";
import { useEffect } from "react";

export const AuthContext = createContext();

const MainContext = ({ children }) => {
  const auth = getAuth(app);

  //   set user
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
  // user signIN
  const userSignIN = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // user register
  const userRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //    updateUserProfile
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  // google sign in
  const googleSignIN = (provider) => {
    setLoader(true);
    return signInWithPopup(auth, provider);
  };
  // github sign in
  const githubSignIN = (provider) => {
    setLoader(true);
    return signInWithPopup(auth, provider);
  };
  //   user logout
  const userLogout = () => {
    setLoader(true);
    return signOut(auth);
  };

  //   set user after logIN or logOut
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUserInfo) => {
      setUser(currentUserInfo);
      setLoader(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const userInfo = {
    userSignIN,
    userRegister,
    userLogout,
    updateUserProfile,
    user,
    loader,
    googleSignIN,
    githubSignIN,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default MainContext;
