//React
import React, { useState, useEffect, createContext } from "react";
import { Alert } from "react-native";

//react-firebase-translation-errors
import { translationFirebaseErrors } from "react-translation-firebase-errors";

//Async Storage
import AsyncStorage from "@react-native-async-storage/async-storage";

//Firebase
import firebase from "../services/firebaseConnection";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loadingAnimation, setLoadingAnimation] = useState(true);

  //SignUp Users
  async function signUp(name, email, password) {
    if (name === "") {
      Alert.alert("ATENÇÃO!", "Campo nome em branco.", [{ text: "OK" }]);
      return;
    }

    if (email === "") {
      Alert.alert("ATENÇÃO!", "Campo email em branco.", [{ text: "OK" }]);
      return;
    }

    if (password === "") {
      Alert.alert("ATENÇÃO!", "Campo senha em branco.", [{ text: "OK" }]);
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
              amount: 0,
            };

            setUser(data);
            storageUser(data);
          });
      })
      .catch((error) => {
        const err = translationFirebaseErrors(error.code);
        Alert.alert("ATENÇÃO!", `${err}`, [{ text: "OK" }]);
      });
  }

  //SignIn Users
  async function signIn(email, password) {
    if (email === "") {
      Alert.alert("ATENÇÃO!", "Campo email em branco.", [{ text: "OK" }]);

      return;
    }

    if (password === "") {
      Alert.alert("ATENÇÃO!", "Campo senha em branco.", [{ text: "OK" }]);

      return;
    }

    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(async (value) => {
        let uid = value.user.uid;

        await firebase
          .database()
          .ref("users")
          .child(uid)
          .once("value")
          .then((snapshot) => {
            let data = {
              uid: uid,
              name: snapshot.val().name,
              email: value.user.email,
              amount: snapshot.val().amount,
            };

            setUser(data);
            storageUser(data);
          });
      })
      .catch((error) => {
        const err = translationFirebaseErrors(error.code);
        Alert.alert("ATENÇÃO!", `${err}`, [{ text: "OK" }]);
      });
  }

  //SignOut Users
  async function signOut() {
    await firebase.auth().signOut();
    await AsyncStorage.clear()
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        const err = translationFirebaseErrors(error.code);
        Alert.alert("ATENÇÃO!", `${err}`, [{ text: "OK" }]);
      });
  }

  async function storageUser(data) {
    await AsyncStorage.setItem("@Finances:user", JSON.stringify(data));
  }

  async function loadStorage() {
    const storageUser = await AsyncStorage.getItem("@Finances:user");

    if (storageUser) {
      setUser(JSON.parse(storageUser));
    }

    setLoadingAnimation(false);
  }

  useEffect(() => {
    loadStorage();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        loadingAnimation,
        signUp,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
