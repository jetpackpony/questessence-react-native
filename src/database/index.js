import firebase from "./firebase";

export const listenToQuests = (callback) => {
  firebase
    .database()
    .ref("quests")
    .on("value", (snapshot) => {
      callback(snapshot.val());
    });
};

export const listenToProgress = (uid, callback) => {
  firebase
    .database()
    .ref(`usersProgress/byId/${uid}`)
    .on("value", (snapshot) => {
      callback(snapshot.val());
    });
};

export const downloadQuestions = (questId) => {
  return firebase
    .database()
    .ref("questions/byId")
    .orderByChild("quest")
    .equalTo(questId)
    .once("value")
    .then((snapshot) => snapshot.val());
};

export const uploadUserProgress = (uid, progress) => {
  return firebase
    .database()
    .ref(`usersProgress/byId/${uid}`)
    .set(progress)
    .then(
      () => progress,
      (err) => console.log("Failed to update user progress: ", err),
    );
};
