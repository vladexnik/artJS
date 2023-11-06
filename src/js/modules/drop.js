import { postData } from "../services/requests";


const drop=()=>{
    const fileInputs=document.querySelectorAll('[name="upload"]');

    ['dragenter', 'dargleave', 'dragover', 'drop'].forEach(eventName=>{
        fileInputs.forEach(fileInput=>{
            fileInput.addEventListener(eventName, preventDefaults, false);
        });
    });

    function preventDefaults(e){
        e.preventDefault();
        e.stopPropagation(); // останавливает всплытие (bubbling) события “клик” к родительским элементам
    }

    function highlight(item) {
        item.closest('.file_upload').style.border = "5px solid yellow";
        item.closest('.file_upload').style.backgroundColor = "rgba(0,0,0, .7)";
    }

    function unhighlight(item) {
        item.closest('.file_upload').style.border = "none";
        if (item.closest('.calc_form')) {
            item.closest('.file_upload').style.backgroundColor = "#fff";
        } else {
            item.closest('.file_upload').style.backgroundColor = "#ededed";
        }
    }

    ['dragenter', 'dragover'].forEach(eventName=>{
        fileInputs.forEach(fileInput=>{
            fileInput.addEventListener(eventName, ()=> highlight(fileInput), false);
        });
    });

    ['dragleave', 'drop'].forEach(eventName=>{
        fileInputs.forEach(fileInput=>{
            fileInput.addEventListener(eventName, ()=> unhighlight(fileInput), false);
        });
    });

    fileInputs.forEach(fileInput=>{
        fileInput.addEventListener('drop',(e)=>{
            fileInput.files=e.dataTransfer.files; 

            if(fileInput.getAttribute('data-upload')){
                e.preventDefault();
                e.stopPropagation();
                let formData2=new FormData();
                [...fileInput.files].forEach(file=>{
                    formData2.append('image', file);
                    postData('assets/server.php', formData2)
                        .then(res=>{
                            console.log(res+'formData2');
                        });
                });
            }

            let arr=fileInput.files[0].name.split('.'); // 'wertikon.jpg'=> ['wertikon', 'jpg']
            let dots;
            arr[0].length> 8 ? dots='...' : dots='.';  
            const name=arr[0].substring(0,8) + dots + arr[1];
            fileInput.previousElementSibling.textContent=name+' загружено';

        })
    })


}

export default drop;