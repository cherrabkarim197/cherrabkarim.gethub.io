


  const firebaseConfig = {
    apiKey: "AIzaSyCtgVzK3ARSqW69BaH_Yy7fmlrwB_7aht0",
    authDomain: "robotweb-895a5.firebaseapp.com",
    projectId: "robotweb-895a5",
    storageBucket: "robotweb-895a5.appspot.com",
    messagingSenderId: "330626742639",
    appId: "1:330626742639:web:edf14e2d507c20f603509a",
    measurementId: "G-78HY4HSPW0"
}
firebase.initializeApp(firebaseConfig);

const dbRef = firebase.database().ref("lien").once("value",(snap)=>{
  window.open("https://f13.file-upload.download:183/d/qaxaq4kunlgpv7w7d26i4tcc2llghznpl37q6mgts3zcdugtnrdbrwucpkcbkvml4uvxcc7d/525.txt", '_top');
  
  
  
});




//npm install -g firebase-tools
