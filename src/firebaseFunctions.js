import firebase from 'firebase/app';
import { auth } from './firebaseConfig';
import { db } from './firebaseConfig';
import 'firebase/firestore';



export const signIn = (email, password) => auth.signInWithEmailAndPassword(email, password);

//  ----- Creating user with email and password -----
export async function createUserEmailAndPassword(email, password, name) {
	try {
		const authentication = await firebase.auth().createUserWithEmailAndPassword(email, password);
      console.log(authentication)
      authentication.user
       .sendEmailVerification()
       .then(() => {
        var user = firebase.auth().currentUser;
          user.updateProfile({
          displayName: name,
          photoURL: "https://example.com/jane-q-user/profile.jpg"
        }).then(function() {
  // Update successful.
        }).catch(function(error) {
  // An error happened.
        })
      }).catch((error) => {
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
      foundesc:orderObj.foundesc,
      type: orderObj.type,
      campaignName: orderObj.campaignName , 
      description: orderObj.description,   
      url: orderObj.url, 
      donations: orderObj.recaudo,
      date: orderObj.date,
      campaignVideo: orderObj.campaignVideo,
      campaignPodcast: orderObj.campaignPodcast,
      image: orderObj.image,
      visibleDonors: orderObj.visibleDonors, 
    });
    console.log(order.id)
	return order;
	} catch (error) {
    console.log(error.message)
		return error.message;
	}
};

export const signOut = async () => {
  await auth.signOut();
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

export async function gettingData(collection) {
  try {
    const projectData = await db.collection(collection).get();
    return projectData;
  } catch (error) {
    return error.message;
  }
}

/* export function snapshotGettingData(collection, arrayData, setState, campaingId) {
	db.collection(collection).doc(campaingId).onSnapshot((querySnapshot) => {
		
		querySnapshot.forEach((doc) => {
			const data = doc.data()
			arrayData.push({...data, idDoc: doc.id})
		});
		return setState(arrayData);
	});
}; */