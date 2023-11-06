
import { dbArt } from '../modules/firebaseConfig';
import { addDoc, collection} from "firebase/firestore"; 


const postData=async (url, data)=>{
    // document.querySelector('.status').textContent=message.loading;

    await addDoc(collection(dbArt, "artOrders"), data); 

}

const getResource=async (url)=>{
   
    let res=await fetch(url);
    if (!res.ok){
        throw new Error(`could not fetch ${url}, status: ${res.status}`);
    }
   return await res.json();
}

export {getResource, postData};