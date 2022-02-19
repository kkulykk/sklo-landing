import app from "../../utils/firebase";
import { getDatabase, ref, set, update, onValue } from "firebase/database";
import { eventName } from "../../utils/config";

const getUserId = (email) => {
  return email.split(".")[0];
};
export const addUserToEvent = (email, phoneNumber) => {
  const db = getDatabase(app);
  const userId = getUserId(email);

  set(ref(db, `events/${eventName}/` + "users/" + userId), {
    email: email,
    phoneNumber: phoneNumber,
    status: 0,
  });
};

export const addUser = (email, phoneNumber) => {
  const db = getDatabase(app);
  const userId = getUserId(email);

  set(ref(db, "users/" + userId), {
    email: email,
    phoneNumber: phoneNumber,
  });
};

export const setUserStatus = (email, status) => {
  const db = getDatabase(app);
  const userId = getUserId(email);

  const updateData = {
    status: status,
  };

  update(ref(db, `events/${eventName}/` + "users/" + userId), updateData);
};

export const getUserStatus = (email) => {
  return new Promise((res, rej) => {
    const db = getDatabase();
    const userId = getUserId(email);

    const starCountRef = ref(db, `events/${eventName}/` + "users/" + userId);
    onValue(starCountRef, (snapshot) => {
      res(snapshot.val()?.status);
    });
  });
};

// check for user existance on buying
