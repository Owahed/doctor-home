import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './fireBaseConfig';
import doctorBG from '../../images/Group 140.png'


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}

const Login = () => {
    var provider = new firebase.auth.GoogleAuthProvider();

    const handelGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;

                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                // ...
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
    }
    return (
        <div className='row'>
           <div className="col-md-6 text-center">
           <button onClick={handelGoogleSignIn} className="btn-color  ">Sign in Google</button>
           </div>
           <div className="col-md-6">
            <img style={{height:'80%',width:'90%'}} src={doctorBG} alt=""/>
           </div>
        </div>
    );
};

export default Login;