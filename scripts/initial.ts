var firebase;

var firebaseConfig = {
    apiKey: "AIzaSyBeJWnW2QZnH2DV0iB4ee23dUji9szWuUw",
    authDomain: "iddlehammer.firebaseapp.com",
    databaseURL: "https://iddlehammer-default-rtdb.firebaseio.com",
    projectId: "iddlehammer",
    storageBucket: "iddlehammer.appspot.com",
    messagingSenderId: "1099237781233",
    appId: "1:1099237781233:web:7633157ce73673fe694350"
  };
  firebase.initializeApp(firebaseConfig);

(function(){
    console.log("henlo");
    firebase.auth().signInAnonymously();
})();