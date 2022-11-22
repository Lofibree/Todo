import React from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const LoginWithGoogle = () => {

    const provider = new GoogleAuthProvider();

    const handleLogin = () => {
        const auth = getAuth();
        signInWithPopup(auth, provider)
          .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            // const credential = GoogleAuthProvider.credentialFromResult(result);
            // const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log(user)
            //   window.user = user

            // ...
          }).catch((error) => {
            console.log(error)    
        });
    }

    return (
        <div>
            <button type='button' onClick={handleLogin} >Login with Google</button>
        </div>
    );
};

export default LoginWithGoogle;