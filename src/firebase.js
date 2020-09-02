import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBAQ2MFo5FJOntVA7I8UCme9hRYiz6VsL4",
  authDomain: "slack-clone-ad15c.firebaseapp.com",
  databaseURL: "https://slack-clone-ad15c.firebaseio.com",
  projectId: "slack-clone-ad15c",
  storageBucket: "slack-clone-ad15c.appspot.com",
  messagingSenderId: "966750493176",
  appId: "1:966750493176:web:e6b115c41716537d961e0d",
  measurementId: "G-HQNQD8FCS6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
