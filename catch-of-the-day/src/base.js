import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAa9-JJP_wJnySRimFYWB1_7ShEMMkuBrc",
  authDomain: "catch-of-the-day-jeroen-afa3d.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-jeroen-afa3d.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
