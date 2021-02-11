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

export async function newCampaign (orderObj) {
  try {
		const order = await db.collection('campaigns').add({
      foundation:orderObj.foundation,
      mision: orderObj.mision,
      misiondesc:orderObj.misiondesc,
      type: orderObj.type,
      campaignName: orderObj.campaignName , 
      description: orderObj.description,   
      url: orderObj.url, 
      donations: orderObj.recaudo,
      date: orderObj.date,
      campaignVideo: orderObj.campaignVideo,
      campaignPodcast: orderObj.campaignPodcast,
      campaignImage: orderObj.campaignImage,
      visibleDonors: orderObj.visibleDonors, 
    });
	return order;
	} catch (error) {
		return error.message;
	}
};

export const signOut = () => {
  auth.signOut();
  return localStorage.removeItem('token');
};


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