import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { errorNotify, successNotify } from "./toastNotify";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export const createUser = async (email, password, navigate) => {
  try {
    let userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    // updateProfile(auth, { displayName: email });
    successNotify("Registered successfully!");
    navigate("/");
    // console.log(userCredential);
  } catch (error) {
    errorNotify(error.message);
  }
};

export const signInUser = async (email, password, navigate) => {
  try {
    let userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    await signInWithEmailAndPassword(auth, email, password);
    successNotify("Signed in successfully!");
    navigate("/");
    // console.log(userCredential);
  } catch (error) {
    errorNotify(error.message);
  }
};

export const signOutProfil = () => {
  signOut(auth);
  
};

export const signInWithGoogle = (navigate) => {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
  .then((result) => {
    navigate("/")
    // console.log(result);
  }).catch((error) => {
    console.log(error)

  });
};

export const userObserver = (setCurrentUser) => {
  onAuthStateChanged(auth, (currentUser) => {
  if (currentUser) {
    setCurrentUser(currentUser)
  } else {
    setCurrentUser(false);
  }
});
};