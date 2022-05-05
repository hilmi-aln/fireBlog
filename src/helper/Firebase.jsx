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
import { getDatabase, onValue, push, ref, set } from "firebase/database";
import { useEffect, useState } from "react";

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
    console.log(userCredential);
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
    console.log(userCredential);
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


export const writeUserData = (title, imageURL, content) => {
  const db = getDatabase();
    const userRef=ref(db,"connect/");
    const newUserRef=push(userRef)
    set((newUserRef),{
        title:title,
        imageURL:imageURL,
        content:content,
    })
};

export const useFetch=()=>{
  const [isLoading,setIsLoading]=useState(false);
  const [blogList,setBlogList]=useState();

  useEffect(() => {
      setIsLoading(true)

      const db = getDatabase();
      const userRef=ref(db,"connect");

      onValue(userRef, (snapshot) => {
          const data = snapshot.val();
          const blogArray=[];

          for(let id in data){
            blogArray.push({id,...data[id]})
          }          
          setBlogList(blogArray);
          setIsLoading(false);
      });
  },[])
  return {isLoading,blogList}
}