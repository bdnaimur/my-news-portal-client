import React from 'react';
// import { firebase } from 'firebase/app';
import 'firebase/compat/firestore';
import { getAuth, getRedirectResult, GoogleAuthProvider } from "firebase/auth";
import { firebaseConfig } from './fireBAseConfig';
// import { firebase } from 'firebase/app';
import firebase from 'firebase/compat/app';




if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const FireBaseLogin = () => {
    const signWithGoogle = (e) => {
        const auth = getAuth();
        getRedirectResult(auth)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access Google APIs.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;

                // The signed-in user info.
                const user = result.user;
                alert(user)
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }

    return (
        <div>
            <button onClick={signWithGoogle}>Google Sign In</button>
        </div>
    );
};

export default FireBaseLogin;