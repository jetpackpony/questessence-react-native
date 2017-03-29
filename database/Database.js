import * as firebase from 'firebase/app';
import 'firebase/database';

import { firebaseConfig }from '../config';

firebase.initializeApp(firebaseConfig);

firebase.database.enableLogging(function(message) {
  console.log("[FIREBASE]", message);
});

const listenToQuests = (callback) => {
  firebase.database().ref('quests').on('value', (snapshot) => {
    callback(snapshot.val());
  });
};

const downloadQuestions = (questId, callback) => {
  return firebase.database()
    .ref('questions/byId')
    .orderByChild('quest')
    .equalTo(questId)
    .once('value')
    .then((snapshot) => snapshot.val());
};

export default { listenToQuests, downloadQuestions };