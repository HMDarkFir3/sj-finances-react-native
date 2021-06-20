//React
import React, { useState, createContext } from "react";

//Firebase
import firebase from "../services/firebaseConnection";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  async function signUp(name, email, password) {
    setLoading(true);

    if (name === "") {
      alert("Campo nome em branco.");
      setLoading(false);
      return;
    }

    if (email === "") {
      alert("Campo email em branco.");
      setLoading(false);
      return;
    }

    if (password === "") {
      alert("Campo senha em branco.");
      setLoading(false);
      return;
    }

    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (value) => {
        let uid = value.user.uid;

        await firebase
          .database()
          .ref("users")
          .child(uid)
          .set({
            name: name,
            email: email,
            amount: 0,
          })
          .then(() => {
            let data = {
              uid: uid,
              name: name,
              email: value.user.email,
            };

            setUser(data);
          });
      });

    setLoading(false);
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, loading, signUp }}>
      {children}
    </AuthContext.Provider>
  );
}
