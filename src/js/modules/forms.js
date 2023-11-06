
import  {postData} from '../services/requests';

const forms=(state)=>{

    const form=document.querySelectorAll('form'),
        inputs=document.querySelectorAll('input'),
        upload=document.querySelectorAll('[name="upload"]');

    const message={
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро с вами свяжемся.',
        failure: 'Что-то пошло не так...',
        spinner: 'assets/img/spinner.gif',
        ok : 'assets/img/ok.png',
        fail: 'assets/img/fail.png'
    };

    const path={
        designer: 'assets/server.php',
        question: 'assets/question.php'
    };


    const clearInputs=()=>{
        inputs.forEach(item=> {
            item.value='';
        });

        upload.forEach(item=>{
            item.previousElementSibling.textContent='Файл не выбран';
        })
    };

    upload.forEach(item=>{
        item.addEventListener('input',()=>{
            // console.log(item.files[0].name);
            let arr=item.files[0].name.split('.'); // 'wertikon.jpg'=> ['wertikon', 'jpg']
            let dots;
            arr[0].length> 8 ? dots='...' : dots='.';  
            const name=arr[0].substring(0,8) + dots + arr[1];
            item.previousElementSibling.textContent=name;
        })
    })

    form.forEach(item=>{
        item.addEventListener('submit', (e)=>{
            e.preventDefault(); // без перезагрузки стр

            let statusMessage=document.createElement('div');
            statusMessage.classList.add('status');
            item.parentNode.appendChild(statusMessage);

            item.classList.add('animated','fadeOutUp');
            setTimeout(() => {
                item.style.display='none';
            }, 400);

            let statusImg=document.createElement('img');
            statusImg.setAttribute('src', message.spinner);
            statusImg.classList.add('animated', 'fadeInUp');
            statusMessage.appendChild(statusImg);

            let textMessage=document.createElement('div');
            textMessage.textContent=message.loading;
            statusMessage.appendChild(textMessage);

            let formData=new FormData(item); // отправка форм
            let formDataObject = Object.fromEntries(formData.entries());
            
            if(formDataObject.upload){
                formDataObject.upload=formDataObject.upload.name;
            }
            // console.log(formDataObject);
    
            let api;
            item.closest('.popup-design') || item.classList.contains('form-calc') ? api=path.designer : api=path.question;
            

            postData(api, formDataObject)
                .then(res=> {
                    
                    statusImg.setAttribute('src',message.ok);
                    textMessage.textContent=message.success;
                })
                .catch((e)=>{
                    statusImg.setAttribute('src', message.fail);
                    textMessage.textContent=message.failure;
                    console.log(e);
                })
                .finally(()=>{
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                        item.style.display='block';
                        item.classList.remove('fadeOutUp');
                        item.classList.add('fadeInUp');
                    }, 2000);
                })

        });
    });

   
}

export default forms;