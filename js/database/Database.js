import firebase from './firebase';

firebase.database.enableLogging(function(message) {
  console.log("[FIREBASE]", message);
});

const listenToQuests = (callback) => {
  firebase.database().ref('quests').on('value', (snapshot) => {
    callback(snapshot.val());
  });
};

const listenToProgress = (uid, callback) => {
  firebase.database().ref(`usersProgress/byId/${uid}`)
    .on('value', (snapshot) => {
      callback(snapshot.val());
    });
};

const downloadQuestions = (questId) => {
  return firebase.database()
    .ref('questions/byId')
    .orderByChild('quest')
    .equalTo(questId)
    .once('value')
    .then((snapshot) => snapshot.val());
};

const uploadUserProgress = (uid, progress) => {
  return firebase.database()
    .ref(`usersProgress/byId/${uid}`)
    .set(progress)
    .then(
      () => progress,
      (err) => console.log("Failed to update user progress: ", err)
    );
};

export default {
  listenToQuests, listenToProgress,
  downloadQuestions, uploadUserProgress
};
