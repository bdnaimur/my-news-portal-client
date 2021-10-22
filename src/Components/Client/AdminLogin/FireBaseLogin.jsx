import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { GoogleAuthProvider } from "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { firebaseConfig } from './fireBAseConfig';
import 'firebase/compat/firestore';
import { userContext } from '../Client';
import { useContext } from 'react';
import { useHistory } from 'react-router';
import { FaGoogle } from 'react-icons/fa';



if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const FireBaseLogin = () => {
    const history = useHistory();
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    
    const provider = new GoogleAuthProvider();
    const signWithGoogle = () => {

        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                console.log('loggedInUser',loggedInUser);
                setLoggedInUser(user);
                console.log('After loggedInUser',loggedInUser);
                if(user.email){
                    history.push('/admin');
                }
                // ...
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
            <button className="btn btn-danger w-100 mb-4" onClick={signWithGoogle}><FaGoogle/> Sign In</button>
        </div>
    );
};

export default FireBaseLogin;