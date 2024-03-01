import { createContext, useContext } from 'react'
import { intializeApp } from 'firebase'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { getDatabase, set, ref } from 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyALPtSPPIkbngHDj6TVikz5hQ3tgb7NuSY",
    authDomain: "authentication-demo-eabb5.firebaseapp.com",
    databaseURL: "https://authentication-demo-eabb5-default-rtdb.firebaseio.com",
    projectId: "authentication-demo-eabb5",
    storageBucket: "authentication-demo-eabb5.appspot.com",
    messagingSenderId: "491885060325",
    appId: "1:491885060325:web:35e4f1d9f6b4f78cc4f40c",
    measurementId: "G-VP59JY3TDM",
    databaseURL: "https://authentication-demo-eabb5-default-rtdb.firebaseio.com/"
};
const firebaseApp = intializeApp(firebaseConfig)
const firebaseAuth = getAuth(firebaseApp)
const database = getDatabase(firebaseApp)

// CREATING CUSTOM HOOK
export const useFirebase = () => useContext(FirebaseContext)

const FirebaseContext = createContext(null)
export const FirebaseContextProvider = (props) => {
    const signupUserWithEmailAndPassword = (email, password) => {
        return createUserWithEmailAndPassword(firebaseAuth, email, password)
    }

    const putData = (key, data) => {
        set(ref(database, ref), data)
    }

    return (
        <FirebaseContext.Provider value={{signupUserWithEmailAndPassword, putData}}>
            {props.children}
        </FirebaseContext.Provider>
    )
}