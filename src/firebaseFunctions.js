import firebase from 'firebase/app';
import { auth } from './firebaseConfig';
import 'firebase/firestore';

export const signIn = (email, password) => auth.signInWithEmailAndPassword(email, password);

//  ----- Creating user with email and password -----
export async function createUserEmailAndPassword(email, password) {
	try {
		const authentication = await firebase.auth().createUserWithEmailAndPassword(email, password);
      console.log(authentication)
      authentication.user
       .sendEmailVerification()
       .then(() => {
         console.log('email')
         //sendEmailMessage();
         // Email sent.
       })
       .catch((error) => {
         alert(error);// An error happened.
       });
    
    return authentication; //   objeto que trae mucas cosas
	} catch (error) {
		let errorMessage = error.message;
		return errorMessage;
	}
}

export const signOut = () => {
  auth.signOut();
  return localStorage.removeItem('token');
};
/* export const ver = (email, url) => {
  firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings)
  .then(() => {
    // The link was successfully sent. Inform the user.
    // Save the email locally so you don't need to ask the user for it again
    // if they open the link on the same device.
    window.localStorage.setItem('emailForSignIn', email);
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
} */

/* export const verificar = () => {
  var user = firebase.auth().currentUser;
  user.sendEmailVerification()
  .then(function(){console.log('email sent')})
  .catch(console.log(function(error){console.log(error)}))
} */

/* const sendEmailMessage = () => {
  const errorContainer = document.querySelector('#alerts');
  errorContainer.innerText = 'Verifica tu correo';
  errorContainer.classList.add('email-message-auth');
  setTimeout(() => {
    errorContainer.classList.add('hide');
  }, 5000);
}; */

export const sendEmail = () => {
 /*  const config = {
    url: 'https://crowdfunding-peer-to-peer.firebaseapp.com/links',
    iOS: {
      bundleId: 'com.example.ios'
    },
    android: {
      packageName: 'com.example.android',
      installApp: true,
      minimumVersion: '12'
    },
  
  }; */
  const user = firebase.auth().currentUser;
  user
    .sendEmailVerification()
    .then(() => {
      console.log('email')
      //sendEmailMessage();
      // Email sent.
    })
    .catch((error) => {
      alert(error);// An error happened.
    });
};

export const sendEmailSignIn = (email) => {
  
  const config = {
    url: 'https://crowdfunding-peer-to-peer.firebaseapp.com/links',
    iOS: {
      bundleId: 'com.example.ios'
    },
    handleCodeInApp: true,
    android: {
      packageName: 'com.example.android',
      installApp: true,
      minimumVersion: '12'
    },
  
  };
  firebase.auth().sendSignInLinkToEmail(email, config)
  .then(() => {
    console.log('se supone que link ajá'+ email, config)
    window.localStorage.setItem('emailForSignIn', email);
    // ...
  })
  .catch((error) => {
    console.log(error.message);
    // ...
  });
}

const user = auth.currentUser;
export const emailVerification = () => user
  .sendEmailVerification()
  .then(() => {
    console.log('email enviado');
  })
  .catch((error) => {
    console.log(error);
  });

const db = firebase.firestore();
export async function gettingData(collection) {
  try {
    const projectData = await db.collection(collection).get();
    return projectData;
  } catch (error) {
    return error.message;
  }
}

export const searchData = (data, inputSearch) => {
  const lowerName = inputSearch.toLowerCase();
  const capitalUpperName = lowerName.charAt(0).toUpperCase() + lowerName.slice(1);
  const info = data.filter((proj) => proj.name.startsWith(capitalUpperName));
  return info;
};