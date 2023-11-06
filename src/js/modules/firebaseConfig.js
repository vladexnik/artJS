
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyD4h7Kzf7EYDqVfg4cZrTyPpoRQHavruPg",
  authDomain: "artikjs.firebaseapp.com",
  projectId: "artikjs",
  storageBucket: "artikjs.appspot.com",
  messagingSenderId: "712055240805",
  appId: "1:712055240805:web:0a4f4b94d1fc1ebc50ae8c"
};

const app = initializeApp(firebaseConfig);
export const dbArt=getFirestore(app);

















// const storage = getStorage();
// const storageRef = ref(storage, 'src/assets/img');
// const file='card-2.jpg';

// uploadBytes(storageRef, file).then((snapshot) => {
//   console.log('Uploaded a blob or file!'+`${storageRef.name}`);
// });

// const storage2 = getStorage();
// const storageRef2 = ref(storage2, 'some-child2');

// const message = JSON.stringify({
//   name: 'asdsds',
//   tel: '1233344'
// });

// uploadString(storageRef2, message).then((snapshot) => {
//   console.log('Uploaded a raw string!');
// });

