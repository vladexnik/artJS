
import { getStorage, ref, uploadBytes } from "firebase/storage";


const firebaseAddFile=()=>{
    let uploadButtons=document.querySelectorAll('[name="upload"]');

    uploadButtons.forEach(uploadButton=>{
        uploadButton.addEventListener('change',function(e){              
            // console.log(e.target.files.length);
            for(let i=0; i<e.target.files.length;i++){
                let imageFile=e.target.files[i];
                
                const storage = getStorage();
                const storageRef = ref(storage, `images/${imageFile.name}`);
                uploadBytes(storageRef, imageFile).then((snapshot) => {
                  uploadButton.previousElementSibling.textContent=uploadButton.previousElementSibling.textContent+' '+'загружено';        
                });
            }
        })
    })
}

export default firebaseAddFile;