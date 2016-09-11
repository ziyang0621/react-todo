import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyColVNU3IpJesNS8oGcBkWGeUDdHAde6w8",
  authDomain: "zt-todo-app.firebaseapp.com",
  databaseURL: "https://zt-todo-app.firebaseio.com",
  storageBucket: "zt-todo-app.appspot.com",
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app:{
    name: 'Todo App',
    version: '1.0.0.'
  },
  isRunning: true,
  user: {
    name: 'Andrew',
    age: 25
  }
});

var todoRef = firebaseRef.child('todos');

todoRef.on('child_added', (snapshot) => {
  console.log('child_added', snapshot.key, snapshot.val());
});

todoRef.push({
  text: 'Todo 1'
});

todoRef.push({
  text: 'Todo 2'
});
