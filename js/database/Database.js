import firebase from './firebase';

firebase.database.enableLogging(function(message) {
  console.log("[FIREBASE]", message);
});

const listenToQuests = (callback) => {
  firebase.database().ref('quests').on('value', (snapshot) => {
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

const syncQuestsProgress = (uid, progress) => {
  if (!uid) return Promise.resolve(progress);

  return firebase.database()
    .ref(`usersProgress/byId/${uid}`)
    .once('value')
    .then((snapshot) => snapshot.val())
    .then((value) => {
      if (!value || value.timestamp <= progress.timestamp) {
        return uploadUserProgress(uid, progress);
      } else {
        return value;
      }
    });
};

const uploadUserProgress = (uid, progress) => {
  return firebase.database()
    .ref(`usersProgress/byId/${uid}`)
    .set(progress)
    .then(() => progress);
};

export default { listenToQuests, downloadQuestions, syncQuestsProgress };
