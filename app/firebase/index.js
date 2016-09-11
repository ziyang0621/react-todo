import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyColVNU3IpJesNS8oGcBkWGeUDdHAde6w8",
    authDomain: "zt-todo-app.firebaseapp.com",
    databaseURL: "https://zt-todo-app.firebaseio.com",
    storageBucket: "zt-todo-app.appspot.com",
  };

  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
