// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC4sc-j1tm44-F9C63Bp-YD6tjhBut1zYg",
    authDomain: "orderplace-1caf6.firebaseapp.com",
    databaseURL: "https://orderplace-1caf6-default-rtdb.firebaseio.com",
    projectId: "orderplace-1caf6",
    storageBucket: "orderplace-1caf6.appspot.com",
    messagingSenderId: "680338848403",
    appId: "1:680338848403:web:c24c995c81a3ccf285ab66",
    firebase,intializeApp(firebaseConFig):
//ADD YOUR FIREBASE LINKS

function {addUser()}
 {
    user_name = document.getElementById("user_name").value
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
      });
}



