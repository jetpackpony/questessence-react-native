import firebase from "firebase/compat/app";
import "firebase/compat/database";
import { firebaseConfig } from "../../config";

const app = firebase.initializeApp(firebaseConfig);
firebase.database.enableLogging(function (message) {
  console.log("[FIREBASE]", message);
});

export default app;
