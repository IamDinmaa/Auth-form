import {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateEmail,
  updatePassword,
  sendPasswordResetEmail,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Firebase/Config";
export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  useEffect(() => {
    const currUser = auth.onAuthStateChanged((authUser) => {
      setUser(authUser);
    });
    //
    return currUser;
  }, []);
  function register(email, password, firstName) {
    return createUserWithEmailAndPassword(auth, email, password, firstName);
  }

  function login(email, password, firstName) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function logout() {
    return signOut(auth);
  }
  function updateUserEmail(user, email, password) {
    return updateEmail(user, email, password);
  }
  function updateUserPassword(user, password) {
    return updatePassword(user, password);
  }
  function forgotPassword(auth, email) {
    return sendPasswordResetEmail(auth, email);
  }

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        register,
        forgotPassword,
        updatePassword,
        updateUserEmail,
        updateUserEmail,
        updateProfile,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
